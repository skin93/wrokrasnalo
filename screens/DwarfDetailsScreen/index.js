import React, { useEffect } from 'react'
import { ActivityIndicator, Image, StyleSheet, Text, View } from 'react-native'
import { listDwarfDetails } from '../../redux/actions/dwarfActions'
import { useDispatch, useSelector } from 'react-redux'
import { colors } from '../../theme/colors'

import { ScrollView } from 'react-native-gesture-handler'

const DwarfDetailsScreen = ({ route }) => {
  useEffect(() => {
    dispatch(listDwarfDetails(route.params.dwarfId))
  }, [dispatch, route.params.dwarfId])
  const dispatch = useDispatch()
  const { dwarf, loading, error } = useSelector((state) => state.dwarfDetails)
  return (
    <View style={styles.container}>
      {loading ? (
        <View>
          <ActivityIndicator size={100} color={colors.primary} />
        </View>
      ) : error ? (
        <View>
          <Text>{error}</Text>
        </View>
      ) : (
        <ScrollView contentContainerStyle={{ alignItems: 'center' }}>
          <Image style={styles.image} source={{ uri: dwarf.picture_src }} />
          <View style={styles.dwarfHeader}>
            <Text style={styles.dwarfName}>{dwarf.name}</Text>
            <Text style={styles.dwarfAddress}>{dwarf.address}</Text>
          </View>
          <Text style={styles.dwarfDescription}>{dwarf.description}</Text>
        </ScrollView>
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
  dwarfHeader: {
    marginVertical: 20,
    alignItems: 'center'
  },
  dwarfName: {
    fontSize: 30,
    fontWeight: 'bold'
  },
  dwarfAddress: {
    color: 'gray'
  },
  dwarfDescription: {
    fontSize: 18,
    textAlign: 'center'
  },
  button: {
    marginTop: 20
  }
})
