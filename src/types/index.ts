import { ChangeEvent,  ReactNode, } from "react";

export type InputProps = {
  placeholder: string;
  type: string;
  value: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  onBlur: () => void;
  label: string;
  errors: {};
};

export type FieldProps = {
  field: {
    value: string;
    onChange: (event: ChangeEvent<HTMLInputElement>) => void;
    onBlur: () => void;
  };
};

export type LoginProps = {
  email: string;
  password: string;
};

export type ProviderProps = {
  children: ReactNode;
};

export type PropsUserData = {
  bio: string;
  cpf: string;
  email: string;
  name: string;
  salary: number;
  vehicles: Array<{}>;
};
export type PropsVehicles = {
  brand: string;
  chassi: string;
  color: string;
  km: number;
  model: string;
  status: string;
  value: number;
  yer: string
}
export type PropsData = {
  message: string;
  token: string;
  totalEmployees: number;
  totalVehicles: number;
  totalVehiclesLoggedUser: number;
  user: {
    bio: string;
    cpf: string;
    email: string;
    name: string;
    salary: number;
    vehicles: PropsVehicles[];
  };
};


export type PropsTotal = {
  currentPage: number;
  perPage: number;
  totalRecords: number;
  vehicles: PropsVehicles[];
}

type Employees = {
  bio: string;
  cpf: string;
  email: string;
  name: string;
  salary: number;
}

export type PropsEmployees = {
  currentPage: number;
  perPage: number;
  totalRecords: number;
  employees:Employees[];

}
export type PropsContext = {
  authenticate: (email: string, password: string) => Promise<void>;
  logout: () => void;
  loading: boolean;
  error: boolean;
  token: string | null;
  message?: string;
  data: PropsData;
  totalData: PropsTotal;
  employeeData:PropsEmployees;
  setPageVehicles: React.Dispatch<React.SetStateAction<number>>;
  setPageEmployees:React.Dispatch<React.SetStateAction<number>>;
  setFilterVehicles:React.Dispatch<React.SetStateAction<string>>;
};
