export const getFromStore = key => {
  if (!window && window.localStorage) return

  return window.localStorage.getItem(key)
}

export const writeToStore = (key, value) => {
  if (!(window && window.localStorage)) return

  return window.localStorage.setItem(key, value)
}
