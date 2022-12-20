export interface IPenggunaResponse {
  results: number;
  id: string;
  start: number;
  limit: number;
  rows: IPengguna[];
}

export interface IPengguna {
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
