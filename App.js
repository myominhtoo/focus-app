import {  TouchableWithoutFeedback , View , Keyboard } from 'react-native';
import style from './src/styles/index';
import Focus  from './src/features/focus/Focus';
import { useReducer } from 'react';
import focusReduer from './src/reducers/focusReducer';
import { initialFocusState } from './src/datas';

export default function App() {

  const [ focuState , focusDispath ] = useReducer( focusReduer , initialFocusState );

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={style.appContainer}>
        <Focus />
      </View>
    </TouchableWithoutFeedback>
  );
}


//keep awake => expo-keep-awake