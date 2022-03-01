import { getCustomRepository } from "typeorm";
import { ICarSave } from "../interfaces/ICarSave";
import { CarRepository } from "../repository/CarRepository";



class CreateCarService{
  async execute({ model, year, price_hour}: ICarSave){
    const carRepository = getCustomRepository(CarRepository);
  
    const car = carRepository.saveCar({
      model, year, price_hour
    })

    return car;

  }
}

export { CreateCarService }