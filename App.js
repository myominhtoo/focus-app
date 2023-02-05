import {  TouchableWithoutFeedback , View , Keyboard } from 'react-native';
import style from './src/styles/index';
import Focus  from './src/features/focus/Focus';
import { useMemo, useReducer } from 'react';
import focusReduer from './src/reducers/focusReducer';
import { focusActions, focusStatus, initialFocusState } from './src/datas';
import Timer from './src/features/timer/Timer';

export default function App() {

  const [ focusState , focusDispatch ] = useReducer( focusReduer , initialFocusState );
  
  const onCreateFocus = ( data ) => {
      data  = { ...data , id : focusState.focusHistory.length + 1 , status : focusStatus.STARTED };
      focusDispatch({ type : focusActions.SET_FOCUS , payload : data });
      focusDispatch({ type : focusActions.ADD_FOCUS , payload : data })
  }

  const currentTemplate = useMemo(() => {
    if( focusState.focus ) return <Timer />
    return (
      <Focus
        onCreateFocus={onCreateFocus}
      />
    )
  } , [focusState.focusHistory] );

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={style.appContainer}>
       {currentTemplate}
      </View>
    </TouchableWithoutFeedback>
  );
}


//keep awake => expo-keep-awake