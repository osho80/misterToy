import React from 'react';


// export function ToyPreview(props) {
//     console.log('ToyPreview props:', props);
//     return (
//         <h1>Toy Preview</h1>
//     )
// }



export class ToyPreview extends React.Component {
    state = {
        toy: null
    }

    componentDidMount() {
        console.log('ToyPreview props:', this.props);
        const { toy } = this.props
        this.setState({ toy })
    }

    render() {
        const { toy } = this.props

        // if(!toy)
        return (
            <div className="toy-preview">
                {/* <h3>Toy Preview</h3> */}
                <h1>{toy.name}</h1>
                <h2>{toy.price}</h2>
                <h3>Category: {toy.type}</h3>
                <h4>Instock? {toy.inStock}</h4>
                <button onClick={()=> this.props.onEditToy(toy._id)}>Details</button>

            </div>
        )

    }
}