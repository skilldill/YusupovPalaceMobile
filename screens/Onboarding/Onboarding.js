import React, { useCallback, useMemo, useState, useRef } from "react";
import {TouchableOpacity, View, Text, Animated} from "react-native";
import {useAsyncStorage} from "@react-native-async-storage/async-storage";
import {ScrollBoards, Board} from "react-native-swipe-boards";

import {onboardingStyle} from "./style";
import {Board as Card} from "./components";
import {STORAGE_KEYS} from "../../shared/constants";


const boards = [
    <Card src={require('./assets/board-first.png')} description="Пройди дворец Юсуповых вместе с приложением" />,
    <Card src={require('./assets/board-second.png')} description="Узнай больше об убранстве дворца и о его владельцах" />,
    <Card src={require('./assets/board-thrid.png')} description="Слушай историю дворца с лекцией нашего гида" />,
]

export const Onboarding = ({onStart}) => {

    return (
        <ScrollBoards>
            <Board>
                <Card src={require('./assets/board-first.png')} description="Пройди дворец Юсуповых вместе с приложением" />
            </Board>

            <Board>
                <Card src={require('./assets/board-second.png')} description="Узнай больше об убранстве дворца и о его владельцах" />
            </Board>

            <Board>
                <Card src={require('./assets/board-thrid.png')} description="Слушай историю дворца с лекцией нашего гида" />
            </Board>
        </ScrollBoards>
    )
}

// export const Onboarding = ({onStart}) => {
//     const fadeAnim = useRef(new Animated.Value(1)).current;

//     const [activeBoard, setActiveBoard] = useState(0);

//     const watchedOnboardingStorage = useAsyncStorage(STORAGE_KEYS.watchedOnboarding);

//     const setWatchedOnboarding = async () => {
//         try {   
//             await watchedOnboardingStorage.setItem(JSON.stringify(true));
//         } catch(error) {
//             console.log(error);
//         }
//     }

//     const next = useCallback(() => {
//         if (activeBoard === boards.length - 1) {
//             setWatchedOnboarding();
//             onStart();
//             return;
//         }

//         Animated.timing(fadeAnim, {toValue: 0, duration: 300, useNativeDriver: true}).start();

//         const timeout = setTimeout(() => {
//             setActiveBoard(activeBoard + 1);
//             Animated.timing(fadeAnim, {toValue: 1, duration: 300, useNativeDriver: true}).start();
//             clearTimeout(timeout);
//         }, 300);

//     }, [activeBoard, fadeAnim])

//     const buttonText = useMemo(() => activeBoard === (boards.length - 1) ? 'Начать' : 'Далее', [activeBoard, boards])

//     return (
//         <View style={onboardingStyle.container}>
//             <Animated.View style={{opacity: fadeAnim}}>
//                 {boards[activeBoard]}
//             </Animated.View>

//             <View style={onboardingStyle.circles}>
//                 {boards.map((board, i) => (
//                     <View 
//                         key={i} 
//                         style={activeBoard === i ? [onboardingStyle.circle, onboardingStyle.circleActive] : onboardingStyle.circle} 
//                     />
//                 ))}
//             </View>

//             <TouchableOpacity style={onboardingStyle.buttonNext} onPress={next}>
//                 <Text style={onboardingStyle.buttonNextText}>{buttonText}</Text>
//             </TouchableOpacity>
//         </View>
//     )
// }