/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

// モジュールをimport
import React, {Component} from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  FlatList
} from 'react-native';
import TodoInput from './src/component/TodoInput';
import TodoItem from './src/component/TodoItem';

// Platformの設定(ios・android)
const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

// Componentの構築(部品)
// type Props = {};
export default class App extends Component<{/* Props */}> {
  // 初期化
  constructor(props) {
    super(props);

    // state設定
    this.state = {
      list: [],
    };
  }

  // onPressメソッド作成
  _onPress = text => {
    const list = [].concat(this.state.list);

    list.push({
      key: Date.now(),
      text: text,
      done: false,
    });

    // state更新(setState)
    this.setState({
      list: list
    })
  };

  // 画面構築
  render() {
    const { list } = this.state;
    return (
      <View style={styles.container}>
        <View style={styles.main}>
          <TodoInput onPress={this._onPress}/>
          <View style={styles.todoListContainer}>
            <FlatList
              style={styles.todoList}
              data={list}
              renderItem={({ item }) => <TodoItem {...item} /> }
            />
          </View>
        </View>
      </View>
    );
  }
}

// StyleSheetの設定(UI)
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
    paddingTop: 40,
    alignItems: 'center',
  },
  main: {
    flex: 1,
    maxWidth: 400,
    alignItems: 'center',
  },
  todoListContainer: {
    flexDirection: 'row',
    flex: 1,
  },
  todoList: {
    paddingLeft: 10,
    paddingRight: 10,
  }
});
