import { Router } from "express";
import { CreateClosedRentController } from "../controllers/CreateClosedRentController";


const closedRentRoutes = Router();

const createClosedRentController = new CreateClosedRentController();


closedRentRoutes.post("/", createClosedRentController.handle);


export { closedRentRoutes }