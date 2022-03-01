import { getCustomRepository } from "typeorm";
import { Car } from "../entity/Car";
import { ICarSave } from "../interfaces/ICarSave";
import { CarRepository } from "../repository/CarRepository";



class ListCarService{
  async execute(): Promise<Car[] | undefined>{
    const carRepository = getCustomRepository(CarRepository);
  
    const car = await carRepository.listCars();

    return car;

  }
}

export { ListCarService }