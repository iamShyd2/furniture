import React from "react";
import { StyleSheet, Text as T } from "react-native";

const Text = ({children, style}) => {
    return(
        <T
            style={[styles.text, style]}
        >
            {children}
        </T>
    )
}

const styles = new StyleSheet.create({
    text: {
        fontFamily: "Poppins-Regular",
        color: "#000",
    }
})

export default Text;