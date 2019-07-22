import React from 'react';
import {
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
    SafeAreaView,
    Dimensions,
    Picker
} from 'react-native';

const { width: WIDTH } = Dimensions.get('window')

function Form(props) {
    if (!props.queryResponse) {
        return (
            <SafeAreaView style={styles.regform}>
                <Picker
                    selectedValue={props.SeasonPickerHolder}
                    style={styles.picker}
                    onValueChange={props.seasonhandler} >
                    <Picker.Item label="Season" value="" />
                    <Picker.Item label="Summer" value="summer" />
                    <Picker.Item label="Winter" value="winter" />

                </Picker>

                <Picker
                    selectedValue={props.FigurePickerHolder}
                    style={styles.picker}
                    onValueChange={props.figurehandler} >
                    <Picker.Item label="Figure" value="" />
                    <Picker.Item label="Slim" value="slim" />
                    <Picker.Item label="Normal" value="normal" />
                    <Picker.Item label="Healthy" value="healthy" />

                </Picker>

                <Picker
                    selectedValue={props.SkinPickerHolder}
                    style={styles.picker}
                    onValueChange={props.skinhandler} >
                    <Picker.Item label="Skin Complexion" value="" />
                    <Picker.Item label="Dark" value="dark" />
                    <Picker.Item label="Medium" value="medium" />
                    <Picker.Item label="Fair" value="fair" />

                </Picker>

                <Picker
                    selectedValue={props.HeightPickerHolder}
                    style={styles.picker}
                    onValueChange={props.heighthandler} >
                    <Picker.Item label="Height" value="" />
                    <Picker.Item label="Short" value="short" />
                    <Picker.Item label="Medium" value="medium" />
                    <Picker.Item label="Large" value="large" />

                </Picker>

                <TouchableOpacity style={styles.button} onPress={props.handleSubmit}>
                    <Text> Move Ahead </Text>
                </TouchableOpacity>




            </SafeAreaView >
        )
    }
    else {
        return (
            <SafeAreaView style={styles.outform}>
                {
                    props.data.map((r, i) => {
                        if (r.jeans) {
                            return (
                                <View key={i}>
                                    <Text>{r.jeans}</Text>
                                    <Text>{r.tee}</Text>
                                </View>)
                        }
                        else {
                            return (
                                <View key={i}>
                                    <Text>{r.avoid}</Text>
                                    <Text>{r.use}</Text>
                                    <Text>{r.optional}</Text>
                                </View>
                            )
                        }
                    }
                    )}
            </SafeAreaView>
        )
    }

}
const styles = StyleSheet.create({
    regform: {
        flex: 1,

        backgroundColor: "transparent"
    },
    outform: {
        flex: 1,
        marginTop: 180,
        marginBottom: 110,
        marginLeft: 35,
        marginRight: 30,
        justifyContent: 'center',
        backgroundColor: "red"
    },
    picker: {
        backgroundColor: '#D3D3D3',
        margin: 30
    },
    button: {
        borderRadius: 17,
        marginLeft: 15,
        margin: 20,
        width: WIDTH - 170,
        padding: 10,
        height: 40,
        alignItems: 'center',
        backgroundColor: 'brown'
    },
    output: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: 'red'

    }
})


export default Form;