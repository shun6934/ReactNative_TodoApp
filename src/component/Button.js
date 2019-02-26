// Buttonのコンポーネント
import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#008080',
    paddingTop: 5,
    paddingBottom: 5,
    paddingRight: 10,
    paddingLeft: 10,
    marginRight: 5,
    marginLeft: 5,
  },
  textStyle: {
    color: 'white',
  },
});

// SFC
const Button = (props) => {
  const {
    onPress, children, style,
  } = props;
  return (
    <TouchableOpacity onPress={onPress} style={[styles.button, style]}>
      <Text style={[styles.textStyle]}>{children}</Text>
    </TouchableOpacity>
  );
};

Button.propTypes = {
  onPress: PropTypes.func.isRequired,
  children: PropTypes.string.isRequired,
  style: PropTypes.shape({
    backgroundColor: PropTypes.string,
  }).isRequired,
};

export default Button;
