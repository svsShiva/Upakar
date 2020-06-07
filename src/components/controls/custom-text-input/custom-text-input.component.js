import React from 'react';
import {
    View,
    Text,
    StyleSheet, TextInput
} from 'react-native';
import styles from './custom-text-input.styles'

export default class CustomTextInput extends React.Component {
    constructor(props) {
        super(props);
    }

    
    onChangeValue = (value) => {
        this.props.onChangeText(this.props.index, value)
    }
    render() {
        let name = this.props.item.name;
        let placeholder = this.props.item.placeholder;

        return (
            <View style={styles.container}>
                <Text style={styles.label}>{name}</Text>
                <TextInput
                    placeholder={placeholder}
                    onChangeText={this.onChangeValue}
                    value={this.props.item.value}
                    style={styles.textInput}
                    numberOfLines={this.props.multiLine ? 4 : 1}
                />
            </View>
        );
    }
}
