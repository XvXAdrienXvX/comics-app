import React from 'react'
import { Fragment, ReactNode } from 'react'

type Props = {
    handleClick?: VoidFunction,
    label?: string,
    icon?: ReactNode,
    className?: string,
    iconStyle?: string,
    type?: "button" | "submit" | "reset" | undefined
    disabled?: boolean
}

const Button = (props: Props) => {
    return (

        <Fragment>
            <button
                type={props.type ?? "button"}
                className={`${props.className}`}
                onClick={props.handleClick}
                disabled={props.disabled}
            >
                {props.icon}
                {props.label}
            </button>
        </Fragment>

    )
}

export default Button
