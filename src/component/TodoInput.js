// TextViewComponentの構築
import React, {Component} from 'react';
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    StyleSheet,
} from 'react-native'

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        padding: 20,
    },
    textInput: {
        flex: 3,
        backgroundColor: '#FFF',
        marginRight: 5,
    },
    button: {
        flex: 1,
        backgroundColor: '#008080',
        marginLeft: 5,
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 10,
        paddingBottom: 10,
    },
    buttonText: {
        color: '#FFF',
        fontWeight: '500',
    }
});

export default class TodoInput extends Component {
    // 初期化
    constructor(props) {
        super(props);

        // ref: Componentsの様々な情報
        this.ref = {};
    }

    // onPressメソッド
    _onPress = () => {
        this.props.onPress(this.ref._lastNativeText);
        this.ref.setNativeProps({ text: '' });
    }
    // 画面構築
    render() {
        // propsの受け取り
        // const { onPress } = this.props
        return(
            <View style={styles.container}>
                <TextInput
                    style={styles.textInput}
                    ref={(ref) => { this.ref = ref; }}
                />
                <TouchableOpacity
                    style={styles.button}
                    onPress={this._onPress}
                >
                    <Text style={styles.buttonText}>追加</Text>
                </TouchableOpacity>
            </View>
        );
    }
}