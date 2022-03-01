import { getCustomRepository } from "typeorm";
import { CarRepository } from "../../cars/repository/CarRepository";
import { UserRepository } from "../../user/repository/UserRepository";
import { ICreateRent } from "../interfaces/ICreateRent";
import { RentRepository } from "../repository/RentRepository";


class CreateRentService{
  async execute({ car_id, total_price, user_id }:ICreateRent): Promise<ICreateRent | undefined>{
    const rentRepository = getCustomRepository(RentRepository);
    const carRepository = getCustomRepository(CarRepository);
    const userRepository = getCustomRepository(UserRepository);

    const carFind = await carRepository.findById(car_id);

    console.log(carFind?.model)



    const userFind = await userRepository.findById(user_id);

    console.log(userFind?.name);


    const user = rentRepository.createRent({ 
      car_id,//carFind.id, 
      total_price,//carFind.price, 
      user_id//userFind.id
    });

    return user;
  }
}

export { CreateRentService }