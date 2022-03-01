import { EntityRepository, Repository } from "typeorm";
import { ClosedRent } from "../entity/ClosedRent";
import { ICreateClosedRent } from "../interfaces/ICreateClosedRent";

@EntityRepository(ClosedRent)
class ClosedRentRepository extends Repository<ClosedRent>{
  async createCloseRent({ price_total,rent_id,total_days }: ICreateClosedRent):Promise<ClosedRent | undefined>{
    const closedRent = this.create({price_total, rent_id, total_days});

    await this.save(closedRent);

    return closedRent;
  }
}

export { ClosedRentRepository }