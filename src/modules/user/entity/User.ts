import { Column, CreateDateColumn, Entity, PrimaryColumn } from "typeorm";
import { v4 as uuidV4 } from "uuid";
import { IUser } from "../interfaces/IUser";


@Entity("users")
class User implements IUser{
  @PrimaryColumn()
  id: string;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  password: string;
  
  @CreateDateColumn()
  birth_date: Date;

  @CreateDateColumn()
  created_at: Date;

  @Column()
  active: string; 
  

  constructor() {
    if (!this.id) {
      this.id = uuidV4();
      this.active = "s"
    }
  }
}

export { User }