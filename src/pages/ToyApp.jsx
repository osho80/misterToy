import React from 'react';

import axios from 'axios';
import { connect } from 'react-redux'

import {loadToys, removeToy} from '../store/actions.js'
import toyService from '../services/toyService'
import { ToyList } from '../cmps/ToyList'

class ToyApp extends React.Component {
    

    componentDidMount() {
        this.props.loadToys()
    }

    onDetails = (id) => {
        this.props.history.push(`/toy/${id}`)
    }

    onAddToy = () => {
        this.props.history.push(`/toy/edit`)
    }

    // loadToys = () => {
    //     var toys = toyService.query();
    //     this.setState({ toys })
    // }

    // onEditToy = (id) => {
    //     console.log('onEditToy in ToyApp got: ', id);
    //     this.props.history.push(`/toy/edit/${id}`)
        
    //     // var toy = toyService.getById(id)
    //     // return toy
    // }
    
    test = () => {
        return axios.get('http://localhost:3000/toy')
            .then(res => res.data)
            .then(toys => {
                console.log(toys);
            })
    }

    render() {
        return(
            <div className="toy-app-container">
                <button onClick={this.onAddToy}>Add Toy</button>
                <ToyList toys={this.props.toys} onRemove={this.props.removeToy} onDetails={this.onDetails}></ToyList>
                {/* <ToyList toys={toys} onEditToy={this.onEditToy}></ToyList> */}
                {/* <button onClick={this.test}>Test</button> */}
            </div>
        )
    }

}

const mapStateToProps = (state) => {
    return {
        toys: state.toys
    }
}

const mapDispatchToProps = {
    loadToys,
    removeToy
}

export default connect(mapStateToProps, mapDispatchToProps)(ToyApp)






