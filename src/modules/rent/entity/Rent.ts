import { Column, CreateDateColumn, Entity, JoinColumn, OneToOne, PrimaryColumn, Repository } from "typeorm";
import { IRent } from "../interfaces/IRent";
import { v4 as uuidV4 } from "uuid";
import { Car } from "../../cars/entity/Car";
import { User } from "../../user/entity/User";

@Entity("rents")
class Rent implements IRent{
  @PrimaryColumn()
  id: string;

  @Column()
  total_price: number;

  @OneToOne(() => Car, car => car.id)
  car: Car

  @Column()
  car_id: string;

  @OneToOne(() => User, user => user.id)
  user: User
  
  @Column()
  user_id: string;

  @CreateDateColumn()
  created_at: string;

  constructor() {
    if (!this.id) {
      this.id = uuidV4();
    }
  }

}

export { Rent }