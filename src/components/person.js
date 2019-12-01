import React, { useState } from "react"
import Popup from "reactjs-popup"
import {
  writeStorage,
  deleteFromStorage,
  useLocalStorage,
} from "@rehooks/local-storage"

import Video from "../components/video"

const Entry = ({ id, name, password, photo }) => {
  const [openPasswordForm, setOpenPasswordForm] = useState(false)
  const [passwordValue, setPasswordValue] = useState(false)
  const [localPasswordValue] = useLocalStorage(`${id}-password`)

  return (
    <li>
      <span>{name}</span>
      <span>- {password}</span>
      <div onClick={() => setOpenPasswordForm(!openPasswordForm)}>{photo}</div>
      <Popup
        open={openPasswordForm && passwordValue !== password}
        modal={true}
        position="center"
      >
        <div>
          <label>Clau de pas:</label>
          <input
            type="text"
            onChange={event => setPasswordValue(event.target.value)}
          />
        </div>
      </Popup>
      <Popup
        open={localPasswordValue === password || passwordValue === password}
        position="right center"
        modal={true}
      >
        <div>
          <Video id={id} />
        </div>
      </Popup>
    </li>
  )
}

const Person = ({ person: { id, name, password, photo, words } }) => {
  return (
    <div>
      <Entry id={id} name={name} password={password} photo={photo} />
    </div>
  )
}

export default Person
