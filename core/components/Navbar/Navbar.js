import React from "react";
import {View, Text} from "react-native";

import {navbarStyle} from "./style";

export const Navbar = ({title, left, right}) => {
    return (
        <View style={navbarStyle.container}>
            {!!left && <View style={navbarStyle.left}>{left}</View>}
            {!!title && <Text style={navbarStyle.title}>{title}</Text>}
            {!!right && <View style={navbarStyle.right}>{right}</View>}
        </View>
    )
}