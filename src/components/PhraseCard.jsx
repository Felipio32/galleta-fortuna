import React from 'react'

function PhraseCard({phrase, author}) {
  return (
    <article className='phrase-card'>
      <q className='phrase'>{phrase}</q>
      <p className='author'>- <strong>{author}</strong></p>
    </article>
  )
}

export default PhraseCard
