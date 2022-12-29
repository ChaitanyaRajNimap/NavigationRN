import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

function DetailsScreen({navigation}) {
  return (
    <View style={styles.rootContainer}>
      <Text style={styles.heading}>Details Screen</Text>
      <View style={styles.button}>
        {/*For going back to 1st screen*/}
        <Button
          title="Go to 1st screen"
          onPress={() => navigation.popToTop()}
        />
      </View>
    </View>
  );
}

export default DetailsScreen;

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
