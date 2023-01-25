export interface IUser {
  id: string;
  username: string;
  password: string;
  type: {
    student: string;
    employee: string;
  };
  role: string; // Kepala Sekolah | Bendahara dan lain-lain
  schoolId: string;
}
