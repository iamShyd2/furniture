import React from "react";
import { StyleSheet } from "react-native";
import { RFPercentage } from "react-native-responsive-fontsize";
import { spacing } from "../theme";
import Text from "./Text";

const H1 = ({children, style}) => {
    return(
        <Text
            style={[styles.text, style]}
        >
            {children}
        </Text>
    )
}

const styles = new StyleSheet.create({
    text: {
        fontSize: RFPercentage(4),
        margin: spacing[0],
        fontFamily: "Poppins-Bold",
    }
})

export default H1;