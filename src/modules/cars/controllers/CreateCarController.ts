import { Request, Response } from "express";
import { CreateCarService } from "../services/CreateCarService";


class CreateCarController{
  async handle(request: Request, response: Response): Promise<Response>{
    const { model, year, price_hour } = request.body;

    const createCarService = new CreateCarService();

    const car = await createCarService.execute({
      model,
      year,
      price_hour,
    });

    return response.status(201).json(car);
  }
}

export { CreateCarController }