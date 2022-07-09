import React from "react";
import { ScrollView } from "react-native";
import H1 from "../components/H1";
import Item from "./Item";

const images = [
    require("../1.jpg"),
    require("../2.jpg")
];

const Explore = () => {
    return(
        <>
            <H1>Explore</H1>
            <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
            >
                {
                    [...new Array(2)].map((item, i) => <Item key={i} image={images[i]} />)
                }
            </ScrollView>
        </>
    )
}



export default Explore;
