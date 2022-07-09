import React from "react";
import { Image, StyleSheet, View, TouchableOpacity } from "react-native";
import { RFPercentage } from "react-native-responsive-fontsize";
import { spacing } from "../theme";
import H3 from "./H3";
import Text from "./Text";
import MutedText from "./MutedText";
import H1 from "../components/H1";

const images = [
    require("../3.jpg"),
    require("../4.jpg")
];

const Item = ({i}) => {
    return(
        <TouchableOpacity style={styles.item}>
            <Image 
                style={styles.image}
                source={images[i]}
            />
            <View style={styles.details}>
                <H3>Item Name</H3>
                <MutedText>Description</MutedText>
                <Text style={styles.price}>GHC 280.00</Text>
            </View>
        </TouchableOpacity>
    )
}

const BestSelling = () => {
    return(
        <>
            <H1>Best Selling</H1>
            <View
                showsVerticalScrollIndicator={false}
            >
                {
                    [...new Array(2)].map((item, i) => <Item key={i} i={i} />)
                }
            </View>
        </>
    )
}

const styles = new StyleSheet.create({
    image: {
        width: RFPercentage(14),
        height: RFPercentage(14),
        borderRadius: 10,
    },
    item: {
        marginHorizontal: spacing[0],
        padding: RFPercentage(2),
        borderRadius: 20,
        elevation: 6,
        backgroundColor: "#fff",
        marginBottom: RFPercentage(5),
        flexDirection: "row",
    },
    details: {
        marginLeft: RFPercentage(5),
    },
    price: {
        fontSize: RFPercentage(2.5)
    }
})

export default BestSelling;
