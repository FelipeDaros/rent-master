import dayjs from "dayjs";
import { getCustomRepository } from "typeorm";
import { CarRepository } from "../../cars/repository/CarRepository";
import { UserRepository } from "../../user/repository/UserRepository";
import { ICreateRent } from "../interfaces/ICreateRent";
import { RentRepository } from "../repository/RentRepository";


class CreateRentService{
  async execute({ car_id, user_id }:ICreateRent): Promise<ICreateRent | undefined>{
    const rentRepository = getCustomRepository(RentRepository);
    const carRepository = getCustomRepository(CarRepository);
    const userRepository = getCustomRepository(UserRepository);

    const carFind = await carRepository.findById(car_id);

    const userFind = await userRepository.findById(user_id);

    const user = rentRepository.createRent({ 
      car_id: carFind?.id as string,
      user_id: userFind?.id as string
    });

    return user;
  }
}

export { CreateRentService }