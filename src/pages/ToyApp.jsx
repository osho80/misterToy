import React from 'react';

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

    render() {
        const {toys} = this.state
        if(!toys) return <h3>Loading</h3>
        return(
            <ToyList toys={toys} onEditToy={this.onEditToy}></ToyList>
        )
    }

}




