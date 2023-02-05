import { View , Text, TouchableOpacity } from "react-native";
import style from "../../styles";


export default function TimerControl({
    isPaused = true,
    onClick
}){
    return (
        <View style={style.timerControlContainer}>
            <TouchableOpacity  onPress={() => onClick(!isPaused)} style={style.controlBtn}>
                <Text  style={style.btnTxt}>
                    {isPaused ? 'Start' : 'Pause'}
                </Text>
            </TouchableOpacity>
        </View>
    )
}