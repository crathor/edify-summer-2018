import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './styles';

const Account = ({ logout, id, navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.firstView}>
        <TouchableOpacity activeOpacity={0.1}>
          <Text style={styles.optionsText}>Change Password</Text>
        </TouchableOpacity>

        <View style={styles.divider} />

        <TouchableOpacity activeOpacity={0.1}>
          <Text style={styles.optionsText}>Account Privacy</Text>
        </TouchableOpacity>
      </View>

      <View>
        <TouchableOpacity
          activeOpacity={0.1}
          style={styles.signOutButton}
          onPress={() => {
            logout(id);
            navigation.navigate('loginStack');
          }}
        >
          <Text style={styles.signOutText}>Sign Out</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Account;
