import { StyleSheet,Dimensions } from "react-native";
import { colors } from "@/src/styles/colors";
const { height, width } = Dimensions.get('window')

export const styles = StyleSheet.create({
    container:{
        backgroundColor: colors.choco,
        flex: 1,

    },
    main:{
        marginBottom: height * 0.03,
    },
    contentMain:{
      alignItems: 'center',
      paddingVertical: height * 0.06,
      paddingHorizontal: width * 0.06,
      gap: height * 0.021,  
      
    },
    outPutBox:{
        backgroundColor: colors.vidro,
        minHeight: height * 0.35,
        width: '100%',
        paddingVertical: 20,
        paddingHorizontal: 15,
        borderRadius: 12,
        borderWidth: 0.5,
        borderColor: colors.bege,
    },
    text:{
        color: colors.bege,
        fontSize: 22,
        textAlign: 'center',
        fontWeight: 'bold',
        textAlign: 'start',
    },
    textDefault:{
        color: colors.bege,
        fontSize: 28,
        textAlign: 'center',
        fontWeight: 'bold',
    },
    header:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        width: '100%',
        gap: 12,
    },
    headerTextArea:{
    },
    headerTitle:{
        fontSize: 26,
        fontWeight: 'bold',
        color: colors.bege,
    },
    headerSubTitle:{
        color: colors.bege,
        fontSize:14,
    },
    image:{
        height: 60,
        width: 60,
        borderRadius: 22,
        objectFit: 'cover',
    },
    options:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        gap: 2,
    },
    topBar:{
      position: 'absolute',
      top: 0,
      width: '100%',
      backgroundColor: colors.black,
      height: height * 0.038,
      zIndex: 2
    },
    footer:{
        position: 'absolute',
        bottom: 0,
        width: '100%',
        backgroundColor: colors.black,
        height: height * 0.048,
        zIndex: 2
    }
})