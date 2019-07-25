import React from 'react';
import {
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
    Dimensions,
    Picker
} from 'react-native';

const { Width } = Dimensions.get('window')
/*{
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
                    )}*/
function Form(props) {
    if (!props.queryResponse) {
        return (
            <View style={styles.regform}>
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
                    style={[styles.picker, { width: '70%' }]}
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

                <TouchableOpacity style={[styles.button, { fontWeight: 700 }]} onPress={props.handleSubmit}>
                    <Text style={{ textAlign: 'center', fontFamily: 'sans-serif' }}> Show Me! </Text>
                </TouchableOpacity>




            </View >
        )
    }
    else {
        return (
            <View style={styles.outform}>
                <View style={styles.comp2}>
                    <View style={styles.comp_in}>

                    </View>
                </View>
                <View style={styles.comp1}>

                </View>
            </View>
        )
    }

}
const styles = StyleSheet.create({
    regform: {
        marginTop: '85%',
        marginLeft: '25%',
        width: '58%',
        height: 340,
        backgroundColor: "transparent"

    },
    picker: {
        backgroundColor: 'transparent',
        margin: 2.5,
        width: '40%',
        height: '55%'
    },
    button: {
        borderTopLeftRadius: 10,
        borderBottomLeftRadius: 10,
        borderTopRightRadius: 50,
        borderBottomRightRadius: 50,
        marginLeft: 10,
        margin: 20,
        width: 125,
        paddingLeft: 1,
        height: 35,
        justifyContent: 'center',
        backgroundColor: 'brown'
    },
    outform: {
        width: '100%',
        height: 700,
        flexDirection: 'row',
        backgroundColor: "red",
    },
    comp1: {
        marginTop: '30%',
        margin: 2,
        backgroundColor: 'blue',
        borderRadius: 25,
        width: '67%',
        height: '70%',
        opacity: 0.5

    },
    comp2: {
        marginTop: 5,
        backgroundColor: 'green',
        width: '32%',
    },
    comp_in: {
        backgroundColor: 'yellow',
        width: '90%',
        height: '30%',
        marginTop: '320%',
        marginLeft: '10%'
    }
})


export default Form;