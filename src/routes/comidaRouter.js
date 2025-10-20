import { Router } from "express"
import * as comidaController from './../controller/comidaControllers.js'

const router = Router();

router.get("/", comidaController.listarTodos);
router.get("/:id", comidaController.listarTodos);

export default router;