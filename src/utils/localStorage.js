export const getFromStore = key => {
  if (typeof window === `undefined`) return

  return window.localStorage.getItem(key)
}

export const writeToStore = (key, value) => {
  if (typeof window === `undefined`) return

  return window.localStorage.setItem(key, value)
}
