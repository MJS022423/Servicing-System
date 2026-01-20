import { PostAnnouncement, AnnouncementList } from "../Repository/Announcement.repository.js";
import { AnnouncementSchema } from "../Model/StaticAnnouncement.js";

export async function AnnouncementService({ Title, Content, Createdby }) {

  if (!Title || !Content || !Createdby) {
    throw { status: 400, message: "Failed to Post Announcement " };
  }
  const doc = await AnnouncementSchema(
    Title,
    Content,
    Createdby
  );
  
  await PostAnnouncement(doc);
};

export async function AnnouncementServiceList() {
  return await AnnouncementList();
};


