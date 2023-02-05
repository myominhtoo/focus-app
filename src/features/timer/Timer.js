import Countdown from "../../components/Countdown"
import style from "../../styles"
import { View , Text , Vibration , Platform } from "react-native"
import TimerControl from "./TimerControl"
import { useState } from "react"
import ProgressBar from "../../components/ProgressBar"
import { focusStatus } from "../../datas"

export default function Timer({
    data,
    onEnd,
    onCancel
}){

    const [ isPaused , setIsPaused ] = useState(true);
    const [ timeLeft , setTimeLeft ] = useState(() => data.time * 1000 * 60 );

    const onCountdownFinishied = () => {
        setIsPaused(false);
        vibrateDevice();
    }

    const vibrateDevice = ( ) => {
        const vibrateInterval = setInterval(() => {
            Vibration.vibrate();
        } , 1000 );
        setTimeout(() =>{
            clearInterval(vibrateInterval);
            onEnd({ ...data , status : focusStatus.COMPLETED });
        } , 5000 );
    };

    return (
        <View style={style.timerContainer} >
            <View style={style.timerHeader} >
                <Countdown 
                    time={data.time}
                    isPaused={isPaused}
                    onProgress={setTimeLeft}
                    onEnd={onCountdownFinishied}
                />
            </View>
            <View style={style.focusInfoContainer} >
                <Text style={style.title} >
                    {data.focus}
                </Text>
                <Text style={style.btnTxt}>
                    Total : {data.time} mins
                </Text>
            </View>
            <ProgressBar 
                progress={Math.floor((timeLeft/(data.time * 1000 * 60))*100)}
            />
            <View style={style.timerBody} >
                <TimerControl
                 isPaused={isPaused}
                 onClick={setIsPaused}
                 onCancel={onCancel}
                />
            </View>
        </View>
    )
}