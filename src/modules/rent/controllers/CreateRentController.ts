import { Request, Response} from "express";
import { IResponseRent } from "../interfaces/IResponseRent";
import { CreateRentService } from "../services/CreateRentService";

class CreateRentController{
  async handle(request: Request, response: Response): Promise<Response>{
    const { car_id, user_id, total_price } = request.body;

    const createRentSerice = new CreateRentService();

    const rent = await createRentSerice.execute({ car_id, user_id, total_price });

    return response.status(201).json(rent);
  }
}

export { CreateRentController}