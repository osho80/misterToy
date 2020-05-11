import React from 'react';

import axios from 'axios';
import { connect } from 'react-redux'

import {loadToys} from '../store/actions.js'
import toyService from '../services/toyService'
import { ToyList } from '../cmps/ToyList'

class ToyApp extends React.Component {
    

    componentDidMount() {
        this.props.loadToys()
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
                <ToyList toys={this.props.toys} ></ToyList>
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
    loadToys
}

export default connect(mapStateToProps, mapDispatchToProps)(ToyApp)






