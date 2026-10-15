import { Student } from "../../types/interfaces.js";
import { StudentClient } from "../student.client.js";

export class StudentClientImpl implements StudentClient {
  public async getAll(filter: any): Promise<Student[]> {
    return [];
  }

  public async getById(id: number): Promise<Student | null> {
    return null;
  }
}
