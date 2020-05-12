import React from 'react';

import axios from 'axios';
import { connect } from 'react-redux'

import { loadToys, removeToy } from '../store/actions.js'
import toyService from '../services/toyService'
import { ToyList } from '../cmps/ToyList'
import { ToyFilter } from '../cmps/ToyFilter'


class ToyApp extends React.Component {

    state = {
        filterBy: null,
        sortBy: null
    }

    componentDidMount() {
        this.props.loadToys()
    }

    loadToys () {        
        this.props.loadToys(this.state.filterBy, this.state.sortBy);
    }

    onDetails = (id) => {
        this.props.history.push(`/toy/${id}`)
    }

    onAddToy = () => {
        this.props.history.push(`/toy/edit`)
    }

    onSetFilter = (filterBy) => {
        console.log('FILTER', filterBy);
        this.setState({ filterBy }, () => {
            this.loadToys();
        })
    }
    onSort = (sortBy) => {
        this.setState({ sortBy }, () => {
            this.loadToys();
        })
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
        return (
            <section>
                <ToyFilter onSetFilter={this.onSetFilter} onSort={this.onSort} />
                <div className="toy-app-container">
                    <button onClick={this.onAddToy}>Add Toy</button>
                    <ToyList toys={this.props.toys} onRemove={this.props.removeToy} onDetails={this.onDetails}></ToyList>
                    {/* <ToyList toys={toys} onEditToy={this.onEditToy}></ToyList> */}
                    {/* <button onClick={this.test}>Test</button> */}
                </div>
            </section>
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






