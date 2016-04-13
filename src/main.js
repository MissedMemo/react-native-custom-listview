
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
    //this.showCategoryList = this.showCategoryList.bind(this);

    var ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
    this.dataSource = ds.cloneWithRows( [ 'alpha', 'beta', 'charlie', 'delta', 'echo', 'foxtrot', 'golf', 'hotel', 'india', 'juliet' ] );
    
    this.state = { showList: false };
  }


  _renderRow(rowData) {
    return <Text style={styles.row}>{rowData}</Text>;
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

  row: {
    fontSize: 24,
    padding: 8,
    borderWidth: 1,
    borderColor: '#DDDDDD'
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
