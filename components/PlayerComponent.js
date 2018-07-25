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

    constructor(props){
        super(props);
        this.state = {
            Points: new Animated.Value(0),
            Assists: new Animated.Value(0),
            Rebounds: new Animated.Value(0),
            Steals: new Animated.Value(0),
            Blocks: new Animated.Value(0),
            Turnovers : new Animated.Value(0),
            Minutes: new Animated.Value(0)
        }
    }

    componentDidMount() {

        const stats = {
            Points: Number.parseFloat(this.props.info.ppg) * 8.5, 
            Assists : Number.parseFloat(this.props.info.apg) * 8.5, 
            Rebounds: Number.parseFloat(this.props.info.rpg) * 8.5, 
            Steals : Number.parseFloat(this.props.info.spg) * 8.5, 
            Blocks : Number.parseFloat(this.props.info.bpg) * 8.5,
            Turnovers : Number.parseFloat(this.props.info.turnovers/this.props.info.gamesPlayed) * 8.5,
            Minutes : Number.parseFloat(this.props.info.mpg) * 6.5
        };
        
        //Alert.alert(stats);
        const indicators = ['Points', 'Assists', 'Rebounds', 'Steals', 'Blocks', 'Turnovers', 'Minutes'];
        
        Animated.parallel(indicators.map(item => {
            return Animated.timing(this.state[item], {
                                    toValue: stats[item],
                                    duration: 3000,
                                })
        })).start()
    }

    render() {
        
        const {Points, Assists, Rebounds, Steals, Blocks, Turnovers, Minutes} = this.state;

        return(
            <View style = {styles.main}>

                <View style = {styles.zone}>
                    <Image
                        style={styles.photo}
                        source={{uri: this.props.image}}
                    />
                    <Text style = {styles.name}> {this.props.first} {this.props.last} </Text>
                    <Text style = {styles.jersey}> {this.props.jersey} </Text>
                </View>

                <Text style = {styles.content}>
                    <Text style = {styles.label}> Points </Text>
                    <Text style = {styles.data}>
                        <Animated.View style={[styles.barStyles, styles.points, {width : Points}]} /> 
                        <Text style = {styles.dataNum}> {this.props.info.ppg} </Text>
                    </Text>
                </Text>

                <Text style = {styles.content}>
                    <Text style = {styles.label}> Rebounds </Text>
                    <Text style = {styles.data}>
                        <Animated.View style={[styles.barStyles, styles.rebounds, {width : Rebounds}]} /> 
                        <Text style = {styles.dataNum}> {this.props.info.rpg} </Text>
                    </Text>
                </Text>

                <Text style = {styles.content}>
                    <Text style = {styles.label}> Assists </Text>
                    <Text style = {styles.data}>
                        <Animated.View style={[styles.barStyles, styles.assists, {width : Assists}]} /> 
                        <Text style = {styles.dataNum}> {this.props.info.apg} </Text>
                    </Text>
                </Text>

                <Text style = {styles.content}>
                    <Text style = {styles.label}> Steals </Text>
                    <Text style = {styles.data}>
                        <Animated.View style={[styles.barStyles, styles.steals, {width : Steals}]} /> 
                        <Text style = {styles.dataNum}> {this.props.info.spg} </Text>
                    </Text>
                </Text>

                <Text style = {styles.content}>
                    <Text style = {styles.label}> Blocks </Text>
                    <Text style = {styles.data}>
                        <Animated.View style={[styles.barStyles, styles.blocks, {width : Blocks}]} /> 
                        <Text style = {styles.dataNum}> {this.props.info.bpg} </Text>
                    </Text>
                </Text>

                <Text style = {styles.content}>
                    <Text style = {styles.label}> Turnovers </Text>
                    <Text style = {styles.data}>
                        <Animated.View style={[styles.barStyles, styles.turnovers, {width : Turnovers}]} /> 
                        <Text style = {styles.dataNum}> {Number.parseFloat(this.props.info.turnovers/this.props.info.gamesPlayed).toFixed(1)} </Text>
                    </Text>
                </Text>

                <Text style = {styles.content}>
                    <Text style = {styles.label}> Minutes </Text>
                    <Text style = {styles.data}>
                        <Animated.View style={[styles.barStyles, styles.minutes, {width : Minutes}]} /> 
                        <Text style = {styles.dataNum}> {this.props.info.mpg} </Text>
                    </Text>
                </Text>

                <View>
                    <Image
                        style={styles.team}
                        source={{uri: this.props.team}}
                    />
                </View>
            
            </View>
        );
    }
  }

  const styles = StyleSheet.create({
    
    main: {
        flexDirection: 'column', 
        paddingTop: 65
    },
    zone: {
        backgroundColor : 'gold',
        marginBottom : 10
    },
    photo:{
        width: 130, 
        height: 130, 
        alignSelf: 'center', 
        borderRadius: 50, 
        borderWidth: 1,
        borderColor: 'white', 
        marginTop: 20, 
        marginBottom: 8, 
        backgroundColor : 'white'
    },
    name: {
        alignSelf: 'center', 
        fontSize : 20, 
        fontStyle : 'italic', 
    },
    jersey: {
        alignSelf: 'center', 
        fontSize : 17, 
        fontStyle : 'italic', 
        marginBottom: 5
    },
    team: {
        width: 155, 
        height: 155, 
        alignSelf: 'center', 
        borderRadius: 50, 
        borderWidth: 1,
        borderColor: 'white', 
        marginTop: 20,  
        backgroundColor : 'white'
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