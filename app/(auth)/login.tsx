import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ScreenWrapper from '@/components/ScreenWrapper'
import { spacingY, spacingX } from '@/constants/theme'
import BackButton from '@/components/BackButton'

const Login = () => {
  return (
    <ScreenWrapper>
      <View style={styles.container}>
        <BackButton/>
      </View>
    </ScreenWrapper>
  )
}

export default Login

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: spacingY.md,
    justifyContent: 'center',
    alignItems: 'center',
  },
})