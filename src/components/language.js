import React, { useState } from 'react'
import { navigate } from 'gatsby'

const SwitchLanguage = (props) => {
  const [currentLang] = useState(props.language)

  const setLanguage = (e) => {
    navigate('/' + e.target.value)
  }

  return (
    <form className="mt-5 sm:mt-0">
      <select
        className="text-primary font-light bg-neutral-100 p-2"
        defaultValue={currentLang}
        onChange={setLanguage}
        name="language"
      >
        <option value="fr">Français</option>
        <option value="en">English</option>
      </select>
    </form>
  )
}

export default SwitchLanguage
