export interface IEmployee {
  address: string;
  birthdate: string;
  cellphone: number;
  contractdate: string;
  created_at: string;
  email: string;
  gender: string;
  lastname: string;
  name: string;
  ngBlocks: number;
  number: number;
  rfc: string;
  updated_at: string;
  vacations: number;
  verified: boolean;
}

export interface IEmployment {
  email: string;
  name: string;
  lastname: string;
  vacations: number;
  ngBlocks: number;
  position: string;
  departamento: string;
  contrato: string;
  verified: boolean;
  number: number;
}

export interface IDepartment {
  idDepartamento: number;
  name: string;
  created_at: string;
  updated_at: string;
}

export interface iRangeData {
  days: number;
  maximum: number;
  minimum: number;
}

export interface iRange extends iRangeData {
  idRangoVacaciones: number;
}
