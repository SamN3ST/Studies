import React from "react";
import style from './Button.module.scss';

interface ButtonProps {
  children ?: React.ReactNode;
  type ?: "button" | "submit" | "reset" | undefined;
  onClick ?: () => void;

}

export default function Button({ onClick, type, children}: ButtonProps) {
  return (
    <button 
      onClick={onClick} 
      type={type} 
      className={style.button}
    >
      {children}
    </button>
  )
}