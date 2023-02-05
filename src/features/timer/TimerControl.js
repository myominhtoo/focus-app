import { View , Text, TouchableOpacity } from "react-native";
import style from "../../styles";


export default function TimerControl({
    isPaused = true,
    onClick,
    onCancel
}){
    return (
        <View style={style.timerControlContainer}>
            <TouchableOpacity  onPress={() => onClick(!isPaused)} style={style.controlBtn}>
                <Text  style={style.btnTxt}>
                    {isPaused ? 'Start' : 'Pause'}
                </Text>
            </TouchableOpacity>
            <TouchableOpacity style={style.cancelBtn} >
                <Text onPress={onCancel} style={style.cancelTxt} >
                    Cancel
                </Text>
            </TouchableOpacity>
        </View>
    )
}