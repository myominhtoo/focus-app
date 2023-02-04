import Button from "../../components/Button"
import Input from "../../components/Input"
import style from "../../styles"
import { View , Text  } from "react-native"

export default function Focus(){
    return (
        <View style={style.focusContainer}>

            <Text style={style.focusTitle}>
                What do you have to focus,now?
            </Text>

            <View style={style.inputGroup}>
                <Input 
                 placeholder='Type thing to focus'
                />
                <Button
                 text="+"
                />
            </View>

        </View>
    )
}