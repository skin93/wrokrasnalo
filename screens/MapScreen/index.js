import React, { useState, useEffect } from 'react'
import MapView, { Marker, Callout } from 'react-native-maps'
import { Title, useTheme } from 'react-native-paper'
import {
  StyleSheet,
  View,
  Dimensions,
  Text,
  ActivityIndicator
} from 'react-native'

import { listDwarfs } from '../../redux/actions/dwarfActions'
import { useDispatch, useSelector } from 'react-redux'

const MapScreen = ({ navigation }) => {
  const { colors } = useTheme()
  const [region, setRegion] = useState({
    latitude: 51.107883,
    longitude: 17.038538,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421
  })
  const dispatch = useDispatch()

  const { dwarfs, loading, error } = useSelector((state) => state.dwarfList)

  useEffect(() => {
    dispatch(listDwarfs())
  }, [dispatch])
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
        <MapView
          style={styles.map}
          region={region}
          onRegionChange={() => setRegion(region)}
          zoomEnabled={true}
          minZoomLevel={5}
          mapType={'standard'}
          scrollEnabled={true}
        >
          {dwarfs &&
            dwarfs.length > 0 &&
            dwarfs.map((dwarf) => (
              <Marker
                key={dwarf.name}
                coordinate={{ latitude: dwarf.lat, longitude: dwarf.lng }}
              >
                <Callout
                  onPress={() =>
                    navigation.navigate('DwarfDetails', { dwarfId: dwarf.id })
                  }
                >
                  <Title style={{ color: colors.primary }}>{dwarf.name}</Title>
                </Callout>
              </Marker>
            ))}
        </MapView>
      )}
    </View>
  )
}

export default MapScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height
  }
})
