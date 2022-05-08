import React from 'react'
import {Text, View, TouchableOpacity, Dimensions, ScrollView} from 'react-native'
import styles from './style';

const OPTIONS = ['Sergio', 'Wander', 'Rodrigo', 'Ariel']
const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;


const ModalPicker = (props) =>{

    const onPressItem = (option)=>{
            props.changeModalVisibility(false);
            props.setData(option)
    }

const option = OPTIONS.map((item, index) => {
    return(
        <TouchableOpacity
        style={styles.option}
        key={index}
        onPress={() => onPressItem(item)}
        >
            <Text style={styles.text}>
                {item}
            </Text>
        </TouchableOpacity>
    )
})

    return(
        <TouchableOpacity
        onPress={() => props.changeModalVisibility(false)}
        style={styles.container}
        >
            <View
             style={[styles.modal, {width: WIDTH - 32, height: HEIGHT/2.2}]}
            >
                <ScrollView> 
                    {option}
                </ScrollView>
            </View>
        </TouchableOpacity>
    )
}   

export {ModalPicker}