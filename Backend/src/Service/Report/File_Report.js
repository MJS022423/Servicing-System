import { ConsoleLog, ConsoleError } from "../../lib/logger.js";
import Database from "../../lib/connection.js";
import ReportSchema from "../../Model/StaticReport.js";

const db = new Database();
const log = false

async function FileReport(req, res) {

  const { userid, title, description } = req.body;

  if ( !userid || !title || !description ) {
    return res.status(400).json({error: "Failed to File Report please fill out the form"});
  }

  try {

    const collection = await db.Collection(3);
    
    const docs = await ReportSchema(
      userid,
      title,
      description,
    );
    
    await collection.insertOne(docs);
    await db.Close();
    ConsoleLog('[ SUCCESSFULLY FILED A REPORT ]', log)
    return res.status(200).json({ success: true })

  } catch (error) {

    ConsoleError(`[ FAILED TO FILED THE REPORT ]: ${error.message} `, log);
    return res.status(400).json({ error: "internal server error"})

  }
} 

export default FileReport;
