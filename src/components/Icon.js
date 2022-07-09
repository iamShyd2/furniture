import React from "react";
import { RFPercentage } from "react-native-responsive-fontsize";
import Ionicons from "react-native-vector-icons/dist/Ionicons";


const Icon = ({Component = Ionicons, name, size = RFPercentage(5)}) => {
    return(
        <Component name={name} size={size} />
    )
}

export default Icon;