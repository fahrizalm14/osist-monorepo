import { IClassRoom } from "../interface/IClassRoom";
import { IEmployee } from "../interface/IEmployee";
import { IGTK, IRwypendformal } from "../interface/IGTK";
import { ILearn } from "../interface/ILearn";
import { IPengguna } from "../interface/IPengguna";
import { IPesertaDidik } from "../interface/IPesertaDidik";
import { IRombonganBelajar } from "../interface/IRombonganBelajar";
import { ISchool } from "../interface/ISchool";
import { ISekolah } from "../interface/ISekolah";
import { IStudent } from "../interface/IStudent";
import { IUser } from "../interface/IUser";
import { getUniqueObject, onlyUnique } from "./ArrayManipulation";

export class Converter {
  static user(pengguna: IPengguna): IUser {
    const p = { ...pengguna };
    const _user: IUser = {
      id: p.pengguna_id,
      username: p.username,
      password: p.password,
      role: p.peran_id_str,
      schoolId: p.sekolah_id,
      type: {
        employee: p.ptk_id || "",
        student: p.peserta_didik_id || "",
      },
    };

    return _user;
  }

  static student(pesertaDidik: IPesertaDidik): IStudent {
    const p = { ...pesertaDidik };
    const _student: IStudent = {
      id: p.peserta_didik_id,
      nipd: p.nipd,
      nisn: p.nisn,
      nik: p.nik,
      name: p.nama,
      gender: p.jenis_kelamin,
      placeOfBirth: p.tempat_lahir,
      dateOfBirth: p.tanggal_lahir,
      schoolDate: p.tanggal_masuk_sekolah,
      schoolFrom: p.sekolah_asal || "",
      religion: {
        id: p.agama_id,
        name: p.agama_id_str,
      },
      registerType: {
        id: parseInt(p.jenis_pendaftaran_id),
        name: p.jenis_pendaftaran_id_str,
      },
      homePhone: p.nomor_telepon_rumah || "",
      mobilePhone: p.nomor_telepon_seluler || "",
      streetAddress: p.alamat_jalan,
      fathersName: p.nama_ayah || "",
      fathersProfession: {
        id: p.pekerjaan_ayah_id || 0,
        name: p.pekerjaan_ayah_id_str,
      },
      mothersName: p.nama_ibu,
      mothersProfession: {
        id: p.pekerjaan_ibu_id,
        name: p.pekerjaan_ibu_id_str,
      },
      guardianName: p.nama_wali || "",
      guardianProfession: {
        id: p.pekerjaan_wali_id || 0,
        name: p.pekerjaan_wali_id_str,
      },
      orderFamily: parseInt(p.anak_keberapa),
      email: p.email || "",
      height: parseInt(p.tinggi_badan),
      weight: parseInt(p.berat_badan),
    };

    return _student;
  }

  static school(sekolah: ISekolah): ISchool {
    const s = { ...sekolah };
    const _sekolah: ISchool = {
      id: s.sekolah_id,
      nss: parseInt(s.nss),
      npsn: parseInt(s.npsn),
      name: s.nama,
      status: {
        id: s.status_sekolah,
        name: s.status_sekolah_str,
      },
      phoneNumber: s.nomor_telepon,
      faxNumber: s.nomor_fax,
      email: s.email,
      website: s.website,
      streetAddress: s.alamat_jalan,
      rt: s.rt,
      rw: s.rw,
      hamlet: s.dusun,
      village: s.desa_kelurahan,
      subDistrict: s.kecamatan,
      regencyCity: s.kabupaten_kota,
      province: s.provinsi,
      postalCode: parseInt(s.kode_pos),
      latitude: s.bujur,
      longitude: s.lintang,
      data: [],
    };

    return _sekolah;
  }

  static employee(gtk: IGTK): IEmployee {
    const _employee: IEmployee = {
      id: gtk.ptk_id,
      nip: parseInt(gtk.nip || "0"),
      nuptk: parseInt(gtk.nip || "0"),
      nik: gtk.nik,
      name: gtk.nama,
      placeOfBirth: gtk.tempat_lahir,
      dateOfBirth: gtk.tanggal_lahir,
      gender: gtk.jenis_kelamin,
      assignmentDate: gtk.tanggal_surat_tugas,
      religion: {
        id: gtk.agama_id,
        name: gtk.agama_id_str,
      },
      type: {
        id: parseInt(gtk.jenis_ptk_id),
        name: gtk.jenis_ptk_id_str,
      },
      status: {
        id: gtk.status_kepegawaian_id,
        name: gtk.status_kepegawaian_id_str,
      },
      lastRank: gtk.pangkat_golongan_terakhir,
      education: gtk.rwy_pend_formal.map((edu: IRwypendformal) => {
        const _edu = {
          id: edu.riwayat_pendidikan_formal_id,
          unit: edu.satuan_pendidikan_formal,
          faculty: edu.fakultas,
          firstYear: parseInt(edu.tahun_masuk),
          graduationYear: parseInt(edu.tahun_lulus),
          fieldOfStudy: edu.bidang_studi_id_str,
          stage: edu.jenjang_pendidikan_id_str,
          academicDegree: edu.gelar_akademik_id_str,
          ipk: edu.ipk,
          prodi: edu.prodi || [],
        };

        return _edu;
      }),
    };

    return _employee;
  }

  static classRoomAndLearn(rombels: IRombonganBelajar[]): {
    classRooms: IClassRoom[];
    learns: ILearn[];
  } {
    const learns: ILearn[] = [];
    const classRooms: IClassRoom[] = rombels.map((cr) => {
      const classRoom: IClassRoom = {
        id: cr.rombongan_belajar_id,
        level: parseInt(cr.tingkat_pendidikan_id),
        employeeId: cr.ptk_id,
        name: cr.nama,
        type: {
          id: parseInt(cr.jenis_rombel),
          name: cr.jenis_rombel_str,
        },
        department: {
          id: parseInt(cr.jurusan_id),
          name: cr.jurusan_id_str,
        },
        curriculum: {
          id: cr.kurikulum_id,
          name: cr.kurikulum_id_str,
        },
        room: {
          id: cr.id_ruang,
          name: cr.id_ruang_str,
        },
        learns: cr.pembelajaran.map((belajar) => {
          learns.push({
            id: belajar.pembelajaran_id,
            employeeId: belajar.ptk_id,
            curriculumStatus: {
              id: parseInt(belajar.status_di_kurikulum),
              name: belajar.status_di_kurikulum_str,
            },
            subject: {
              id: belajar.mata_pelajaran_id,
              name: belajar.mata_pelajaran_id_str,
              parent: belajar.induk_pembelajaran_id || "",
            },
            weekHour: parseInt(belajar.jam_mengajar_per_minggu),
          });
          return { id: belajar.pembelajaran_id };
        }),
        students: cr.anggota_rombel.map((anggota) => {
          return { id: anggota.peserta_didik_id };
        }),
      };

      return classRoom;
    });

    return {
      classRooms,
      learns: getUniqueObject(learns),
    };
  }
}
