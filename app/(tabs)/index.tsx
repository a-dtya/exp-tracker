import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Button from '@/components/Button'
import { signOut } from 'firebase/auth'
import { auth } from '@/config/firebase'
import { verticalScale } from '@/utils/styling'
import ScreenWrapper from '@/components/ScreenWrapper'

const Home = () => {
  const handleLogOut = async() => {
    await signOut(auth)
  }
    
  return (
    <ScreenWrapper>
      <Text>Home</Text>
      <Button onPress={handleLogOut}>
        <Text style={styles.text}>Logout</Text>
      </Button>
    </ScreenWrapper>
  )
}

export default Home

const styles = StyleSheet.create({
  text: {
    color: 'black',
    fontSize: verticalScale(16),
    fontWeight: 'bold',
    textAlign: 'center',
    
  }
})