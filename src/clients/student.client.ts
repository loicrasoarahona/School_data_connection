import { Student } from "../types/interfaces.js";

export interface StudentClient {
  getAllStudents(filter: any): Promise<Student[]>;
}
