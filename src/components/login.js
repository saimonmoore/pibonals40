import React, { useState, useEffect } from "react"
import createPersistedState from "use-persisted-state"
import styled from "styled-components"

import { getFromStore, writeToStore } from "../utils/localStorage"
import BankVaultImage from "../images/bank-vault-steel-door.jpg"

const STORAGE_KEY = "pibonals40power"
const useLockedState = createPersistedState("locked")

const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  height: 100%;
  width: 100%;
`

const FakeBgImage = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: ${({ height }) => height};
  min-height: 100%;
  z-index: -1;
  background-image: url(${BankVaultImage});

  & > img {
    object-fit: cover !important;
    object-position: 0% 0% !important;
    font-family: "object-fit: cover !important; object-position: 0% 0% !important;";
  }

  @media screen and (max-width: 600px) {
    height: ${({ mobileHeight }) => mobileHeight};
  }
`

const VaultPasswordInput = styled.input`
  height: 50px;
  width: 300px;
  font-size: 2em;
`

const PasswordForm = ({ password, setUnlocked, setEternallyUnlocked }) => {
  const [passwordValue, setPasswordValue] = useState("")

  useEffect(() => {
    if (password === passwordValue) {
      setUnlocked(true)
      setEternallyUnlocked(true)
    }
  })

  return (
    <VaultPasswordInput
      type="password"
      placeholder="La coneixes?"
      onChange={event => setPasswordValue(event.target.value)}
    />
  )
}

const Login = ({ children, password }) => {
  // const eternallyUnlocked = getFromStore(STORAGE_KEY)
  const [eternallyUnlocked, setEternallyUnlocked] = useLockedState(false)
  const [unlocked, setUnlocked] = useState(false)
  const showContent = eternallyUnlocked || unlocked

  if (showContent) {
    return children
  }

  return (
    <FakeBgImage>
      <Content>
        <PasswordForm
          password={password}
          setUnlocked={setUnlocked}
          setEternallyUnlocked={setEternallyUnlocked}
        />
      </Content>
    </FakeBgImage>
  )
}

export default Login
