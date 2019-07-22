import React, { Component } from 'react';
import { ImageBackground } from 'react-native';
import axios from 'axios';
import Form from './Form';

const url = 'https://scontent-bom1-2.cdninstagram.com/vp/67dd0194857ec03b7e0647e0205358d7/5DB84F8B/t51.2885-15/e35/30087453_2042320109364749_548429265993990144_n.jpg?_nc_ht=scontent-bom1-2.cdninstagram.com'

class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            seasonname: '',
            figurename: '',
            skinname: '',
            heightname: '',
            data: [],
            queryResponse: false
        },
            this.handleSubmit = this.handleSubmit.bind(this)
    }

    seasonHandler = (itemValue, itemIndex) => {
        this.setState({ seasonname: itemValue })
        //console.log(this.state.seasonname)
    }

    figureHandler = (itemValue, itemIndex) => {
        this.setState({ figurename: itemValue })
    }

    skinHandler = (itemValue, itemIndex) => {
        this.setState({ skinname: itemValue })
    }

    heightHandler = (itemValue, itemIndex) => {
        this.setState({ heightname: itemValue })
    }



    handleSubmit() {
        let queryData = this.state
        console.log(queryData)
        axios.post('https://project-styleo2.herokuapp.com/query', queryData)
            .then((res) => {
                this.setState({ data: res.data, queryResponse: true })
                console.log(this.state.queryResponse)
            })
            .catch(err => console.log(err));
    }


    render() {
        const { queryResponse, data, seasonname, figurename, skinname, heightname } = this.state;
        return (
            <ImageBackground source={{ uri: url }} style={{ width: '100%', height: '100%' }}>
                <Form
                    SeasonPickerHolder={seasonname}
                    FigurePickerHolder={figurename}
                    SkinPickerHolder={skinname}
                    HeightPickerHolder={heightname}
                    seasonhandler={this.seasonHandler}
                    figurehandler={this.figureHandler}
                    skinhandler={this.skinHandler}
                    heighthandler={this.heightHandler}
                    handleSubmit={this.handleSubmit}
                    data={data}
                    queryResponse={queryResponse}

                />
            </ImageBackground>
        )
    }
}



export default Home;