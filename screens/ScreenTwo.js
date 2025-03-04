import React from 'react';
import { Alert, Button, View } from 'react-native';
import { checkException } from '../utils/commonFunctions';

const ScreenTwo = ({navigation}) => {
  try {
    checkException(20); // 8:00 PM
  } catch (error) {
    Alert.alert('Error', error.message);
  }
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Button
        title="Go to Screen 3"
        onPress={() => navigation.navigate('ScreenThree')}
      />
    </View>
  );
};

export default ScreenTwo;
