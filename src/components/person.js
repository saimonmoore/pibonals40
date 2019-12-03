import React, { useState, useEffect } from "react"
import Popup from "reactjs-popup"
import styled from "styled-components"
import createPersistedState from "use-persisted-state"

import Video from "../components/video"
import Photo from "../components/photo.js"

const storageKey = id => `${id}-unlocked`
const StyledPerson = styled.li``

const PasswordForm = ({
  showPasswordForm,
  setShowPasswordForm,
  password,
  setAllowContent,
  setContentUnlocked,
}) => {
  const [passwordValue, setPasswordValue] = useState("")

  useEffect(() => {
    if (password === passwordValue) {
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
        <input
          type="password"
          placeholder="Has trovat la paraula Eulàlia..."
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
      position="center center"
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
        setAllowContent={setAllowContent}
        setContentUnlocked={setContentUnlocked}
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
