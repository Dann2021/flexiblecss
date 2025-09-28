import React from 'react'
import clsx from '../classe'

export default function Card({className, children, ...props}) {
  return (
    <div className={clsx("bloc-12 ronde p-2", className)} {...props}>
      {children}
    </div>
  )
}


Card.Header = ({children, className, ...props}) => {

    return (
    <div className={className} {...props}>
        {children}
    </div>
    )
}


Card.Corps = ({children, className, ...props}) => {

    return (
    <div className={className} {...props}>
        {children}
    </div>
    )
}

Card.Bas = ({children, className, ...props}) => {

    return (
    <div className={className} {...props}>
        {children}
    </div>
    )
}