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


  const updateFocusHistory = ( focus ) => {
    focusDispatch({ type : focusActions.UPDATE_HISTORY , payload : focus });
  }

  const onPressItem = ( focus ) => {
    focusDispatch({ type : focusActions.SET_FOCUS , payload : focus });
  };

  const onPressCancel = () => {
    focusDispatch({ type : focusActions.UPDATE_HISTORY , payload : { ...focusState.focus  , status : focusStatus.CANCELLED } });

  }

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
      const history = data ? JSON.parse(data) : []; 
      focusDispatch( { type : focusActions.SET_HISTORY , payload : history } );
    });
  };

  const currentTemplate = useMemo(() => {
    if( focusState.focusHistory.length > 0 ){
      saveFocusHistory( focusState.focusHistory )
    }
    
    if( focusState.focus ) return (
      <Timer 
        data={focusState.focus}
        onEnd={updateFocusHistory}
        onCancel={onPressCancel}
      />
    )
    return (
      <Focus
        onCreateFocus={onCreateFocus}
        items={focusState.focusHistory}
        onPressItem={onPressItem}
      />
    )
  } , [focusState.focus,focusState.focusHistory] );


  // for handling to save focus history
  useEffect(() => {
    if( focusState.focus) {
      saveFocusHistory( focusState.focusHistory );
    }
  } , [focusState.focusHistory] );

  // for getting focus history
  useEffect(() => {
    getFocusHistory();
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