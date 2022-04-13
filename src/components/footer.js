import React from 'react'
import { Link } from 'gatsby'

const Footer = () => (
  <footer className="border-t p-8 bg-neutral-200 sm:flex justify-between">
    <div className="m-5">
      <Link
        to="/"
        className="text-primary hover:text-secondary focus:text-secondary"
      >
        Mentions légales
      </Link>
    </div>
    <div className="m-5">
      Site Web développé par{' '}
      <a href
        ="https://www.seoalternative.fr"
        target="_blank"
        className="text-secondary hover:underline" rel="noreferrer"
      >
        Marie-Luce Beraudo de SEO Alternative
      </a>
    </div>
  </footer>
)

export default Footer
