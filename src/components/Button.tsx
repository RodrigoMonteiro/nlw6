import React, {ButtonHTMLAttributes} from 'react'
import '../styles/Button.scss'



type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
    isOutLined?: boolean
}

export default function Button ({isOutLined, ...props} : ButtonProps){
    return (
<button className={`button ${isOutLined ? 'outlined': ''}`}
 {...props}>

</button>    )
}