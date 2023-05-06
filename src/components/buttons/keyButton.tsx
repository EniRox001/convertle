import React from "react";
import { View, Text, TouchableOpacity, TextInput } from "react-native";
import buttonStyle from "../../styles/button_style";
import textStyle from "../../styles/text_style";

interface KeyButtonProps {
    text: string;
    onPress: () => void;
}

const KeyButton = ({text, onPress} : KeyButtonProps) => {
   {if (text === "C" || text === "⌫" || text === "=" || text === "." || text === ",") {
    return (
        <View>
            <TouchableOpacity style={buttonStyle.specialKeyButton} onPress={onPress}>
                <Text style={textStyle.unitText}>{text}</Text>
            </TouchableOpacity>
        </View>
    );
    } else {
        return (
            <View>
                <TouchableOpacity style={buttonStyle.keyButton} onPress={onPress}>
                    <Text style={textStyle.unitText}>{text}</Text>
                </TouchableOpacity>
            </View>
        );
    }
   }
}

export default KeyButton;