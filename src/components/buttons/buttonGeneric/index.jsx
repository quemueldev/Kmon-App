import { TouchableOpacity, Text, View } from "react-native";
import { styles } from "./styles";
import { Ionicons } from "@expo/vector-icons";

export function ButtonGeneric({ onPress, label, icon}) {
    return (
        <TouchableOpacity style={styles.container} onPress={onPress}>
            <Ionicons name={icon.name} size={24} color={icon.color} />
            <Text style={styles.text}>{label}</Text>
        </TouchableOpacity>
    )
}