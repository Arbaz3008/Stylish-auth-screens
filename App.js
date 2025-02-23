import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Login from "./screens/Login";
import Register from "./screens/Register";
import Forget from "./screens/Forget";
import { View, Text, TouchableOpacity, StyleSheet, StatusBar } from "react-native";

const Stack = createStackNavigator();

const CustomHeader = ({ navigation, title }) => (
  <View style={styles.headerContainer}>
    <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
      <Text style={styles.backText}>⬅</Text>
    </TouchableOpacity>
    <Text style={styles.headerTitle}>{title}</Text>
  </View>
);

const App = () => {
  return (
    <>
      {/* StatusBar Adjusted */}
      <StatusBar backgroundColor="#6200ea" barStyle="light-content" />

      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen
            name="Register"
            component={Register}
            options={({ navigation }) => ({
              headerShown: true,
              header: () => <CustomHeader navigation={navigation} title="Register" />,
            })}
          />
          <Stack.Screen
            name="Forget"
            component={Forget}
            options={({ navigation }) => ({
              headerShown: true,
              header: () => <CustomHeader navigation={navigation} title="Reset Password" />,
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
    backgroundColor: "#6200ea",
    paddingTop: StatusBar.currentHeight, // ✅ Fix for StatusBar Overlap
  },
  backButton: {
    marginRight: 10,
  },
  backText: {
    fontSize: 18,
    color: "#fff",
  },
  headerTitle: {
    fontSize: 20,
    color: "#fff",
    fontWeight: "bold",
  },
});

export default App;
