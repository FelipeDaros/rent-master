import { Request, Response } from "express";
import { DeleteCarService } from "../services/DeleteCarService";


class DeleteCarController{
  async handle(request: Request, response: Response): Promise<Response>{
    const { id } = request.params;

    const deleteCarService = new DeleteCarService();

    await deleteCarService.execute(id);

    return response.status(200).json({message: "Inativado!"});
  }
}

export { DeleteCarController }