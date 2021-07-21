import React, { useCallback, useMemo, useState, useRef } from "react";
import {TouchableOpacity, View, Text, Animated} from "react-native";

import {onboardingStyle} from "./style";
import {Board} from "./components";

const boards = [
    <Board src={require('./assets/board-first.png')} description="Пройди дворец Юсуповых вместе с приложением" />,
    <Board src={require('./assets/board-second.png')} description="Узнай больше об убранстве дворца и о его владельцах" />,
    <Board src={require('./assets/board-thrid.png')} description="Слушай историю дворца с лекцией нашего гида" />,
]

export const Onboarding = () => {
    const fadeAnim = useRef(new Animated.Value(1)).current;

    const [activeBoard, setActiveBoard] = useState(0);

    const next = useCallback(() => {
        if (activeBoard === boards.length - 1) {
            return;
        }

        Animated.timing(fadeAnim, {toValue: 0, duration: 300, useNativeDriver: true}).start();

        const timeout = setTimeout(() => {
            setActiveBoard(activeBoard + 1);
            Animated.timing(fadeAnim, {toValue: 1, duration: 300, useNativeDriver: true}).start();
            clearTimeout(timeout);
        }, 300);

    }, [activeBoard, fadeAnim])

    const buttonText = useMemo(() => activeBoard === (boards.length - 1) ? 'Начать' : 'Далее', [activeBoard, boards])

    return (
        <View style={onboardingStyle.container}>
            <Animated.View style={{opacity: fadeAnim}}>
                {boards[activeBoard]}
            </Animated.View>

            <View style={onboardingStyle.circles}>
                {boards.map((board, i) => (
                    <View 
                        key={i} 
                        style={activeBoard === i ? [onboardingStyle.circle, onboardingStyle.circleActive] : onboardingStyle.circle} 
                    />
                ))}
            </View>

            <TouchableOpacity style={onboardingStyle.buttonNext} onPress={next}>
                <Text style={onboardingStyle.buttonNextText}>{buttonText}</Text>
            </TouchableOpacity>
        </View>
    )
}