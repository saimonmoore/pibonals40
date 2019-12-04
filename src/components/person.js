import React, { useState, useEffect } from "react"
import Popup from "reactjs-popup"
import styled from "styled-components"
import createPersistedState from "use-persisted-state"

import Video from "../components/video"
import Photo from "../components/photo"
import ExtraPhotos from "../components/extra_photos"

const PasswordField = styled.input`
  height: 50px;
  width: 770px;
  font-size: 1em;
`

const storageKey = id => `${id}-unlocked`
const StyledPerson = styled.li``

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

  return (
    <Popup
      open={showPasswordForm}
      modal={true}
      position="center center"
      onClose={() => setShowPasswordForm(false)}
    >
      <div>
        <PasswordField
          type="password"
          placeholder={placeholder}
          onChange={event => setPasswordValue(event.target.value)}
        />
      </div>
    </Popup>
  )
}

const MessageWrapper = styled.div`
  border: 1px dashed green;
  background-color: antiquewhite;
  margin-top: 50px;
  margin-bottom: 25px;
`

const Message = ({ message }) => <MessageWrapper>{message}</MessageWrapper>

const contentStyle = {
  background: "rgba(255,255,255,0)",
  border: "none",
}

const overlayStyle = {
  overflowY: "scroll",
}

const PersonContent = ({ id, message, name, showContent, setShowContent }) => {
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
        {message && <Message message={message} />}
        <ExtraPhotos id={id} name={name} />
      </div>
    </Popup>
  )
}

const Entry = ({ id, name, message, password, hint }) => {
  const useLockedState = createPersistedState(storageKey(id))
  const [contentUnlocked, setContentUnlocked] = useLockedState(false)

  const [showPasswordForm, setShowPasswordForm] = useState(false)
  const [allowContent, setAllowContent] = useState(false)
  const [showContent, setShowContent] = useState(false)

  return (
    <StyledPerson>
      <div>
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
      </div>
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
          message={message}
          showContent={showContent}
          setShowContent={setShowContent}
        />
      )}
    </StyledPerson>
  )
}

const Person = ({ person: { id, name, password, message, hint } }) => {
  return (
    <div>
      <Entry
        id={id}
        name={name}
        password={password}
        message={message}
        hint={hint}
      />
    </div>
  )
}

export default Person