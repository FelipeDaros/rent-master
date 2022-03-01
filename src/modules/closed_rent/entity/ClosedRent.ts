import { Column, CreateDateColumn, Entity, OneToOne, PrimaryColumn } from "typeorm";
import { Rent } from "../../rent/entity/Rent";
import { v4 as uuidV4 } from "uuid";
import { IClosedRent } from "../interfaces/IClosedRent";


@Entity("closed_rent")
class ClosedRent implements IClosedRent{
  @PrimaryColumn()
  id: string;

  @Column()
  rent_id: string;
  
  @Column()
  total_days: number;

  @Column()
  price_total: number;

  @CreateDateColumn()
  created_at: Date;

  constructor() {
    if (!this.id) {
      this.id = uuidV4();
    }
  }
  
}

export { ClosedRent }