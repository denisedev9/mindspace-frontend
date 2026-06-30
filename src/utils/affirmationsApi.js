const BASE_URL = 'https://api.allorigins.win/get?url=https://affirmations.dev'

export const getAffirmation = () => {
  return fetch(BASE_URL)
    .then((res) => {
      if (res.ok) return res.json()
      return Promise.reject(`Error: ${res.status}`)
    })
    .then((data) => {
      const parsed = JSON.parse(data.contents)
      return { affirmation: parsed.affirmation }
    })
}