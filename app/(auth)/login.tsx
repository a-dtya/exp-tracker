import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import ScreenWrapper from '@/components/ScreenWrapper'
import { spacingY, spacingX } from '@/constants/theme'
import BackButton from '@/components/BackButton'
import { TextInput } from 'react-native'
import { useRef } from 'react'
import Button from '@/components/Button'
import { verticalScale } from '@/utils/styling'
import { useRouter } from 'expo-router'

const Login = () => {
  const emailRef = useRef<string>("");
  const passwordRef = useRef<string>("");
  const router = useRouter();
  const handleSubmit = async() => {
    console.log(emailRef.current);
    console.log(passwordRef.current);
  }
  const [isLoading, setIsLoading] = useState(false);
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
          loading={isLoading}
        >
          <Text style={styles.buttonText}>Login</Text>
        </Button>
        {/*footer*/}
        <View style={styles.footer}>
          <Text>Don't have an account?</Text>
          <TouchableOpacity onPress={() => router.push('/(auth)/register')}>
            <Text>Register</Text>
          </TouchableOpacity>
        </View>
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
  },
  footer: {
    marginTop: verticalScale(20),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
})