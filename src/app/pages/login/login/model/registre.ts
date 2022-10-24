export class Iuser {
  name: string;
  LastName:string;
  email: string;
  password: string;
  perfil: string;

  constructor(
    name: string,
    LastName:string,
    email:string,
    password: string,
    perfil: string,

  ) {
    this.name = name;
    this.LastName = LastName;
    this.email = email;
    this.password = password;
    this.perfil = perfil;

  }
}
