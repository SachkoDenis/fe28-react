import React, {FC, ChangeEvent} from "react";
//@ts-ignore
import classNames from "classnames";
import styles from './Input.module.css';
import { BooleanLiteral } from "typescript";

type InputProps = {
    value:string;
    onChange:(value:string) => void;
    onBlur?: () => void;
    placeholder?: string;
    className?:string;
    disabled?:boolean;
    error?:boolean;

}


const Input:FC<InputProps> = ({value, onChange, placeholder='', disabled, error, className, onBlur}) => {

   const onInputChange = (e:ChangeEvent<HTMLInputElement>) =>{
    onChange(e.target.value)

   }
    return (
        <input
            type="text"
            onChange={onInputChange}
            onBlur={onBlur}
            value={value}
            placeholder={placeholder}
            className={classNames(styles.input, className, { [styles.error]: error })}
            disabled={disabled} 
        />
    )
}

export default Input 