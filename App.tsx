/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  ImageBackground,
  StyleSheet,
  Text,
  View, Image, TextInput,
} from 'react-native';


const App = () => {
  return (
    <ImageBackground source={require('./assest/bgImg.png')} resizeMode="cover" style={styles.image}>
      <SafeAreaView>
        <ScrollView style={styles.main_container}>
          <Text style={styles.title}>Course Details</Text>
          <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', marginBottom: 20 }}>
            <Image
              source={require('./assest/avatar.jpg')}
              style={{ width: 100, height: 100, borderRadius: 100 / 2, marginRight: 8 }}
            />
            <Text style={{ fontSize: 20, color: 'black' }}>Course Name</Text>
          </View>
          <View style={styles.form_container}>
            <View style={styles.input_container}>
              <Text style={styles.text_input}>Description</Text>
              <TextInput style={styles.textInput}></TextInput>
            </View>
            <View>
              <Text style={styles.text_input}>Advertisment</Text>
              <TextInput style={Object.assign({}, styles.textInput, styles.paragraph)} multiline={true}
                numberOfLines={4}></TextInput>
            </View>
            <View>
              <Text style={styles.text_input}>File</Text>
              <TextInput style={styles.textInput}></TextInput>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </ImageBackground >
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column'
  },
  main_container: {
    paddingHorizontal: 40,
    paddingVertical: 40,
  },
  image: {
    width: '100%',
    height: '100%'
  },
  textInput: {
    textAlign: 'auto',
    width: '100%',
    height: 50,
    borderRadius: 8,
    borderColor: 'red',
    marginTop: 8,
    marginBottom: 8,
    backgroundColor: '#e4f3f8'
  },
  paragraph: {
    height: 151
  },
  text_input: {
    color: 'black',
    fontSize: 18
  },
  title: {
    fontSize: 25,
    alignSelf: 'center',
    marginBottom: 30,
    color: 'black'
  },
  form_container: {
    paddingHorizontal: 20
  },
  appButtonContainer: {
    elevation: 8,
    marginTop: 64,
    backgroundColor: "#4DBCD2",
    borderRadius: 5,
    width: 314,
    height: 48,
    flex: 1,
    justifyContent: "center",
    alignItems: 'center',
    shadowColor: 'transparent'
  },
  appButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: '600'
  },
  greyText: {
    marginTop: 8,
    color: "#51515180",
    fontSize: 12,
    alignSelf: 'flex-end'
  },
  courseImg: {
    width: '100%',
    height: 160,
    borderRadius: 5,
  },
  courseContainer: {
    width: 170,
    backgroundColor: '#4DBCD226',
    borderRadius: 5,
    flexDirection: 'column',
    marginRight: 8,
    marginBottom: 18,
  },
  courseName: {
    fontWeight: '400',
    fontSize: 12,
    color: '#000',
    paddingLeft: 6
  }
});

export default App;
