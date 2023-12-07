import React from 'react'

import { clsx } from 'clsx';

import "../styles/Button.scss";


const Button = ({ children, size, rounded,color, transparent, outline }) => {
  return (
    <button className={clsx('button', size, color, {transparent}, {rounded}, {outline})}>
      {children}
    </button>
  )
}

export default Button