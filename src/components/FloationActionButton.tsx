import React from 'react';
import { StyleSheet, Text, TouchableNativeFeedback, TouchableOpacity, View, Platform } from 'react-native';
import { Props } from '../interfaces/Fab';



const FloationActionButton = ({ title, onPress, position = 'br' }: Props) => {

    const ios = () => {
        return (
            <TouchableOpacity
            activeOpacity={ 0.8 }
                style={[
                    styles.fabLocation,
                    (position === 'bl')
                        ? styles.left
                        : styles.right,
                ]}
                onPress={ onPress }
            >
                    <View style={ styles.fab }>
                        <Text style={ styles.fabText }> { title } </Text>
                    </View>
            </TouchableOpacity>
        );
    };

    const android = () => {
        return (
            <View
                style={[
                    styles.fabLocation,
                    (position === 'bl')
                        ? styles.left
                        : styles.right,
                ]}
            >
                <TouchableNativeFeedback
                    onPress={ onPress }
                    background={ TouchableNativeFeedback.Ripple('#606c38', false, 30) }
                >
                    <View style={ styles.fab }>
                        <Text style={ styles.fabText }> { title } </Text>
                    </View>
                </TouchableNativeFeedback>
            </View>
        );
    };


    return  (Platform.OS === 'ios') ? ios() : android();
};

const styles = StyleSheet.create({
    fabLocation: {
        position: 'absolute',
        bottom: 25,
    },
    left: {
        left: 25,
    },
    right: {
        right: 25,
    },
    fab: {
        backgroundColor: '#283618',
        borderRadius: 100,
        height: 60,
        justifyContent: 'center',
        width: 60,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.30,
        shadowRadius: 4.65,

        elevation: 8,
    },
    fabText: {
        alignSelf: 'center',
        color: 'white',
        fontSize: 25,
        fontWeight: 'bold',
    },
});
export default FloationActionButton;

