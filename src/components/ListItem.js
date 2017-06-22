//import libs
import React, { Component } from 'react';
import { 
  Text, 
  TouchableWithoutFeedback, 
  View,
  LayoutAnimation
} from 'react-native';
import { connect } from 'react-redux';
import { CardSection } from './common';
import * as actions from '../actions';

// make comp
class ListItem extends Component {
  componentWillUpdate() {
    LayoutAnimation.spring();
  }

  renderExpansion() {
    const { library, expanded } = this.props;
    if (expanded) {
      return (
        <CardSection>
          <Text style={{ flex: 1 }}>
            {library.description}
          </Text>
        </CardSection>
      );
    }
  }
  render() {
    const { titleStyle } = styles;
    const { id, title } = this.props.library;
    //console.log(this.props);
    return (
      <TouchableWithoutFeedback
        onPress={() => this.props.selectLibrary(id)}
      >
        <View>
          <CardSection>
            <Text style={titleStyle}>{title}</Text>
          </CardSection>
          {this.renderExpansion()}
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

//style it
const styles = {
  titleStyle: {
    fontSize: 18,
    paddingLeft: 15
  }
};

// make it avai
const mapStateToProps = (state, ownProps) => {
  const expanded = state.selectedLibraryId === ownProps.library.id;
  return { expanded };
};

export default connect(mapStateToProps, actions)(ListItem);
