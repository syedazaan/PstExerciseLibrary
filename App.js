import React from 'react';
import {StyleSheet, Text, View, Image, ImageBackground } from 'react-native';
import { default as AppContainer } from "./js/App";

export default class App extends React.Component {
      render() {
            return (
                   <AppContainer />
            );
      }
}

// const styles = StyleSheet.create({
//       container: {
//               flex:1,
//               backgroundColor: "#fff",
//               alignItems: "center",
//               justifyContent: "center",
//       },
// });