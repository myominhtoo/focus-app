import {  TouchableWithoutFeedback , View , Keyboard   } from 'react-native';
import style from './src/styles/index';
import Focus  from './src/features/focus/Focus';
import { useEffect, useMemo, useReducer } from 'react';
import focusReduer from './src/reducers/focusReducer';
import { focusActions, focusStatus, initialFocusState, keys } from './src/datas';
import Timer from './src/features/timer/Timer';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function App() {

  const [ focusState , focusDispatch ] = useReducer( focusReduer , initialFocusState );
  
  const onCreateFocus = ( data ) => {
      data  = { ...data , id : focusState.focusHistory.length + 1 , status : focusStatus.STARTED };
      focusDispatch({ type : focusActions.SET_FOCUS , payload : data });
      focusDispatch({ type : focusActions.ADD_FOCUS , payload : data });
  }

  const currentTemplate = useMemo(() => {
    if( focusState.focus ) return (
      <Timer 
        data={focusState.focus}
      />
    )
    return (
      <Focus
        onCreateFocus={onCreateFocus}
      />
    )
  } , [focusState.focus] );


  const saveFocusHistory  = async ( focusHistory ) => {
    try{
      await AsyncStorage.setItem(keys.focusHistory,JSON.stringify(focusHistory))
      .then( () => {
        console.log("Successfully Saved!")
      })
    }catch(e){
      console.error( e +"ERROR TO save Async Storage for "+ focusState.focusHistory);
    }
  };

  const getFocusHistory = async () => {
    await AsyncStorage.getItem(keys.focusHistory)
    .then( data => {
      focusDispatch( { type : focusActions.SET_HISTORY , payload : JSON.parse(data)} );
    });
  }

  // for handling to save focus history
  useEffect(() => {
    // if(focusState.focus) saveFocusHistory( focusState.focusHistory );
  } , [focusState.focusHistory] );

  // for getting focus history
  useEffect(() => {
    // getFocusHistory();
  } , [] );

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={style.appContainer}>
       {currentTemplate}
      </View>
    </TouchableWithoutFeedback>
  );
}


//keep awake => expo-keep-awake