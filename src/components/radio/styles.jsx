import { StyleSheet, Dimensions } from 'react-native'
import { colors } from '@/src/styles/colors'

const { height, width } = Dimensions.get('window')
export const styles = StyleSheet.create({
    container:{
        
        height: height * 0.18,
        minWidth: '100%',
        borderColor: colors.bege,
        borderWidth: 0.5,
        borderRadius: 18,
        backgroundColor: colors.vidro,
        paddingHorizontal: 20,
        paddingVertical: 10,
    },
    options:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        height: '60%',
    },
    optionsTitle:{
        color: colors.bege,
        fontWeight: 'bold',
        fontSize: 22,
        textAlign: 'center',
        marginBottom: height * 0.02,
    },
    button:{
        borderWidth:0.5,
        borderColor: colors.bege,
        height: '95%',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 12,
    },
    buttonActive:{
        backgroundColor: colors.tomato,
        borderColor: colors.bege,
        borderWidth:1,
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 12,
        elevation: 8,
    },
    text:{
        color: colors.bege,
        textAlign: 'center',
        
    }
})