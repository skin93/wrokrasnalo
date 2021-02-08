import React from 'react'
import {
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Text
} from 'react-native'
import { MaterialIcons, FontAwesome } from '@expo/vector-icons'
import { Controller, useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import { register } from '../../redux/actions/userActions'
import { colors } from '../../theme/colors'
import Constants from 'expo-constants'

const RegisterScreen = () => {
  const { control, handleSubmit, errors } = useForm()

  const dispatch = useDispatch()

  const onSignUp = async ({ name, email, password }) => {
    dispatch(register(name, email, password))
  }

  return (
    <View style={styles.container}>
      <View>
        <Controller
          control={control}
          render={({ onChange, onBlur, value }) => (
            <View style={styles.inputWrapper}>
              <FontAwesome name='user' size={24} color='black' />
              <TextInput
                style={styles.input}
                onBlur={onBlur}
                onChangeText={(value) => onChange(value)}
                value={value}
                placeholder='Name'
              />
            </View>
          )}
          name='name'
          rules={{
            required: { value: true, message: 'Name is required!' },
            minLength: {
              value: 4,
              message: 'Name must be at least 4 characters'
            }
          }}
          defaultValue=''
        />
        {errors.name && <Text style={styles.error}>{errors.name.message}</Text>}
      </View>
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
      <TouchableOpacity style={styles.button} onPress={handleSubmit(onSignUp)}>
        <Text style={{ color: 'white' }}>Register</Text>
      </TouchableOpacity>
    </View>
  )
}

export default RegisterScreen

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
  error: {
    color: 'red',
    marginTop: 20
  }
})
