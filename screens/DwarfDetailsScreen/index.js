import React, { useEffect } from 'react'
import {
  ActivityIndicator,
  Button,
  Image,
  StyleSheet,
  Text,
  View
} from 'react-native'
import { listDwarfDetails } from '../../redux/actions/dwarfActions'
import { useDispatch, useSelector } from 'react-redux'
import { colors } from '../../theme/colors'

const DwarfDetailsScreen = ({ route, navigation }) => {
  useEffect(() => {
    dispatch(listDwarfDetails(route.params.dwarfId))
  }, [dispatch, route.params.dwarfId])
  const dispatch = useDispatch()
  const { dwarf, loading, error } = useSelector((state) => state.dwarfDetails)
  return (
    <View style={styles.container}>
      {loading ? (
        <View>
          <ActivityIndicator size='large' color={colors.primary} />
        </View>
      ) : error ? (
        <View>
          <Text>{error}</Text>
        </View>
      ) : (
        <>
          <Image style={styles.image} source={{ uri: dwarf.picture_src }} />
          <Text style={styles.dwarfName}>{dwarf.name}</Text>
          <Text>{dwarf.description}</Text>
          <View style={styles.button}>
            <Button title='Go back' onPress={() => navigation.goBack()} />
          </View>
        </>
      )}
    </View>
  )
}

export default DwarfDetailsScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 20
  },
  image: {
    width: 300,
    height: 300,
    borderRadius: 10,
    marginVertical: 20
  },
  dwarfName: {
    fontSize: 30,
    fontWeight: 'bold',
    marginVertical: 20
  },
  button: {
    marginTop: 20
  }
})
