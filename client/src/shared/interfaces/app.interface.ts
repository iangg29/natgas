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

export interface IEmployment extends IEmployee {
  position: string;
  departamento: string;
  contrato: string;
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

export interface iBlog {
  content: string;
  created_at: string;
  date: string;
  idBlogPost: number;
  image: string;
  slug: string;
  title: string;
  updated_at: string;
}

export interface iNewsData {
  name: string;
  date: string;
  image: string;
}

export interface iNews extends iNewsData {
  idNoticia: number;
  created_at: string;
  updated_at: string;
}

export interface IBelong {
 idPertenece: number,
 email: string,
 idDepartamento: number,
 position: string,
 updated_at: string;
}