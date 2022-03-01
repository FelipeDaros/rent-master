import { Router } from "express";
import { CreateCarController } from "../controllers/CreateCarController";
import { DeleteCarController } from "../controllers/DeleteCarController";
import { ListCarController } from "../controllers/ListCarController";


const carRoutes = Router();

const createCarController = new CreateCarController();
const listCarController = new ListCarController();
const deleteCarController = new DeleteCarController();


carRoutes.get("/", listCarController.handle);
carRoutes.post("/", createCarController.handle);
carRoutes.patch("/delete/:id", deleteCarController.handle);

export { carRoutes }