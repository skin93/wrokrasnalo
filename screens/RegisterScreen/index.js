import React, { useState } from 'react'
import { View, Button, TextInput } from 'react-native'
import { useDispatch } from 'react-redux'
import { register } from '../../redux/actions/userActions'

const RegisterScreen = () => {
  const dispatch = useDispatch()
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const onSignUp = async () => {
    dispatch(register(name, email, password))
  }

  return (
    <View>
      <TextInput placeholder='name' onChangeText={(name) => setName(name)} />
      <TextInput
        placeholder='email'
        onChangeText={(email) => setEmail(email)}
      />
      <TextInput
        placeholder='password'
        onChangeText={(password) => setPassword(password)}
      />
      <Button title='Sign Up' onPress={onSignUp} />
    </View>
  )
}

export default RegisterScreen
