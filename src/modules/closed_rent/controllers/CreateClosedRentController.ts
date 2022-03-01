import { Request, Response } from "express";
import { CreateClosedRentService } from "../services/CreateClosedRentService";


class CreateClosedRentController{
  async handle(request: Request, response: Response): Promise<Response>{
    const { price_total, rent_id, total_days } = request.body;
    const createClosedRentService = new CreateClosedRentService();

    const closedRent = await createClosedRentService.execute({
      price_total,
      rent_id,
      total_days
    })

    console.log("CONTROLLER?:" + rent_id)

    return response.status(201).json(closedRent);
  }
}

export { CreateClosedRentController } 