export class userI {
  Name: string;
  apellido:string;
  correo: string;
  password: string;
  uid: string;
  perfil: string;

  constructor(
    Name: string,
    apellido:string,
    correo: string,
    password: string,
    uid: string,
    perfil: string
  ) {
    this.Name = Name;
    this.apellido = apellido;
    this.correo = correo;
    this.password = password;
    this.uid = uid;
    this.perfil = perfil;
  }
}
