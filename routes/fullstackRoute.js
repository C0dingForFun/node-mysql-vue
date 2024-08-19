import express from 'express';
import { fetchUsers,fetchUser, insertUser, updateUser, deleteUser, fetchFruits, fetchFruit, insertFruit, updateFruit, deleteFruit, loginUser,addToCart } from '../controller/fullstackController.js';
import { checkUser,verifyAToken } from '../middleware/authenticate.js';

const usersRouter = express.Router();
const fruitsRouter = express.Router();

usersRouter.get('/',fetchUsers)
fruitsRouter.get('/',verifyAToken,fetchFruits)

fruitsRouter.post('/cart',verifyAToken,addToCart)

usersRouter.post('/insertUser',insertUser)
fruitsRouter.post('/insertFruit',insertFruit)

usersRouter.post('/login',checkUser,loginUser );

usersRouter
    .route('/:id')
        .get(fetchUser)
        .delete(deleteUser)
        .patch(updateUser)

fruitsRouter
    .route('/:id')
        .get(fetchFruit)
        .delete(deleteFruit)
        .patch(updateFruit)

export {usersRouter,fruitsRouter};
