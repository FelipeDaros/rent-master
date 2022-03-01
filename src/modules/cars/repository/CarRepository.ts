import { EntityRepository, Repository } from "typeorm";
import { Car } from "../entity/Car";
import { ICarSave } from "../interfaces/ICarSave";


@EntityRepository(Car)
class CarRepository extends Repository<Car>{

  async findById(id: string): Promise<Car | undefined>{
    const car = this.findOne({
      where: {
        id
      }
    });

    return car;
  }

  /*async findByModel(model: string): Promise<Car | undefined>{
    const modelCar = this.findOne({
      where: model
    });

  return modelCar;
  }*/

  async saveCar({ model, year, price_hour }: ICarSave): Promise<ICarSave>{
    const car = this.create({ model, year, price_hour });
    await this.save(car);

    return car;
  }

  async listCars():Promise<Car[] | undefined>{
    const cars = this.find();

    return cars;
  }

}

export { CarRepository }