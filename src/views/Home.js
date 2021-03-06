import React from "react";
import {
    StyleSheet,
    ScrollView,
} from "react-native";
import Appbar from "../components/Appbar";
import Searchbar from "../components/Searchbar";
import Explore from "../components/Explore";
import BestSelling from "../components/BestSelling";

const Home = () => {

    return(
        <ScrollView
            style={styles.page}
        >  
            <Appbar
            />
            <Searchbar />
            <Explore />
            <BestSelling />
        </ScrollView>
    )
};

const styles = new StyleSheet.create({
    page: {
        flex: 1,
    }
})

export default Home;