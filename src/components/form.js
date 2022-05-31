import React from 'react'

const Form = (props) => (
  <form className="w-full max-w-lg p-8 md:max-w-[1200px] mx-auto" data-netlify="true" method="POST" name="contact" action={`/${props.lang}/merci`}>
      <input type="hidden" name="form-name" value="contact" />
    <div className="flex flex-wrap -mx-3 mb-6">
      <div className="w-full md:w-1/2 px-3">
        <label
          className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
          htmlFor="nom"
          aria-required="true"
          required
        >
          { props.lang === "en" ? "Last name*" : "Nom*" }
        </label>
        <input
          className="appearance-none block w-full bg-gray-200 text-gray-700 rounded py-3 px-4 mb-3 leading-tight focus:bg-white"
          id="nom"
          type="text"
          name="nom"
        />
      </div>
      <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
        <label
          className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
          htmlFor="prenom"
        >
     { props.lang === "en" ? "First name" : "Prénom" }
        </label>
        <input
          className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:bg-white focus:border-gray-500"
          id="prenom"
          type="text"
          name="prenom"
        />
      </div>
    </div>
    <div className="flex flex-wrap -mx-3 mb-6">
      <div className="w-full px-3">
        <label
          className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
          htmlFor="email"
        >
            E-mail*
        </label>
        <input
          className="appearance-none block w-full bg-gray-200 text-gray-700 rounded py-3 px-4 mb-3 leading-tight focus:bg-white"
          id="email"
          type="email"
          name="email"
          aria-required="true"
          required
        />
      </div>
    </div>
    <div className="flex flex-wrap -mx-3 mb-6">
      <div className="w-full px-3">
        <label
          className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
          htmlFor="message"
        >
             { props.lang === "en" ? "Your message*" : "Votre message*" }
        </label>
        <textarea
          className="appearance-none block w-full bg-gray-200 text-gray-700 rounded py-3 px-4 mb-3 leading-tight focus:bg-white"
          id="message"
          type="text"
          name="message"
          aria-required="true"
          required
        ></textarea>
      </div>
    </div>
    <input
      type="submit"
      className="bg-secondary hover:bg-white text-white hover:text-secondary border-2 border-secondary font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
    ></input>
  </form>
)

export default Form
