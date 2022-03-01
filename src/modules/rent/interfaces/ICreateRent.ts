import { Car } from "../../cars/entity/Car";
import { User } from "../../user/entity/User";


interface ICreateRent{
  total_price?: number;
  car_id: string;
  user_id: string;
}

export { ICreateRent }