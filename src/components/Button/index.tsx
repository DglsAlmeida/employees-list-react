import { ButtonHTMLAttributes } from "react";
import { ButtonStyled } from "./styles";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  color: string;
}

const Button = ({ children, ...rest }: ButtonProps) => {
  return (
    <ButtonStyled {...rest}>
      {children}
    </ButtonStyled >
  )
}

export default Button;