import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  FlatList,
  Alert
} from 'react-native';
import { getCertainPlayerInfo, getCertainPlayerImage } from '../fetching/GetPlayerInfo';
import PlayerComponent from './PlayerComponent';

// export default class AllPlayersComponent extends React.Component {

//   render() {
  
//     return(
//     <View style={{flex: 1, paddingTop:5}}>
//       <FlatList
//       data={this.props.standard}
//       renderItem={({item}) => 
//       <Text>
//         {item.lastName}, {item.firstName}: {item.personId}
//       </Text>}
//       keyExtractor={(item, index) => index.toString()}
//       />
//     </View>
//     );

//   }
// }

// -----------------------------------------------------------------------------

export default class AllPlayersComponent extends React.Component {

  constructor(props){

    super(props);
    this.state = {
      isLoading: true,
    }
    
  }

  FlatListItemSeparator = () => {
    return (
      <View
        style={{
          height: 1.2,
          width: "100%",
          backgroundColor: "green",
          overflow: 'hidden'
        }}
      />
    );
  }

  GetFlatListItem(item){

    getCertainPlayerInfo(item.personId).then((res) => {
      if(res == null) {
        Alert.alert("No Profile Exists");
      }
      else {

        //Alert.alert(res.league.standard.stats.careerSummary);

        this.props.navigator.push({
          title: 'Career Summary',
          passProps: {info : res.league.standard.stats.careerSummary, 
                      image : getCertainPlayerImage(item.lastName, item.firstName),
                      first : item.firstName,
                      last : item.lastName
                    },
          component: PlayerComponent
        });
      }
    });

  }

  render() {
  
    return(
      <View style={{flex: 1, backgroundColor : 'gold',}}>
        <FlatList
          data={this.props.standard}

          ItemSeparatorComponent = {this.FlatListItemSeparator}
          
          renderItem={({item}) => 
          <Text style = {styles.each} onPress = {this.GetFlatListItem.bind(this, item)}>
            {item.lastName}, {item.firstName}
          </Text>}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
    );

  }
}

const styles = StyleSheet.create(
  {
    each: {
      marginLeft : 5,
      fontSize : 15, 
      fontStyle : 'italic'
    }
});