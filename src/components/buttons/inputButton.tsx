import React from "react";
import { View, Text, TouchableOpacity, TextInput } from "react-native";
import buttonStyle from "../../styles/button_style";
import textStyle from "../../styles/text_style";
import AppColors from "../../theme/app_colors";

interface InputButtonProps {
    unit: string;
    text: string;
    value: string;
    special: boolean;
}

const InputButton = ({unit, text, value, special} : InputButtonProps) => {
    {if (special === true) {
        return (
            <View>
                <View style={buttonStyle.specialInputButton}>
                    <Text style={textStyle.inputHint}>{text}</Text>
                    <View style={buttonStyle.inputEntry}>
                        <Text style={textStyle.unitText}>{unit}</Text>
                        <TextInput
                            style={textStyle.unitText}
                            placeholder="0"
                            placeholderTextColor={AppColors.snow}
                            keyboardType="numeric"
                            showSoftInputOnFocus={false}
                            value={value}
                        />
                    </View>
                </View>
            </View>
        )
        } else {
            return (
                <View>
                    <TouchableOpacity style={buttonStyle.inputButton}>
                        <Text style={textStyle.inputHint}>{text}</Text>
                        <View style={buttonStyle.inputEntry}>
                            <Text style={textStyle.unitText}>{unit}</Text>
                            <TextInput
                                style={textStyle.unitText}
                                placeholder="0"
                                placeholderTextColor={AppColors.snow}
                                keyboardType="numeric"
                                showSoftInputOnFocus={false}
                                value={value}
                            />
                        </View>
                    </TouchableOpacity>
                </View>
            );
        }}
}
    
export default InputButton;