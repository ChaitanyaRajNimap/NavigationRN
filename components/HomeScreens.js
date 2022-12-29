import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

function HomeScreens({navigation}) {
  return (
    <View style={styles.rootContainer}>
      <Text style={styles.heading}>Home Screen</Text>
      <View style={styles.button}>
        {/*For going to next screen*/}
        <Button
          title="Go to Products"
          onPress={() => navigation.navigate('Products')}
        />
      </View>
    </View>
  );
}

export default HomeScreens;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  heading: {
    color: '#000',
    fontSize: 35,
    fontWeight: 'bold',
  },
  button: {
    marginVertical: 20,
  },
});
