import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View, useWindowDimensions } from 'react-native';

export default function App() {
  // Grab 'height', 'width', 'scale', and 'fontScale' using the 'useWindowDimensions' API
  // so that we can scale the app's window size accordingly:
  const { height, width, scale, fontScale } = useWindowDimensions();

  return (
    // Overall container for app:
    <View style={styles.appContainer}>
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
    
    backgroundColor: 'rgb(52,53,52); linear-gradient(90deg, rgba(52,53,52,1) 0%, rgba(31,112,78,1) 50%, rgba(14,166,102,1) 100%);'
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
