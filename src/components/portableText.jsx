import React from 'react'

import "../styles/portableText.css"

const PortableTextComponent = {
  block: {
    h1: ({ children }) => <h1 className="text-4xl mt-4 mb-2">{children}</h1>,
    h2: ({ children }) => <h2 className="text-3xl mt-3 mb-2">{children}</h2>,
    h3: ({ children }) => <h3 className="text-2xl mt-3 mb-2">{children}</h3>,
    blockquote: ({ children }) => (
      <blockquote className="border-l-blue-500">{children}</blockquote>
    ),
    normal: ({ children }) => <p className="text-xl font-light">{children}</p>,
  },
};


export default PortableTextComponent