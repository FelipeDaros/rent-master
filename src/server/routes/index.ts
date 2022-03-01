import { Router } from "express";
import { carRoutes } from "../../modules/cars/routes/CarRoutes";
import { rentRoutes } from "../../modules/rent/routes/RentRoutes";
import { userRoutes } from "../../modules/user/routes/UserRoutes";


const routes = Router();


routes.use("/car", carRoutes);
routes.use("/user", userRoutes);
routes.use("/rent", rentRoutes);


export { routes }