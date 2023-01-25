export interface IEmployee {
  id: string;
  nip: number;
  nik: string;
  nuptk: number;
  name: string;
  gender: string;
  placeOfBirth: string;
  dateOfBirth: string;
  assignmentDate: string;
  religion: {
    id: number;
    name: string;
  };
  status: {
    id: number;
    name: string;
  };
  type: {
    id: number;
    name: string;
  };
  education: {
    id: string;
    unit: string;
    faculty: string;
    firstYear: number;
    graduationYear: number;
    fieldOfStudy: string; // bidang studi
    stage: string; // jenjang
    academicDegree: string; //gelar akademik
    ipk: string;
    prodi: string[];
  }[];
  lastRank: string; //pangkat
}
