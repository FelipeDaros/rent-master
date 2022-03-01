import { getCustomRepository } from "typeorm";
import { ICreateClosedRent } from "../interfaces/ICreateClosedRent";
import { ClosedRentRepository } from "../repository/ClosedRentRepository";


class CreateClosedRentService{
  async execute({price_total, rent_id, total_days}: ICreateClosedRent): Promise<ICreateClosedRent | undefined>{
    const closedRentRepository = getCustomRepository(ClosedRentRepository);

    const closedRent = closedRentRepository.createCloseRent({
      price_total,
      rent_id,
      total_days
    });


    return closedRent;
  }
}

export { CreateClosedRentService }