import { Rent } from "../../rent/entity/Rent";


interface IClosedRent{
  id: string;
  rent_id: string;
  total_days: number;
  price_total: number;
  created_at: Date;
}

export { IClosedRent }