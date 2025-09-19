import React from 'react'
import clsx from '../classe'

export default function Card({className, children}) {
  return (
    <div className={clsx("bloc-12 ronde p-2", className)} >
      {children}
    </div>
  )
}


Card.Header = ({children, className}) => {

    return (
    <div className={className}>
        {children}
    </div>
    )
}


Card.Corps = ({children, className}) => {

    return (
    <div className={className}>
        {children}
    </div>
    )
}

Card.Bas = ({children, className}) => {

    return (
    <div className={className}>
        {children}
    </div>
    )
}