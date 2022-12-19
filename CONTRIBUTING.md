# Panduan Pengembangan OSIST

Pelajari panduan dibawah ini sebelum kamu memulai pengembangan

- [Panduan Pengembangan OSIST](#panduan-pengembangan-osist)
  - [Code of Conduct](#code-of-conduct)
- [Persiapan](#persiapan)
- [Menulis Kode](#menulis-kode)
  - [Aturan pesan commit](#aturan-pesan-commit)
    - [Format Pesan commit](#format-pesan-commit)
      - [Revert](#revert)
      - [Type](#type)
      - [Scope](#scope)
      - [Subject](#subject)
      - [Body](#body)
      - [Footer](#footer)
    - [Cara membuat pesan commit dengan `npm`](#cara-membuat-pesan-commit-dengan-npm)
      - [Menjalankan script](#menjalankan-script)
      - [Memilih `type` commit](#memilih-type-commit)
      - [Memasukan `scope` yang di inginkan](#memasukan-scope-yang-di-inginkan)
      - [Memasukan `scope` yang di inginkan](#memasukan-scope-yang-di-inginkan-1)
      - [Memasukan `subject` yang di inginkan](#memasukan-subject-yang-di-inginkan)
      - [Memasukan `body` yang di inginkan (gunakan \\n untuk membuat barisbaru)](#memasukan-body-yang-di-inginkan-gunakan-n-untuk-membuat-barisbaru)
      - [Menambahkan `footer` yang di inginkan (gunakan `\n` untuk membuat baris baru)](#menambahkan-footer-yang-di-inginkan-gunakan-n-untuk-membuat-baris-baru)
      - [Menambahkan `footer` **Close Open Issuw** yang di inginkan (gunakan `\n` untuk membuat baris baru)](#menambahkan-footer-close-open-issuw-yang-di-inginkan-gunakan-n-untuk-membuat-baris-baru)
      - [Contoh hasil commit lengkap (type, scope, subject, body, footer breaking canges, footer close open issue)](#contoh-hasil-commit-lengkap-type-scope-subject-body-footer-breaking-canges-footer-close-open-issue)
    - [Contoh pesan commit manual](#contoh-pesan-commit-manual)
      - [Pesan commit dengan deskripsi dan breaking change di footer](#pesan-commit-dengan-deskripsi-dan-breaking-change-di-footer)
      - [Pesan commit dengan `!` untuk menarik perhatian pada breaking change](#pesan-commit-dengan--untuk-menarik-perhatian-pada-breaking-change)
      - [Pesan commit dengan scope dan `!` untuk menarik perhatian pada breaking change](#pesan-commit-dengan-scope-dan--untuk-menarik-perhatian-pada-breaking-change)
      - [Pesan commit dengan keduanya `!` dan footer BREAKING CHANGE](#pesan-commit-dengan-keduanya--dan-footer-breaking-change)
      - [Pesan commit tanpa body](#pesan-commit-tanpa-body)
      - [Pesan commit dengan scope](#pesan-commit-dengan-scope)
      - [Pesan commit dengan badan multi-paragraf dan multi-footer](#pesan-commit-dengan-badan-multi-paragraf-dan-multi-footer)
- [Penutup](#penutup)

## Code of Conduct

Bantu kami menjaga OSIST tetap rahasia. Silahkan baca dan ikuti kami [Code of Conduct](/CODE_OF_CONDUCT.md).

# Persiapan

Pertama-tama, Kamu harus membuat fork dari repositori [osist-monorepo](https://github.com/fahrizalm14/osist-monorepo/) untuk melakukan perubahan. Metode untuk melakukan fork pada repositori dapat ditemukan di [ Dokumentasi GitHub ](https://docs.github.com/en/get-started/quickstart/fork-a-repo).

Kemudian tambahkan fork Kamu sebagai proyek local:

```sh
#  Menggunakan HTTPS
git clone https://github.com/github.com/USERNAME-KAMU/osist-monorepo.git

#  Menggunakan SSH
git clone git@github.com:github.com/USERNAME-KAMU/osist-monorepo.git
```

> [URL remote mana yang harus digunakan?](https://docs.github.com/en/get-started/getting-started-with-git/about-remote-repositories)
> Lalu, buka folder local Kamu

```sh
cd  osist-monorepo
```

Tambahkan remote git:

```sh
#  Menggunakan HTTPS
git remote add fork https://github.com/<USERNAME-KAMU>/osist-monorepo.git
git remote add origin https://github.com/github.com/fahrizalm14/osist-monorepo.git

#  Menggunakan SSH
git remote add fork git@github.com: <USERNAME-KAMU>/osist-monorepo.git
git remote add origin git@github.com/github.com/fahrizalm14/osist-monorepo.git
```

> Note: gunakan `fork` remote untuk membuat pull request

Patikan bahwa kamu memiliki dua remote git:

```sh
git remote -v
```

# Menulis Kode

1.  Buka project board OSIST repository atau buka [link ini](https://github.com/users/fahrizalm14/projects/11).
2.  Cari issue yang di tugaskan (assign) untuk kamu.
3.  Konfirmasi feature/issue yang akan kamu kerjakan (agar pengelola repository merubah status menjadi `todo`)
<!-- 4.  Jika disetujui kamu bisa langsung mengerjakannya -->
4.  Mulai pengembangan local.

    > Pastikan kamu sudah berada didalam folder project OSIST

    - Menerima pembaruan remote, agar tetap up to date dengan repositori pusat :

      ```sh
      git pull origin develop
      ```

      > _Gunakan branch develop untuk memulai engembangan_

    - **Membuat branch baru**

      Sebelum membuat branch baru, Anda perlu mengetahui `branch strategy` pada project ini. Lihat gambar dibawah ini:

      ![logo osist](/.github/asset/branch-startegy.png 'logo osist branch strategy')

      > Tips: penamaan branch: USERNAME:patch/1234-name-issue

    - Silahkan membuat patch untuk project ini (**termasuk test yang mencakupnya**.)
    - **Jalankan semua unit test**
    - Commit perubahan yang kamu lakukan, baca [Aturan pesan commit](#aturan-pesan-commit). Hal ini diperlukan karena catatan rilis dibuat secara otomatis dari commits ini.
      ```sh
      git commit -a
      ```
      > Note: the optional commit `-a` command line option will automatically "add" and "rm" edited files.
    - Push branch kamu ke Github
      ```sh
      git push fork USERNAME:patch/1234-name-issue
      ```
    - Di GitHub, pull request ke `osist-monorepo:develop`.

      - Jika kami menyarankan perubahan, maka:

        - Lakukan pembaruan yang diperlukan.
        - Jalankan ulang test suite OSIST untuk memastikan pengujian masih lulus.
        - Rebase cabang Anda dan dorong paksa ke repositori GitHub Anda (ini akan memperbarui Permintaan Tarik Anda):

          ```shell
          git rebase develop -i
          git push fork -f
          ```

    - Setelah permintaan tarik Anda digabungkan, Anda dapat dengan aman menghapus cabang Anda dan menarik perubahannya
      dari repositori develop (upstream):

      - Hapus remote branch di GitHub baik melalui UI web GitHub atau shell local Anda sebagai berikut:

        ```sh
        git push fork --delete USERNAME:patch/1234-name-issue
        ```

      - Lihat cabang develop:

        ```sh
        git checkout develop -f
        ```

      - Hapus cabang local:

        ```sh
        git branch -D USERNAME:patch/1234-name-issue
        ```

      - Perbarui branch develop Anda dengan versi upstream terbaru:

        ```sh
        git pull --ff develop
        ```

      Itu dia! Terima kasih atas kontribusi anda!

## Aturan pesan commit

Kami memiliki aturan yang sangat tepat tentang bagaimana pesan git commit kami dapat diformat. Ini mengarah ke **lebih banyak pesan** yang dapat dibaca yang mudah diikuti saat melihat **riwayat proyek**. Tetapi juga, kami menggunakan pesan git commit untuk menghasilkan **log perubahan (CHANGELOG)** pada aplikasi OSIST.

### Format Pesan commit

Setiap pesan commit terdiri dari **header** , **body** dan **footer** . Header memiliki keistimewaan
format yang menyertakan **type** , **scope** dan **subject** :

```
<type>(<scope>): <subject>
<Blank line>
<body>
<Blank line>
<footer>
```

**Header** bersifat wajib dan **scope** header bersifat opsional.

Setiap baris pesan commit tidak boleh lebih dari 100 karakter! Ini memungkinkan pesan menjadi lebih mudah
untuk membaca di GitHub serta di berbagai alat git.

**Footer** harus berisi [ referensi penutup untuk suatu masalah ](https://help.github.com/articles/closing-issues-via-commit-messages/) jika ada.

Contoh: (bahkan lebih banyak [ sampel ](https://github.com/fahrizalm14/osist-monorepo/commits/develop))

#### Revert

Jika commit mengembalikan commit sebelumnya, itu harus dimulai dengan `revert: ` , diikuti dengan header dari commit yang dikembalikan. Di bagian badan harus tertulis: `This reverts commit <hash>.` , di mana hash adalah SHA dari commit yang dikembalikan.

#### Type

Harus salah satu dari berikut ini:

- **build**: Perubahan yang memengaruhi sistem build atau dependensi eksternal (contoh cakupan: gulp, brokoli, npm)
- **ci**: Perubahan pada file dan skrip konfigurasi CI kami (contoh cakupan: Travis, Circle, Github Action)
- **chore**: Perubahan kode yang tanpa memodifikasi src atau test file
- **feat**: Fitur baru (hanya digunakan pada saat fitur telah diselesaikan)
- **fix**: Perbaikan bug (hanya digunakan pada saat bug telah diperbaiki)
- **perf**: Perubahan kode yang meningkatkan kinerja
- **refactor**: Perubahan kode yang tidak memperbaiki bug atau menambahkan fitur (menyingkat kode)
- **style**: Perubahan yang tidak memengaruhi arti kode (spasi putih, pemformatan, titik koma hilang, dll)
- **test**: Menambahkan tes yang hilang atau mengoreksi tes yang ada

#### Scope

Cakupannya harus nama paket npm yang terpengaruh (seperti yang dirasakan oleh orang yang membaca log perubahan yang dihasilkan dari pesan commit.

Berikut ini adalah daftar cakupan yang didukung:

- [nama fitur]
- [nama service]
- [package]

#### Subject

Subjek berisi deskripsi singkat tentang perubahan:

- gunakan kalimat imperatif, present tense: "ubah" bukan "berubah" atau "berubah"
- huruf pertama jangan dikapitalisasi
- tidak ada titik (.) di akhir

#### Body

Sama seperti di **subject** , gunakan kalimat imperatif, present tense: "ubah" bukan "berubah" atau "berubah".
Tubuh harus menyertakan motivasi untuk perubahan dan membandingkannya dengan perilaku sebelumnya.

#### Footer

Footer harus berisi informasi tentang **Breaking Changes** dan juga merupakan tempat untuk itu
referensi masalah GitHub yang dilakukan **Closes** .

**Breaking Changes** harus diawali dengan kata `BREAKING CHANGE:` dengan spasi atau dua baris baru. Sisa pesan commit kemudian digunakan untuk ini.

> Note : _**Breaking Changes** digunakan jika ada perubahan cara client menggunakan aplikasi. Contoh isi breaking canges: OSIST sudah tidak bisa digunakan pada ubuntu versi 14.02_

### Cara membuat pesan commit dengan `npm`

Kamu dapat menggunakan perintah `npm run commit` untuk memudahkan pembuatan pesan commit.

#### Menjalankan script

```sh
npm run commit
```

#### Memilih `type` commit

```sh
? Select the type of change that youre committing: (Use arrow keys)
❯ feat:     A new feature
  fix:      A bug fix
  docs:     Documentation only changes
  style:    Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc)
  refactor: A code change that neither fixes a bug nor adds a feature
  perf:     A code change that improves performance
  test:     Adding missing tests or correcting existing tests
```

#### Memasukan `scope` yang di inginkan

```sh
? Select the type of change that youre committing: feat:     A new feature
? What is the scope of this change (e.g. component or file name): (press enter to skip)
```

#### Memasukan `scope` yang di inginkan

```sh
? Select the type of change that youre committing: feat:     A new feature
? What is the scope of this change (e.g. component or file name): (press enter to skip) contoh scope
```

#### Memasukan `subject` yang di inginkan

```sh
? Select the type of change that youre committing: feat:     A new feature
? What is the scope of this change (e.g. component or file name): (press enter to skip) contoh scope
? Write a short, imperative tense description of the change (max 80 chars):
 (27) menambahkan fitur pencarian
```

#### Memasukan `body` yang di inginkan (gunakan \n untuk membuat barisbaru)

```sh
? Select the type of change that youre committing: feat:     A new feature
? What is the scope of this change (e.g. component or file name): (press enter to skip) contoh scope
? Write a short, imperative tense description of the change (max 80 chars):
 (27) menambahkan fitur pencarian
? Provide a longer description of the change: (press enter to skip)
 pencarian bisa dilakukan dengan cara: \nmaukan kata kunci\ntekan enter
```

#### Menambahkan `footer` yang di inginkan (gunakan `\n` untuk membuat baris baru)

```sh
? Select the type of change that youre committing: feat:     A new feature
? What is the scope of this change (e.g. component or file name): (press enter to skip) contoh scope
? Write a short, imperative tense description of the change (max 80 chars):
 (27) menambahkan fitur pencarian
? Provide a longer description of the change: (press enter to skip)
 pencarian bisa dilakukan dengan cara: \nmaukan kata kunci\ntekan enter
? Are there any breaking changes? Yes
? Describe the breaking changes:
 List user sudah tidak tersedia di menu admin
```

#### Menambahkan `footer` **Close Open Issuw** yang di inginkan (gunakan `\n` untuk membuat baris baru)

```sh
? Select the type of change that youre committing: feat:     A new feature
? What is the scope of this change (e.g. component or file name): (press enter to skip) contoh scope
? Write a short, imperative tense description of the change (max 80 chars):
 (27) menambahkan fitur pencarian
? Provide a longer description of the change: (press enter to skip)
 pencarian bisa dilakukan dengan cara: \nmaukan kata kunci\ntekan enter
? Are there any breaking changes? Yes
? Describe the breaking changes:
 List user sudah tidak tersedia di menu admin
? Does this change affect any open issues? Yes
? Add issue references (e.g. "fix #123", "re #123".):
 feat #5
```

#### Contoh hasil commit lengkap (type, scope, subject, body, footer breaking canges, footer close open issue)

```sh
commit c60b85bdcfb45e94e875dc98adb8d8f375d6a30b (HEAD -> develop)
Author: fahrizalm14 <fahrizalm14@gmail.com>
Date:   Sun Dec 18 18:06:41 2022 +0700

    feat(contoh scope): menambahkan fitur pencarian

    pencarian bisa dilakukan dengan cara:
    maukan kata kunci
    tekan enter

    BREAKING CHANGE: List user sudah tidak tersedia di menu admin

    feat #5
```

### Contoh pesan commit manual

#### Pesan commit dengan deskripsi dan breaking change di footer

```
feat: allow provided config object to extend other configs
BREAKING CHANGE: `extends` key in config file is now used for extending other config files
```

#### Pesan commit dengan `!` untuk menarik perhatian pada breaking change

```
feat!: send an email to the customer when a product is shipped
```

#### Pesan commit dengan scope dan `!` untuk menarik perhatian pada breaking change

```
feat(api)!: send an email to the customer when a product is shipped
```

#### Pesan commit dengan keduanya `!` dan footer BREAKING CHANGE

```
chore!: drop support for Node 6
BREAKING CHANGE: use JavaScript features not available in Node 6.
```

#### Pesan commit tanpa body

```
docs: correct spelling of CHANGELOG
```

#### Pesan commit dengan scope

```
feat(lang): add polish language
```

#### Pesan commit dengan badan multi-paragraf dan multi-footer

```
fix: prevent racing of requests
Introduce a request id and a reference to latest request. Dismiss
incoming responses other than from latest request.
Remove timeouts which were used to mitigate the racing issue but are
obsolete now.
Reviewed-by: Z
Refs: #12
```

Branch Strategy

# Penutup

Terimakasih
