import React from 'react'

import clsx from 'clsx';



const Button = ({ children, size, color, outline }) => {
  return (
    <button className={clsx('Button', size, color, { outline })}>
      {children}
    </button>
  )
}

export default Button