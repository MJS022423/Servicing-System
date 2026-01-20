export function ServiceSchema(
  userid,
  serviceType,
  purpose) {

  return {
    Userid: `${userid}`,
    Service: `${serviceType}`,
    Purpose: `${purpose}`,
    status: "pending",
    requestDate: new Date(),
    remark: null
  } 
}

