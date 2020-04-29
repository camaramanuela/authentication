import React, { useContext } from 'react';
import { View, Button, StyleSheet } from 'react-native';
import AuthContext from '../../contexts/auth'

const styles = StyleSheet.create({
  container: {
    flex:1,
    justifyContent: 'center'
  }
});

const Dashboard: React.FC = () => {
  const { signed, user, signOut } = useContext(AuthContext); 

  console.log (signed);
  console.log (user);

  function handleSignOut () {
    signOut();
  }

  return (
    <View style={styles.container} >
      <Button title="Logout" onPress={handleSignOut} />
    </View>
  )

};

export default Dashboard;
