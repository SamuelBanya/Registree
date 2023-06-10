import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, useWindowDimensions } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Button, Text, Switch } from '@rneui/themed';
import { React, useState } from "react";

export default function App() {
  // Grab 'height', 'width', 'scale', and 'fontScale' using the 'useWindowDimensions' API
  // so that we can scale the app's window size accordingly:
  const { height, width, scale, fontScale } = useWindowDimensions();

  const [checked, setChecked] = useState(false);

  const toggleSwitch = () => {
    setChecked(!checked);
  };

  return (
    <LinearGradient colors={["#343534", "#1f704e", "#0ea666"]} style={styles.greenBackgroundGradient}>
      {/* Overall container for app: */}
      <View style={styles.appContainer}>
        {/* Top menu for desktop web use only: */}
        <View>
        </View>
        {/* Top header section: */}
        <View>
          <Text style={styles.header}>Registrees</Text>
          <Button 
            title="Add New Registree"
            style={styles.newRegistreeButton}
            type="outline"
          />
        </View>
        {/* Bottom half section for remaining content: */}
        <View>
          <View style={styles.registreeContainer}>
            <Text style={styles.boldHeader}>Mom's Christmas List</Text>
            <Text>Registree.xyz/mom101</Text>
            <Switch 
              value={checked}
              onValueChange={(value) => setChecked(value)}
            />
          </View>
          <View style={styles.registreeContainer}>
            <Text style={styles.boldHeader}>Sam's Birthday List</Text>
            <Text>Registree.xyz/sam123</Text>
            <Switch 
              value={checked}
              onValueChange={(value) => setChecked(value)}
            />
          </View>
          <View style={styles.registreeContainer}>
            <Text style={styles.boldHeader}>Tina's Baby Shower Registry</Text>
            <Text>Registree.xyz/tina456</Text>
            <Switch 
              value={checked}
              onValueChange={(value) => setChecked(value)}
            />
          </View>
        </View>
        {/* Buttons footer for mobile and iPad: */}
        <LinearGradient colors={["#11be6b", "#0dca71", "#0ad475"]} style={styles.bottomGreenGradient}>
          <View style={styles.bottomBackground}>
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
        </LinearGradient>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  appContainer: {
  },
  newRegistreeButton: {
    backgroundColor: "#FFFFFF",
    borderColor: "#3AFF7D",
    borderRadius: "5px"
  },
  darkGreenGradient: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 5
  },
  bottomGreenGradient: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 5
  },
  header: {
    fontSize: '50px',
    color: '#FFC700'
  },
  boldHeader: {
    fontWeight: 'bold'
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
