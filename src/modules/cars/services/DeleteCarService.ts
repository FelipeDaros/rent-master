import { getConnection, getCustomRepository } from "typeorm";
import { Car } from "../entity/Car";
import { ICarSave } from "../interfaces/ICarSave";
import { CarRepository } from "../repository/CarRepository";



class DeleteCarService{
  async execute(id: string): Promise<void>{
    const carRepository = getCustomRepository(CarRepository);
    const car = await carRepository.findOne(id);

    if(!car){
      throw new Error("Car not exists!");
    }
    
    await getConnection()
    .createQueryBuilder()
    .update(Car)
    .set({active: "n"})
    .where({id})
    .execute();
  }
}

export { DeleteCarService }