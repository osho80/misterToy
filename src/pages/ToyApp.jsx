import React from 'react';

import axios from 'axios';
import { connect } from 'react-redux'

import {loadToys} from '../store/actions.js'
import toyService from '../services/toyService'
import { ToyList } from '../cmps/ToyList'

export class ToyApp extends React.Component {
    state = {
        toys: null
    }

    componentWillMount() {
        this.loadToys()
    }



    loadToys = () => {
        var toys = toyService.query();
        this.setState({ toys })
    }

    onEditToy = (id) => {
        console.log('onEditToy in ToyApp got: ', id);
        this.props.history.push(`/toy/edit/${id}`)
        
        // var toy = toyService.getById(id)
        // return toy
    }
    
    test = () => {
        return axios.get('http://localhost:3000/toy')
            .then(res => res.data)
            .then(toys => {
                console.log(toys);
            })
    }

    render() {
        const {toys} = this.state
        if(!toys) return <h3>Loading</h3>
        return(
            <div className="toy-app-container">
            <ToyList toys={toys} onEditToy={this.onEditToy}></ToyList>
            <button onClick={this.test}></button>
            </div>
        )
    }

}




