import React, { useState, useEffect } from "react"
import Popup from "reactjs-popup"
import styled from "styled-components"

import { getFromStore, writeToStore } from "../utils/localStorage"
import Video from "../components/video"
import Photo from "../components/photo.js"

const storageKey = id => `${id}-unlocked`
const StyledPerson = styled.li``

const PasswordForm = ({
  id,
  showPasswordForm,
  setShowPasswordForm,
  password,
  setAllowContent,
}) => {
  const [passwordValue, setPasswordValue] = useState("")

  useEffect(() => {
    if (password === passwordValue) {
      setAllowContent(true)
      writeToStore(storageKey(id), true)
      setShowPasswordForm(false)
    }
  })

  return (
    <Popup
      open={showPasswordForm}
      modal={true}
      position="center"
      onClose={() => setShowPasswordForm(false)}
    >
      <div>
        <label>Clau de pas:</label>
        <input
          type="text"
          onChange={event => setPasswordValue(event.target.value)}
        />
      </div>
    </Popup>
  )
}

const PersonContent = ({ id, showContent, setShowContent }) => {
  return (
    <Popup
      open={showContent}
      position="right center"
      modal={true}
      onClose={() => setShowContent(false)}
    >
      <div>
        <Video id={id} />
      </div>
    </Popup>
  )
}

const Entry = ({ id, name, password }) => {
  const contentUnlocked = getFromStore(storageKey(id))
  const [showPasswordForm, setShowPasswordForm] = useState(false)
  const [allowContent, setAllowContent] = useState(false)
  const [showContent, setShowContent] = useState(false)

  return (
    <StyledPerson>
      <div>
        <Photo
          id={id}
          name={name}
          onClick={() => {
            if (contentUnlocked) {
              setAllowContent(true)
              return setShowContent(true)
            }

            if (allowContent) {
              return setShowContent(true)
            } else {
              return setShowPasswordForm(true)
            }
          }}
        />
      </div>
      <PasswordForm
        id={id}
        showPasswordForm={showPasswordForm}
        setShowPasswordForm={setShowPasswordForm}
        password={password}
        setAllowContent={setAllowContent}
      />
      {allowContent && (
        <PersonContent
          id={id}
          showContent={showContent}
          setShowContent={setShowContent}
        />
      )}
    </StyledPerson>
  )
}

const Person = ({ person: { id, name, password } }) => {
  return (
    <div>
      <Entry id={id} name={name} password={password} />
    </div>
  )
}

export default Person
