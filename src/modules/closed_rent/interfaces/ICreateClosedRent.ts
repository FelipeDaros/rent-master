import { Rent } from "../../rent/entity/Rent";


interface ICreateClosedRent{
  rent_id: string;
  total_days: number;
  price_total: number;
}

export { ICreateClosedRent }