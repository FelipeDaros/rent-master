import { Car } from "../../cars/entity/Car";
import { User } from "../../user/entity/User";


interface IRent {
  id: string;
  car_id: string;
  user_id: string;
  created_at: Date;
}

export { IRent }