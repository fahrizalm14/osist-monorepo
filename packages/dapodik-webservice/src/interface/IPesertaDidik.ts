export interface IPesertaDidikResponse {
  results: number;
  id: string;
  start: number;
  limit: number;
  rows: IPesertaDidik[];
}

export interface IPesertaDidik {
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
