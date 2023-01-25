export interface IStudent {
  id: string;
  nipd: string;
  nisn: string;
  nik: string;
  schoolFrom: string;
  schoolDate: string;
  name: string;
  registerType: {
    id: number;
    name: string;
  };
  gender: string;
  placeOfBirth: string;
  dateOfBirth: string;
  religion: {
    id: number;
    name: string;
  };
  streetAddress: string;
  homePhone: string;
  mobilePhone: string;
  fathersName: string;
  fathersProfession: {
    id: number;
    name: string;
  };
  mothersName: string;
  mothersProfession: {
    id: number;
    name: string;
  };
  guardianName: string;
  guardianProfession: {
    id: number;
    name: string;
  };
  orderFamily: number;
  height: number;
  weight: number;
  email: string;
}
