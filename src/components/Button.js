import  { TouchableOpacity , Text } from 'react-native'
import style from '../styles'

export default function Button({
    text = 'Click',
    onPress ,
    ...props
}){
    return(
        <TouchableOpacity style={style.btn} onPress={onPress} {...props} >
            <Text style={style.btnText}>
                {text}
            </Text>
        </TouchableOpacity>
    )
}