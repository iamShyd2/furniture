import React from "react";
import { Image, View, TouchableOpacity } from "react-native";
import { RFPercentage } from "react-native-responsive-fontsize";
import { spacing } from "../theme";
import H3 from "./H3";
import Text from "./Text";
import MutedText from "./MutedText";
import { useNavigation } from "@react-navigation/native";

const Item = ({image, horizontal}) => {

    const navigation = useNavigation();

    const onClickProduct = () => navigation.navigate("Product", { image });

    const itemStyle = {
        margin: horizontal ? spacing[0] : 0,
        marginLeft: spacing[0],
        padding: RFPercentage(2),
        borderRadius: 20,
        elevation: 6,
        backgroundColor: "#fff",
        marginBottom: RFPercentage(2),
        flexDirection: horizontal ? "row" : "column",
    }

    const imageStyle = {
        width: horizontal ? RFPercentage(14) : RFPercentage(30),
        height: horizontal ? RFPercentage(14) : RFPercentage(30),
        borderRadius: 10,
        marginBottom: horizontal ? 0 : RFPercentage(2),
    }

    const detailsStyle = {
        marginLeft: horizontal ? RFPercentage(5) : 0,
    }

    const priceStyle = {
        marginTop: horizontal ? 0 : spacing[0], 
        fontSize: horizontal ? RFPercentage(2.5) : RFPercentage(3)
    }

    return(
        <TouchableOpacity style={itemStyle} onPress={onClickProduct}>
            <Image 
                style={imageStyle}
                source={image}
            />
            <View style={detailsStyle}>
                <H3>Item Name</H3>
                <MutedText>Description</MutedText>
                <Text style={priceStyle}>GHC 280.00</Text>
            </View>
        </TouchableOpacity>
    )
}

export default Item;