
import React, {
  Component,
  StyleSheet,
  View,
  Text,
  TextInput,
  ListView,
  Image,
  Button
} from 'react-native';


export default class TestApp extends Component {

  constructor(props) {
    super(props);
    var ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
    this.dataSource = ds.cloneWithRows( [ 'alpha', 'beta', 'charlie', 'delta', 'echo', 'foxtrot', 'golf', 'hotel', 'india', 'juliet' ] );
    this.showList = false;
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
            <Text style={styles.titleText}>Hello</Text>
          </View>
          { this.showList ? <ListView
            dataSource={this.dataSource}
            renderRow={this._renderRow}
          /> : null }
          <TextInput
            style={styles.description}
          />
          <Text style={ styles.saveButton }>Save</Text>
        </View>
      </View>
    );
  }
};


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
    padding: 8,
    backgroundColor: 'lightblue'
  },

  titleText: {
    fontSize: 20,
    textAlign: 'center'
  },

  description: {
    flex: 8,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 3,
    margin: 4
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
