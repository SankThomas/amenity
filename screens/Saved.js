import { View, Text, SafeAreaView, ScrollView } from "react-native";
import React from "react";
import globals from "../globals";

export default function Saved() {
  return (
    <SafeAreaView>
      <ScrollView>
        <View style={globals.container}>
          <Text style={globals.heading}>Favorite Saved Dishes</Text>
          <Text style={globals.text}>
            This is just a cool non-functional screen...for now.
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
