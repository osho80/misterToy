import React from 'react';
import toyService from '../services/toyService'
import { connect } from 'react-redux'
import { loadToy, saveToy } from '../store/actions.js'


class ToyEdit extends React.Component {
    

    state = {
        toy: null
    }

    componentDidMount() {
        console.log('match params: ', this.props.match.params);
        const { toyId } = this.props.match.params
        const { toy } = this.props
        console.log('Id from match.params: ', toyId);
        if (toyId) {
            this.props.loadToy(toyId)
            
        } else {
            return
        }
    }

    componentDidUpdate(prevProps) {
        if (prevProps.toy !== this.props.toy) this.setState({ toy: this.props.toy })
    }

    render() {
        var { toy } = this.state
        return( (!toy) ? <h3>Loading</h3> : 
        // return (
            <div>
                <h1>Here to Edit...</h1>
                <h1>{toy.name}</h1>
                <h2>{toy.price}</h2>
                <h3>Category: {toy.type}</h3>
            </div>
        )
       

    }
}


const mapStateToProps = (state) => {
    return {
        toy: state.currToy
    }
}

const mapDispatchToProps = {
    loadToy,
    saveToy
}

export default connect(mapStateToProps, mapDispatchToProps)(ToyEdit)

