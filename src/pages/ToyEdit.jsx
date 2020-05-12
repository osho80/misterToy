import React from 'react';
import toyService from '../services/toyService'
import { connect } from 'react-redux'
import { loadToy, saveToy } from '../store/actions.js'


class ToyEdit extends React.Component {
    // state = {
    //     name: null,
    //     price: null,
    //     type: null,
    //     inStock: null
    // }

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
            // setTimeout(function(){ console.log('ToyEdit toy in props ', toy);  }, 3000);
            // //console.log('ToyEdit toy in props ', this.props.toy); // Why do I get null?
            // this.setState({ toy: this.props.toy }, ()=> console.log('barbie: ', this.state)
            // )
        } else {
            return
        }


        // let toy = toyService.getById(toyId)
        // console.log('Toy in toy Edit: ', toy);

        // this.setState({ toy })

    }

    componentDidUpdate(prevProps) {
        if (prevProps.toy !== this.props.toy) this.setState({ toy: this.props.toy })
        //console.log('ToyEdit toy in props ', this.props.toy);
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
        // const { toy } = this.state

        // if (!toy) return <h3>Loading....</h3>
        // return (
        //     <div className="toy-edit">
        //         {/* <h3>Toy Preview</h3> */}
        //         <h1>{toy.name}</h1>
        //         <h2>{toy.price}</h2>
        //         <h3>Category: {toy.type}</h3>
        //         <h4>Instock? {toy.inStock}</h4>


        //     </div>
        // )

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

