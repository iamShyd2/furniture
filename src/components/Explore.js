import React from "react";
import { FlatList, Image, StyleSheet, View, ScrollView } from "react-native";
import { RFPercentage } from "react-native-responsive-fontsize";
import { spacing } from "../theme";
import H3 from "./H3";
import Text from "./Text";
import MutedText from "./MutedText";
import H1 from "../components/H1";

const images = [
    require("../1.jpg"),
    require("../2.jpg")
];

const Item = ({i}) => {
    return(
        <View style={styles.item}>
            <Image 
                style={styles.image}
                source={images[i]}
            />
            <H3>Item Name</H3>
            <MutedText>Description</MutedText>
            <Text style={styles.price}>GHC 280.00</Text>
        </View>
    )
}

const Explore = () => {
    return(
        <>
            <H1>Explore</H1>
            <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
            >
                {
                    [...new Array(2)].map((item, i) => <Item key={i} i={i} />)
                }
            </ScrollView>
        </>
    )
}

const styles = new StyleSheet.create({
    image: {
        width: RFPercentage(30),
        height: RFPercentage(30),
        borderRadius: 10,
        marginBottom: RFPercentage(2),
    },
    item: {
        marginLeft: spacing[0],
        padding: RFPercentage(2),
        borderRadius: 20,
        elevation: 6,
        backgroundColor: "#fff",
        marginBottom: RFPercentage(2),
    },
    price: {
        marginTop: spacing[0], 
        fontSize: RFPercentage(3)
    }
})

export default Explore;
