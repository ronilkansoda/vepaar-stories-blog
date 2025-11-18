import React from 'react'

export default function Porse({ value }) {
  return (
    // <div className="prose prose-h2:my-0 prose-blockquote:my-2 prose-p:mb-6 " dangerouslySetInnerHTML={{ __html: value }} />
    <div
      className="prose max-w-none 
             [&_p]:mb-4
             [&_p]:mt-0 
             [&_h2]:my-0 
             [&_blockquote]:my-4
             [&_ul]:my-4 
             [&_ol]:my-4"
      dangerouslySetInnerHTML={{ __html: value }}
    />
  )
}