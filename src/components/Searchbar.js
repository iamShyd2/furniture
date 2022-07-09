import React from "react";
import { View, TextInput, StyleSheet } from "react-native";
import { RFPercentage } from "react-native-responsive-fontsize";
import Icon from "react-native-vector-icons/dist/Ionicons";
import { spacing } from "../theme";

const Searchbar = () => {
    return(
        <View
            style={styles.inputWrapper}
        >
            <Icon
                name="search"
                size={RFPercentage(4)}
            />
            <TextInput
                style={styles.input}
                placeholder="Search"
            />
        </View>
    )
}

const styles = new StyleSheet.create({
    inputWrapper: {
        elevation: 6,
        backgroundColor: "#fff",
        marginTop: spacing[0],
        paddingHorizontal: RFPercentage(2),
        flexDirection: "row",
        alignItems: "center",
        borderRadius: 10,
        marginHorizontal: spacing[0],
    },
    input: {
        marginLeft: RFPercentage(2),
    }
})

export default Searchbar;