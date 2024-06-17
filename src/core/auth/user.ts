export interface Login {
  name: string;
  email: string;
  password: string;
}

export interface RegisterModel extends Login {
  passwordConfirm: string;
}

export interface User {
  name: string;
  email: string;
}
