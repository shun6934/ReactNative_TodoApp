// ListViewComponentの構築
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFF',
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 10,
    paddingRight: 10,
    marginTop: 5,
    marginBottom: 5,
    minHeight: 50,
  },
  text: {
    color: '#333',
    marginTop: 5,
    marginBottom: 5,
  },
});

// SFC(Stateless Functional Component)
const TodoItem = (props) => {
  // propsとして渡された値を受け取る
  const { text } = props;

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{text}</Text>
    </View>
  );
};

// 渡されたpropsの型を明示
TodoItem.propTypes = {
  text: PropTypes.string.isRequired,
};

export default TodoItem;
