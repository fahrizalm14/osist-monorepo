export interface ISchool {
  id: string;
  npsn: number;
  nss: number;
  name: string;
  status: {
    id: string;
    name: string;
  };
  streetAddress: string;
  rt: string;
  rw: string;
  postalCode: number;
  phoneNumber: string;
  faxNumber: string;
  email: string;
  website: string;
  latitude: string;
  longitude: string;
  hamlet: string;
  village: string;
  subDistrict: string;
  regencyCity: string;
  province: string;
  data: [];
}
