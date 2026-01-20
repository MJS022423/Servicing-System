import { ServiceSchema } from "../Model/StaticServiceFile.js";
import { InsertUserRequest } from "../Repository/Request.repository.js";
import { RequestList } from "../Repository/Request.repository.js";
/**
 * Handle UserRequest Logic
 * @param {object} param0 - Request data
 * @param {string} param0.userid - User Unique ID
 * @param {string} param0.ServiceType - Type of request service user needs
 * @param {string} param0.Purpose - What is the purpose of the request service
 */

export async function UserRequestService({ userid, ServiceType, Purpose }) {

  if (!userid || !ServiceType || !Purpose) {
    throw { status: 400, message: "Failed to Process Request pls fill up the form" };
  }

  const doc = await ServiceSchema(
    userid,
    ServiceType,
    Purpose
  );

  InsertUserRequest(doc);

}

export async function ShowRequestList() {

  return await RequestList();

}

