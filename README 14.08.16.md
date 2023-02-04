# Tugas Besar 2 - Web Services Using ReactJS
Dorayaki Factory Client<br>
IF3110 - Pengembangan Perangkat Lunak Berbasis Web

## Table of Contents
- [Tugas Besar 2 - Web Services Using ReactJS](#tugas-besar-2---web-services-using-reactjs)
  - [Table of Contents](#table-of-contents)
  - [Author](#author)
  - [Penjelasan Singkat](#penjelasan-singkat)
  - [Requirements](#requirements)
  - [Cara Instalasi](#cara-instalasi)
  - [Screenshot Layar](#screeenshot-layar)
  - [Pembagian Tugas](#pembagian-tugas)

## Author
- Shifa Salsabiila (13519106)
- Ryo Richardo (13519193)
- Andres Jerriel Sinabutar (13519218)

## Penjelasan Singkat
Dorayaki Factory Client adalah bagian dari sistem DoraStore yang berperan sebagai frontend service untuk pabrik dorayaki. Service ini berfungsi untuk menyajikan service yang dibutuhkan pabrik yang terhubung dengan database. Service ini dibangun dengan menggunakan kakas ReactJS. REST API dihubungkan dengan menggunakan kakas axios.

## Requirements
1. [NodeJS 16](https://nodejs.org/en/)
2. [npm](https://www.npmjs.com/) 
3. [Docker](https://www.docker.com/)

## Cara Instalasi
1. Clone repository ini dengan menggunakan `git clone` via HTTP atau SSH.
2. Lengkapi requirements yang disebutkan pada bagian sebelumnya.
3. Buka Terminal (jika menggunakan Linux atau MacOS) atau Command Prompt (jika menggunakan Windows). Lalu, navigasi menuju direktori folder dimana Anda mengunduh atau meng-*clone* repositori ini.
4. Nyalakan docker dengan perintah `docker start` atau dengan membuka  dashboard aplikasi Docker Desktop.
5. Untuk penggunaan pertama kali, jalankan perintah `docker-compose up --build` untuk menjalankan aplikasi. Jika Anda sudah pernah menjalankan perintah `--build` sebelumnya, Anda bisa menjalankannya kembali dengan perintah `docker-compose up`.
6. Server akan berjalan di port 8000.

## Screenshot Layar
### Halaman Login
![Screenshot](doc/login.jpg)

### Halaman Sign Up
![Screenshot](doc/signup.jpg)

### Halaman Daftar Resep
![Screenshot](doc/daftarresep.jpg)

### Halaman Add Resep
![Screenshot](doc/addresep.jpg)

### Halaman Daftar Bahan
![Screenshot](doc/daftarbahan.jpg)

### Halaman Add Bahan
![Screenshot](doc/addbahan.jpg)

### Halaman Daftar Request
![Screenshot](doc/daftarrequest.jpg)

## Pembagian Tugas
| Fitur  | 13519106 | 13519193 | 13519218 |
| --- | --- | --- | --- |
| Halaman Login dan Register | :white_check_mark: | :white_check_mark: |  |
| Autentikasi Login dan Register | :white_check_mark: | :white_check_mark: |  |
| Halaman Resep | :white_check_mark: | :white_check_mark: |  |
| Autentikasi Resep | :white_check_mark: | :white_check_mark: |  |
| Halaman Bahan Baku |  | :white_check_mark: | :white_check_mark: |
| Autentikasi Bahan Baku |  | :white_check_mark: | :white_check_mark: |
| Halaman Daftar Request |  | :white_check_mark: | :white_check_mark: |
| Autentikasi Daftar Request |  | :white_check_mark: | :white_check_mark: |
