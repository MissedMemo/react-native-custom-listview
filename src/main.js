
import Categories from './categories';

import React, {
  Component,
  StyleSheet,
  View,
  Text,
  TextInput,
  ListView,
  Image,
  TouchableHighlight
} from 'react-native';


export default class TestApp extends Component {

  constructor(props) {

    super(props);
    
    var ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
    this.dataSource = ds.cloneWithRows( Categories.getCategories() );
    
    this.state = { showList: false };
  }


  _renderRow(rowData) {
    return <View style={styles.listRow}>
             <Image source={ rowData.icon } />
             <Text style={styles.listRowText}>{ rowData.category }</Text>
           </View>;
  }


  render() {
    return (
      <View style={styles.container} >

        <Image style={styles.image}
          source = { require('./Traveler.jpg') }
        />

        <View style={styles.footer} >

          <View style={styles.titleBar}>
            <TouchableHighlight style={styles.categoryButton} onPress={ this.showCategoryList }>
              <Image source={ require('./test.png') } />
            </TouchableHighlight>
            <Text style={styles.titleText}>Hello</Text>
          </View>

          { this.state.showList ? <ListView
            dataSource={this.dataSource}
            renderRow={this._renderRow}
            style={ styles.list }
          /> : null }

          { this.state.showList ? null : <TextInput
            style={styles.description}
          />}

          <Text style={ styles.saveButton }>Save</Text>

        </View>
      </View>
    );
  }

  
  showCategoryList = () => {
    this.setState({ showList: !this.state.showList });
  }

}


const styles = StyleSheet.create({

  container: {
    flex: 1,
    paddingTop: 30,
    backgroundColor: '#F5FCFF',
  },

  image: {
    flex: 3,
    resizeMode: 'cover'
  },

  footer: {
    flex: 2
  },

  titleBar: {
    flex: 1,
    flexDirection: 'row',
    padding: 8,
    backgroundColor: 'lightblue',
    alignItems: 'center',
    justifyContent: 'center'
  },

  categoryButton: {
    width: 30,
    height: 29,
    overflow: 'hidden',
    margin: 2
  },

  titleText: {
    flex: 1,
    textAlign: 'center',
    fontSize: 20
  },

  description: {
    flex: 8,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 3,
    margin: 4
  },

  list: {
    flex: 8
  },

  listRow: {
    padding: 8,
    borderWidth: 1,
    borderColor: '#DDDDDD',
    flexDirection: 'row',
    justifyContent: 'center'
  },

  listRowText: {
    flex: 1,
    fontSize: 20,
    marginLeft: 8
  },

  saveButton: {
    flex: 1,
    fontSize: 20,
    alignSelf: 'center',
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 3,
    marginBottom: 8,
    paddingTop: 5,
    paddingLeft: 8,
    paddingBottom: 5,
    paddingRight: 8
  }

});
