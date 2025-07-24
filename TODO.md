### **TODO.md - Implementasi Autentikasi Google OAuth2**

#### **Deskripsi Proyek**

Tujuan proyek ini adalah untuk mengintegrasikan sistem autentikasi Google OAuth2 ke dalam Open WebUI. Fitur ini akan memungkinkan pengguna untuk login menggunakan akun Google mereka, dengan alur kerja spesifik sebagai berikut:
1.  Pengguna baru yang login via Google akan dibuatkan akun dengan status `pending`.
2.  Akun `pending` memerlukan persetujuan manual dari seorang `admin` untuk menjadi aktif.
3.  Jika pendaftaran pengguna baru dinonaktifkan (`ENABLE_SIGNUP=false`), pengguna Google yang belum terdaftar tidak akan bisa login atau membuat akun, dan akan menerima notifikasi yang sesuai.

#### **Status Proyek:** `Belum Dimulai`

---

### **1. Prasyarat (Tugas Manual untuk Anda)**

Langkah-langkah ini harus Anda selesaikan terlebih dahulu di Google Cloud Platform sebelum saya dapat melanjutkan ke implementasi kode.

-   [ ] **Buat Proyek di Google Cloud Platform (GCP):**
    -   Buka [Google Cloud Console](https://console.cloud.google.com/).
    -   Buat proyek baru jika Anda belum memilikinya.

-   [ ] **Konfigurasi Layar Persetujuan OAuth (OAuth Consent Screen):**
    -   Di proyek GCP Anda, navigasi ke "APIs & Services" > "OAuth consent screen".
    -   Pilih tipe pengguna "External" dan klik "Create".
    -   Isi informasi yang diperlukan (nama aplikasi, email dukungan, dll).
    -   Pada bagian "Scopes", tambahkan scope berikut:
        -   `.../auth/userinfo.email` (untuk mendapatkan email)
        -   `.../auth/userinfo.profile` (untuk mendapatkan nama dan gambar profil)
        -   `openid`
    -   Simpan dan lanjutkan.

-   [ ] **Buat Kredensial OAuth 2.0 (Client ID & Secret):**
    -   Navigasi ke "APIs & Services" > "Credentials".
    -   Klik "Create Credentials" > "OAuth client ID".
    -   Pilih "Web application" sebagai tipe aplikasi.
    -   Pada bagian **"Authorized redirect URIs"**, tambahkan URI berikut (asumsikan aplikasi berjalan di `http://localhost:8080`):
        ```
        http://localhost:8080/oauth/google/callback
        ```
        *Catatan: Sesuaikan URL ini jika aplikasi Anda berjalan di domain yang berbeda.*
    -   Klik "Create". Anda akan mendapatkan **Client ID** dan **Client Secret**.

-   [ ] **Simpan Kredensial sebagai Environment Variable:**
    -   Simpan Client ID dan Client Secret yang Anda dapatkan. Saya akan meminta nilai ini nanti untuk dimasukkan ke dalam konfigurasi aplikasi. Anda bisa menyiapkannya dalam file `.env` atau langsung mengekspornya di terminal Anda. Variabel yang akan kita gunakan adalah:
        ```
        OAUTH_GOOGLE_CLIENT_ID=...
        OAUTH_GOOGLE_CLIENT_SECRET=...
        ```

---

### **2. Tahap Implementasi (Tugas untuk Saya - AI)**

-   [ ] **Langkah 2.1: Konfigurasi Backend**
    -   [ ] Modifikasi `config.py` untuk membaca variabel lingkungan `OAUTH_GOOGLE_CLIENT_ID` dan `OAUTH_GOOGLE_CLIENT_SECRET`.
    -   [ ] Daftarkan provider 'google' ke dalam `OAuthManager` di `main.py` dengan scope yang sesuai.

-   [ ] **Langkah 2.2: Modifikasi Logika Autentikasi**
    -   [ ] Perbarui `utils/oauth.py` untuk menangani logika callback dari Google.
    -   [ ] Implementasikan alur:
        -   Cek apakah pengguna dengan email dari Google sudah ada. Jika ya, lanjutkan login.
        -   Jika tidak ada, periksa nilai `ENABLE_SIGNUP` dari konfigurasi.
        -   Jika `ENABLE_SIGNUP` adalah `false`, tolak login.
        -   Jika `ENABLE_SIGNUP` adalah `true`, buat pengguna baru dengan `role` diatur ke **`pending`**.

-   [ ] **Langkah 2.3: Penambahan Tombol Login di Frontend**
    -   [ ] Identifikasi file komponen Svelte yang bertanggung jawab untuk halaman login (kemungkinan di dalam `frontend/src/lib/components/Auth/`).
    -   [ ] Tambahkan tombol "Login dengan Google" pada antarmuka pengguna.
    -   [ ] Arahkan tombol tersebut untuk memicu alur login ke endpoint backend `/oauth/google/login`.

-   [ ] **Langkah 2.4: Penanganan Status `pending` di Frontend**
    -   [ ] Pastikan frontend menampilkan notifikasi atau halaman "Menunggu Persetujuan Admin" jika pengguna yang login memiliki peran `pending`. (Mekanisme ini kemungkinan sudah ada, saya akan memverifikasinya).

-   [ ] **Langkah 2.5: Dokumentasi**
    -   [ ] Perbarui file `ANALISIS_CODEBASE.md` untuk mencerminkan penambahan fitur autentikasi Google OAuth2.

---

### **3. Tahap Verifikasi & Pengujian**

-   [ ] **Skenario 1: Pengguna Baru (Pendaftaran Diizinkan)**
    -   Verifikasi bahwa pengguna baru yang login dengan Google berhasil dibuat dengan peran `pending`.
    -   Verifikasi bahwa admin dapat mengubah peran pengguna dari `pending` menjadi `user`.

-   [ ] **Skenario 2: Pengguna Baru (Pendaftaran Dinonaktifkan)**
    -   Atur `ENABLE_SIGNUP=false`.
    -   Verifikasi bahwa pengguna Google yang belum terdaftar menerima pesan error dan tidak bisa login.

-   [ ] **Skenario 3: Pengguna yang Sudah Ada**
    -   Verifikasi bahwa pengguna yang sudah ada di database dapat login dengan sukses menggunakan Google.
