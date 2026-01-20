import express from 'express';
import Login from '../Controller/Login.controller.js';
import Register from '../Controller/Register.controller.js';
import { loginlimiter } from '../middleware/Ratelimit.middleware.js'; 

const Authrouter = express.Router();

Authrouter.post('/Login', loginlimiter, Login);
Authrouter.post('/Register', Register);

export default Authrouter;
