export function AnnouncementSchema(
  Title,
  Content,
  Createdby
) {

  return {
    title: `${Title}`,
    content: `${Content}`,
    createdby: `${Createdby}`
  }
}

