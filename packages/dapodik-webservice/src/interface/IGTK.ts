export interface IGTKResponse {
  results: number;
  id: string;
  start: number;
  limit: number;
  rows: IGTK[];
}

export interface IGTK {
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

export interface IRwykepangkatan {
  riwayat_kepangkatan_id: string;
  nomor_sk: string;
  tanggal_sk: string;
  tmt_pangkat: string;
  masa_kerja_gol_tahun: string;
  masa_kerja_gol_bulan: string;
  pangkat_golongan_id_str: string;
}

export interface IRwypendformal {
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
