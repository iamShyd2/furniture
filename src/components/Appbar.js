import React from "react";
import { StyleSheet, View } from "react-native";
import { RFPercentage } from "react-native-responsive-fontsize";
import { spacing } from "../theme";
import Icon from "./Icon";

const Appbar = () => {
    return(
        <View style={styles.appbar}>
            <Icon
                name="menu"
            />
            <Icon name="cart-outline"
            />
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