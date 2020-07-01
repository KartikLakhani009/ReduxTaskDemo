import React, {Component} from 'react';

import {
  StyleSheet,
  View,
  Text,
  Modal,
  Button,
  TouchableOpacity,
  Alert,
  Linking,
} from 'react-native';

export default class DialogBox extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {item, Alert_Visibility, CloseModel} = this.props;

    return (
      <View style={styles.MainContainer}>
        <Modal
          visible={Alert_Visibility}
          transparent={true}
          animationType={'fade'}
          onRequestClose={() => {
            this.props.CloseModel();
          }}>
          <View
            style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <View style={styles.Main_View}>
              <TouchableOpacity
                style={{
                  position: 'absolute',
                  right: 10,
                  top: 5,
                }}
                onPress={() => CloseModel()}>
                <Text style={{fontSize: 22, fontWeight: 'bold'}}>X</Text>
              </TouchableOpacity>
              <Text style={styles.Title}>{'Title : ' + item.title}</Text>

              <View
                style={{width: '100%', height: 2, backgroundColor: '#fff'}}
              />

              <Text style={[styles.TextStyle, {marginTop: 8}]}>
                {'Author : ' + item.author}
              </Text>

              <View
                style={{width: '100%', height: 1, backgroundColor: '#fff'}}
              />

              <Text style={[styles.TextStyle, {marginTop: 8}]}>
                {'Date :' + item.created_at}
              </Text>

              <View
                style={{width: '100%', height: 1, backgroundColor: '#fff'}}
              />

              <Text
                style={[styles.TextStyle, {marginTop: 8}]}
                onPress={() => {
                  //on clicking we are going to open the URL using Linking
                  Linking.openURL(item.url);
                }}>
                {'URL : ' + item.url}
              </Text>

              {/* <Text
                style={[styles.TextStyle, {marginTop: 10}]}
                onPress={() => CloseModel()}>
                close
              </Text> */}
            </View>
          </View>
        </Modal>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },

  Main_View: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#009688',
    height: 400,
    width: '90%',
    borderWidth: 1,
    borderColor: '#fff',
    borderRadius: 7,
  },

  Title: {
    fontSize: 25,
    color: '#fff',
    // textAlign: 'center',
    padding: 10,
    // height: '28%',
  },

  Message: {
    fontSize: 22,
    color: '#fff',
    textAlign: 'center',
    padding: 10,
    height: '42%',
  },

  buttonStyle: {
    width: '50%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },

  TextStyle: {
    color: '#fff',
    // textAlign: 'center',
    fontSize: 22,
    // marginTop: -5,
  },
});
