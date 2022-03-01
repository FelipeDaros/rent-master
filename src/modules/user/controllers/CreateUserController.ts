import { Request, Response } from "express";
import { CreateUserService } from "../services/CreateUserService";



class CreateUserController{
  async handle(request: Request, response: Response): Promise<Response>{
    const { name, email, password, birth_date } = request.body;
    
    const createUserService = new CreateUserService();

    const user = await createUserService.execute({name, email, password, birth_date});

    return response.status(201).json(user);
  }
}

export { CreateUserController }