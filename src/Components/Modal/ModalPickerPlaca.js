import React from 'react'
import {Text, View, TouchableOpacity, Dimensions, ScrollView} from 'react-native'
import styles from './style';


const OPTIONS_PLACA = ['QXA-5945', 'RGB-2A74', 'FM-8C70', 'QUV-4221']
const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;


const ModalPickerPlaca = (props) =>{

    const onPressItemPlaca = (optionPlaca)=>{
            props.changeModalVisibilityPlaca(false);
            props.setDataPlaca(optionPlaca)
    }

const optionPlaca = OPTIONS_PLACA.map((itemPlaca, indexPlaca) => {
    return(
        <TouchableOpacity
        style={styles.option}
        key={indexPlaca}
        onPress={() => onPressItemPlaca(itemPlaca)}
        >
            <Text style={styles.text}>
                {itemPlaca}
            </Text>
        </TouchableOpacity>
    )
})

    return(
        <TouchableOpacity
        onPress={() => props.changeModalVisibilityPlaca(false)}
        style={styles.container}
        >
            <View
             style={[styles.modal, {width: WIDTH - 32, height: HEIGHT/2.2}]}
            >
                <ScrollView> 
                    {optionPlaca}
                </ScrollView>
            </View>
        </TouchableOpacity>
    )
}   

export {ModalPickerPlaca}