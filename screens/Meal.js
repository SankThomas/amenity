import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  SafeAreaView,
  Image,
  TouchableOpacity,
} from "react-native";
import React from "react";
import globals from "../globals";

export default function Meal({ navigation, route }) {
  return (
    <SafeAreaView>
      <ScrollView>
        <View style={globals.container}>
          <Text style={globals.text}>Category</Text>
          <Text style={[globals.heading, styles.heading]}>
            {route.params.strCategory}
          </Text>

          <Image
            style={[globals.image, styles.image]}
            source={{ uri: route.params.strCategoryThumb }}
          />

          <Text style={globals.text}>
            {route.params.strCategoryDescription}
          </Text>

          <TouchableOpacity
            onPress={() => navigation.navigate("Home")}
            activeOpacity={0.7}
            style={globals.buttonContainer}
          >
            <Text style={globals.button}>Back</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  heading: {
    marginBottom: 32,
  },
  image: {
    marginBottom: 50,
  },
});
