import React from "react";
import { StyleSheet } from "react-native";
import { RFPercentage } from "react-native-responsive-fontsize";
import Text from "./Text";

const H3 = ({children}) => {
    return(
        <Text
            style={styles.text}
        >
            {children}
        </Text>
    )
}

const styles = new StyleSheet.create({
    text: {
        fontSize: RFPercentage(3),
        fontFamily: "Poppins-SemiBold",
    }
})

export default H3;