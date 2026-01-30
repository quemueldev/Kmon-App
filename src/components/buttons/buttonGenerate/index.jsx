import { TouchableOpacity, Text,StyleSheet,Dimensions } from 'react-native'
import { colors } from '@/src/styles/colors'
import { Ionicons } from '@expo/vector-icons'

const { height, width } = Dimensions.get('window')
export function ButtonGenerate({onPress}){
    return(
        <TouchableOpacity 
        style={styles.container}
        onPress={onPress}
        >
            <Ionicons name="color-wand-sharp" size={30} color={colors.bege} />
            <Text style={styles.text}>
                Gerar Frase
            </Text>
        </TouchableOpacity>
    )
}

export const styles = StyleSheet.create({
    container:{
        backgroundColor: colors.tomato,
        width: '100%',
        height: height * 0.1,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 22,
        flexDirection: 'row',
        gap: 6,
        elevation: 20,
        
    },
    text:{
        color: colors.bege,
        fontWeight: 'bold',
        fontSize: 24,
    }
})