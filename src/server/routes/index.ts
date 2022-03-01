import { Router } from "express";
import { carRoutes } from "../../modules/cars/routes/CarRoutes";
import { closedRentRoutes } from "../../modules/closed_rent/routes/ClosedRentRoutes";
import { rentRoutes } from "../../modules/rent/routes/RentRoutes";
import { userRoutes } from "../../modules/user/routes/UserRoutes";


const routes = Router();


routes.use("/car", carRoutes);
routes.use("/user", userRoutes);
routes.use("/rent", rentRoutes);
routes.use("/rentclosed", closedRentRoutes);


export { routes }