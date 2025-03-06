import React from 'react'

function Button({handlePhrase, children}) {
  return (
    <button onClick={handlePhrase}>
      {children}
    </button>
  )
}

export default Button
