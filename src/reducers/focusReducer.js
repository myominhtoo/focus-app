import { focusActions } from "../datas";

export default function focusReduer( 
    state ,
    action = { type : '' , payload : null }
){
    switch( action.type ){
        case focusActions.SET_FOCUS : 
          return { ...state , focus : action.payload };
        case focusActions.ADD_FOCUS : 
          return { 
            ...state,
            focusHistory : [...state.focusHistory , action.payload ] ,
        };
        case focusActions.SET_HISTORY : 
          return {
            ...state,
            focusHistory : [ ...action.payload ]
          };
        case focusActions.UPDATE_HISTORY : 
          return {
            focusHistory : state.focusHistory.map( focus => {
              if( focus.id === action.payload.id ){
                return action.payload;
              }
              return focus;
            }),
            focus : null
          }
        default : 
          return state;
    }
}