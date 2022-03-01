import { EntityRepository, Repository } from "typeorm";
import { Rent } from "../entity/Rent";
import { ICreateRent } from "../interfaces/ICreateRent";
import { IRent } from "../interfaces/IRent";


@EntityRepository(Rent)
class RentRepository extends Repository<Rent>{
  async createRent({ car_id, user_id }: ICreateRent):Promise<IRent | undefined>{
    const rent = this.create({ car_id, user_id });

    await this.save(rent);

    return rent;
  }

  /*async updatePrice(id: string, total_price: number): Promise<void>{
  
  }*/
}

export { RentRepository }