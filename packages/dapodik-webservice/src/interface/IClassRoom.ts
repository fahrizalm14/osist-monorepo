export interface IClassRoom {
  id: string;
  name: string;
  level: number;
  type: {
    id: number;
    name: string;
  };
  curriculum: {
    id: number;
    name: string;
  };
  room: {
    id: string;
    name: string;
  };
  employeeId: string;
  department: {
    id: number;
    name: string;
  };
  students: {
    id: string;
  }[];
  learns: {
    id: string;
  }[];
}
