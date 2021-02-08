import React, { useState } from 'react'
import { View, Button, TextInput } from 'react-native'
import { useDispatch } from 'react-redux'
import { login } from '../../redux/actions/userActions'

const LoginScreen = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const dispatch = useDispatch()

  return (
    <View>
      <TextInput
        textContentType='emailAddress'
        placeholder='email'
        onChangeText={(email) => setEmail(email)}
      />
      <TextInput
        textContentType='password'
        placeholder='password'
        onChangeText={(password) => setPassword(password)}
      />
      <Button title='Login' onPress={() => dispatch(login(email, password))} />
    </View>
  )
}

export default LoginScreen
