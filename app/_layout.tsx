import { StyleSheet } from 'react-native'
import { Stack } from 'expo-router'
import React from 'react'
import { AuthProvider } from '@/contexts/authContext'


const StackLayout = () => {
  return (
    <Stack screenOptions={{headerShown: false}}>
       
    </Stack>
  )
}

export default function RootLayout() {
  return (
    <AuthProvider>
      <StackLayout/>
    </AuthProvider>
  )
}


const styles = StyleSheet.create({})