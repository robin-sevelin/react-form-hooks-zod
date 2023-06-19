import { IPets } from './IPets';

export interface IFormData {
  firstName: string;
  lastName: string;
  email: string;
  age: number;
  pets: IPets;
  password: string;
  confirmPassword: string;
}
