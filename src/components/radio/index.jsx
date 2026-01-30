import { View, Text, TouchableOpacity, StyleSheet, Dimensions} from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import { colors } from '@/src/styles/colors'
import Animated, {useSharedValue, interpolate, useAnimatedStyle, Extrapolation, withTiming, Easing} from 'react-native-reanimated'
import { useEffect, useState } from 'react';
import { styles } from '@/src/components/radio/styles';

const {width, height} = Dimensions.get('window')

const AnimatedTouchable = Animated.createAnimatedComponent(TouchableOpacity)

function RadioItem({active, label, icon, onPress}){
    

    const animatedStatus = useSharedValue(1)

     useEffect(() => {
    animatedStatus.value = withTiming(active ? 1 : 0, {
      duration: 200,
    })
  }, [active])

    const animationStyle = useAnimatedStyle(() => ({
        width: interpolate(
            animatedStatus.value,
            [0,1],
            [width * 0.23, width * 0.27],)
    }))

    return(
        <AnimatedTouchable
        style={[styles.button, active && styles.buttonActive, animationStyle]}
        onPress={onPress}
        >
            <Ionicons name={icon.name} size={28} color={colors.bege} />
            <Text style={styles.text}>{label}</Text>
        </AnimatedTouchable>
    )
}



export function RadioButton({value, onChange}){
   
    return (
        <View style={styles.container}>
            <Text style={styles.optionsTitle}>
                Escolha a categoria
            </Text>
            <View style={styles.options}>
            <RadioItem 
            label="Piadas" 
            icon={{name: 'happy'}} 
            active={value === 1}
            onPress={() => onChange(1)} />

            <RadioItem 
            label="Cantadas" 
            icon={{name: 'heart'}} 
            active={value === 2}
            onPress={() => onChange(2)}/>

            <RadioItem 
            label="Xingamentos Inteligentes" 
            icon={{name: 'skull'}} 
            active={value === 3}
            onPress={() => onChange(3)}/>      
        </View>
        </View>
    )
}
