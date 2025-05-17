import { StyleSheet, View } from 'react-native'
import React from 'react'
import { ScreenWrapperProps } from '@/types'
import { StatusBar } from 'expo-status-bar'

const ScreenWrapper = ({children, style}: ScreenWrapperProps) => {
  return (
    <View style={[styles.container, style]}>
        <StatusBar style="light" />
      {children}
    </View>
  )
}

export default ScreenWrapper

const styles = StyleSheet.create({
    container: {
        paddingTop: 50,
        flex: 1,
        //give a dark gradient background
        backgroundColor: "linear-gradient(to bottom, #111827,rgb(14, 19, 32))",
    }
})