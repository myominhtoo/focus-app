import { StyleSheet } from 'react-native';
import { colors, sizes } from '../datas';

const style = StyleSheet.create({
    appContainer : {
        flex : 1,
        paddingTop: 100,
        backgroundColor : colors.PALE_DARK,
        paddingHorizontal : 20,
    },
    title : {
        fontWeight : 'bold',
        fontSize : sizes.lg,
        color : colors.SNOW,
        marginBottom : 10
    },
    input : {
        paddingHorizontal : 10,
        paddingVertical : 8,
        borderBottomColor : 'blue',
        borderBottomWidth : 2,
        color : colors.PALE_DARK,
        fontSize : sizes.sm,
        backgroundColor : colors.SNOW,
        borderRadius : 5,
        width : '85%'
    },
    focusContainer : {
        flex : 1,
    },
    container : {
        flex : 1,
    },
    focusTitle : {
        color : colors.PALE_SNOW,
        fontSize : sizes.xl
    },
    inputGroup : {
        justifyContent : 'space-between',
        alignItems: 'center',
        flexDirection : 'row',
        marginTop : 30,
    },
    btn : {
        width : sizes.xxl,
        height : sizes.xxl,
        borderRadius : sizes.md /2,
        borderWidth : 2,
        borderColor : 'blue',
        justifyContent : 'center',
        alignItems : 'center'
    },
    btnText : {
        fontSize : sizes.lg,
        color : colors.SNOW,
    },
    errorContainer : {
       padding : 0
    },
    error : {
        fontSize : sizes.sm,
        fontWeight : 'bold',
        color : colors.ERROR
    },
    modalContainer : {
        flex : 1,
        alignItems : 'flex-start',
        flexDirection : 'row',
        justifyContent : 'center',
        paddingTop : 50
    },
    modalContent : {
        width :'90%',
        height : '50%',
        borderRadius : 5,
        backgroundColor : colors.SNOW,
        padding : 20
    },
    modalHeader : {
        display : 'flex',
        flexDirection : 'row',
        justifyContent :'space-between'
    },
    modalBody : {
        marginVertical : 30,
        flex : 1,
    },
    timeInput : {
        borderWidth :1,
        borderColor : 'blue',
        paddingVertical : 8,
        paddingHorizontal : 5,
        color : colors.PALE_DARK,
        width: '85%'
    },
    label : {
        fontWeight : 'bold',
        color : colors.PALE_DARK
    },
    btnContainer : {
        width : '100%',
        marginTop : 15,
        display : 'flex',
        flexDirection : 'row',
        justifyContent :'flex-end',
    },
    countdownContainer : {
        width:'100%',
        justifyContent :'center',
        flexDirection : 'row',
        marginVertical : 50
    },
    countdownBody : {
        width : '80%',
        height : '100%',
        padding : 20,
        backgroundColor : colors.PALE_SNOW,
        display :'flex',
        flexDirection : 'row',
        justifyContent : 'center',
        alignItems : 'center',
        gap : 10,
    },
    timerHeader : {
        width : '100%'
    },
    time : {
        fontSize : sizes.xxl,
        color : colors.PALE_DARK,
        marginHorizontal : 5
    },
    colon : {
        color : 'blue',
        fontSize : sizes.xl
    },
    timerBody : {
        flex : 1,
    },
    timerContainer : {
        flex : 1,
    },
    timerControlContainer : {
        width : '100%',
        marginTop : 20,
        padding : 20,
        display :'flex',
        justifyContent :'center',
        alignItems : 'center',
    },
    controlBtn : {
        width : 80,
        height : 80,
        borderRadius : 80,
        borderWidth : 1.4,
        borderColor : colors.PALE_SNOW,
        display : 'flex',
        justifyContent : 'center',
        alignItems : 'center'
    },
    btnTxt : {
        fontSize : sizes.sm,
        color : colors.PALE_SNOW
    },
    focusInfoContainer : {
        display : 'flex',
        flexDirection :'column',
        alignItems : 'center',
        justifyContent :'center',
    },
    progressContainer :{
        width : '100%',
        marginVertical : 20,
        marginHorizontal : 5,
        alignSelf : 'center',
        backgroundColor : colors.PALE_SNOW,
    },
    progress : {
        width : '100%',
        backgroundColor :'blue',
        padding : 1,
    },
    itemsContainer : {
        flex : 1,
        marginTop : 30,
        display : 'flex',
        justifyContent : 'center',
        flexDirection : 'column',
        alignItems : 'center'
    },
    focusItem : {
        color : colors.PALE_SNOW,
        fontSize : sizes.sm
    },
    itemWrapper : {
        borderWidth : 1,
        borderRadius : 3,
        borderColor : colors.PALE_SNOW,
        paddingVertical : 5,
        paddingHorizontal:15,
        minWidth : '98%',
        marginBottom : 15
    },
    cancelBtn : {
        marginTop : 30,
    },
    cancelTxt : {
        color : 'red',
        fontSize : sizes.sm
    },
    itemsHeader : {
        marginBottom : 15,
        paddingHorizontal : 5,
        width : '100%'
    },
    itemsTitle : {
        textAlign : 'left',
        fontSize : sizes.md,
        color : colors.PALE_SNOW
    }
});

export default style;
