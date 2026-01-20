import path from 'path';
import cors from 'cors';
import dotenv from 'dotenv';
import express from 'express';
import __dirname from './src/lib/dirname.js';
import Authrouter from './src/Routes/Auth.Routes.js'
import AnnouncementRouter from './src/Routes/Announcement.Routes.js';
import ReportRoutes from './src/Routes/Report.Routes.js';
import ServiceRouter from './src/Routes/ServiceRequest.Routes.js';
import { Requestlimiter } from './src/middleware/Ratelimit.middleware.js';

dotenv.config({path: path.join(__dirname,'config', '.env')});
const app = express();
const PORT = process.env.Port;

app.use(cors({ origin: ['http://localhost:5173', 'http://localhost:5174', 'http://localhost:5175'], credentials: true }));
app.use(express.urlencoded({ limit: '50mb', extended: true }));
app.use(express.json({ limit: '50mb' }));
app.use(Requestlimiter);

app.use(Authrouter);
app.use(AnnouncementRouter);
app.use(ReportRoutes);
app.use(ServiceRouter);

app.get('/status', (req, res) => {
  res.status(200).json({ status: 'ok', message: '[ EXPRESS SERVER IS RUNNING ]' });
  console.log('[ EXPRESS SERVER IS RUNNING ]');
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
