import React from "react";
import { StyleSheet } from "react-native";
import Text from "./Text";

const MutedText = ({children}) => {
    return(
        <Text style={styles.text}>{children}</Text>
    )
}

const styles = new StyleSheet.create({
    text: {
        color: "#bbb"
    }
})

export default MutedText;