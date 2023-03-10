import React from 'react';
import {
    View,
    Text,
    TextInput,
    StyleSheet
} from 'react-native';

export default class SearchInput extends React.Component {
    // handling components internal state
    constructor(props){
        super(props) // to bind the this keyword to this component
        this.state = {
            text: ''
        }
    }

    handleChangeText = (text) => {
        this.setState({text:text})
    }

    handleSubmitEditing = () => {
        const { onSubmit } = this.props;
        const { text } = this.state;

        if(!text) return;

        onSubmit(text);
        this.setState({text: ''});
    }

    render(){
        const { placeholder } = this.props
        const { text } = this.state

        return(
            <View style={styles.container}>
                <TextInput
                    autoCorrect={false}
                    value={text}
                    placeholder={placeholder}
                    placeholderTextColor="white"
                    underlineColorAndroid="transparent"
                    style={styles.textInput}
                    clearButtonMode="always"
                    onChangeText={this.handleChangeText}
                    onSubmitEditing={this.handleSubmitEditing}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
      height: 40,
      marginTop: 20,
      backgroundColor: '#666',
      marginHorizontal: 40,
      paddingHorizontal: 10,
      borderRadius: 5,
    },
    textInput: {
      flex: 1,
      color: 'white',
    },
  });