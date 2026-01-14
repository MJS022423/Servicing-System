import express from 'express';
import FileReport from '../Service/Report/File_Report.js';
import DisplayReport from '../Service/Report/DisplayReport.js';
import { authMiddleware } from '../Auth/AuthJWT.js';

const ReportRoutes = express.Router();

ReportRoutes.post('/v1/FileReport', authMiddleware, FileReport);
ReportRoutes.get('/v1/DisplayReport', authMiddleware, DisplayReport);

export default ReportRoutes;
