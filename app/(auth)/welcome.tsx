import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import ScreenWrapper from '@/components/ScreenWrapper'
import { verticalScale} from '@/utils/styling'
import { spacingY, radius, spacingX } from '@/constants/theme'
import { colors } from '@/constants/theme'
import Button from '@/components/Button'
import Animated, { FadeIn, FadeInDown } from 'react-native-reanimated'

const welcome = () => {
  return (
    <ScreenWrapper>
      <View style={styles.container}>
        <View>
          <TouchableOpacity style={styles.loginButton}>
            <Text style={styles.subtitle}>Sign In</Text>
          </TouchableOpacity>
          <Animated.Image entering={FadeIn.duration(1000)} source={require('@/assets/images/Savings-bro.png')} style={styles.welcomeImage} resizeMode="contain"/>
        </View>
        <View style={styles.footer}>
          <View style={{alignItems: 'center'}}>
            <Animated.Text entering={FadeInDown.duration(1000)} style={styles.title}>Dive into your expenses</Animated.Text>
            <Animated.Text entering={FadeInDown.duration(1000)} style={{fontSize: verticalScale(12), color: 'white', marginTop: verticalScale(14)}} >Manage your budget with ease</Animated.Text>
          </View>
          <Animated.View entering={FadeInDown.duration(1000).delay(1000)} style={[styles.buttonContainer, {marginTop: verticalScale(20)}]}>
            <Button>
              <Text style={[styles.buttonText, {color: 'black'}]}>Get Started ➜</Text>
            </Button>
          </Animated.View>
        </View>
      </View>
    </ScreenWrapper>
  )
}

export default welcome
 
const styles = StyleSheet.create({
  title: {
    fontSize: verticalScale(20),
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
    marginTop: verticalScale(30),
  },
  subtitle: {
    fontSize: verticalScale(14),
    color: 'white',
    textAlign: 'center',
  },
  container: {
    flex: 1,
    justifyContent: 'space-between',
    paddingTop: spacingY.md,
  },
  welcomeImage: {
    width: '100%',
    height: verticalScale(300),
    alignSelf: 'center',
    marginTop: spacingY.md,
  },
  loginButton: {
    padding: spacingY.md,
    borderRadius: radius.md,
    alignItems: 'center',
    width: '20%',
    height: verticalScale(54),
    marginHorizontal: spacingX.md,
    //move it to the right
    alignSelf: 'flex-end',
  },
  footer: {
    paddingVertical: spacingY.md,
    paddingHorizontal: spacingX.md,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonContainer: {
    width: '100%',
    paddingHorizontal: spacingX.md,
  },  
  buttonText: {
    fontSize: verticalScale(18),
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
  },
})