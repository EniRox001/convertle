import React, { useState } from "react";
import { View, Text, TouchableOpacity, TextInput, ScrollView } from "react-native";
import textStyle from "../styles/TextStyle";
import unit_picker_style from "../styles/UnitPickerStyle";

interface UnitPickerButtonProps {
    unit: string;
    text: string;
    onPress: () => void;
}

interface UnitPickerProps {
    navigation: any;
    route: any;
}

const allCategoriesJSON = {
    "currency": [
        {
            "unit": "$",
            "text": "US Dollar"
        },
        {
            "unit": "€",
            "text": "Euro"
        },
        {
            "unit": "£",
            "text": "British Pound"
        },
        {
            "unit": "₹",
            "text": "Ruppees"
        },
        {
            "unit": "¥",
            "text": "Yen"
        },
        {
            "unit": "B",
            "text": "Bitcoin"
        },
        {
            "unit": "Ξ",
            "text": "Ethereum"
        },
    ],
    "length": [
        {
            "unit": "m",
            "text": "Meter"
        },
        {
            "unit": "km",
            "text": "Kilometer"
        },
        {
            "unit": "cm",
            "text": "Centimeter"
        },
        {
            "unit": "mm",
            "text": "Millimeter"
        },
        {
            "unit": "in",
            "text": "Inch"
        },
        {
            "unit": "ft",
            "text": "Foot"
        },
    ],
    "temperature": [
        {
            "unit": "°C",
            "text": "Celsius"
        },
        {
            "unit": "°F",
            "text": "Fahrenheit"
        },
        {
            "unit": "K",
            "text": "Kelvin"
        },
    ],
}

const currencyJSON = [
    {
        "unit": "$",
        "text": "US Dollar"
    },
    {
        "unit": "€",
        "text": "Euro"
    },
    {
        "unit": "£",
        "text": "British Pound"
    },
    {
        "unit": "₹",
        "text": "Ruppees"
    },
    {
        "unit": "¥",
        "text": "Yen"
    },
    {
        "unit": "B",
        "text": "Bitcoin"
    },
    {
        "unit": "Ξ",
        "text": "Ethereum"
    },
]

const lengthJSON = [
    {
        "unit": "m",
        "text": "Meter"
    },
    {
        "unit": "km",
        "text": "Kilometer"
    },
    {
        "unit": "cm",
        "text": "Centimeter"
    },
    {
        "unit": "mm",
        "text": "Millimeter"
    },
    {
        "unit": "in",
        "text": "Inch"
    },
    {
        "unit": "ft",
        "text": "Foot"
    },
]

const temperatureJSON = [
    {
        "unit": "°C",
        "text": "Celsius"
    },
    {
        "unit": "°F",
        "text": "Fahrenheit"
    },
    {
        "unit": "K",
        "text": "Kelvin"
    },
]



var category = '';
var fromUnit = '';
var toUnit = '';

const handleCategoryChange = (unit) => {
    switch (unit) {
        case "$":
        case "€":
        case "£":
        case "¥":
        case "₹":
        case "฿":
        case "Ξ":
            category = "currency"
            break;
        case "mm":
        case "cm":
        case "m":
        case "km":
        case "in":
        case "ft":
            category = "length"
            break;
        case "°C":
        case "°F":
        case "K":
            category = "temperature"
            break;
        default:
            break;
    }       
}


const UnitPickerButton = ({ unit, text, onPress }: UnitPickerButtonProps) => {
    return (
        <TouchableOpacity style={unit_picker_style.buttonRow} onPress={onPress}>
            <Text style={textStyle.unitBorder}>{unit}</Text>
            <Text style={textStyle.unitText}>{text}</Text>
        </TouchableOpacity>
    )
}

const UnitPicker = ({navigation, route}: UnitPickerProps) => {
  
    if (route.params?.category != undefined) {
        return ( 
        <ScrollView style={unit_picker_style.container}>
            <View>
              <Text style={textStyle.unitText}>Currency</Text>
              {allCategoriesJSON.currency.map((item, index) => {
                return (
                  <UnitPickerButton
                    key={item.unit}
                    unit={item.unit}
                    text={item.text}
                    onPress={() => {
                        navigation.navigate('Home', {fromUnit: item.unit});
                        handleCategoryChange(item.unit);
                    }}
                  />
                );
              })}
            </View>
            <View>
              <Text style={textStyle.unitText}>Length</Text>
              {allCategoriesJSON.length.map((item, index) => {
                return (
                  <UnitPickerButton
                    key={item.unit}
                    unit={item.unit}
                    text={item.text}
                    onPress={() => {
                        fromUnit = item.unit;
                        navigation.navigate('Home', {fromUnit: fromUnit, toUnit: toUnit});
                        handleCategoryChange(item.unit);
                    }}
                  />
                );
              })}
            </View>
            <View>
              <Text style={textStyle.unitText}>Temperature</Text>
              {allCategoriesJSON.temperature.map((item, index) => {
                return (
                  <UnitPickerButton
                    key={item.unit}
                    unit={item.unit}
                    text={item.text}
                    onPress={() => {
                        navigation.navigate('Home', {fromUnit: item.unit});
                        handleCategoryChange(item.unit);
                    }}
                  />
                );
              })}
            </View>
        </ScrollView>
        )
    } else if (route.params?.fromUnit == undefined) {
};
  

export default UnitPicker