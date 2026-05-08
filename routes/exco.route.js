import { Router } from "express";
import { excoController } from "../controllers/exco.controller.js";

export const excoRouter = Router();

excoRouter.post("/", excoController.create);
excoRouter.get("/", excoController.getAll);
excoRouter.get("/:id", excoController.get);
excoRouter.patch("/:id", excoController.update);
excoRouter.delete("/:id", excoController.delete);
