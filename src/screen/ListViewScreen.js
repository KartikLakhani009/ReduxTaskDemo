import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Button,
  TouchableOpacity,
  FlatList,
  TextInput,
  Linking,
} from 'react-native';

import WithAlgoliaList from '../hoc/WithAlgoliaList';
import WithLoader from '../hoc/WithLoader';

import Loader from '../component/Loader';
import DialogBox from '../component/DialogBox';

// import Icon from 'react-native-vector-icons/FontAwesome5';

import _ from 'lodash';

const ITEM_HEIGHT = 400;

const contains = ({title, author}, query) => {
  var b = author.toLowerCase();
  var a = title.toLowerCase();

  console.log('title : ', title, 'b : ', b);

  if (a.includes(query) || b.includes(query)) {
    return true;
  }

  return false;
};

class ListView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search_Data: [],
      data: [],
      noCall: 0,
      loading: false,
      isFetching: false,
      alert_Visibility: false,
      alert_Data: {},
      text: '',
      searchError: '',
      search_req: false,
    };
  }

  componentDidMount() {
    if (this.state.noCall == 0) {
      this.props.GetDataAPIDispatch();
      console.log('Called mount ;', this.props.List);
      this.setState({noCall: 1});
      // this.setState({data: this.props.List.list});
    }
    setTimeout(() => {
      this.setState({loading: false});
    }, 2500);
  }

  onRefresh() {
    this.setState({isFetching: true}, () => {
      this.props.GetDataAPIDispatch();
      // this.setState({data: this.props.List.list});
      this.setState({search_req: false});
      this.setState({isFetching: false});
    });
  }

  OpenBox(item) {
    this.setState({alert_Visibility: true});
    this.setState({alert_Data: item});
  }

  getItemLayout = (data, index) => ({
    length: ITEM_HEIGHT,
    offset: ITEM_HEIGHT * index,
    index,
  });

  SearchFilterFunction = text => {
    const query = text.toLowerCase();
    if (query.length !== 0) {
      this.setState({search_req: true});
      const results = _.filter(this.props.List.list, e => {
        return contains(e, query);
      });

      console.log('Result : ', results);

      this.setState({
        search_Data: results,
      });
    } else {
      this.setState({search_req: false});
    }

    // console.log('Fdata L ', fData);
    this.setState({text: query});
  };

  CloseSearchFun = () => {
    this.setState({search_req: false, Filter_req: false});

    this.setState({text: ''});
  };

  ListViewItemSeparator = () => {
    //Item sparator view
    return (
      <View
        style={{
          height: 0.3,
          width: '90%',
          backgroundColor: '#080808',
        }}
      />
    );
  };

  DateSort = type => {
    var data = this.props.GetFilterDate(type);
    console.log('Data From Sort :  ', data);
    this.setState({
      temp_Filter: data,
      Filter_req: true,
    });
    // return null;
  };

  render() {
    // console.log(' \n  ==== == = List  props ', this.props.List);

    const {list, Filter_req, temp_Filter} = this.props.List;

    const {alert_Data, searchError, search_req, search_Data} = this.state;

    return (
      <View style={styles.container}>
        {this.state.loading == true ? (
          <Loader loading={this.state.loading} />
        ) : null}
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#52a1d1',
            height: 50,
          }}>
          <Text style={{color: '#fff', fontSize: 20, fontWeight: 'bold'}}>
            APP_NAME
          </Text>
        </View>
        <View>
          <TextInput
            style={styles.textInputStyle}
            onChangeText={text => this.SearchFilterFunction(text)}
            value={this.state.text}
            underlineColorAndroid="transparent"
            placeholder="Search Here"
          />
          <TouchableOpacity
            style={{
              position: 'absolute',
              right: 10,
              top: 5,
            }}
            onPress={() => this.CloseSearchFun()}>
            <Text style={{fontSize: 22, fontWeight: 'bold'}}>X</Text>
          </TouchableOpacity>
        </View>
        <View style={{flexDirection: 'row'}}>
          <Text style={{justifyContent: 'center', alignItems: 'center'}}>
            Sort
          </Text>

          <Button title="ASC" onPress={() => this.DateSort('ASC')} />
          <Text>{'             '}</Text>
          <Button title="DEAS" onPress={() => this.DateSort('DESC')} />

          {/* <TouchableOpacity style={{flexDirection: 'row'}}>
            <Text>Date</Text>
            <Icon name="sort-amount-down" size={25} />
          </TouchableOpacity>

          <TouchableOpacity style={{flexDirection: 'row'}}>
            <Text>Date</Text>
            <Icon name="sort-amount-up" size={25} />
          </TouchableOpacity> */}
        </View>

        <FlatList
          data={
            Filter_req == false && search_req == false
              ? list
              : search_req == true
              ? search_Data
              : temp_Filter
          }
          extraData={this.state}
          keyExtractor={(item, index) => index.toString()}
          onRefresh={() => this.onRefresh()}
          refreshing={this.state.isFetching}
          renderItem={({item}) => (
            <TouchableOpacity
              style={{
                minWidth: 150,
                // height: 250,
                padding: 10,
                // alignItems: 'center',
                // justifyContent: 'center',
                backgroundColor: '#2AC062',
                display: 'flex',
                borderRadius: 5,
                shadowColor: '#2AC062',
                shadowOpacity: 0.4,
                shadowRadius: 20,
                shadowOffset: {height: 10, width: 5},
                borderBottomColor: '#fff',
                borderBottomWidth: 2,
              }}
              onPress={() => this.OpenBox(item)}>
              <Text style={{color: 'white', fontSize: 20}}>
                {'Title : ' + item.title}
              </Text>
              <Text style={{color: 'white', marginTop: 10, fontSize: 18}}>
                {'Author : ' + item.author}
              </Text>
              <Text style={{color: 'white', marginTop: 10, fontSize: 18}}>
                {'Date : ' + item.created_at}
              </Text>
              <Text
                style={{color: 'white', marginTop: 10, fontSize: 16}}
                onPress={() => {
                  //on clicking we are going to open the URL using Linking
                  Linking.openURL(item.url);
                }}>
                {'Link : ' + item.url}
              </Text>
            </TouchableOpacity>
          )}
          getItemLayout={this.getItemLayout}
          initialNumToRender={4}
          maxToRenderPerBatch={4}
          windowSize={10}
          ItemSeparatorComponent={this.ListViewItemSeparator}
          enableEmptySections={true}
        />

        {this.state.alert_Visibility == true ? (
          <DialogBox
            item={this.state.alert_Data}
            Alert_Visibility={true}
            CloseModel={() => this.setState({alert_Visibility: false})}
          />
        ) : null}
      </View>
    );
  }
}
export default WithLoader(WithAlgoliaList(ListView));

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  textInputStyle: {
    height: 40,
    borderWidth: 1,
    paddingLeft: 10,
    borderColor: '#009688',
    backgroundColor: '#FFFFFF',
  },
});
