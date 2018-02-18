import React, { Component } from 'react';
import { Text, View, Image, StyleSheet,
         Dimensions, ScrollView } from 'react-native';
import { Navigation } from 'react-native-navigation';
import { Button } from 'react-native-elements';
// TODO REPLACE WITH MY OWN TOP BAR
import ProfileTabBar from '../widgets/ProfileTabBar';
import FunFact from '../widgets/FunFact';

Navigation.registerComponent('example.ProfileTabBar', () => ProfileTabBar);

const avatarBlank = require('../../img/Avatar_Blank.png');

class HomeTab extends Component {
  static navigatorStyle = {
    drawUnderNavBar: true,
    navBarTranslucent: true
  };

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.navigator.setStyle({
      navBarCustomView: 'example.ProfileTabBar',
      navBarComponentAlignment: 'center',
      navBarCustomViewInitialProps: { title: 'Send Account Info (TODO)' }
    });
  }

  addFunFact() {

  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.rows}>
          <Image
            style={{ width: 50, height: 50 }}
            source={avatarBlank}
          />
          <Text style={styles.welcome}>
              17 | Male | he/his/him
          </Text>
        </View>
        <View style={styles.scrollStyle}>
        {/*contentContainerStyle={styles.scrollStyle}*/}
          <ScrollView>
            <FunFact
              title={'Fun Fact'}
              fact={'The boiling point of water is 212F'}
            />
            <FunFact
              title={'Personal Fact'}
              fact={"I don't enjoy looking at the sun"}
            />
            <FunFact
              title={'Mysterious Fact'}
              fact={'I know where it is'}
            />
          </ScrollView>
        </View>
        <Button
          raised
          icon={{ name: 'envira', type: 'font-awesome' }}
          title='Share a new fun fact!'
          onPress={this.addFunFact}
          backgroundColor='orange'
          //Dimensions.get('window').width
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    // TODO FIX PADDING
    paddingTop: 100
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 5,
  },
  username: {
    fontSize: 20,
    textAlign: 'center',
    margin: 5,
    color: 'white',
    backgroundColor: 'black'
  },
  facts: {
    //flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  rows: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start'
  },
  avatarStyle: {
    width: 50,
    height: 50,
    resizeMode: 'contain'
  },
  scrollStyle: {
    flex: 4,
    padding: 0,
    margin: 0
  }
});

export default HomeTab;
