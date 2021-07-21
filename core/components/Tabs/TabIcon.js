import React from "react";
import {View, Text, Image} from "react-native";

import {tabsStyle} from "./style";

export const TabIcon = {
    Default: ({iconSrc, title}) => (
        <View style={tabsStyle.tabIcon}>
            <Image source={iconSrc}/>
            <Text style={tabsStyle.tabIconText}>
                {title}
            </Text>
        </View>
    ),

    Active: ({iconSrc, title}) => (
        <View style={tabsStyle.tabIcon}>
            <Image source={iconSrc}/>
            <Text style={[tabsStyle.tabIconText, tabsStyle.tabIconTextActive]}>
                {title}
            </Text>
        </View>
    )
}