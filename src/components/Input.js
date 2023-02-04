import style from "../styles"
import { TextInput } from "react-native"

export default function Input({
    ...props
}){
    return (
        <TextInput
         style={style.input}
         {...props}
        />
    )
}