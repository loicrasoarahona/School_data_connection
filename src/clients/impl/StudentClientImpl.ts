import axios, { AxiosInstance } from "axios";
import { Student } from "../../types/interfaces.js";
import { StudentClient } from "../student.client.js";

const baseUrl = process.env.SUBSTITUTE_STUDENTS_BASE_URL;

export class StudentClientImpl implements StudentClient {
  private readonly http: AxiosInstance;

  constructor() {
    this.http = axios.create({ baseURL: baseUrl });
  }

  public async getAll(filter?: any): Promise<Student[]> {
    let url = `/students?`;
    if (filter)
      for (const field in filter) {
        url += `&${field}=${filter[field]}`;
      }
    const response = await this.http.get(url);
    return response.data;
  }

  public async getById(id: number): Promise<Student | null> {
    try {
      const url = "/students/" + id;
      const response = await this.http.get(url);
      return response.data;
    } catch (error) {}
    return null;
  }
}
