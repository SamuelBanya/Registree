import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    // Overall container for app:
    <View styles={styles.appContainer}>
      {/* Top menu for desktop web use only: */}
      <View>
      </View>
      {/* Top header section: */}
      <View>
        <Text style={styles.header}>Registrees</Text>
        <Button 
          title="Add New Registree"
        />
      </View>
      {/* Bottom half section for remaining content: */}
      <View>
        <View style={styles.registreeContainer}>
        </View>
        <View style={styles.registreeContainer}>
        </View>
        <View style={styles.registreeContainer}>
        </View>
      </View>
      {/* Buttons footer for mobile and iPad: */}
      <View>
        <Button 
          title="Registrees"
        />
        <Button 
          title="Share"
        />
        <Button 
          title="Profile"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    backgroundColor: 'red'
  },
  header: {
    fontSize: '50px',
    color: '#FFC700'
  },
  registreeContainer: {
    height: '90px',
    width: '351px',
    border: '5px solid white',
    backgroundColor: '#3AFF7D'
  }
})

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
