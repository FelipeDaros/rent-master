import { Column, CreateDateColumn, Entity, PrimaryColumn } from "typeorm";
import { v4 as uuidV4 } from "uuid";
import { ICar } from "../interfaces/ICar";


@Entity("cars")
class Car implements ICar{
  @PrimaryColumn()
  id: string;

  @Column({type: "varchar", unique: true})
  model: string;

  @Column({type: "int4", nullable: false})
  year: number;

  @Column({type: "decimal"})
  price_hour: number

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

export { Car }