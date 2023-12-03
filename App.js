import React from "react";
import { SafeAreaView, Text, StyleSheet } from "react-native";
import {
  ClerkProvider,
  SignedIn,
  SignedOut,
  useClerk,
} from "@clerk/clerk-expo";
import Constants from "expo-constants";
import SignInWithOAuth from "./components/SignInWithOAuth";

export default function App() {
  return (
    <ClerkProvider
      publishableKey={Constants.expoConfig.extra.CLERK_PUBLISHABLE_KEY}
    >
      <SafeAreaView styles={styles.container}>
        <SignedIn>
          <SignedInContent />
        </SignedIn>
        <SignedOut>
          <SignInWithOAuth />
        </SignedOut>
      </SafeAreaView>
    </ClerkProvider>
  );
}

function SignedInContent() {
  const { user } = useClerk();
  return (
    <React.Fragment>
      <Text>You are SignedIn in as {user.email}</Text>
      {/* Add other content for signed-in users */}
    </React.Fragment>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
