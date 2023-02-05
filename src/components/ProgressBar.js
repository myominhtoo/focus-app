import { View , Text } from "react-native"
import style from "../styles"

export default function ProgressBar({
    progress = 100
}){
    return (
        <View style={style.progressContainer}>
          <View style={ {...style.progress , width : progress+ "%" }} >
          </View>
        </View>
    )
}