const dotenv = require('dotenv').config();
const { Client } = require('@notionhq/client');

//Init Client
const notion = new Client({
  auth: process.env.NOTION_TOKEN
})

// START: Getting Id using code instead of http client @e1147
// const listDatabases = async () => {
//   const res = await notion.databases.list()
//   console.log(res);
// }

// listDatabases()
// END: Getting Id using code instead of http client @e1147

const notionDatabaseId = process.env.NOTION_DATABASE_ID;

/**
 * @name getVideos()
 * @description get the videos from the given database
 */
module.exports = async function getVideos() {
  const payload = {
    path: `databases/${notionDatabaseId}/query`,
    method: "POST"
  }

  const { results } = await notion.request(payload)

  const videos = results.map(result => {
    // Knowing each result object's properties
    // console.log(result.properties) 
    return {
      id: result.id,
      name: result.properties.Name.title[0].text.content,
      dateStart: result.properties.Date.date.start,
      description: result.properties.Description.rich_text[0].text.content
    }
  })

  return videos
}
