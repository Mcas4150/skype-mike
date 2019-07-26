import React, { Component } from "react";
import { StyleSheet, Text, View, Button } from "react-native";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      interview: "",
      buttonDown: false
    };
    this.onButtonPress = this.onButtonPress.bind(this);
  }

  onButtonPress() {
    this.setState({
      buttonDown: this.state.buttonDown? false : true
    });
  }

  render() {
    const { buttonDown } = this.state;
    return (
      <View style={styles.container}>
        <View style={styles.box}>
          <Text style={buttonDown ? styles.red : styles.green}>
            {" "}
            Here is Text
          </Text>
          <Button
            onPress={this.onButtonPress}
            style={styles.button}
            title="Hire Me"
            accessibilityLabel="Learn more about this purple button"
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  box: {
    width: 300,
    height: 200,
    borderWidth: 2,
    borderColor: "steelblue",
    borderRadius: 20,
    justifyContent: "center"
  },
  button: {
    width: 150,
    height: 50,
    backgroundColor: "blue",
    borderWidth: 2,
    borderColor: "grey",
    borderRadius: 20
  },
  green: {
    color: "green"
  },
  red: {
    color: "red"
  }
});
