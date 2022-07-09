import React from "react";
import { StyleSheet, View } from "react-native";
import { RFPercentage } from "react-native-responsive-fontsize";
import Icon from "react-native-vector-icons/dist/Ionicons";
import { spacing } from "../theme";

const Appbar = () => {
    return(
        <View style={styles.appbar}>
            <Icon name="menu" size={RFPercentage(5)} />
            <Icon name="cart-outline" size={RFPercentage(5)} />
        </View>
    )
}

const styles = new StyleSheet.create({
    appbar: {
        flexDirection: "row",
        justifyContent: "space-between",
        padding: spacing[0],
        paddingBottom: 0,
    }
})

export default Appbar;