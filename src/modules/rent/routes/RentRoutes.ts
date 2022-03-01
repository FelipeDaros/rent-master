import { Router } from "express";
import { CreateRentController } from "../controllers/CreateRentController";


const rentRoutes = Router();

const createRentController = new CreateRentController();

rentRoutes.post("/", createRentController.handle);

export { rentRoutes }