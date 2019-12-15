import React, { useState, useEffect } from "react"
import Popup from "reactjs-popup"
import styled from "styled-components"
import createPersistedState from "use-persisted-state"

import Video from "../components/video"
import Audio from "../components/audio"
import Document from "../components/document"
import Photo from "../components/photo"
import ExtraPhotos from "../components/extra_photos"
import Iframe from "../components/iframe"

const PasswordField = styled.input`
  height: 50px;
  width: 770px;
  font-size: 1em;

  @media only screen and (max-width: 414px) {
    margin-left: 0px;
    padding-left: 0px;
    font-size: 0.9em;
  }
`

const storageKey = id => `${id}-unlocked`
const StyledPerson = styled.div``

const mobileDevice = () => !window.matchMedia("(min-width: 415px)").matches

const contentStyleForDevice = (mobileContentStyle, contentStyle) => {
  if (mobileDevice()) {
    return mobileContentStyle
  } else {
    return contentStyle
  }
}

const PasswordForm = ({
  showPasswordForm,
  setShowPasswordForm,
  password,
  hint,
  setAllowContent,
  setContentUnlocked,
}) => {
  const [passwordValue, setPasswordValue] = useState("")
  const placeholder = hint || "Has trobat la paraula Eulàlia?"

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

  const mobileContentStyle = {
    backgroundColor: "black",
    border: "none",
    marginLeft: "2px",
  }

  return (
    <Popup
      open={showPasswordForm}
      contentStyle={contentStyleForDevice(mobileContentStyle, contentStyle)}
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

const mobileContentStyle = {
  background: "rgba(255,255,255,0)",
  border: "none",
  width: "60%",
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
      contentStyle={contentStyleForDevice(mobileContentStyle, contentStyle)}
      overlayStyle={overlayStyle}
      onClose={() => setShowContent(false)}
    >
      <div>
        <Video id={id} />
        <Iframe id={id} />
        <Audio id={id} />
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
