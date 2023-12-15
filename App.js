import { StyleSheet, View } from 'react-native';
import AllNav from './src';

export default function App() {
  return (
    <View style={styles.container}>
      <AllNav />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
