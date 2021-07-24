import React from "react";
import {FlatList, ScrollView} from "react-native";
import { RoomCard } from "../RoomCard/RoomCard";

import {roomsListStyle} from "./style";

export const RoomsList = ({rooms, navigation}) => {
    // return (
    //     <FlatList 
    //         style={roomsListStyle.container}
    //         data={rooms}
    //         renderItem={(room) => <RoomCard room={room} />}
    //         keyExtractor={(room) => room.id}
    //     />
    // )

    return (
        <ScrollView style={roomsListStyle.container}>
            {rooms.map((room, i) => (
                <RoomCard 
                    key={room.id} 
                    room={room} 
                    onPress={() => navigation.navigate('Room', {roomId: room.id})}
                />
            ))}
        </ScrollView>
    )
}