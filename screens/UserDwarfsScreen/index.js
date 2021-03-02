import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {
  View,
  Text,
  ActivityIndicator,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity
} from 'react-native'
import { Searchbar } from 'react-native-paper'

import { useTheme } from 'react-native-paper'
import { listMyDwarfs } from '../../redux/actions/dwarfActions'

const UserDwarfsScreen = ({ navigation }) => {
  const { userDwarfs, loading, error } = useSelector(
    (state) => state.dwarfListMy
  )

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(listMyDwarfs())
  }, [dispatch])

  const [searchQuery, setSearchQuery] = useState('')
  const [filteredDwarfs, setFilteredDwarfs] = useState(userDwarfs)

  const filterDwarfs = (query) => {
    setSearchQuery(query)
    const filteredDwarfs = userDwarfs.filter((dwarf) =>
      dwarf.name.toLowerCase().includes(query.toLowerCase())
    )
    setFilteredDwarfs(filteredDwarfs)
  }
  const { colors } = useTheme()

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
      ) : userDwarfs && userDwarfs.length > 0 ? (
        <>
          <Searchbar
            style={styles.searchBar}
            placeholder='Search'
            onChangeText={filterDwarfs}
            value={searchQuery}
          />
          <ScrollView contentContainerStyle={styles.dwarfContainer}>
            {filteredDwarfs.map((dwarf) => (
              <TouchableOpacity
                key={dwarf.id}
                style={styles.dwarfItem}
                onPress={() =>
                  navigation.navigate('DwarfDetails', { dwarfId: dwarf.id })
                }
              >
                <Image
                  style={styles.image}
                  source={{ uri: dwarf.picture_src }}
                />
                <Text style={styles.dwarfName}>{dwarf.name}</Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </>
      ) : (
        <View>
          <Text>No dwarfs collected</Text>
        </View>
      )}
    </View>
  )
}

export default UserDwarfsScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  searchBar: {
    padding: 5,
    margin: 10
  },
  dwarfContainer: {
    justifyContent: 'space-around',
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
  dwarfItem: {
    margin: 10,
    padding: 10,
    height: 210,
    backgroundColor: '#fff',
    borderRadius: 10
  },
  image: {
    width: 160,
    height: 160,
    borderRadius: 10
  },
  dwarfName: {
    textAlign: 'center',
    marginTop: 10,
    fontWeight: 'bold'
  }
})
