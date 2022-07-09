import React from "react";
import { View } from "react-native";
import H1 from "../components/H1";
import Item from "./Item";

const images = [
    require("../3.jpg"),
    require("../4.jpg")
];

const BestSelling = () => {
    return(
        <>
            <H1>Best Selling</H1>
            <View
                showsVerticalScrollIndicator={false}
            >
                {
                    [...new Array(2)].map((item, i) => <Item horizontal key={i} image={images[i]} />)
                }
            </View>
        </>
    )
}

export default BestSelling;
