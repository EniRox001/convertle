import React, {useState} from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { ExtendedButton, InputButton, UnitButton, KeyButton } from '../components/buttons/HomeButtons';
import { home_style } from "../styles/HomeStyle";
import ConvertFunction from "../utils/convert_function";

const HomeScreen = ({navigation, route}) => {
    const [fromText, setFromText] = useState("")
    const [toText, setToText] = useState("")
    const [fromUnit, setFromUnit] = useState("$")
    const [toUnit, setToUnit] = useState('$')

    const handleFromTextChange = (text: string) => {
        setFromText(fromText + text)
    }

    const handleFromTextRemove = () => {
        setFromText(fromText.slice(0, -1))
    }

    const handleFromTextClear = () => {
        setFromText("")
        setToText("")
    }

    const handleUnitChange = (fromUnit: string, toUnit: string) => {
        
        //======================= CURRENCY CONVERTER =======================//

        switch (fromUnit) {
            case "$":
                switch (toUnit) {
                    case "€":
                        setToText((Number(fromText) * 0.85).toString())
                        break;
                    case "£":
                        setToText((Number(fromText) * 0.73).toString())
                        break;
                    case "¥":
                        setToText((Number(fromText) * 109.88).toString())
                        break;
                    case "₹":
                        setToText((Number(fromText) * 74.14).toString())
                        break;
                    case "B":
                        setToText((Number(fromText) * 0.000032).toString())
                        break;
                    case "Ξ":
                        setToText((Number(fromText) * 0.0000027).toString())
                        break;
                    default:
                        break;
                }
                break;
            case "€":
                switch (toUnit) {
                    case "$":
                        setToText((Number(fromText) * 1.18).toString())
                        break;
                    case "£":
                        setToText((Number(fromText) * 0.86).toString())
                        break;
                    case "¥":
                        setToText((Number(fromText) * 128.97).toString())
                        break;
                    case "₹":
                        setToText((Number(fromText) * 87.24).toString())
                        break;
                    case "฿":
                        setToText((Number(fromText) * 0.000037).toString())
                        break;
                    case "Ξ":
                        setToText((Number(fromText) * 0.0000031).toString())
                        break;
                    default:
                        break;
                }
                break;
            case "£":
                switch (toUnit) {
                    case "$":
                        setToText((Number(fromText) * 1.37).toString())
                        break;
                    case "€":
                        setToText((Number(fromText) * 1.16).toString())
                        break;
                    case "¥":
                        setToText((Number(fromText) * 149.61).toString())
                        break;
                    case "₹":
                        setToText((Number(fromText) * 101.28).toString())
                        break;
                    case "฿":
                        setToText((Number(fromText) * 0.000043).toString())
                        break;
                    case "Ξ":
                        setToText((Number(fromText) * 0.0000036).toString())
                    default:
                        break;
                }
                break;
            case "¥":
                switch (toUnit) {
                    case "$":
                        setToText((Number(fromText) * 0.0091).toString())
                        break;
                    case "€":
                        setToText((Number(fromText) * 0.0078).toString())
                        break;
                    case "£":
                        setToText((Number(fromText) * 0.0067).toString())
                        break;
                    case "₹":
                        setToText((Number(fromText) * 0.68).toString())
                        break;
                    case "฿":
                        setToText((Number(fromText) * 0.000003).toString())
                        break;
                    case "Ξ":
                        setToText((Number(fromText) * 0.00000025).toString())
                        break;
                    default:
                        break;
                }
                break;
            case "₹":
                switch (toUnit) {
                    case "$":
                        setToText((Number(fromText) * 0.013).toString())
                        break;
                    case "€":
                        setToText((Number(fromText) * 0.011).toString())
                        break;
                    case "£":
                        setToText((Number(fromText) * 0.0099).toString())
                        break;
                    case "¥":
                        setToText((Number(fromText) * 1.47).toString())
                        break;
                    case "฿":
                        setToText((Number(fromText) * 0.000004).toString())
                        break;
                    case "Ξ":
                        setToText((Number(fromText) * 0.00000034).toString())
                        break;
                    default:
                        break;
                }
                break;
            case "฿":
                switch (toUnit) {
                    case "$":
                        setToText((Number(fromText) * 29.97).toString())
                        break;
                    case "€":
                        setToText((Number(fromText) * 25.45).toString())
                        break;
                    case "£":
                        setToText((Number(fromText) * 23.24).toString())
                        break;
                    case "¥":
                        setToText((Number(fromText) * 333.33).toString())
                        break;
                    case "₹":
                        setToText((Number(fromText) * 256.41).toString())
                        break;
                    case "Ξ":
                        setToText((Number(fromText) * 0.000084).toString())
                        break;
                    default:
                        break;
                }
                break;
            case "Ξ":
                switch (toUnit) {
                    case "$":
                        setToText((Number(fromText) * 372.95).toString())
                        break;
                    case "€":
                        setToText((Number(fromText) * 316.67).toString())
                        break;
                    case "£":
                        setToText((Number(fromText) * 289.86).toString())
                        break;
                    case "¥":
                        setToText((Number(fromText) * 4166.67).toString())
                        break;
                    case "₹":
                        setToText((Number(fromText) * 3205.13).toString())
                        break;
                    case "฿":
                        setToText((Number(fromText) * 11.88).toString())
                        break;
                    default:
                        break;
                }
                break;
            default:
                break;
            }
            
        //======================= CURRENCY CONVERTER =======================//
        
        //======================= LENGTH CONVERTER =======================//

        switch (fromUnit) {
            case "mm":
                switch (toUnit) {
                    case "cm":
                        setToText((Number(fromText) * 0.1).toString())
                        break;
                    case "m":
                        setToText((Number(fromText) * 0.001).toString())
                        break;
                    case "km":
                        setToText((Number(fromText) * 0.000001).toString())
                        break;
                    case "in":
                        setToText((Number(fromText) * 0.03937).toString())
                        break;
                    case "ft":
                        setToText((Number(fromText) * 0.003281).toString())
                        break;
                    default:
                        break;
                }
                break;
            case "cm":
                switch (toUnit) {
                    case "mm":
                        setToText((Number(fromText) * 10).toString())
                        break;
                    case "m":
                        setToText((Number(fromText) * 0.01).toString())
                        break;
                    case "km":
                        setToText((Number(fromText) * 0.00001).toString())
                        break;
                    case "in":
                        setToText((Number(fromText) * 0.3937).toString())
                        break;
                    case "ft":
                        setToText((Number(fromText) * 0.03281).toString())
                        break;
                    default:
                        break;
                }
                break;
            case "m":
                switch (toUnit) {
                    case "mm":
                        setToText((Number(fromText) * 1000).toString())
                        break;
                    case "cm":
                        setToText((Number(fromText) * 100).toString())
                        break;
                    case "km":
                        setToText((Number(fromText) * 0.001).toString())
                        break;
                    case "in":
                        setToText((Number(fromText) * 39.37).toString())
                        break;
                    case "ft":
                        setToText((Number(fromText) * 3.281).toString())
                        break;
                    default:
                        break;
                }
                break;
            case "km":
                switch (toUnit) {
                    case "mm":
                        setToText((Number(fromText) * 1000000).toString())
                        break;
                    case "cm":
                        setToText((Number(fromText) * 100000).toString())
                        break;
                    case "m":
                        setToText((Number(fromText) * 1000).toString())
                        break;
                    case "in":
                        setToText((Number(fromText) * 39370.1).toString())
                        break;
                    case "ft":
                        setToText((Number(fromText) * 3280.84).toString())
                        break;
                    default:
                        break;
                }
                break;
            case "in":
                switch (toUnit) {
                    case "mm":
                        setToText((Number(fromText) * 25.4).toString())
                        break;
                    case "cm":
                        setToText((Number(fromText) * 2.54).toString())
                        break;
                    case "m":
                        setToText((Number(fromText) * 0.0254).toString())
                        break;
                    case "km":
                        setToText((Number(fromText) * 0.0000254).toString())
                        break;
                    case "ft":
                        setToText((Number(fromText) * 0.08333).toString())
                        break;
                    default:
                        break;
                }
                break;
            case "ft":
                switch (toUnit) {
                    case "mm":
                        setToText((Number(fromText) * 304.8).toString())
                        break;
                    case "cm":
                        setToText((Number(fromText) * 30.48).toString())
                        break;
                    case "m":
                        setToText((Number(fromText) * 0.3048).toString())
                        break;
                    case "km":
                        setToText((Number(fromText) * 0.0003048).toString())
                        break;
                    case "in":
                        setToText((Number(fromText) * 12).toString())
                        break;
                    default:
                        break;
                }
                break;
            default:
                break;
            }

            //======================= TEMPERATURE CONVERTER =======================//

            switch (fromUnit) {
                case "°C":
                    switch (toUnit) {
                        case "°F":
                            setToText((Number(fromText) * 1.8 + 32).toString())
                            break;
                        case "K":
                            setToText((Number(fromText) + 273.15).toString())
                            break;
                        default:
                            break;
                    }
                    break;
                case "°F":
                    switch (toUnit) {
                        case "°C":
                            setToText(((Number(fromText) - 32) / 1.8).toString())
                            break;
                        case "K":
                            setToText(((Number(fromText) - 32) / 1.8 + 273.15).toString())
                            break;
                        default:
                            break;
                    }
                    break;
                case "K":
                    switch (toUnit) {
                        case "°C":
                            setToText((Number(fromText) - 273.15).toString())
                            break;
                        case "°F":
                            setToText(((Number(fromText) - 273.15) * 1.8 + 32).toString())
                            break;
                        default:
                            break;
                    }
                    break;
                default:
                    break;
                }
    }

    return (
        <View style={home_style.container}>
            <View style={home_style.input_container}>
                <UnitButton unit={fromUnit} special={false} onPress={() => {navigation.navigate('UnitPicker')}}/>
                <InputButton unit="$" text="from" value={fromText} special={false}/>
            </View>
            <View style={home_style.input_container}>
                <UnitButton unit={toUnit} special={true} onPress={() => {navigation.navigate('UnitPicker', {destination: 'toUnit'})}}/>
                <InputButton unit="€" text="to" value={toText} special={true}/>
            </View>
            <View style={home_style.entryField}>
                <KeyButton extended={false} text="1" onPress={() => {handleFromTextChange('1')}}/>
                <KeyButton extended={false} text="2" onPress={() => {handleFromTextChange('2')}}/>
                <KeyButton extended={false} text="3" onPress={() => {handleFromTextChange('3')}}/>
                <KeyButton extended={false} text="⌫" onPress={handleFromTextRemove}/>
                <KeyButton extended={false} text="4" onPress={() => {handleFromTextChange('4')}}/>
                <KeyButton extended={false} text="5" onPress={() => {handleFromTextChange('5')}}/>
                <KeyButton extended={false} text="6" onPress={() => {handleFromTextChange('6')}}/>
                <KeyButton extended={false} text="." onPress={() => {handleFromTextChange('.')}}/>
                <KeyButton extended={false} text="7" onPress={() => {handleFromTextChange('7')}}/>
                <KeyButton extended={false} text="8" onPress={() => {handleFromTextChange('8')}}/>
                <KeyButton extended={false} text="9" onPress={() => {handleFromTextChange('9')}}/>
                <KeyButton extended={false} text="," onPress={() => {handleFromTextChange(',')}}/>
                <KeyButton extended={false} text="0" onPress={() => {handleFromTextChange('0')}}/>
                <KeyButton extended={false} text="00" onPress={() => {handleFromTextChange('00')}}/>
                <ExtendedButton text="C" onPress={handleFromTextClear}/>
                {/* <KeyButton extended={true} text="C" onPress={() => {}}/> */}

            </View>
        </View>
    );
}

export default HomeScreen;