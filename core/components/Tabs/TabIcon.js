import React from "react";
import {View, Text, Image} from "react-native";
import {SvgXml} from "react-native-svg";

import {tabsStyle} from "./style";

export const TabIcon = {
    Default: ({icon, title}) => (
        <View style={tabsStyle.tabIcon}>
            {/* <Image source={iconSrc}/> */}
            {/* <SvgUri width={24} height={24} uri={iconSrc} /> */}
            <SvgXml xml={icon}/>
            <Text style={tabsStyle.tabIconText}>
                {title}
            </Text>
        </View>
    ),

    Active: ({icon, title}) => (
        <View style={tabsStyle.tabIcon}>
            {/* <Image source={iconSrc}/> */}
            <SvgXml xml={icon}/>
            <Text style={[tabsStyle.tabIconText, tabsStyle.tabIconTextActive]}>
                {title}
            </Text>
        </View>
    )
}