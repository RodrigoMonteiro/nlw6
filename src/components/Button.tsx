import React, {ButtonHTMLAttributes} from 'react'
import '../styles/Button.scss'



type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>

export default function Button (props: ButtonProps){
    return (
<button className="button" {...props}>

</button>    )
}