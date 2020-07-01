import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Button,
  TouchableOpacity,
  FlatList,
} from 'react-native';

import WithAlgoliaList from '../hoc/WithAlgoliaList';
import WithLoader from '../hoc/WithLoader';

import Loader from '../component/Loader';
import {TurnOnLoader} from '../Actions';

class ListView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      noCall: 0,
      loading: true,
      isFetching: false,
    };
  }

  componentDidMount() {
    if (this.state.noCall == 0) {
      this.props.GetDataAPIDispatch();
      console.log('Called mount ;', this.props.List);
      this.setState({noCall: 1});
    }
    setTimeout(() => {
      this.setState({loading: false});
    }, 2500);
  }

  onRefresh() {
    this.setState({isFetching: true}, () => {
      this.props.GetDataAPIDispatch();
      this.setState({isFetching: false});
    });
  }

  render() {
    // console.log(' \n  ==== == = List  props ', this.props.List);

    const {list, Filter_req, temp_Filter} = this.props.List;

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
        <View style={{flexDirection: 'row'}}>
          <Text style={{justifyContent: 'center', alignItems: 'center'}}>
            Date Sort By {'             '}
          </Text>

          <Button title="ASC" onPress={() => this.props.GetFilterDate('ASC')} />
          <Text>{'             '}</Text>
          <Button
            title="DEAS"
            onPress={() => this.props.GetFilterDate('DESC')}
          />
        </View>

        <FlatList
          data={Filter_req == false ? list : temp_Filter}
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
              onPress={() => {
                alert('button pressed');
              }}>
              <Text style={{color: 'white', fontSize: 20}}>
                {'Title : ' + item.title}
              </Text>
              <Text style={{color: 'white', marginTop: 10, fontSize: 18}}>
                {'Author : ' + item.author}
              </Text>
              <Text style={{color: 'white', marginTop: 10, fontSize: 18}}>
                {'Date : ' + item.created_at}
              </Text>
              <Text style={{color: 'white', marginTop: 10, fontSize: 16}}>
                {'Link : ' + item.url}
              </Text>
            </TouchableOpacity>
          )}
        />
      </View>
    );
  }
}
export default WithLoader(WithAlgoliaList(ListView));

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
