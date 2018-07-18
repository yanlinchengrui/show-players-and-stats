import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  Animated,
  Alert,
  Dimensions
} from 'react-native';

const window = Dimensions.get('window');

export default class PlayerComponent extends React.Component {

    // --------------------------------------------------------------

    constructor(props){
        super(props);
        this.state = {
            Points: new Animated.Value(0),
            Assists: new Animated.Value(0),
            Rebounds: new Animated.Value(0),
            Steals: new Animated.Value(0),
            Blocks: new Animated.Value(0),
            Minutes: new Animated.Value(0)
        }
    }

    componentDidMount() {

        const stats = {
            Points: (Number.parseInt(this.props.info.ppg)+1) * 8, 
            Assists : (Number.parseInt(this.props.info.apg)+1) * 8, 
            Rebounds: (Number.parseInt(this.props.info.rpg)+1) * 8, 
            Steals : (Number.parseInt(this.props.info.spg)+1) * 8, 
            Blocks : (Number.parseInt(this.props.info.bpg)+1) * 8,
            //Turnovers : ((Number.parseInt(this.props.info.turnovers) / (Number.parseInt(this.props.info.gamesPlayed))) + 1) * 8,
            Minutes : (Number.parseInt(this.props.info.mpg)+1) * 6
        };
        //Alert.alert(stats);
        const indicators = ['Points', 'Assists', 'Rebounds', 'Steals', 'Blocks', 'Minutes']
        Animated.parallel(indicators.map(item => {
            return Animated.timing(this.state[item], {
                                    toValue: stats[item],
                                    duration: 2000,
                                })
        })).start()

    }

    // --------------------------------------------------------------

    render() {
        
        const {Points, Assists, Rebounds, Steals, Blocks, Minutes} = this.state

        return(
            <View style = {{flexDirection: 'column', paddingTop: 65}}>

                <View style = {styles.zone}>
                    <Image
                        style={{width: 130, height: 130, alignSelf: 'center', borderRadius: 50, borderWidth: 1,
                        borderColor: 'white', marginBottom: 5, marginTop: 20, backgroundColor : 'white'}}
                        source={{uri: this.props.image}}
                    />
                    <Text style = {{alignSelf: 'center', fontSize : 20, fontStyle : 'italic', marginBottom: 10}}> {this.props.first} {this.props.last} </Text>
                </View>

                <Text style = {styles.content}>
                    <Text style = {styles.label}> Points </Text>
                    <Text style = {styles.data}>
                        {<Animated.View style={[styles.barStyles, styles.points, {width : Points}]} />} 
                        <Text style = {styles.dataNum}> {this.props.info.ppg} </Text>
                    </Text>
                </Text>

                <Text style = {styles.content}>
                    <Text style = {styles.label}> Rebounds </Text>
                    <Text style = {styles.data}>
                        {<Animated.View style={[styles.barStyles, styles.rebounds, {width : Rebounds}]} />} 
                        <Text style = {styles.dataNum}> {this.props.info.rpg} </Text>
                    </Text>
                </Text>

                <Text style = {styles.content}>
                    <Text style = {styles.label}> Assists </Text>
                    <Text style = {styles.data}>
                        {<Animated.View style={[styles.barStyles, styles.assists, {width : Assists}]} />} 
                        <Text style = {styles.dataNum}> {this.props.info.apg} </Text>
                    </Text>
                </Text>

                <Text style = {styles.content}>
                    <Text style = {styles.label}> Steals </Text>
                    <Text style = {styles.data}>
                        {<Animated.View style={[styles.barStyles, styles.steals, {width : Steals}]} />} 
                        <Text style = {styles.dataNum}> {this.props.info.spg} </Text>
                    </Text>
                </Text>

                <Text style = {styles.content}>
                    <Text style = {styles.label}> Blocks </Text>
                    <Text style = {styles.data}>
                        {<Animated.View style={[styles.barStyles, styles.blocks, {width : Blocks}]} />} 
                        <Text style = {styles.dataNum}> {this.props.info.bpg} </Text>
                    </Text>
                </Text>

                <Text style = {styles.content}>
                    <Text style = {styles.label}> Minutes </Text>
                    <Text style = {styles.data}>
                        {<Animated.View style={[styles.barStyles, styles.minutes, {width : Minutes}]} />} 
                        <Text style = {styles.dataNum}> {this.props.info.mpg} </Text>
                    </Text>
                </Text>
            
            </View>
        );

    }

  }

  const styles = StyleSheet.create({
    
    zone: {
        backgroundColor : 'gold',
        marginBottom : 10
    },

    data: {
        flex : 2,
        flexDirection: 'row'
    },
    dataNum: {
        color: 'grey',
        fontSize: 12
    },
    content: {
        flexDirection: 'column',
        marginBottom: 10,
    },
    label: {
        color: 'black',
        fontSize: 15,
        position: 'relative',
        marginLeft : 8
    },
    barStyles : {
        alignSelf: 'center',
        height: 12,
        borderRadius : 5
    },

    points: {
        backgroundColor: 'red'
    },
    assists: {
        backgroundColor: 'green'
    },
    rebounds: {
        backgroundColor: 'blue'
    },
    steals: {
        backgroundColor: 'mediumpurple'
    },
    blocks: {
        backgroundColor: 'deeppink'
    },
    turnovers: {
        backgroundColor: 'chocolate'
    },
    minutes: {
        backgroundColor: 'cyan'
    },

  });