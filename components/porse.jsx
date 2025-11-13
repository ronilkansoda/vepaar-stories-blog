import React from 'react'

export default function Porse({value}) {
  return (
      <div className="prose prose-h2:mt-1" dangerouslySetInnerHTML={{ __html: value }} />
  )
}
