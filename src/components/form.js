import React from 'react'

const Form = () => (
  <form className="w-full max-w-lg" action="https://getform.io/f/95ae37ed-17d3-477c-8ae5-035cbb64bc74" method="POST">
    <div className="flex flex-wrap -mx-3 mb-6">
      <div className="w-full md:w-1/2 px-3">
        <label
          className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
          for="nom"
          aria-required="true"
          required
        >
          Nom
        </label>
        <input
          className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
          id="nom"
          type="text"
          name="nom"
        />
        <p className="text-red-500 text-xs italic">Merci de remplir ce champ</p>
      </div>
      <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
        <label
          className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
          for="prenom"
        >
          Prénom
        </label>
        <input
          className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
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
          for="email"
        >
          E-mail
        </label>
        <input
          className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
          id="email"
          type="email"
          name="email"
        />
        <p className="text-red-500 text-xs italic">Merci de remplir ce champ</p>
      </div>
    </div>
    <div className="flex flex-wrap -mx-3 mb-6">
      <div className="w-full px-3">
        <label
          className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
          for="message"
        >
          Votre message
        </label>
        <textarea
          className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
          id="message"
          type="text"
          name="message"
        ></textarea>
        <p className="text-red-500 text-xs italic">Merci de remplir ce champ</p>
      </div>
    </div>
    <input
      type="submit"
      className="bg-secondary hover:bg-white text-white hover:text-secondary border-2 border-secondary font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
    ></input>
  </form>
)

export default Form
