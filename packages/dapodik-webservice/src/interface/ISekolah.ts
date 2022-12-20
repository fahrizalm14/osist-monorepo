export interface ISekolahResponse {
  results: number;
  id: string;
  start: number;
  limit: number;
  rows: ISekolah;
}

export interface ISekolah {
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
