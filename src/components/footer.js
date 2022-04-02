import React from 'react'
import { Link } from 'gatsby'



const Footer = () => (

    <footer className="border-t p-8 bg-neutral-200 flex justify-between">
      <div>
     <Link to="/" className="text-primary hover:text-secondary focus:text-secondary"> Mentions légales</Link></div>
     <div>Site Web développé par <Link to="https://www.seoalternative.fr" target="_blank" className="text-secondary hover:underline">Marie-Luce Beraudo de SEO Alternative</Link></div>
    </footer>

)

export default Footer
