import React from "react"
import styled from "styled-components"

const IFRAMES = {
  "anna-ripoll": [
    '<div style="padding:177.78% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/378760766?title=0&byline=0&portrait=0" style="position:absolute;top:0;left:0;width:100%;height:100%;" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe></div><script src="https://player.vimeo.com/api/player.js"></script>',
  ],
  "saimon-moore": [
    '<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/8cAuW-yTnMQ?start=1" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
  ],
}

const Gallery = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 25px;
  margin-left: 140px;
`

const EmbeddedVideo = ({ video }) => (
  <div dangerouslySetInnerHTML={{ __html: video }} />
)

const mapToIframe = id => IFRAMES[id] || []

const Iframe = ({ id }) => {
  const videos = mapToIframe(id)

  if (!videos || !videos.length) return null

  return (
    <Gallery>
      {videos.map(video => (
        <EmbeddedVideo video={video} />
      ))}
    </Gallery>
  )
}

export default Iframe
