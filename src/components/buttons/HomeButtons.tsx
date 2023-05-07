import React from "react";
import { View, Text, TouchableOpacity, TextInput } from "react-native";
import buttonStyle from "../../styles/ButtonStyle";
import textStyle from "../../styles/TextStyle";
import AppColors from "../../theme/app_colors";

interface ExtendedButtonProps {
    text: string;
    onPress: () => void;
}

interface InputButtonProps {
    unit: string;
    text: string;
    value: string;
    special: boolean;
}

interface KeyButtonProps {
    text: string;
    onPress: () => void;
    extended: boolean;
}


interface UnitButtonProps {
    unit: string;
    special: boolean;
    onPress: () => void;
}

const ExtendedButton = ({text, onPress}: ExtendedButtonProps) => {
    return (
        <View>
            <TouchableOpacity style={buttonStyle.extendedButton} onPress={onPress}>
                <Text style={textStyle.unitText}>{text}</Text>
            </TouchableOpacity>
        </View>
    );
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
                            caretHidden={true}
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
        }
    }
}

const KeyButton = ({text, onPress, extended} : KeyButtonProps) => {
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

export {ExtendedButton, InputButton, KeyButton, UnitButton} ;