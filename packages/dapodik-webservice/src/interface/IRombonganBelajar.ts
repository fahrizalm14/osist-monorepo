export interface IRombonganBelajarResponse {
  results: number;
  id: string;
  start: number;
  limit: number;
  rows: IRombonganBelajar[];
}

export interface IRombonganBelajar {
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

export interface IPembelajaran {
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

export interface IAnggotarombel {
  anggota_rombel_id: string;
  peserta_didik_id: string;
  jenis_pendaftaran_id: string;
  jenis_pendaftaran_id_str: string;
}
