import React from 'react'
import { navigate } from 'gatsby'

const SwitchLanguage = (props) => {

  const setLanguage = (e) => {
    let myUrl = "/"+e.target.value+"/"+props.path
    navigate(myUrl)
    console.log("Le chemin est",myUrl)
  }



  return (
    <form className="mt-5 sm:mt-0">
      <select
        className="text-primary font-light bg-neutral-100 p-2"
        defaultValue={props.language}
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
