import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { connect } from 'react-redux';

class LibraryList extends Component {
  renderList() {
    return this.props.libraries.map(library => {
      return <Text>{library.title}</Text>;
    });
  }
  render() {
    // console.log(this.props);
    return (
      <View>
        {this.renderList()}
      </View>
    );
  }
}

const mapStateToProps = state => {
  //console.log(state);
  return { libraries: state.libraries };
};

export default connect(mapStateToProps)(LibraryList);
