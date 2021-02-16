import React, { useState } from 'react'
import { useSelector } from 'react-redux'
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

const DwarfsScreen = ({ navigation }) => {
  const { dwarfs, loading, error } = useSelector((state) => state.dwarfList)
  const [searchQuery, setSearchQuery] = useState('')
  const [filteredDwarfs, setFilteredDwarfs] = useState(dwarfs)

  const filterDwarfs = (query) => {
    setSearchQuery(query)
    const filteredDwarfs = dwarfs.filter((dwarf) =>
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
      ) : (
        dwarfs &&
        dwarfs.length > 0 && (
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
        )
      )}
    </View>
  )
}

export default DwarfsScreen

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
