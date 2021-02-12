import React from 'react'
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

import { useTheme } from 'react-native-paper'

const DwarfsScreen = ({ navigation }) => {
  const { colors } = useTheme()

  const { dwarfs, loading, error } = useSelector((state) => state.dwarfList)

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
          <ScrollView contentContainerStyle={styles.dwarfContainer}>
            {dwarfs.map((dwarf) => (
              <TouchableOpacity
                key={dwarf.id}
                style={styles.imageWrapper}
                onPress={() =>
                  navigation.navigate('DwarfDetails', { dwarfId: dwarf.id })
                }
              >
                <Image
                  style={styles.image}
                  source={{ uri: dwarf.picture_src }}
                />
              </TouchableOpacity>
            ))}
          </ScrollView>
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
  dwarfContainer: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
  imageWrapper: {
    margin: 10
  },
  image: {
    width: 180,
    height: 180,
    borderRadius: 10
  }
})
