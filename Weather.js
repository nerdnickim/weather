import React from "react";
import { View, Text, StyleSheet} from "react-native"
import PropTypes from "prop-types";
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function Weather({temp}){
    return (
        <View style={styles.container}>
            <MaterialCommunityIcons name="weather-pouring" />
            <Text>{temp}</Text>
        </View>
        )
}

Weather.PropTypes = {
    temp: PropTypes.number.isRequired,
    conditions: PropTypes.oneOf([ "Thunderstorm", "Drizzle", "Snow", "Atmosphere", "Clear", "Clouds" ]).isRequired
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    }
})