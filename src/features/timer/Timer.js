import Countdown from "../../components/Countdown"
import style from "../../styles"
import { View , Text , Vibration , Platform } from "react-native"
import TimerControl from "./TimerControl"
import { useState } from "react"

export default function Timer({
    data = {}
}){

    const [ isPaused , setIsPaused ] = useState(true);

    const onCountdownFinishied = () => {
        setIsPaused(false);
        vibrateDevice();
    }

    const vibrateDevice = ( ) => {
        // if( Platform.OS === 'ios' ){
            const vibrateInterval = setInterval(() => {
                Vibration.vibrate();
            } , 1000 );
            setTimeout(() =>{
                clearInterval(vibrateInterval);
            } , 3000 );
        // r
    }

    return (
        <View style={style.timerContainer} >
            <View style={style.timerHeader} >
                <Countdown 
                    time={data.time}
                    isPaused={isPaused}
                    onEnd={onCountdownFinishied}
                />
            </View>
            <View style={style.timerBody} >
                <TimerControl
                 isPaused={isPaused}
                 onClick={setIsPaused}
                />
            </View>
        </View>
    )
}