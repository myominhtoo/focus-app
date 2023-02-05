import { useRef, useState } from "react"
import Button from "../../components/Button"
import style from "../../styles"
import { View , Text  , TextInput } from "react-native"
import TimeModal from "../../components/TimeModal";

export default function Focus({
    onCreateFocus 
}){

    const inputRef = useRef();
    const [ error , setError ] = useState();
    const [ visible , setVisible ] = useState(false);

    const onPress = () => {
        checkInput();
        if( inputRef.current.value && inputRef.current.value.trim().length > 5){
            setVisible(true);
        }
    }

    const checkInput = () => {
        if( inputRef.current.value == null|| inputRef.current.value.trim().length == 0 ){
            setError('Focus must be blank!');
            return;
        }
        if( inputRef.current.value && inputRef.current.value.length <= 5 ){
            setError('Focus must be more than 5 chars!');
            return ;
        }
        setError('');
    };

    const onSubmitTime = ( timeInMin) => {
        onCreateFocus({ focus : inputRef.current.value , time : timeInMin });
    }

    return (
        <View style={style.focusContainer}>

            <Text style={style.focusTitle}>
                What do you have to focus,now?
            </Text>

            <View style={style.inputGroup}>
                <TextInput 
                    style={style.input}
                    ref={inputRef}
                    placeholder='Type thing to focus'
                    onChangeText={ value => inputRef.current.value = value}
                    onBlur={checkInput}
                />
                <Button
                    onPress={onPress}
                    text="+"
                />
            </View>

            <View style={style.errorContainer}>
                <Text style={style.error}>{error}</Text>
            </View>

            <TimeModal 
                visible={visible}
                setVisible={setVisible}
                onSubmit={onSubmitTime}
            />

        </View>
    )
}