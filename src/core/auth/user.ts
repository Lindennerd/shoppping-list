export interface User {
  name: string;
  email: string;
  password: string;
}

export interface RegisterModel extends User {
  passwordConfirm: string;
}
