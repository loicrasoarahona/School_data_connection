export interface Student {
  id: number;
  name: string;
  surname: string;
  parents: {
    id: number;
    name: string;
    surname: string;
    email: string;
    phone: string;
  }[];
}
