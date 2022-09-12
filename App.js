import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import { StatusBar } from "expo-status-bar";

// Screens
import Home from "./screens/Home";
import Foods from "./screens/Foods";
import Saved from "./screens/Saved";
import Meal from "./screens/Meal";
import Search from "./screens/Search";

const Tab = createBottomTabNavigator();

function HomeTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "Home") {
            iconName = focused ? "md-home" : "md-home-outline";
          } else if (route.name === "Foods") {
            iconName = focused ? "md-fast-food" : "md-fast-food-outline";
          } else if (route.name === "Saved") {
            iconName = focused ? "md-save" : "md-save-outline";
          } else if (route.name === "Search") {
            iconName = focused ? "md-search" : "md-search-outline";
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarStyle: {
          height: 60,
          backgroundColor: "#222",
          borderTopWidth: 0,
        },
        tabBarActiveTintColor: "#ffffff",
        tabBarInactiveTintColor: "#999999",
        tabBarActiveBackgroundColor: "#333",
        headerShown: false,
        tabBarHideOnKeyboard: true,
      })}
    >
      <Tab.Screen
        options={{
          title: "Categories",
        }}
        name="Home"
        component={Home}
      ></Tab.Screen>
      <Tab.Screen
        options={{
          title: "Random Dish",
        }}
        name="Foods"
        component={Foods}
      ></Tab.Screen>
      <Tab.Screen name="Saved" component={Saved}></Tab.Screen>
      <Tab.Screen name="Search" component={Search}></Tab.Screen>
    </Tab.Navigator>
  );
}

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor="#222" style="auto" />
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          gestureDirection: "horizontal",
          cardStyle: { backgroundColor: "#333" },
        }}
      >
        <Stack.Screen name="HomeTabs" component={HomeTabs}></Stack.Screen>
        <Stack.Screen
          options={{
            presentation: "modal",
          }}
          name="Meal"
          component={Meal}
        ></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
