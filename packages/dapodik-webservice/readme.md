# @osist/dapodik-webservice

## Instalasi

```sh
npm install @osist/dapodik-webservice
```

## Method

| **Method**      | **Fungsi**                                  |
| --------------- | ------------------------------------------- |
| getGTK          | Mengambil data guru dan tenaga kependidikan |
| getSekolah      | Mengambil data sekolah                      |
| getPengguna     | Mengambil data pengguna                     |
| getPesertaDidik | Mengambil data peserta didik                |
| getRombel       | Mengambil data rombongan belajar            |

## Contoh

```typescript
import { DapodikApi } "@osist/dapodik-webservice"


try {
    const dapodik = new DapodikApi("2000000", "token");
    const sekolahRes = await dapodik.getGtk();
    console.log(sekolahRes);
} catch (error) {
    console.log(error);
}

// Hasil
{
  results: 320,
  id: 'registrasi_id',
  start: 0,
  limit: 20,
  rows: [
    {
      tahun_ajaran_id: '2022',
      ptk_terdaftar_id: '0c54eb31-61fc-4c78-8b15-7fa42831b13e',
      ptk_id: '5a0e7a2b-83ea-46fa-b98c-5245ce196bc9',
      ptk_induk: '1',
      tanggal_surat_tugas: '2017-07-17',
      nama: 'Fas Suto',
      jenis_kelamin: 'L',
      tempat_lahir: 'BREBES',
      tanggal_lahir: '1980-04-21',
      agama_id: 1,
      agama_id_str: 'Islam',
      nuptk: '77537545645662',
      nik: '332914564564564016',
      jenis_ptk_id: '4',
      jenis_ptk_id_str: 'Guru Mapel',
      status_kepegawaian_id: 4,
      status_kepegawaian_id_str: 'GTY/PTY',
      nip: null,
      pendidikan_terakhir: 'S1',
      bidang_studi_terakhir: 'Informatika Komputer',
      pangkat_golongan_terakhir: '-',
      rwy_pend_formal: [Array],
      rwy_kepangkatan: []
    }
  ]
}
```

## Interface

### Sekolah

```typescript
interface ISekolahResponse {
  results: number;
  id: string;
  start: number;
  limit: number;
  rows: ISekolah;
}

interface ISekolah {
  sekolah_id: string;
  nama: string;
  nss: string;
  npsn: string;
  bentuk_pendidikan_id: number;
  bentuk_pendidikan_id_str: string;
  status_sekolah: string;
  status_sekolah_str: string;
  alamat_jalan: string;
  rt: string;
  rw: string;
  kode_wilayah: string;
  kode_pos: string;
  nomor_telepon: string;
  nomor_fax: string;
  email: string;
  website: string;
  is_sks: boolean;
  lintang: string;
  bujur: string;
  dusun: string;
  desa_kelurahan: string;
  kecamatan: string;
  kabupaten_kota: string;
  provinsi: string;
}
```

### GTK

```typescript
interface IGTKResponse {
  results: number;
  id: string;
  start: number;
  limit: number;
  rows: IGTK[];
}

interface IGTK {
  tahun_ajaran_id: string;
  ptk_terdaftar_id: string;
  ptk_id: string;
  ptk_induk: string;
  tanggal_surat_tugas: string;
  nama: string;
  jenis_kelamin: string;
  tempat_lahir: string;
  tanggal_lahir: string;
  agama_id: number;
  agama_id_str: string;
  nuptk?: null | string;
  nik: string;
  jenis_ptk_id: string;
  jenis_ptk_id_str: string;
  status_kepegawaian_id: number;
  status_kepegawaian_id_str: string;
  nip?: string | null;
  pendidikan_terakhir: string;
  bidang_studi_terakhir: string;
  pangkat_golongan_terakhir: string;
  rwy_pend_formal: IRwypendformal[];
  rwy_kepangkatan: IRwykepangkatan[];
}

interface IRwykepangkatan {
  riwayat_kepangkatan_id: string;
  nomor_sk: string;
  tanggal_sk: string;
  tmt_pangkat: string;
  masa_kerja_gol_tahun: string;
  masa_kerja_gol_bulan: string;
  pangkat_golongan_id_str: string;
}

interface IRwypendformal {
  riwayat_pendidikan_formal_id: string;
  satuan_pendidikan_formal: string;
  fakultas: string;
  kependidikan: string;
  tahun_masuk: string;
  tahun_lulus: string;
  nim: string;
  status_kuliah: string;
  semester?: null | string | string;
  ipk: string;
  prodi?: null | string[];
  id_reg_pd?: any;
  bidang_studi_id_str: string;
  jenjang_pendidikan_id_str: string;
  gelar_akademik_id_str: string;
}
```

### Pengguna

```typescript
interface IPenggunaResponse {
  results: number;
  id: string;
  start: number;
  limit: number;
  rows: IPengguna[];
}

interface IPengguna {
  pengguna_id: string;
  sekolah_id: string;
  username: string;
  nama: string;
  peran_id_str: string;
  password: string;
  alamat: string;
  no_telepon: null | string;
  no_hp: string;
  ptk_id: null | string;
  peserta_didik_id: null | string;
}
```

### Peserta Didik

```typescript
interface IPesertaDidikResponse {
  results: number;
  id: string;
  start: number;
  limit: number;
  rows: IPesertaDidik[];
}

interface IPesertaDidik {
  registrasi_id: string;
  jenis_pendaftaran_id: string;
  jenis_pendaftaran_id_str: string;
  nipd: string;
  tanggal_masuk_sekolah: string;
  sekolah_asal: null | string;
  peserta_didik_id: string;
  nama: string;
  nisn: string;
  jenis_kelamin: string;
  nik: string;
  tempat_lahir: string;
  tanggal_lahir: string;
  agama_id: number;
  agama_id_str: string;
  alamat_jalan: string;
  nomor_telepon_rumah: null | string;
  nomor_telepon_seluler?: string;
  nama_ayah?: string;
  pekerjaan_ayah_id?: number;
  pekerjaan_ayah_id_str: string;
  nama_ibu: string;
  pekerjaan_ibu_id: number;
  pekerjaan_ibu_id_str: string;
  nama_wali: null | string;
  pekerjaan_wali_id?: number;
  pekerjaan_wali_id_str: string;
  anak_keberapa: string;
  tinggi_badan: string;
  berat_badan: string;
  email: null | string;
  semester_id: string;
  anggota_rombel_id: string;
  rombongan_belajar_id: string;
  tingkat_pendidikan_id: string;
  nama_rombel: string;
  kurikulum_id: number;
  kurikulum_id_str: string;
}
```

### Rombongan Belajar

```typescript
interface IRombonganBelajarResponse {
  results: number;
  id: string;
  start: number;
  limit: number;
  rows: IRombonganBelajar[];
}

interface IRombonganBelajar {
  rombongan_belajar_id: string;
  nama: string;
  tingkat_pendidikan_id: string;
  tingkat_pendidikan_id_str: string;
  semester_id: string;
  jenis_rombel: string;
  jenis_rombel_str: string;
  kurikulum_id: number;
  kurikulum_id_str: string;
  id_ruang: string;
  id_ruang_str: string;
  moving_class: string;
  ptk_id: string;
  ptk_id_str: string;
  jurusan_id: string;
  jurusan_id_str: string;
  anggota_rombel: IAnggotarombel[];
  pembelajaran: IPembelajaran[];
  id_kelas_ekskul?: string;
  id_ekskul?: number;
  nm_ekskul?: string;
  sk_ekskul?: string;
  id_ekskul_str?: string;
}

interface IPembelajaran {
  pembelajaran_id: string;
  mata_pelajaran_id: number;
  mata_pelajaran_id_str: string;
  ptk_terdaftar_id: string;
  ptk_id: string;
  nama_mata_pelajaran: string;
  induk_pembelajaran_id: null | string;
  jam_mengajar_per_minggu: string;
  status_di_kurikulum: string;
  status_di_kurikulum_str: string;
}

interface IAnggotarombel {
  anggota_rombel_id: string;
  peserta_didik_id: string;
  jenis_pendaftaran_id: string;
  jenis_pendaftaran_id_str: string;
}
```
