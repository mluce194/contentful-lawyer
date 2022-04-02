import React from 'react'

const SwitchLanguage = () => (
  <form className="mt-5 sm:mt-0">
    <select className="text-primary font-light bg-neutral-100 p-1">
      <option value="">Choose your language</option>
      <option value="french">Français</option>
      <option value="english">English</option>
    </select>
  </form>
)

export default SwitchLanguage
