import React from "react"; 
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Login from "./screens/Login";
import Register from "./screens/Register";
import Forget from "./screens/Forget";
import { View, Text, TouchableOpacity, StyleSheet, StatusBar } from "react-native";

const Stack = createStackNavigator();

// Function to determine text color based on background
const getTextColor = (bgColor) => {
  // Dark backgrounds → White text, Light backgrounds → Dark text
  return ["#C62828", "#6200ea", "#1E88E5"].includes(bgColor) ? "#fff" : "#000";
};

// Dynamic Header Component
const CustomHeader = ({ navigation, title, bgColor }) => {
  const textColor = getTextColor(bgColor);
  
  return (
    <View style={[styles.headerContainer, { backgroundColor: bgColor }]}>
      <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
        <Text style={[styles.backText, { color: textColor }]}>⬅</Text>
      </TouchableOpacity>
      <Text style={[styles.headerTitle, { color: textColor }]}>{title}</Text>
    </View>
  );
};

const App = () => {
  return (
    <>
      <StatusBar hidden={true} />
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen
            name="Register"
            component={Register}
            options={({ navigation }) => ({
              headerShown: true,
              header: () => <CustomHeader navigation={navigation} title="Register" bgColor="#1E88E5" />,
            })}
          />
          <Stack.Screen
            name="Forget"
            component={Forget}
            options={({ navigation }) => ({
              headerShown: true,
              header: () => <CustomHeader navigation={navigation} title="Reset" bgColor="#C62828" />,
            })}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 15,
    paddingHorizontal: 15,
  },
  backButton: {
    marginRight: 10,
  },
  backText: {
    fontSize: 18,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: "bold",
  },
});

export default App;
