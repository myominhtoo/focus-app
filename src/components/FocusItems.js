import { View ,Text , FlatList , TouchableOpacity } from "react-native"
import style from "../styles"
import { focusColors } from "../datas"

export default function FocusItems({
    items = [],
    onPress
}){

    const getColor = ( status ) => focusColors[status]; 

    return (
        <View style={style.itemsContainer}>
            {
                items.length > 0 
                ? (
                    <View style={style.itemsHeader}>
                        <Text style={style.itemsTitle}>
                            Focus you did
                        </Text>
                    </View>
                  )
                : (
                    <View>
                        <Text style={style.btnTxt}>
                            There is nothing to focus!
                        </Text>
                    </View>
                  )
            }

            <FlatList 
                data={items}
                keyExtractor={ item => item.id }
                renderItem={ ({item}) => (
                    <TouchableOpacity onPress={() => onPress(item)} style={style.itemWrapper}>
                        <Text style={{ ...style.focusItem , color : getColor(item.status)  }}>
                            {item.focus}
                        </Text>
                    </TouchableOpacity>
                )}
            />
        </View>
    )
}