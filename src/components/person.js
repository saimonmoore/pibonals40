import React, { useState, useEffect } from "react"
import Popup from "reactjs-popup"
import styled from "styled-components"
import createPersistedState from "use-persisted-state"

import Video from "../components/video"
import Document from "../components/document"
import Photo from "../components/photo"
import ExtraPhotos from "../components/extra_photos"

const PasswordField = styled.input`
  height: 50px;
  width: 770px;
  font-size: 1em;
`

const storageKey = id => `${id}-unlocked`
const StyledPerson = styled.div``

const PasswordForm = ({
  showPasswordForm,
  setShowPasswordForm,
  password,
  hint,
  setAllowContent,
  setContentUnlocked,
}) => {
  const [passwordValue, setPasswordValue] = useState("")
  const placeholder = hint || "Has trovat la paraula Eulàlia?"

  useEffect(() => {
    if (password.toLowerCase() === passwordValue.toLowerCase()) {
      setAllowContent(true)
      setContentUnlocked(true)
      setShowPasswordForm(false)
    }
  })

  const contentStyle = {
    backgroundColor: "black",
    border: "none",
  }

  return (
    <Popup
      open={showPasswordForm}
      contentStyle={contentStyle}
      modal={true}
      position="center center"
      onClose={() => setShowPasswordForm(false)}
    >
      <div style={{ backgroundColor: "black" }}>
        <PasswordField
          type="password"
          placeholder={placeholder}
          onChange={event => setPasswordValue(event.target.value)}
          ref={input => input && input.focus()}
        />
      </div>
    </Popup>
  )
}

const contentStyle = {
  background: "rgba(255,255,255,0)",
  border: "none",
}

const overlayStyle = {
  overflowY: "scroll",
}

const PersonContent = ({ id, name, showContent, setShowContent }) => {
  return (
    <Popup
      open={showContent}
      position="center center"
      modal={true}
      lockScroll={true}
      contentStyle={contentStyle}
      overlayStyle={overlayStyle}
      onClose={() => setShowContent(false)}
    >
      <div>
        <Video id={id} />
        <Document id={id} />
        <ExtraPhotos id={id} name={name} />
      </div>
    </Popup>
  )
}

const Entry = ({ id, name, password, hint }) => {
  const useLockedState = createPersistedState(storageKey(id))
  const [contentUnlocked, setContentUnlocked] = useLockedState(false)

  const [showPasswordForm, setShowPasswordForm] = useState(false)
  const [allowContent, setAllowContent] = useState(false)
  const [showContent, setShowContent] = useState(false)

  return (
    <StyledPerson>
      <Photo
        id={id}
        name={name}
        contentUnlocked={contentUnlocked}
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
      <PasswordForm
        showPasswordForm={showPasswordForm}
        setShowPasswordForm={setShowPasswordForm}
        password={password}
        hint={hint}
        setAllowContent={setAllowContent}
        setContentUnlocked={setContentUnlocked}
      />
      {allowContent && (
        <PersonContent
          id={id}
          name={name}
          showContent={showContent}
          setShowContent={setShowContent}
        />
      )}
    </StyledPerson>
  )
}

const Person = ({ person: { id, name, password, hint } }) => {
  return <Entry id={id} name={name} password={password} hint={hint} />
}

export default Person
