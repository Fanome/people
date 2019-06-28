import React from 'react';
import {StyleSheet, ScrollView, Text, View } from 'react-native';

//import Header from '../components/Header';
import PeopleList from '../components/PeopleList';

import axios from 'axios';

export default class PeoplePage extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      peoples: []
    };
  }

  componentDidMount(){
    axios
      .get('https://randomuser.me/api/?nat=br&results=20')
      .then(response => {
        const {results} = response.data;
        this.setState({
          peoples: results
        });
      })
  }

  render() {
    //this.props.navigation.navigate('PeopleDetail');
    return (
      <ScrollView>
        <PeopleList 
          peoples={this.state.peoples}
          onPressItem={pageParams => {
            this.props.navigation.navigate('PeopleDetail', pageParams);
          }}/>
      </ScrollView>
    );
  }
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
