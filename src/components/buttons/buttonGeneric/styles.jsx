import { StyleSheet } from "react-native";
import { colors } from "@/src/styles/colors";

export const styles = StyleSheet.create({
    container:{
        backgroundColor: colors.vidro,
        flexDirection: 'row',
        padding: 16,
        borderRadius: 10,
        borderColor: colors.bege,
        borderWidth: 0.5,
        alignItems: 'center',
        width: '48%',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 4,
        elevation: 20,
    },
    text:{
        color: colors.bege,
        fontWeight: 'bold',
        fontSize: 18,
        
    },
})