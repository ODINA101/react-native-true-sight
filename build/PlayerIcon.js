import * as React from 'react';
import { View, Image, TouchableOpacity, StyleSheet } from 'react-native';
import * as PropTypes from 'prop-types';
export default class PlayerIcon extends React.PureComponent {
    render() {
        return (<View style={styles.iconWrapper}>
        <TouchableOpacity onPress={this.props.onPress}>
          <Image resizeMode="contain" source={this.props.iconSource} style={styles.icon}/>
        </TouchableOpacity>
      </View>);
    }
}
PlayerIcon.propTypes = {
    iconSource: PropTypes.number.isRequired,
    onPress: PropTypes.func.isRequired,
    iconColor: PropTypes.string
};
PlayerIcon.defaultProps = {
    iconColor: '#fafafa'
};
const styles = StyleSheet.create({
    iconWrapper: {
        padding: 5
    },
    icon: {
        margin: 15,
        width: 30,
        height: 30,
        tintColor: '#fafafa'
    }
});
