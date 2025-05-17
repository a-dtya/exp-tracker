import {StyleSheet, Text, View} from "react-native";
import React, { useEffect } from "react";
import { colors } from "@/constants/theme";
import { Image } from "react-native";
import { useRouter } from "expo-router";


// this is basically the splash screen

const index = () => {

    const router = useRouter();

    useEffect(() => {
        setTimeout(() => {
            router.push("/(auth)/welcome");
        }, 2000);
    }, []);

    return (
        <View style={styles.container}>
            <Image source={require("../assets/images/logo.png")}
                style={styles.logo}
                resizeMode="contain"
            />
        </View>
    );
};

export default index;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: colors.black
    },
    logo: {
        height: "25%",
        aspectRatio: 1
    }
});
