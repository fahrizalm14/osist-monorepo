export interface ILearn {
  id: string;
  employeeId: string;
  subject: {
    id: number;
    name: string;
    parent: string;
  };
  curriculumStatus: {
    id: number;
    name: string;
  };
  weekHour: number;
}
