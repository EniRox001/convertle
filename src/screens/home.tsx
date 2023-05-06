import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import InputButton from "../components/buttons/inputButton";
import KeyButton from "../components/buttons/keyButton";
import UnitButton from "../components/buttons/unitButton";
import { home_style } from "../styles/home_style";

const HomeScreen = () => {
    const [fromText, setFromText] = React.useState("")
    const [toText, setToText] = React.useState("")

    const handleFromTextChange = (text: string) => {
        setFromText(fromText + text)
    }

    const handleFromTextRemove = () => {
        setFromText(fromText.slice(0, -1))
    }

    const handleFromTextClear = () => {
        setFromText("")
    }

    const handleToTextChange = (text: string) => {
        setToText(toText + text)
    }

    return (
        <View style={home_style.container}>
            <View style={home_style.input_container}>
                <UnitButton unit="$" special={false}/>
                <InputButton unit="$" text="from" value={fromText} special={false}/>
            </View>
            <View style={home_style.input_container}>
                <UnitButton unit="€" special={true}/>
                <InputButton unit="€" text="to" value={toText} special={true}/>
            </View>
            <View style={home_style.entryField}>
                <KeyButton text="1" onPress={() => {handleFromTextChange('1')}}/>
                <KeyButton text="2" onPress={() => {handleFromTextChange('2')}}/>
                <KeyButton text="3" onPress={() => {handleFromTextChange('3')}}/>
                <KeyButton text="C" onPress={handleFromTextClear}/>
                <KeyButton text="4" onPress={() => {handleFromTextChange('4')}}/>
                <KeyButton text="5" onPress={() => {handleFromTextChange('5')}}/>
                <KeyButton text="6" onPress={() => {handleFromTextChange('6')}}/>
                <KeyButton text="⌫" onPress={handleFromTextRemove}/>
                <KeyButton text="7" onPress={() => {handleFromTextChange('7')}}/>
                <KeyButton text="8" onPress={() => {handleFromTextChange('8')}}/>
                <KeyButton text="9" onPress={() => {handleFromTextChange('9')}}/>
                <KeyButton text="." onPress={() => {handleFromTextChange('.')}}/>
                <KeyButton text="0" onPress={() => {handleFromTextChange('0')}}/>
                <KeyButton text="00" onPress={() => {handleFromTextChange('00')}}/>
                <KeyButton text="," onPress={() => {handleFromTextChange(',')}}/>
                <KeyButton text="=" onPress={() => {}}/>
            </View>
        </View>
    );
}

export default HomeScreen;