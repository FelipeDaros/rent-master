

interface IUser{
  id: string;
  name: string;
  email: string;
  password: string;
  birth_date: Date;
  created_at: Date;
  active: string;
}

export { IUser }