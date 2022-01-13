
import { InputProps } from "../../types"
import { InputStyled, Label } from "../Input/styles"


export const Input = (props:InputProps) => {
  
    return (
        <Label>
            {props.label}
            <InputStyled {...props}  />
        </Label>
    )
}
