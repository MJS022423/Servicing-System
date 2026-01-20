import express from 'express';
import { ServiceRequest, ServiceRequestDisplay } from '../Controller/Request.controller.js';
import { authMiddleware } from '../middleware/Auth.middleware.js';

const ServiceRouter = express.Router();

ServiceRouter.post("/v1/ServiceRequestpost",authMiddleware ,ServiceRequest);
ServiceRouter.get("/v1/ServiceRequestList",authMiddleware ,ServiceRequestDisplay);

export default ServiceRouter;