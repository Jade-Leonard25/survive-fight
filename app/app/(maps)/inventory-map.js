import React from 'react';
import { View, StyleSheet, Dimensions, Text, TouchableOpacity,Button,TextInput } from "react-native";

// Get screen width to make it responsive or set a fixed size
const TILE_SIZE = Dimensions.get('window').width / 12; 

const InventoryMap = () => {
    // 0 = Floor (Empty space)
    // 1 = Wall
    // 2 = Magic Door (Inventory/Stats Trigger)
    const DUNGEON_DATA = [
        1, 1, 1, 1, 1, 2, 2, 1, 1, 1, 1, 1,
        1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
        1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
        1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
        1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
        1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
        1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
    ];

    const handleDoorPress = () => {
        alert("Opening Inventory & Upgrades...");
    };

    return (
        <View style={styles.container}>
            <View style={styles.mapGrid}>
                {DUNGEON_DATA.map((tile, index) => {
                    // Logic for Wall
                    if (tile === 1) return <View key={index} style={styles.wall} />;
                    
                    // Logic for Door (The Trigger)
                    if (tile === 2) return (
                        <TouchableOpacity 
                            key={index} 
                            style={styles.door} 
                            onPress={handleDoorPress}
                        />
                    );

                    // Logic for Floor
                    return <View key={index} style={styles.floor} />;
                })}
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#1a1a1a', // Dark dungeon background
        justifyContent: 'center',
        alignItems: 'center',
    },
    mapGrid: {
        width: TILE_SIZE * 12, // 12 columns
        flexDirection: 'row',
        flexWrap: 'wrap', // This makes it a grid!
    },
    tile: {
        width: TILE_SIZE,
        height: TILE_SIZE,
    },
    wall: {
        width: TILE_SIZE,
        height: TILE_SIZE,
        backgroundColor: '#444',
        borderWidth: 1,
        borderColor: '#222',
    },
    floor: {
        width: TILE_SIZE,
        height: TILE_SIZE,
        backgroundColor: '#2a2a2a',
    },
    door: {
        width: TILE_SIZE,
        height: TILE_SIZE,
        backgroundColor: '#ffd700', // Golden door
        shadowColor: '#fff',
        shadowOpacity: 0.5,
        elevation: 5,
    }
});

export default InventoryMap;