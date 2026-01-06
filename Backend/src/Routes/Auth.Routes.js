import express from 'express';
import Login from '../Auth/Auth.Login.js';
import Register from './../Auth/Auth.Register.js'

const Authrouter = express.Router();

Authrouter.post('/Login', Login);
Authrouter.post('/Register', Register);

export default Authrouter;
