import React from "react";
import { View, TouchableOpacity, StyleSheet } from "react-native";
import { spacing } from "../theme";
import Text from "../components/Text";
import { useNavigation } from "@react-navigation/native";
import Icon from "./Icon";

const Productbar = () => {

    const navigation = useNavigation();

    const goBack = () => navigation.goBack();

    return(
        <View
            style={styles.bar}
        >
            <TouchableOpacity onPress={goBack}>
                <Icon
                    name="arrow-back"
                />
            </TouchableOpacity>
            <Text>Minimal chair</Text>
            <TouchableOpacity>
                <Icon
                    name="cart-outline"
                />
            </TouchableOpacity>
        </View>
    )
}


const styles = new StyleSheet.create({
    bar: {
        position: "absolute",
        zIndex: 2,
        padding: spacing[0],
        flexDirection: "row",
        justifyContent: "space-between",
        width: "100%",
        alignItems: "center",
    },
})

export default Productbar;