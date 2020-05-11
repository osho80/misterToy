import React from 'react';

import { loadToy } from '../store/actions.js'
import { connect } from 'react-redux'
import '../style/cmps/ToyDetails.css'

class ToyDetails extends React.Component {

    componentDidMount() {
        const { toyId } = this.props.match.params
        this.props.loadToy(toyId)
    }



    render() {
        const { toy } = this.props;
        if(!toy) return <h3>Loading...</h3>
        return(
            <div className="toy-details">
                <h1>{toy.name}</h1>
                <h2>{toy.price}$</h2>
                <h3>Category: {toy.type}</h3>
                {toy.inStock ? <h4 className="instock">We have it!!</h4> : 
                <h4 className="out-of-stock">Sorry... out of stock</h4>}
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
    loadToy
}

export default connect(mapStateToProps, mapDispatchToProps)(ToyDetails)




