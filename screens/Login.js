import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from "react-native";
import Animated, {
  useSharedValue,
  withTiming,
  withSpring,
} from "react-native-reanimated";
import Svg, { Path, Circle } from "react-native-svg";

const LoginScreen = ({navigation}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const opacity = useSharedValue(0);
  const scale = useSharedValue(0.5);

  useEffect(() => {
    opacity.value = withTiming(1, { duration: 1000 });
    scale.value = withSpring(1);
  }, []);

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : undefined}
      style={styles.container}
    >
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {/* Circular Background Elements */}
        <View style={styles.circle1} />
        <View style={styles.circle2} />

        {/* Animated Wave Background */}
        <Svg height="35%" width="100%" viewBox="0 0 1440 320" style={styles.wave}>
          <Path
            fill="#4A148C"
            d="M0,160L40,149.3C80,139,160,117,240,138.7C320,160,400,224,480,229.3C560,235,640,181,720,176C800,171,880,213,960,213.3C1040,213,1120,171,1200,144C1280,117,1360,107,1400,101.3L1440,96L1440,320L0,320Z"
          />
        </Svg>

        <Animated.View style={[styles.formContainer, { opacity, transform: [{ scale }] }]}>
          <Text style={styles.title}>Welcome Back</Text>

          <TextInput
            style={styles.input}
            placeholder="Email"
            placeholderTextColor="#888"
            value={email}
            onChangeText={setEmail}
          />

          <TextInput
            style={styles.input}
            placeholder="Password"
            placeholderTextColor="#888"
            secureTextEntry
            value={password}
            onChangeText={setPassword}
          />

          <TouchableOpacity style={styles.button} >
            <Text style={styles.buttonText}>Login</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate("Register")} >
            <Text style={styles.forgotText}>Register?</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate("Forget")} >
            <Text style={styles.forgotText}>Forgot Password?</Text>
          </TouchableOpacity>
        </Animated.View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#EDE7F6",
  },
  scrollContainer: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  wave: {
    position: "absolute",
    top: 0,
  },
  circle1: {
    position: "absolute",
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: "#D1C4E9",
    top: 50,
    left: -30,
  },
  circle2: {
    position: "absolute",
    width: 150,
    height: 150,
    borderRadius: 75,
    backgroundColor: "#B39DDB",
    bottom: 100,
    right: -40,
  },
  formContainer: {
    width: "85%",
    backgroundColor: "#FFF",
    padding: 25,
    borderRadius: 30, // Cubic type edges
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 8,
  },
  title: {
    fontSize: 26,
    fontWeight: "bold",
    color: "#4A148C",
    marginBottom: 25,
  },
  input: {
    width: "100%",
    borderWidth: 1.5,
    borderColor: "#9575CD",
    padding: 12,
    borderRadius: 15, // Rounded edges
    marginBottom: 15,
    color: "#333",
    backgroundColor: "#F3E5F5",
  },
  button: {
    backgroundColor: "#4A148C",
    width: "100%",
    padding: 14,
    borderRadius: 20,
    alignItems: "center",
  },
  buttonText: {
    color: "#FFF",
    fontSize: 18,
    fontWeight: "bold",
  },
  forgotText: {
    color: "#6A1B9A",
    marginTop: 12,
    fontSize: 14,
  },
});

export default LoginScreen;
