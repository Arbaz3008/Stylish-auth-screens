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
import Svg, { Path } from "react-native-svg";

const ForgotScreen = ( {navigation}) => {
  const [email, setEmail] = useState("");

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
        {/* Wave Background */}
        <Svg height="30%" width="100%" viewBox="0 0 1440 320" style={styles.wave}>
          <Path
            fill="#C62828"
            d="M0,160L40,144C80,128,160,96,240,85.3C320,75,400,85,480,128C560,171,640,245,720,272C800,299,880,277,960,256C1040,235,1120,213,1200,186.7C1280,160,1360,128,1400,112L1440,96L1440,320L0,320Z"
          />
        </Svg>

        <Animated.View style={[styles.formContainer, { opacity, transform: [{ scale }] }]}>
          <Text style={styles.title}>Forgot Password?</Text>
          <Text style={styles.subtitle}>Enter your email to receive a reset link.</Text>

          <TextInput
            style={styles.input}
            placeholder="Email"
            placeholderTextColor="#888"
            value={email}
            onChangeText={setEmail}
          />

          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Send Reset Link</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigation.navigate("Login")}>
            <Text style={styles.switchText}>Back to Login</Text>
          </TouchableOpacity>
        </Animated.View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFEBEE",
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
  formContainer: {
    width: "85%",
    backgroundColor: "#FFF",
    padding: 25,
    borderRadius: 30,
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
    color: "#C62828",
    marginBottom: 15,
  },
  subtitle: {
    fontSize: 14,
    color: "#666",
    marginBottom: 20,
    textAlign: "center",
  },
  input: {
    width: "100%",
    borderWidth: 1.5,
    borderColor: "#E57373",
    padding: 12,
    borderRadius: 15,
    marginBottom: 15,
    backgroundColor: "#FFCDD2",
  },
  button: {
    backgroundColor: "#C62828",
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
  switchText: {
    color: "#D32F2F",
    marginTop: 12,
    fontSize: 14,
  },
});

export default ForgotScreen;
