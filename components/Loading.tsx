import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { ActivityIndicator, ActivityIndicatorProps } from 'react-native'

const Loading = ({
  size = 'small',
  color = 'white',
}: ActivityIndicatorProps) => {
  return (
   <View style={styles.container}>
    <ActivityIndicator size={size} color={color} />
   </View>
  )
}

export default Loading

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
})