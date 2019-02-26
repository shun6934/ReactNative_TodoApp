// ListViewComponentの構築
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import Button from './Button';

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
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  text: {
    color: '#333',
    marginTop: 5,
    marginBottom: 5,
  },
  doneText: {
    textDecorationLine: 'line-through',
  },
  deleteButton: {
    backgroundColor: '#800000',
  },
  left: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

// SFC(Stateless Functional Component)
const TodoItem = (props) => {
  // propsとして渡された値を受け取る
  const {
    text, onDone, onDelete, done,
  } = props;
  return (
    <View style={styles.container}>
      <View style={styles.left}>
        <Button onPress={onDone}>{done ? 'Undo' : 'Done'}</Button>
        <Text style={[styles.text, done && styles.doneText]}>{text}</Text>
      </View>
      <Button style={styles.deleteButton} onPress={onDelete}>
        Delete
      </Button>
    </View>
  );
};

// 渡されたpropsの型を明示
TodoItem.propTypes = {
  text: PropTypes.string.isRequired,
  onDone: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
  done: PropTypes.bool.isRequired,
};

export default TodoItem;
