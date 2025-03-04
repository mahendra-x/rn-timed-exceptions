import React from 'react';
import {Alert, Button, View} from 'react-native';
import {checkException} from '../utils/commonFunctions';

const ScreenForth = ({navigation}) => {
  try {
    checkException(17); // 8:00 PM
  } catch (error) {
    Alert.alert('Error', error.message);
  }
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', gap: 10}}>
      <Button
        title="Back to Screen 1"
        onPress={() => navigation.navigate('ScreenOne')}
      />
      <Button
        title="Back to Home screen"
        onPress={() => navigation.navigate('Home')}
      />
            <Button
        title="Log Out"
        onPress={() => navigation.navigate('Login')}
      />
    </View>
  );
};

export default ScreenForth;
