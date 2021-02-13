import React, { useState, useEffect } from 'react'
import * as Permissions from 'expo-permissions'
import * as Location from 'expo-location'
import MapView, { Marker, Callout } from 'react-native-maps'
import { Title, useTheme } from 'react-native-paper'
import {
  StyleSheet,
  View,
  Dimensions,
  Text,
  ActivityIndicator,
  TouchableOpacity
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
  const [location, setLocation] = useState(null)
  const [errorMsg, setErrorMsg] = useState(null)
  const dispatch = useDispatch()

  const { dwarfs, loading, error } = useSelector((state) => state.dwarfList)

  const [permission, askForPermission] = Permissions.usePermissions(
    Permissions.LOCATION,
    {
      ask: true
    }
  )

  const getUserPosition = async () => {
    let { status } = await Location.requestPermissionsAsync()
    if (status !== 'granted') {
      setErrorMsg('Permission to access location was denied')
      return
    }
    let location = await Location.getCurrentPositionAsync({
      enabledHighAccuracy: true
    })
    setLocation(location)
    setRegion({
      latitude: location.coords.latitude,
      longitude: location.coords.longitude,
      latitudeDelta: 0.045,
      longitudeDelta: 0.045
    })
  }

  useEffect(() => {
    getUserPosition()
  }, [])

  useEffect(() => {
    dispatch(listDwarfs())
  }, [dispatch])

  if (!permission || permission.status !== 'granted') {
    return (
      <View style={styles.container}>
        <Text>Permission is not granted</Text>
        <TouchableOpacity style={styles.button} onPress={askForPermission}>
          <Text style={styles.buttonText}>Grant permission</Text>
        </TouchableOpacity>
      </View>
    )
  }

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
          showsUserLocation={true}
          showsCompass={true}
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
  },
  button: {
    marginTop: 40,
    borderRadius: 4,
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20
  }
})
