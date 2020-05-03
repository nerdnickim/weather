import React from "react";
import { View, Text, StyleSheet, StatusBar} from "react-native"
import propTypes from "prop-types";
import { LinearGradient } from 'expo-linear-gradient';
import { MaterialCommunityIcons } from '@expo/vector-icons';


const weatherOptions = {
    Clouds: {
        iconName : "weather-cloudy",
        gradient: ["#E6DADA", "#274046"],
        title: "This many Clouds",
        subTitle: " and this block to mind"
    },
    Thunderstorm: {
        iconName : "weather-lightning",
        gradient: ["#ffe259", "#ffa751"],
        title: "This fuck thunder",
        subTitle: " and this block to mind"
    },
    Drizzle: {
        iconName : "weather-hail",
        gradient: ["#0052D4","a", "#6FB1FC"],
        title: "This is drizzle",
        subTitle: " and this drizzle"
    },
    Snow: {
        iconName : "weather-snowy",
        gradient: ["#757F9A", "#D7DDE8"],
        title: "Snowing to sky",
        subTitle: "is White snow"
    },
    Atmosphere: {
        iconName : "weather-partlycloudy",
        gradient: ["#E6DADA", "#274046"],
        title: "This is Atmosphere",
        subTitle: "that sphere"
    },
    Clear: {
        iconName : "weather-sunny",
        gradient: ["#ED4264", "#FFEDBC"],
        title: "Clear~",
        subTitle: " is to sunshine"
    }
}

export default function Weather({temp, condition}){
    return (
            <LinearGradient
          colors={weatherOptions[condition].gradient}
          style={styles.container}
        >
            <StatusBar barStyle="light-content" />
            <View style={styles.halfContainer}>
                <MaterialCommunityIcons size={86} name={weatherOptions[condition].iconName} color="white" />
                <Text style={styles.temp}>{temp}</Text>
            </View>
            <View style={{...styles.halfContainer, ...styles.textContent}}>
                <Text style={styles.title}>{weatherOptions[condition].title}</Text>
                <Text style={styles.subTitle}>{weatherOptions[condition].subTitle}</Text>
            </View>
            </LinearGradient>
        )
}

Weather.propTypes = {
    temp: propTypes.number.isRequired,
    conditions: propTypes.oneOf([ "Thunderstorm", "Drizzle", "Snow", "Atmosphere", "Clear", "Clouds" ]).isRequired
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    halfContainer : {
        flex:1,
        justifyContent: "center",
        alignItems: "center"
    },
    temp: {
        fontSize: 32,
        color: "white"
    },
    title: {
        color: "white",
        fontSize: 34,
        fontWeight: "300",
        marginBottom: 10
    },
    subTitle: {
        color: "white",
        fontWeight: "600",
        fontSize: 20
    },
    textContent:{
        paddingHorizontal: 20,
        alignItems: "flex-start"
    }
})