import React from 'react';
import toyService from '../services/toyService'

export class ToyEdit extends React.Component {
    state = {
        toy: null
    }

    componentDidMount() {
        console.log('match params: ', this.props.match.params);
        const { toyId } = this.props.match.params
        console.log('Id from match.params: ', toyId);
        
        let toy = toyService.getById(toyId)
        console.log('Toy in toy Edit: ', toy);
        
        this.setState({ toy })

    }

    render() {
        const { toy } = this.state

        if(!toy) return <h3>Loading....</h3>
        return (
            <div className="toy-edit">
                {/* <h3>Toy Preview</h3> */}
                <h1>{toy.name}</h1>
                <h2>{toy.price}</h2>
                <h3>Category: {toy.type}</h3>
                <h4>Instock? {toy.inStock}</h4>
                

            </div>
        )

    }
}
