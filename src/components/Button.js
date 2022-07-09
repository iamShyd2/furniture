import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import { RFPercentage } from "react-native-responsive-fontsize";
import Text from "./Text";

const Button = ({children}) => {
    return(
        <TouchableOpacity style={styles.button}>
            <Text style={styles.text}>{children}</Text>
        </TouchableOpacity>
    )
}

const styles = new StyleSheet.create({
    button: {
        backgroundColor: "#000",
        paddingVertical: RFPercentage(2),
        alignItems: "center",
        borderRadius: 100,
        marginVertical: RFPercentage(3),
    },
    text: {
        color: "#fff",
    }
})

export default Button;