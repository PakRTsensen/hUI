# Analisis Mendalam Codebase Open WebUI

Dokumen ini berisi analisis mendetail tentang arsitektur, struktur, alur kerja, dan komponen utama dari codebase **Open WebUI**. Analisis ini mencakup backend, frontend, sistem database, mekanisme autentikasi, dan fitur-fitur inti lainnya.

---

### **1. Arsitektur Umum & Tumpukan Teknologi**

Open WebUI adalah antarmuka web canggih untuk model bahasa besar (LLM). Arsitekturnya dirancang secara modular dengan pemisahan yang jelas antara backend dan frontend.

-   **Backend**:
    -   **Framework**: **FastAPI** (Python), dipilih karena performa tinggi dan kemudahan pengembangan API modern.
    -   **Database ORM**: **SQLAlchemy**, menyediakan abstraksi yang kuat untuk berinteraksi dengan database relasional, memungkinkan fleksibilitas dalam memilih engine database.
    -   **Migrasi Database**: **Alembic**, digunakan untuk mengelola dan menerapkan perubahan skema database secara terprogram dan terkontrol versinya.
    -   **Tugas Latar Belakang**: Menggunakan `asyncio` dan `BackgroundTasks` dari FastAPI untuk menangani proses yang tidak perlu memblokir respons HTTP.

-   **Frontend**:
    -   **Framework**: **SvelteKit**, sebuah framework modern berbasis Svelte untuk membangun *Single Page Application* (SPA) yang cepat dan reaktif.
    -   **Styling**: Menggunakan **Tailwind CSS** (terlihat dari sintaks di file HTML) untuk desain UI yang konsisten dan modern.
    -   **Komunikasi**: Berinteraksi secara dinamis dengan backend melalui **REST API** yang terdokumentasi dengan baik.

-   **Database**:
    -   **Relasional**: Default menggunakan **SQLite** (`webui.db`), yang ideal untuk kemudahan instalasi dan portabilitas. Namun, berkat SQLAlchemy, dapat dengan mudah diganti ke **PostgreSQL** untuk skalabilitas yang lebih besar.
    -   **Vektor**: Menggunakan **ChromaDB** (`vector_db/chroma.sqlite3`) untuk menyimpan *embeddings* dan melakukan pencarian kemiripan (similarity search), yang merupakan inti dari fitur RAG.

---

### **2. Struktur Direktori Kunci**

Struktur proyek sangat terorganisir, memisahkan tanggung jawab ke dalam direktori-direktori berikut:

-   `main.py`: Titik masuk (entry point) utama aplikasi FastAPI. Menginisialisasi aplikasi, middleware, konfigurasi, dan menyertakan semua modul router.
-   `routers/`: Berisi logika untuk setiap endpoint API. Setiap file (misalnya, `chats.py`, `users.py`, `models.py`) mendefinisikan rute-rute API, menjaga kode tetap terorganisir berdasarkan fitur.
-   `models/`: **(Kunci untuk Database)**. Mendefinisikan semua skema tabel database menggunakan SQLAlchemy ORM. Setiap file Python di sini merepresentasikan satu atau lebih tabel.
-   `utils/`: Kumpulan modul utilitas yang digunakan di seluruh aplikasi, seperti `auth.py` (logika autentikasi), `chat.py` (logika interaksi LLM), dan `access_control.py`.
-   `internal/`: Berisi konfigurasi inti seperti koneksi database (`db.py`).
-   `retrieval/`: Mengimplementasikan fungsionalitas **Retrieval-Augmented Generation (RAG)**, termasuk pemecahan dokumen, pembuatan embedding, dan logika pencarian.
-   `frontend/`: Direktori root untuk aplikasi frontend SvelteKit.
-   `data/`: Direktori default untuk data persisten, termasuk file database SQLite dan database vektor ChromaDB.

---

### **3. Alur Autentikasi & Manajemen Pengguna**

Sistem autentikasi sangat fleksibel dan dapat dikonfigurasi untuk berbagai skenario.

-   **Metode Autentikasi**:
    1.  **Lokal**: Pendaftaran dan login standar menggunakan email dan password (`routers/auths.py`). Password disimpan setelah di-hash menggunakan `bcrypt`.
    2.  **LDAP**: Integrasi dengan server LDAP untuk autentikasi pengguna korporat.
    3.  **OAuth 2.0 / OIDC**: Mendukung login melalui provider eksternal (misalnya, Google, Keycloak).
    4.  **Trusted Header**: Mode di mana autentikasi didelegasikan ke reverse proxy (misalnya, Nginx dengan `auth_request`, Authelia). Aplikasi akan mempercayai header HTTP seperti `X-Forwarded-User` untuk mengidentifikasi pengguna.
    5.  **Tanpa Autentikasi**: Mode di mana fitur login dinonaktifkan, cocok untuk penggunaan pribadi.

-   **Manajemen Pengguna & Peran**:
    -   Tabel `user` menyimpan detail pengguna, termasuk `role` (`admin`, `user`, `pending`).
    -   Pengguna pertama yang mendaftar secara otomatis menjadi `admin`.
    -   Admin memiliki akses ke dasbor pengaturan untuk mengelola pengguna, konfigurasi aplikasi, dan fitur lainnya.
    -   Terdapat sistem **kontrol akses berbasis peran (RBAC)** yang halus melalui `access_control.py` dan field `access_control` pada berbagai model data.

---

### **4. Analisis Mendalam Sistem Database**

Database adalah jantung dari aplikasi ini, dirancang untuk mendukung fitur-fitur yang kompleks.

#### **A. Peta Skema Database (Tabel & Relasi)**

Berikut adalah rincian tabel-tabel utama dalam `webui.db` dan relasinya:

-   **`user` & `auth`**:
    -   `user`: Menyimpan profil pengguna (`id`, `name`, `email`, `role`, `api_key`, `settings`).
    -   `auth`: Terhubung ke `user` melalui `id`, menyimpan `hashed_password` untuk login lokal. Pemisahan ini adalah praktik keamanan yang baik.

-   **`chat` & `folder`**:
    -   `chat`: Entitas utama untuk setiap sesi percakapan. Menyimpan `title`, `user_id`, dan seluruh riwayat percakapan dalam satu kolom `JSON` bernama `chat`. Mendukung fitur `archive`, `pin`, dan `share_id` untuk berbagi publik.
    -   `folder`: Memungkinkan pengguna mengelompokkan chat. Mendukung struktur folder bersarang (nested) melalui `parent_id`.

-   **`message` & `channel`**:
    -   `channel`: Bertindak sebagai wadah untuk percakapan bergaya forum atau utas.
    -   `message`: Menyimpan pesan individual dalam sebuah `channel`. Mendukung percakapan berutas (threaded) melalui `parent_id`.

-   **`model`**:
    -   Tabel yang sangat penting. Tidak hanya menyimpan daftar LLM yang tersedia, tetapi juga memungkinkan pengguna **mendefinisikan model kustom**.
    -   `base_model_id` memungkinkan sebuah model kustom untuk mewarisi dan menimpa konfigurasi dari model dasar.
    -   `params` (JSON): Menyimpan parameter spesifik model (misalnya, temperature, top_p).
    -   `meta` (JSON): Menyimpan metadata seperti deskripsi dan kapabilitas.
    -   `access_control` (JSON): Mengatur siapa yang bisa menggunakan model ini.

-   **`prompt`**:
    -   Menyimpan *prompt* yang dapat digunakan kembali. Pengguna dapat memicu prompt ini dengan mengetik `/` diikuti dengan `command`.

-   **`knowledge` & `file` (Untuk RAG)**:
    -   `knowledge`: Merepresentasikan sebuah "knowledge base". Ini adalah koleksi logis dari dokumen-dokumen.
    -   `file`: Menyimpan metadata untuk setiap file yang diunggah (`filename`, `path`, `hash`). File-file ini kemudian diasosiasikan dengan sebuah *knowledge base* untuk digunakan dalam proses RAG.

-   **`tool` & `function` (Untuk Function Calling)**:
    -   `tool`: Mendefinisikan alat eksternal yang bisa dipanggil oleh LLM. Menyimpan `content` (kode Python) dan `specs` (skema OpenAPI untuk parameter fungsi).
    -   `function`: Mirip dengan `tool`, tetapi tampaknya digunakan untuk fungsi internal seperti filter dan aksi.

-   **`group` & `access_control`**:
    -   `group`: Memungkinkan pembuatan grup pengguna.
    -   `access_control` (JSON): Field ini ada di banyak tabel (`model`, `prompt`, `knowledge`, `tool`). Ini adalah implementasi RBAC yang kuat, memungkinkan izin `read`/`write` untuk diberikan kepada `user_ids` atau `group_ids` tertentu.

-   **Tabel Lainnya**:
    -   `feedback`: Menyimpan rating dan komentar pengguna terhadap respons model.
    -   `note`: Fitur catatan sederhana.
    -   `tag`: Sistem penandaan (tagging) untuk chat.
    -   `memory`: Mekanisme memori jangka panjang sederhana untuk LLM.

#### **B. Alur Kerja Database**

1.  **Permintaan API**: Pengguna melakukan aksi di frontend, yang memicu permintaan ke salah satu endpoint di `routers/`.
2.  **Sesi Database**: Endpoint tersebut mendapatkan sesi koneksi database melalui *dependency injection* dari `internal/db.py`.
3.  **Operasi CRUD**: Kode di dalam router menggunakan metode dari kelas `Table` (misalnya, `Chats.get_chat_by_id()`) untuk berinteraksi dengan database. Metode ini menggunakan objek SQLAlchemy ORM untuk melakukan operasi (misalnya, `db.query(Chat).filter_by(...).first()`).
4.  **Transaksi**: Setelah operasi selesai, sesi akan di-`commit` untuk menyimpan perubahan. Jika terjadi kesalahan, sesi akan di-`rollback` untuk menjaga integritas data.

---

### **5. Fitur-Fitur Utama & Implementasinya**

-   **Retrieval-Augmented Generation (RAG)**:
    -   Pengguna mengunggah file ke sebuah `knowledge` base.
    -   Backend memproses file-file ini (menggunakan Tika, dll.), memecahnya menjadi potongan-potongan (`chunks`), dan menghasilkan *embeddings* menggunakan model yang dikonfigurasi.
    -   Embeddings disimpan di **ChromaDB**.
    -   Saat pengguna bertanya, kueri diubah menjadi embedding, dan ChromaDB digunakan untuk menemukan potongan teks yang relevan, yang kemudian disisipkan ke dalam konteks prompt LLM.

-   **Tools & Function Calling**:
    -   Fitur ini memungkinkan LLM untuk berinteraksi dengan dunia luar.
    -   Pengguna dapat mendefinisikan `tool` dengan menyediakan kode Python dan skema fungsinya.
    -   Saat LLM mendeteksi bahwa sebuah tool perlu dipanggil, backend akan mengeksekusi kode Python yang sesuai dan mengembalikan hasilnya ke LLM untuk menghasilkan respons akhir.

-   **Kontrol Akses & Berbagi (Sharing)**:
    -   Mekanisme `access_control` yang fleksibel memungkinkan berbagi sumber daya (model, prompt, knowledge base) dengan pengguna atau grup tertentu.
    -   Chat dapat dibagikan secara publik melalui `share_id`, yang membuat salinan read-only dari chat tersebut.

---

### **6. Komponen Frontend**

-   **Struktur**: Sebagai aplikasi SvelteKit, kode diorganisir ke dalam `routes` (yang memetakan ke URL) dan `lib` (untuk komponen dan utilitas).
-   **Manajemen State**: Kemungkinan menggunakan *Svelte Stores* untuk mengelola state aplikasi secara global (misalnya, informasi pengguna yang login, tema UI).
-   **Interaksi API**: Menggunakan `fetch` API untuk berkomunikasi dengan endpoint backend FastAPI, mengirim data, dan menerima respons dalam format JSON.

---

### **Kesimpulan**

Codebase Open WebUI menunjukkan rekayasa perangkat lunak yang matang dan modern. Pilihan teknologi seperti FastAPI dan SvelteKit memberikan fondasi yang kuat untuk performa dan pengembangan. Arsitektur modular, skema database yang dirancang dengan baik, dan fitur-fitur yang sangat dapat dikonfigurasi (terutama autentikasi dan manajemen model) menjadikannya platform yang sangat kuat, fleksibel, dan mudah untuk diperluas. Sistem kontrol aksesnya yang terperinci juga merupakan keunggulan signifikan untuk lingkungan tim atau perusahaan.