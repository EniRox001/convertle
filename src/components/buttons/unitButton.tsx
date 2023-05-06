import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import buttonStyle from "../../styles/button_style";
import textStyle from "../../styles/text_style";

interface UnitButtonProps {
    unit: string;
    special: boolean;
}

const UnitButton = ({unit, special} : UnitButtonProps) => {
    {if (special === true) {
        return (
            <View>
                <TouchableOpacity style={buttonStyle.specialUnitButton}>
                    <Text style={textStyle.unitText}>{unit}</Text>
                </TouchableOpacity>
            </View>
        );
    } else {
        return (
            <View>
                <TouchableOpacity style={buttonStyle.unitButton}>
                    <Text style={textStyle.unitText}>{unit}</Text>
                </TouchableOpacity>
            </View>
        );
    }
}
}

export default UnitButton;