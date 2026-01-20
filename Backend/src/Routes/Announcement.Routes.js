import express from 'express';
import { PostAnnouncement, AnnouncementList } from '../Controller/Announcement.controller.js';
import { authMiddleware } from '../middleware/Auth.middleware.js';

const AnnouncementRouter = express.Router();

AnnouncementRouter.post('/v1/PostAnnouncement', authMiddleware, PostAnnouncement);
AnnouncementRouter.get('/v1/DisplayAnnouncement', authMiddleware, AnnouncementList);

export default AnnouncementRouter;