import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

function ProductsScreen({navigation}) {
  return (
    <View style={styles.rootContainer}>
      <Text style={styles.heading}>Products Screen</Text>
      <View style={styles.button}>
        <Button
          title="Go to Details"
          onPress={() => navigation.navigate('Details')}
        />
      </View>
      <View style={styles.button}>
        {/*For going to specific screen*/}
        <Button
          title="Go to Home"
          onPress={() => navigation.navigate('Home')}
        />
      </View>
      <View style={styles.button}>
        {/*For going back programitically*/}
        <Button title="Go back" onPress={() => navigation.goBack()} />
      </View>
    </View>
  );
}

export default ProductsScreen;

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
