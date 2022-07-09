import React from "react";
import { ScrollView, Image, View, TouchableOpacity, StyleSheet } from "react-native";
import { RFPercentage } from "react-native-responsive-fontsize";
import H1 from "../components/H1";
import Text from "../components/Text";
import MutedText from "../components/MutedText";
import MaterialIcons from "react-native-vector-icons/dist/MaterialIcons";
import Productbar from "../components/Productbar";

const Color = ({color, i}) => {
    return(
        <TouchableOpacity
            style={[
                styles.colorWrapper, 
                {
                    borderColor: color,
                    marginLeft: i != 0 ? 10 : 0
                }
            ]}
        >
            <View style={[
                styles.color,
                {
                    backgroundColor: color,
                }
            ]}>

            </View>
        </TouchableOpacity>
    )
}


const Product = ({ route }) => {

    const {
        image,
    } = route.params;

    return(
        <ScrollView
            style={styles.root}
        >
            <Productbar />
            <View>
                <Image 
                    source={image}
                    style={styles.image}
                />
                <TouchableOpacity
                    style={styles.cart}
                >
                    <MaterialIcons
                        name="add-shopping-cart"
                        color="#fff"
                        size={RFPercentage(5)}
                    />
                </TouchableOpacity>
            </View>
            <View style={styles.details}>
                <H1 style={styles.price}>GHC 115.00</H1>
                <View style={styles.br}>
                    <Text>Colors</Text>
                    <View
                        style={styles.colorsWrapper}
                    >
                        {
                            ["red", "grey"].map((color, i) => <Color color={color} key={i} i={i} />)
                        }
                    </View>
                </View>
                <View style={styles.br}>
                    <Text>Description</Text>
                    <MutedText>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam porro vitae repellat ratione commodi deleniti mollitia expedita cupiditate sed facere eligendi asperiores fuga.</MutedText>
                </View>
            </View>
        </ScrollView>
    )
}

const styles = new StyleSheet.create({
    root: {
        flex: 1,
    },
    image: {
        width: "100%",
        height: RFPercentage(50),
        borderBottomLeftRadius: 40,
        borderBottomRightRadius: 40,
    },
    cart: {
        position: "absolute",
        zIndex: 4,
        backgroundColor: "#000",
        bottom: -25,
        right: RFPercentage(10),
        width: RFPercentage(10),
        height: RFPercentage(10),
        borderRadius: 100,
        justifyContent: "center",
        alignItems: "center",
    },
    details: {
        paddingVertical: RFPercentage(6),
        paddingHorizontal: RFPercentage(5),
        justifyContent: "space-between",
    },
    price: {
        margin: 0, 
        lineHeight: RFPercentage(4.5),
    },
    br: {
        marginTop: RFPercentage(5)
    },
    colorsWrapper: {
        flexDirection: "row",
    },
    colorWrapper: {
        borderRadius: 100,
        padding: 4,
        borderWidth: 1,
    },
    color: {
        width: RFPercentage(5),
        height: RFPercentage(5),
        borderRadius: 100,
    }
})

export default Product;