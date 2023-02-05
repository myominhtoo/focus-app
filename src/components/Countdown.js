import { View , Text  } from "react-native";
import style from "../styles";
import { useEffect, useMemo, useRef, useState } from "react";

export default function Countdown({
    time = 5,
    isPaused = false ,
    onEnd ,
    onProgress
}){

    const [ ms , setMs ] = useState(() =>{
        return time * 60 * 1000
    });

    const countdownIntervalRef = useRef();


    const format = ( time ) => time <  10 ? `0${time}` : time;  

    const countdown = useMemo(() => {
       if( ms == 0 ) return { min : '00'  , sec : '00' }
        return {
            min : format(Math.floor( ms/1000/60 )),
            sec : format(Math.floor( ms/1000 ) % 60)
        }
    } , [ms] );

    const startCountdown = () => {
        countdownIntervalRef.current = setInterval(() => {
            setMs( prevMs => {
                if( isPaused && countdownIntervalRef.current ){
                    console.log('paused');
                    clearInterval(countdownIntervalRef.current);
                    return prevMs;
                }

                if( prevMs  === 0 ){
                    clearInterval(countdownIntervalRef.current);
                    console.log('stopped')
                    onEnd();
                    return 0;
                }
                return  prevMs - 1000;
            })
        } , 1000 );
    }

    useEffect(() =>{
        if( isPaused  && countdownIntervalRef.current )
            clearInterval(countdownIntervalRef.current);
        else
            startCountdown();
        
        return () => {
            clearInterval(countdownIntervalRef.current)
        }
    } , [ isPaused ] );


    useEffect(() => {
        onProgress(ms);
    } , [ms]);

    return (
        <View style={style.countdownContainer} >
            <View style={style.countdownBody}>
                <View>
                    <Text style={style.time}>
                        {countdown.min}
                    </Text>
                </View>
                <View>
                    <Text style={style.colon}>:</Text>
                </View>
                <View>
                    <Text style={style.time}>
                        {countdown.sec}
                    </Text>
                </View>
            </View>
        </View>
    )
}