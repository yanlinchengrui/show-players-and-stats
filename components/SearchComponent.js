import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  TouchableHighlight
} from 'react-native';

import { getPlayerInfo } from '../fetching/GetPlayerInfo';
import AllPlayersComponent from './AllPlayersComponent';

export default class SearchComponent extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
        player: '',
        error: false
      }
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(e) {
      this.setState({
        player: e.nativeEvent.text
      });
    }
    handleSubmit() {
      getPlayerInfo(this.state.player).then((res) => {
        if(res == null) {
            this.setState({
                error: 'Year Not Found or Wrong Input'
            });
          }
        else {
          this.props.navigator.push({
            title: 'All',
            passProps: {standard : res.league.standard},
            component: AllPlayersComponent
          });
          this.setState({
            error: false
          })
        }
      });
    }
  render() {
    let showErr = (
      this.state.error ?
      <Text>
        {this.state.error}
      </Text> :
      <View></View>
    );
    return (
      <View style={styles.main}>
        <Image
          style={styles.image}
          source={{uri: 'https://vignette.wikia.nocookie.net/meme/images/7/7d/YaoMingFace.jpg/revision/latest?cb=20141108223024'}}
        />
        <Text style={styles.title}>Show All NBA Players of Year</Text>
        <TextInput
          style={styles.searchInput}
          onChange={this.handleChange}
          placeholder="Only from 2012 to 2018"
        />
        <TouchableHighlight
          style = {styles.button}
          onPress = {this.handleSubmit}
        >
          <Text
            style={styles.buttonText}>
            SEARCH
          </Text>
        </TouchableHighlight>
        {showErr}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    padding: 30,
    marginTop: 65,
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: 'gold'
  },
  title: {
    marginBottom: 20,
    fontSize: 21,
    textAlign: 'center'
  },
  image: {
    width: 100, 
    height: 130,
    alignSelf: 'center',
    marginBottom: 30,
    borderRadius: 50,
    borderWidth: 1,
    borderColor: 'green',
    overflow: 'hidden'
  },
  searchInput: {
    height: 50,
    padding: 4,
    marginRight: 1,
    fontSize: 23,
    borderWidth: 2,
    borderRadius: 9,
    borderColor: 'green',
    color: 'green',
    overflow: 'hidden'
  },
  buttonText: {
    fontSize: 18,
    color: 'white',
    alignSelf: 'center'
  },
  button: {
    height: 45,
    flexDirection: 'row',
    backgroundColor:'black',
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 9,
    marginBottom: 10,
    marginTop: 12,
    alignSelf: 'stretch',
    justifyContent: 'center'
  }
});