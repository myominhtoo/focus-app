import { Modal , View , Text, TouchableWithoutFeedback, TextInput, Button } from "react-native"
import style from "../styles"
import { AntDesign } from '@expo/vector-icons';
import { colors } from "../datas";
import { useRef } from "react";

export default function TimeModal({
    visible = false,
    setVisible ,
    onSubmit
}){

    const timeRef = useRef();

    const handleClickConfirm =  () => {
        if( timeRef.current.value ){
            onSubmit(Number(timeRef.current.value));
            setVisible(false);
        }
    }

    return (
        <Modal 
          transparent={true}
          visible={visible} 
          animationType="slide"
          onPress={() => setVisible(false)}
        >
            <View style={style.modalContainer}>
                <View style={style.modalContent}>
                    <View style={style.modalHeader}>
                        <Text style={style.modalTitle}>
                            Time For Focus
                        </Text>
                        <AntDesign 
                          onPress={() => setVisible(false)}
                          name="close" 
                          size={24} 
                          color={colors.P
                        } 
                        />
                    </View>
                    <View style={style.modalBody}>
                        <View style={style.inputGroup}>
                            <TextInput 
                                ref={timeRef}
                                style={style.timeInput}
                                keyboardType="numeric"
                                placeholder="Enter time to foucs"
                                onChangeText={ val => timeRef.current.value = val }
                            />
                            <Text style={style.label}>Mins</Text>
                        </View>
                        <View style={style.btnContainer}>
                           <Button  
                                title="Confirm"
                                onPress={handleClickConfirm}
                            />
                        </View>
                    </View>
                </View>
            </View>
        </Modal>
    )
}