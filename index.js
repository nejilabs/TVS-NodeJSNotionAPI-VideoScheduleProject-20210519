const express = require('express');
const getVideos = require('./services/notion');

const EXPRESS = express()

// START: STATICS
EXPRESS.use(express.static('frontend'))
// END: STATICS

// START: ENDPOINTS
/**
 * @name "/videos" endpoint
 * @description http://localhost:5000/videos
 */
EXPRESS.get('/videos', async (req, res) => {
  const data = await getVideos()
  res.json(data)
})
// END: ENDPOINTS


const PORT = process.env.PORT || 5000
EXPRESS.listen(PORT, console.log(`Server started on port ${PORT}`))

// (async () => {
//   const nVideos = await getVideos()
//   console.log(nVideos)
// })()
