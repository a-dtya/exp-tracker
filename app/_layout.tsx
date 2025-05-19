import { StyleSheet } from 'react-native'
import { Stack } from 'expo-router'
import React from 'react'
import { AuthContextProvider } from '@/contexts/authContext'


const StackLayout = () => {
  return (
    <Stack screenOptions={{headerShown: false}}>
       
    </Stack>
  )
}

export default function RootLayout() {
  return (
    <AuthContextProvider>
      <StackLayout/>
    </AuthContextProvider>
  )
}


const styles = StyleSheet.create({})