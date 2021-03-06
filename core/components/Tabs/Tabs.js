import React, { useEffect, useState } from "react";
import {TouchableOpacity, View} from "react-native";

import {tabsStyle} from "./style";

export const Tabs = ({children}) => {
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <>
            <View style={tabsStyle.container}>
                {children[activeIndex].props.children}
            </View>
            <View style={tabsStyle.tabbar}>
                {children.map((child, i) => 
                    <TouchableOpacity key={i} onPress={() => setActiveIndex(i)}>
                        {i === activeIndex ? child.props.iconActive : child.props.icon}
                    </TouchableOpacity>
                )}
            </View>
        </>
    )
}