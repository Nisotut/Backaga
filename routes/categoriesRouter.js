import express from 'express';
import { categoriesController } from '../controllers/categoriesController.js'


const categoriesRouter = express();

categoriesRouter.get('/', categoriesController.getAll)
categoriesRouter.post('/', categoriesController.create)

export { categoriesRouter };