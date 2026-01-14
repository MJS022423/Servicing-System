import { ConsoleLog, ConsoleError } from "../../lib/logger.js";
import Database from "../../lib/connection.js";

const db = new Database();
const log = true;

async function DisplayReport(req, res) {

  try {
    
    const collection = await db.Collection(3);
    const report = await collection.find({}).toArray();

    ConsoleLog("[ SUCCESSFULLY RETRIEVE REPORT ]", log);
    return res.status(200).json({ success: true, display: report});

  } catch ( error ) {
    ConsoleLog(`[ FAILED TO RETRIEVE REPORT ] ${error.message}`, log);
    return res.status(500).json({ error : "Internal Server Error"});
  }
}

export default DisplayReport;