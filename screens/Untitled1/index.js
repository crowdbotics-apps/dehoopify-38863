import { ImageBackground } from "react-native";
import React from "react";
import { StyleSheet, ScrollView, SafeAreaView } from "react-native";

const Untitled1 = () => {
  return <SafeAreaView style={styles.safeArea}>
        <ScrollView contentContainerStyle={{
      backgroundColor: '#f0f0f1',
      padding: 10,
      position: 'relative',
      flex: 1
    }}><ImageBackground style={styles.yKVXMsvj} source={require("./dehoopify-wht-400x400.png")} resizeMode="cover"></ImageBackground></ScrollView>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  safeArea: {
    height: '100%'
  },
  YFOWyfYj: {
    height: 373,
    width: 200,
    backgroundColor: "#E4E4E4",
    borderRadius: 0,
    color: "#777777"
  },
  yKVXMsvj: {
    width: 292,
    height: 204
  }
});
export default Untitled1;