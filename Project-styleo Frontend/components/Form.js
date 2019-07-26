import React from 'react';
import {
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
    Dimensions,
    Picker,
    Image,
    ScrollView
} from 'react-native';
import Modal from 'react-native-modal';

//const { Width } = Dimensions.get('window')

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
                <Modal
                    isVisible={props.visibleModal === 1}
                    backdropColor={'white'}
                    backdropOpacity={0.3}
                    backdropOpacity={1}
                    coverScreen={true}
                    animationIn={'zoomInDown'}
                    animationOut={'zoomOutUp'}
                    animationInTiming={1000}
                    animationOutTiming={1000}
                    backdropTransitionInTiming={1000}
                    backdropTransitionOutTiming={1000}
                >
                    <View style={styles.modalContent}>
                        <Image source={require('../assets/829.gif')} style={{ width: 50, height: 50 }} />
                    </View>
                </Modal>





            </View >
        )
    }
    else {
        return (
            <View style={styles.outform}>
                <View style={styles.comp2}>
                    <Image
                        style={styles.stretch}
                        source={require('../assets/character.png')}
                        resizeMode='contain'
                        resizeMethod='auto'

                    />
                </View>
                <ScrollView style={styles.comp1}
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={{ marginLeft: 13, width: '90%', backgroundColor: 'yellow', borderRadius: 25 }}
                >
                    {
                        props.data.map((r, i) => {
                            if (r.jeans) {
                                return (
                                    <View key={i} style={{ fontFamily: 'sans-serif' }}>
                                        <Text style={{ fontSize: 21, fontWeight: '700' }}>
                                            According to choice of your body structure,skin complexion and height , here are some suggestions from our side to look for.
                                    </Text>
                                        <Text style={{ fontSize: 21, marginTop: 5 }}>
                                            During {r.name}, you should go for {r.tee} coloured tee's with {r.jeans} jeans.
                                    </Text>
                                        <Text style={{ marginTop: 18, backgroundColor: 'transparent', fontWeight: 'bold', fontSize: 23, fontFamily: 'Roboto' }}>
                                            What to persue :
                                    </Text>
                                    </View>)
                            }
                            if (r.field == 'figure') {
                                return (
                                    <View key={i} style={{ backgroundColor: 'transparent', marginTop: 4 }} >
                                        <Text style={{ fontSize: 21 }}>With your <Text style={{ fontSize: 22, fontWeight: '700' }}>{r.name}</Text> figure, we think that <Text style={{ fontSize: 22, fontWeight: '700' }}>{r.use}</Text> tee's might go well along with <Text style={{ fontSize: 22, fontWeight: '700' }}>{r.avoid}</Text> on your tee.(although its optional).</Text>
                                    </View>
                                )
                            }
                            if (r.field == 'skin') {
                                return (
                                    <View key={i} style={{ fontSize: 24, backgroundColor: 'transparent', marginTop: 4 }} >
                                        <Text style={{ fontSize: 21 }}>Apart from your physique, your skin complexion also plays a vital role in your dressing style.</Text>
                                        <Text style={{ fontSize: 21 }}>According to your choice, we suggest you to have tee's of <Text style={{ fontSize: 22, fontWeight: '700' }}>{r.use}</Text> and try to avoid <Text style={{ fontSize: 22, fontWeight: '700' }}>{r.avoid}</Text> tee's.</Text>
                                    </View>
                                )
                            }
                            if (r.field == 'height') {
                                return (
                                    <View key={i} style={{ backgroundColor: 'transparent', marginTop: 4 }} >
                                        <Text style={{ fontSize: 21 }}>And with your height try to have <Text style={{ fontSize: 22, fontWeight: '700' }}>{r.use}</Text> tee and try to avoid <Text style={{ fontSize: 22, fontWeight: '700' }}>{r.avoid}</Text> tee.</Text>
                                    </View>
                                )
                            }
                        }
                        )}
                </ScrollView>
            </View>
        )
    }

}
const styles = StyleSheet.create({
    regform: {
        flex: 1,

        marginTop: '90%',
        marginLeft: '35%',
        width: '58%',
        backgroundColor: "transparent"

    },
    picker: {
        backgroundColor: 'yellow',
        opacity: 0.5,
        marginTop: 2.5,
        width: '40%',
        height: '55%'
    },
    button: {
        borderTopLeftRadius: 10,
        borderBottomLeftRadius: 10,
        borderTopRightRadius: 50,
        borderBottomRightRadius: 50,
        marginLeft: 10,
        marginTop: 20,
        width: 125,
        paddingLeft: 1,
        height: 35,
        justifyContent: 'center',
        backgroundColor: 'brown'
    },
    modalContent: {
        backgroundColor: 'transparent',
        justifyContent: 'center',
        alignItems: 'center',

    },
    outform: {
        width: '100%',
        height: 700,
        flexDirection: 'row',
        backgroundColor: "transparent",
    },
    comp1: {
        marginTop: '30%',
        margin: 2,
        backgroundColor: 'yellow',
        borderRadius: 18,
        width: '67%',
        height: '70%',
        opacity: 0.5


    },
    comp2: {
        marginTop: 5,
        backgroundColor: 'transparent',
        width: '32%',
    },
    comp_in: {
        backgroundColor: 'transparent',
        width: '90%',
        height: '30%',
        marginTop: '320%',
        marginLeft: '10%'
    },
    stretch: {
        flex: 1,
        backgroundColor: 'transparent',
        marginTop: 410,
        width: 110,

    }

})


export default Form;