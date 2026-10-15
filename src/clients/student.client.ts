import { Student } from "../types/interfaces.js";

export interface StudentClient {
  getAll(filter: any): Promise<Student[]>;
  getById(id: number): Promise<Student | null>;
}
