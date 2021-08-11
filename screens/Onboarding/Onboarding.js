import React, {useMemo, useState} from "react";
import {TouchableOpacity, Text, View, Touchable} from "react-native";
import {ScrollBoards, Board} from "react-native-swipe-boards";

import {Board as Card} from "./components";
import {onboardingStyle} from "./style";

const cards = [
    <Card src={require('./assets/board-first.png')} description="Пройди дворец Юсуповых вместе с приложением" />,
    <Card src={require('./assets/board-second.png')} description="Узнай больше об убранстве дворца и о его владельцах" />,
    <Card src={require('./assets/board-thrid.png')} description="Слушай историю дворца с лекцией нашего гида" />
]

export const Onboarding = ({onStart}) => {
    const [activeBoard, setActiveBoard] = useState(0);

    const buttonText = useMemo(() => activeBoard === cards.length - 1 ? 'Начать' : 'Далее', [activeBoard]);

    const handleNext = () => {
        if (activeBoard < cards.length - 1) {
            return setActiveBoard(activeBoard + 1);
        }

        onStart();
    }

    return (
        <View style={onboardingStyle.container}>
            <View style={{flex: 1}}>
                <ScrollBoards onScroll={setActiveBoard} active={activeBoard}>
                    {cards.map((card, i) => <Board key={i}>{card}</Board>)}
                </ScrollBoards>
            </View>

            <View style={onboardingStyle.controls}>
                <View style={onboardingStyle.controlsBlock}>
                    <View style={onboardingStyle.circles}>
                        {cards.map((card, i) => <View key={i} style={i === activeBoard ? [onboardingStyle.circle, onboardingStyle.circleActive] : onboardingStyle.circle} />)}
                    </View>

                    <TouchableOpacity 
                        style={onboardingStyle.buttonNext} 
                        onPress={handleNext}
                    >
                        <Text style={onboardingStyle.buttonNextText}>{buttonText}</Text>
                    </TouchableOpacity>
                </View>

                <View style={onboardingStyle.controlsBlock}>
                    <TouchableOpacity onPress={onStart}>
                        <Text style={onboardingStyle.buttonSkipText}>Пропустить</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}