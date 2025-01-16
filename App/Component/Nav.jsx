/* eslint-disable react-native/no-inline-styles */
import {
  Text,
  StyleSheet,
  View,
  TextInput,
  ScrollView,
  Image,
} from 'react-native';
import React, {Component} from 'react';
import {Categories} from '../Custom_Api/Categories';

export default class Nav extends Component {
  render() {
    console.log(Categories);
    return (
      <View style={styles.container}>
        <TextInput style={styles.input} placeholder="scarch here..." value="" />

        <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          style={{flexDirection: 'row'}}>
          {Categories.map(({name, image, id}) => {
            return (
              <View key={id} style={styles.categories}>
                <Image style={styles.tinyLogo} source={{uri: image}} />;
                <Text>{name}</Text>
              </View>
            );
          })}
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    // backgroundColor: 'red',
    padding: 10,
  },
  input: {
    height: 50,
    borderColor: 'gray',
    borderWidth: 0.8,
    borderRadius: 15,
    paddingHorizontal: 20,
  },
  tinyLogo: {
    width: 60,
    height: 60,
    marginHorizontal: 8,
    top: 12,
    borderRadius: 50,
    borderColor: 'gray',
    borderWidth: 0.8,
  },
  categories: {
    gap: 15,
    flexDirection: 'column',
    alignItems: 'center',
    marginHorizontal: 6,
  },
});

/* <div class="scrollmenu">
  <div class="#home">
    <img src="https://images.unsplash.com/photo-1615463738213-b9381d217b4e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80">
  </div>
  <div class="#news"><img src="https://images.unsplash.com/photo-1578301978018-3005759f48f7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1144&q=80"></div>
  <div class="#contact"><img src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"></div>
  <div class="#about"><img src="https://images.unsplash.com/photo-1581337204873-ef36aa186caa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1156&q=80"></div>
  <div class="#about"><img src="https://images.unsplash.com/photo-1581337204873-ef36aa186caa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1156&q=80"></div>
  <div class="#about"><img src="https://images.unsplash.com/photo-1581337204873-ef36aa186caa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1156&q=80"></div>
</div> */
