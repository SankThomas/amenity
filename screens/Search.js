import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  TextInput,
  Image,
} from "react-native";
import React, { useState, useEffect } from "react";
import globals from "../globals";

export default function Search() {
  const [dishes, setDishes] = useState([]);
  const [query, setQuery] = useState("Arrabiata");

  const searchDishes = async () => {
    try {
      const res = await fetch(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`
      );
      const data = await res.json();
      setDishes(data.meals);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    searchDishes();
  }, [query]);

  const handleSubmit = () => {
    console.log("Submitted");
  };

  return (
    <SafeAreaView>
      <ScrollView>
        <View style={globals.container}>
          <Text style={globals.heading}>Search for a dish</Text>
          <Text style={globals.text}>
            Search for a dish by its full name or partial name.
          </Text>

          <TextInput
            placeholder="e.g. Chicken"
            placeholderTextColor="#ffffff60"
            style={styles.input}
            value={query}
            onChangeText={setQuery}
            onSubmitEditing={handleSubmit}
          />

          <View>
            {dishes.map((dish) => (
              <View key={dish.idMeal} style={{ marginBottom: 32 }}>
                <Image
                  style={[globals.image, styles.image]}
                  source={{ uri: dish.strMealThumb }}
                />
                <View style={globals.small}>
                  <Text style={globals.smallText}>{dish.strCategory}</Text>
                </View>
                <Text style={globals.heading}>{dish.strMeal}</Text>
                <Text style={globals.text}>{dish.strInstructions}</Text>
              </View>
            ))}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  input: {
    backgroundColor: "#222",
    color: "#ffffff75",
    borderWidth: 2,
    borderStyle: "solid",
    borderColor: "#222",
    borderRadius: 50,
    marginVertical: 20,
    paddingVertical: 10,
    paddingHorizontal: 16,
  },
});
