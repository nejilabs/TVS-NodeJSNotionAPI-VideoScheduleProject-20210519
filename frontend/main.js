const displayVideosElement = document.querySelector('#videos');

/**
 * @name getVideosFromBackend()
 * @description get video data from server backend
 * @returns data
 */
const getVideosFromBackend = async () => {
  const res = await fetch('http://localhost:5000/videos');

  const data = await res.json();

  return data
}

/**
 * @name addVideosToDom()
 * @description brings the data to a template and display at dom
 */
const addVideosToDom = async () => {
  const videos = await getVideosFromBackend()

  videos.map(video => {

    const div = document.createElement('div')

    div.innerHTML = `
      <h3>${video.name}</h3>
      <ul>
        <li><strong>Release Date:</strong> ${video.dateStart}</li>
        <li><strong>Description:</strong> ${video.description}</li>
      </ul>
    `

    displayVideosElement.appendChild(div)
  })

}

addVideosToDom()