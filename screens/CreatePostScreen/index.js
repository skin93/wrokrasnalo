import React from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'
import { TextInput } from 'react-native-gesture-handler'

const CreatePostScreen = ({ navigation }) => {
  const [postText, setPostText] = React.useState('')
  return (
    <>
      <TextInput
        multiline
        placeholder="What's on your mind?"
        style={{ height: 200, padding: 10, backgroundColor: 'white' }}
        value={postText}
        onChangeText={setPostText}
      />
      <Button
        title='Done'
        onPress={() => {
          // Pass params back to home screen
          navigation.navigate('Home', { post: postText })
        }}
      />
    </>
  )
}

export default CreatePostScreen

const styles = StyleSheet.create({})
