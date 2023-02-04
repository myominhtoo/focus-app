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
        color : colors.SNOW
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
    }
});

export default style;
