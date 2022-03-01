import { Request, Response } from "express";
import { CreateCarService } from "../services/CreateCarService";
import { ListCarService } from "../services/ListCarService";


class ListCarController{
  async handle(request: Request, response: Response): Promise<Response>{
    const listCarService = new ListCarService();

    const car = await listCarService.execute();

    return response.status(201).json(car);
  }
}

export { ListCarController }