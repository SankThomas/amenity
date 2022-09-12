import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  Image,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import React, { useState, useEffect } from "react";
import globals from "../globals";

export default function Foods() {
  const [dishes, setDishes] = useState([]);

  const getRandomDish = async () => {
    try {
      const res = await fetch(
        "https://www.themealdb.com/api/json/v1/1/random.php"
      );
      const data = await res.json();
      setDishes(data.meals);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getRandomDish();
  }, []);

  return (
    <SafeAreaView>
      <ScrollView>
        <View style={globals.container}>
          <Text style={globals.heading}>Browse Random Dishes</Text>
          <Text style={globals.text}>
            Are you looking for motivation on what to prepare for your next
            meal? This page shows you a new dish every time you visit it!
          </Text>

          <View>
            {dishes.map((dish) => (
              <View key={dish.idMeal}>
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

          <TouchableOpacity
            onPress={getRandomDish}
            activeOpacity={0.7}
            style={globals.buttonContainer}
          >
            <Text style={globals.button}>Next</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  image: {
    marginVertical: 32,
  },
});
