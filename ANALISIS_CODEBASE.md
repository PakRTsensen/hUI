# Analisis Mendalam Codebase Open WebUI

Dokumen ini berisi analisis mendetail tentang arsitektur dan struktur codebase Open WebUI, dengan fokus utama pada sistem databasenya.

---

### **1. Arsitektur Umum & Teknologi**

Aplikasi ini adalah **Open WebUI**, sebuah antarmuka web canggih untuk berinteraksi dengan model bahasa besar (LLM). Arsitekturnya terbagi menjadi dua komponen utama:

-   **Backend**: Dibangun menggunakan Python dengan framework **FastAPI**. Backend ini bertanggung jawab atas semua logika bisnis, otentikasi, interaksi dengan LLM, dan manajemen database.
-   **Frontend**: Sebuah *Single Page Application* (SPA), kemungkinan besar dibangun dengan Svelte atau React. Frontend berkomunikasi secara dinamis dengan backend melalui REST API.

---

### **2. Komponen Utama Codebase**

-   `main.py`: Titik masuk (entry point) utama aplikasi FastAPI. File ini menginisialisasi aplikasi dan menyertakan semua modul *router*.
-   `routers/`: Direktori ini berisi logika untuk setiap endpoint API. Setiap file di dalamnya (misalnya, `chats.py`, `users.py`) mendefinisikan rute-rute API, menjaga agar kode tetap terorganisir berdasarkan fitur.
-   `models/`: **(Kunci untuk Database)**. Direktori ini mendefinisikan skema database menggunakan **SQLAlchemy ORM**. Setiap file Python di sini merepresentasikan satu tabel di dalam database.
-   `internal/db.py`: Berisi konfigurasi koneksi database, pembuatan sesi (session), dan fungsi-fungsi dasar untuk berinteraksi dengan database.
-   `alembic.ini` & `migrations/`: Menandakan penggunaan **Alembic** untuk migrasi skema database. Ini memungkinkan pengelolaan perubahan struktur database secara terprogram dan terkontrol versinya.
-   `retrieval/`: Berisi fungsionalitas untuk **Retrieval-Augmented Generation (RAG)**. Ini memungkinkan LLM untuk mengakses pengetahuan dari dokumen eksternal.
-   `data/`: Direktori default untuk menyimpan data persisten.
    -   `webui.db`: File database **SQLite** yang menyimpan data relasional (pengguna, chat, dll).
    -   `vector_db/`: Direktori untuk database vektor. Kehadiran `chroma.sqlite3` menunjukkan penggunaan **ChromaDB** untuk menyimpan *embeddings* teks.

---

### **3. Analisis Mendalam tentang Database**

#### **A. Teknologi Database yang Digunakan**

1.  **Database Relasional**:
    -   **ORM**: **SQLAlchemy**. Memungkinkan interaksi dengan database menggunakan objek Python, bukan SQL mentah.
    -   **Engine**: Defaultnya adalah **SQLite** (`webui.db`), sebuah database berbasis file yang ringan. Namun, berkat SQLAlchemy, aplikasi ini dapat dengan mudah dikonfigurasi untuk menggunakan database lain seperti PostgreSQL.
    -   **Migrasi**: **Alembic**. Mengelola perubahan skema database secara aman dan terstruktur.

2.  **Database Vektor**:
    -   **Engine**: **ChromaDB**. Digunakan khusus untuk menyimpan *embeddings* (representasi vektor dari teks) dan melakukan pencarian kemiripan (similarity search) dengan cepat, yang merupakan inti dari fitur RAG.

#### **B. Struktur & Skema Tabel (Berdasarkan `models/`)**

Berikut adalah gambaran tabel-tabel utama dalam `webui.db`:

-   **Tabel `user`** (`models/users.py`):
    -   `id`: ID unik pengguna.
    -   `name`: Nama tampilan.
    -   `email`: Email untuk login (unik).
    -   `hashed_password`: Kata sandi yang sudah di-hash.
    -   `role`: Peran pengguna (e.g., `user`, `admin`).
    -   *Relasi*: Terhubung ke tabel `chat`, `prompt`, dll.

-   **Tabel `chat`** (`models/chats.py`):
    -   `id`: ID unik sesi percakapan.
    -   `user_id`: Foreign key ke tabel `user`.
    -   `title`: Judul percakapan.
    -   `chat_model`: Model LLM yang digunakan.
    -   *Relasi*: Memiliki banyak `message`.

-   **Tabel `message`** (`models/messages.py`):
    -   `id`: ID unik pesan.
    -   `chat_id`: Foreign key ke tabel `chat`.
    -   `role`: Peran pengirim (`user` atau `assistant`).
    -   `content`: Isi teks dari pesan.
    -   `tool_calls`: Data JSON jika LLM menggunakan *tool*.

-   **Tabel `model`** (`models/models.py`):
    -   `id`: ID unik model LLM (e.g., `llama3:latest`).
    -   `name`: Nama tampilan model.
    -   `base_model_url`: URL endpoint model.

#### **C. Alur Kerja Database**

1.  **Permintaan API**: Pengguna melakukan aksi di frontend, yang memicu permintaan ke salah satu endpoint di `routers/`.
2.  **Sesi Database**: Endpoint tersebut mendapatkan sesi koneksi database melalui *dependency injection* (`get_db`).
3.  **Operasi CRUD**: Kode menggunakan objek SQLAlchemy untuk membuat, membaca, memperbarui, atau menghapus data (misalnya, `db.query(Chat).all()` atau `db.add(new_message)`).
4.  **Transaksi**: Setelah operasi selesai, sesi akan di-`commit` untuk menyimpan perubahan. Jika terjadi kesalahan, sesi akan di-`rollback` untuk membatalkan semua perubahan dalam transaksi tersebut, menjaga integritas data.

---

### **Kesimpulan**

Codebase Open WebUI terstruktur dengan sangat baik, mengadopsi praktik modern pengembangan aplikasi web dengan FastAPI. Sistem databasenya solid, memisahkan data relasional (menggunakan **SQLAlchemy** dan **Alembic**) dari data vektor untuk RAG (menggunakan **ChromaDB**). Struktur modular ini membuatnya mudah dipahami, dipelihara, dan dikembangkan lebih lanjut.
