import { StyleSheet, Text, View, TouchableOpacity, Alert } from 'react-native'
import React, { useState } from 'react'
import ScreenWrapper from '@/components/ScreenWrapper'
import { spacingY, spacingX } from '@/constants/theme'
import BackButton from '@/components/BackButton'
import { TextInput } from 'react-native'
import Button from '@/components/Button'
import { verticalScale } from '@/utils/styling'
import { useRouter } from 'expo-router'
import { useAuth } from '@/contexts/authContext'


const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const router = useRouter();

  const {register: registerUser} = useAuth();
  const handleSubmit = async() => {
    if (!email || !password || !name) {
      Alert.alert('Error', 'Please fill in all fields');
      return;
    }
    console.log('Email: ', email);
    console.log('Password: ', password);
    console.log('Name: ', name);
    setIsLoading(true);
    try {
      const response = await registerUser(email, password, name);
      if (response.success) {
        setIsLoading(false);
        Alert.alert('Success', 'User registered successfully');
        router.navigate('/(auth)/login');
      }
    } catch (error) {
      setIsLoading(false);
      Alert.alert('Error', 'Something went wrong');
    }
    setIsLoading(false);
  }
  const [isLoading, setIsLoading] = useState(false);
  return (
    <ScreenWrapper>
      <View style={styles.container}>
        <BackButton/>
        <View style={styles.header}>
          <Text style={styles.headerText}>Howdy!</Text>
          <Text style={styles.headerText}>Join our community</Text>
        </View>
        <View style={styles.form}>
          <Text style={styles.formText}>Create an account</Text>
          <TextInput
            placeholderTextColor="gray"
            onChangeText={(text) => setName(text)}
            placeholder="Name"
            style={styles.input}
          />
          <TextInput
            // i need the placeholder to be gray
            placeholderTextColor="gray"
            onChangeText={(text) => setEmail(text)}
            placeholder="Email"
            style={styles.input}
          />
          <TextInput
            placeholderTextColor="gray"
            onChangeText={(text) => setPassword(text)}
            placeholder="Password"
            style={styles.input}
            secureTextEntry
          />
        </View>
        <Button 
          style={styles.button}
          onPress={handleSubmit}
          loading={isLoading}
        >
          <Text style={styles.buttonText}>Register</Text>
        </Button>
        {/*footer*/}
        <View style={styles.footer}>
          <Text style={styles.footerText}>Already have an account?</Text>
          <TouchableOpacity onPress={() => router.navigate('/(auth)/login')}>
            <Text style={styles.footerTextTwo}>Login</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScreenWrapper>
  )
}

export default Register

const styles = StyleSheet.create({
  header: {
    marginBottom: verticalScale(20),
    gap: verticalScale(4),
    marginTop: verticalScale(20),
  },
  headerText: {
    fontSize: verticalScale(20),
    fontWeight: 'bold',
    color: 'white',
  },
  container: {
    flex: 1,
    paddingTop: spacingY.md,
    paddingHorizontal: spacingX.lg
  },
  form: {
    gap: verticalScale(16),
  },
  formText: {
    fontSize: verticalScale(12),
    fontWeight: 'normal',
    color: 'white',
  },
  input: {
    borderWidth: 1,
    borderColor: 'rgba(230, 193, 81, 0.83)',
    borderRadius: 8,
    padding: 12,
    marginBottom: 12,
    width: '100%',
    color: 'white',
  },
  button: {
    marginTop: verticalScale(20),
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
  footerText: {
    fontSize: verticalScale(12),
    fontWeight: 'normal',
    color: 'white',
  },
  footerTextTwo: {
    marginLeft: verticalScale(4),
    fontSize: verticalScale(12),
    fontWeight: 'bold',
    color: 'rgba(230, 193, 81, 0.83)',
  },
})