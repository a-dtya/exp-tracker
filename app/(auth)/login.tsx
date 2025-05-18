import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ScreenWrapper from '@/components/ScreenWrapper'
import { spacingY, spacingX } from '@/constants/theme'
import BackButton from '@/components/BackButton'
import { TextInput } from 'react-native'
import { useRef } from 'react'
import Button from '@/components/Button'
import { verticalScale } from '@/utils/styling'

const Login = () => {
  const emailRef = useRef<string>("");
  const passwordRef = useRef<string>("");
  const handleSubmit = async() => {
  }

  return (
    <ScreenWrapper>
      <View style={styles.container}>
        <BackButton/>
        <View>
          <Text>Hey there,</Text>
          <Text>Welcome back!</Text>
        </View>
        <View>
          <Text>Login to your account</Text>
          <TextInput
            onChangeText={(text) => emailRef.current = text}
            placeholder="Email"
            style={styles.input}
            value={emailRef.current}
          />
          <TextInput
            onChangeText={(text) => passwordRef.current = text}
            placeholder="Password"
            style={styles.input}
            secureTextEntry
            value={passwordRef.current}
          />
        </View>
        <Button
          onPress={handleSubmit}
        >
          <Text style={styles.buttonText}>Login</Text>
        </Button>
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
  input: {
    borderWidth: 1,
    borderColor: 'rgba(230, 193, 81, 0.83)',
    borderRadius: 8,
    padding: 12,
    marginBottom: 12,
    width: '100%',
  },
  buttonText: {
    fontSize: verticalScale(16),
    fontWeight: 'bold',
    color: 'black',
    textAlign: 'center',
  }
})