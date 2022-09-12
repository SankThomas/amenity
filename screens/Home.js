import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  Image,
  ActivityIndicator,
  TouchableOpacity,
} from "react-native";
import React, { useState, useEffect } from "react";
import globals from "../globals";

export default function Home({ navigation }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchMeals = async () => {
      try {
        const res = await fetch(
          "https://www.themealdb.com/api/json/v1/1/categories.php"
        );
        const data = await res.json();
        setData(data.categories);
      } catch (error) {
        console.error(error);
      }
    };

    fetchMeals();
  }, []);

  return (
    <SafeAreaView>
      <ScrollView>
        <View style={globals.container}>
          <Text style={globals.heading}>
            Find The Best Noodles And Ramens Around
          </Text>
          <Text style={globals.text}>
            Maxime tempore aliquid praesentium maiores dignissimos architecto
            atque veritatis ut vel in?
          </Text>

          {!data ? (
            <ActivityIndicator size="large" />
          ) : (
            <View style={globals.cardsContainer}>
              {data.map((item) => (
                <TouchableOpacity
                  key={item.idCategory}
                  activeOpacity={0.7}
                  onPress={() => navigation.navigate("Meal", item)}
                >
                  <View style={globals.cards}>
                    <Image
                      style={globals.thumbImage}
                      source={{ uri: item.strCategoryThumb }}
                    />
                    <Text style={globals.heading}>{item.strCategory}</Text>
                    <Text style={globals.text}>
                      {item.strCategoryDescription.substring(0, 100)}...
                    </Text>
                  </View>
                </TouchableOpacity>
              ))}
            </View>
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
