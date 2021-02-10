import React from 'react'
import { useForm, Controller } from 'react-hook-form'
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity
} from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'
import { useDispatch } from 'react-redux'
import { login } from '../../redux/actions/userActions'
import Constants from 'expo-constants'

import { colors } from '../../theme/colors'

const LoginScreen = () => {
  const { control, handleSubmit, errors } = useForm()
  const dispatch = useDispatch()

  const onSubmit = ({ email, password }) => {
    dispatch(login(email, password))
  }

  return (
    <View style={styles.container}>
      <View>
        <Controller
          control={control}
          render={({ onChange, onBlur, value }) => (
            <View style={styles.inputWrapper}>
              <MaterialIcons name='email' size={24} color='black' />
              <TextInput
                style={styles.input}
                onBlur={onBlur}
                onChangeText={(value) => onChange(value)}
                value={value}
                placeholder='E-mail'
              />
            </View>
          )}
          name='email'
          rules={{
            required: { value: true, message: 'E-mail is required!' },
            pattern: {
              value: /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/,
              message: 'Invalid email form'
            }
          }}
          defaultValue=''
        />
        {errors.email && (
          <Text style={styles.error}>{errors.email.message}</Text>
        )}
      </View>
      <View>
        <Controller
          control={control}
          render={({ onChange, onBlur, value }) => (
            <View style={styles.inputWrapper}>
              <MaterialIcons name='lock' size={24} color='black' />
              <TextInput
                style={styles.input}
                onBlur={onBlur}
                onChangeText={(value) => onChange(value)}
                value={value}
                secureTextEntry={true}
                placeholder='Password'
              />
            </View>
          )}
          name='password'
          rules={{
            required: { value: true, message: 'Password is required!' },
            minLength: {
              value: 8,
              message: 'Password must be at least 8 characters'
            }
          }}
          defaultValue=''
        />
        {errors.password && (
          <Text style={styles.error}>{errors.password.message}</Text>
        )}
      </View>
      <TouchableOpacity style={styles.button} onPress={handleSubmit(onSubmit)}>
        <Text style={styles.text}>Login</Text>
      </TouchableOpacity>
    </View>
  )
}

export default LoginScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 8,
    backgroundColor: '#fff'
  },
  button: {
    marginTop: 40,
    backgroundColor: colors.primary,
    height: Constants.statusBarHeight,
    borderRadius: 4,
    alignItems: 'center',
    justifyContent: 'center'
  },
  inputWrapper: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderColor: '#000',
    paddingBottom: 10,
    height: Constants.statusBarHeight,
    marginVertical: 20,
    alignItems: 'center'
  },
  input: {
    flex: 1,
    paddingLeft: 20,
    fontSize: 20
  },
  text: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20
  },
  error: {
    color: 'red',
    marginTop: 20
  }
})
