import React from "react"
import styled from "styled-components"

import JesusaPinyolAudio from "../data/audios/jesusa-pinyol.mp3"
import EulaliaPinyolAudio from "../data/audios/eulalia-pinyol.mp3"
import MontseratPinyol1Audio from "../data/audios/montserrat-pinyol-1.mp3"
import MontseratPinyol2Audio from "../data/audios/montserrat-pinyol-2.mp3"

const AUDIOS = {
  "jesusa-pinyol": [JesusaPinyolAudio],
  "eulalia-pinyol": [EulaliaPinyolAudio],
  "montserrat-pinyol": [MontseratPinyol1Audio, MontseratPinyol2Audio],
}

const Gallery = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 25px;
`

const HtmlAudio = ({ audio }) => (
  <audio controls>
    <source src={audio} type="audio/ogg" />
  </audio>
)

const mapToAudios = id => AUDIOS[id] || []

const Audio = ({ id }) => {
  const audios = mapToAudios(id)

  if (!audios || !audios.length) return null

  return (
    <Gallery>
      {audios.map(audio => (
        <HtmlAudio audio={audio} />
      ))}
    </Gallery>
  )
}

export default Audio
