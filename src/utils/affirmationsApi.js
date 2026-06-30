export const getAffirmation = () => {
  return fetch('/affirmations')
    .then((res) => {
      if (res.ok) return res.json()
      return Promise.reject(`Error: ${res.status}`)
    })
}