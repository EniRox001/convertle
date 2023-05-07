import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import buttonStyle from "../../styles/button_style";
import textStyle from "../../styles/text_style";

interface UnitButtonProps {
    unit: string;
    special: boolean;
    onPress: () => void;
}

const UnitButton = ({unit, special, onPress} : UnitButtonProps) => {
    {if (special === true) {
        return (
            <View>
                <TouchableOpacity style={buttonStyle.specialUnitButton} onPress={onPress}>
                    <Text style={textStyle.unitText}>{unit}</Text>
                </TouchableOpacity>
            </View>
        );
    } else {
        return (
            <View>
                <TouchableOpacity style={buttonStyle.unitButton} onPress={onPress}>
                    <Text style={textStyle.unitText}>{unit}</Text>
                </TouchableOpacity>
            </View>
        );
    }
}
}

export default UnitButton;