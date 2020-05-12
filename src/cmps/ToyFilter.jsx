import React from 'react'

export class ToyFilter extends React.Component {

    state = {
        filter: {
            toyName: '',
            toyType: '',
            isInStock: ''
        },
        sortBy:null
    }

    handleChange = (ev) => {
        let { name, value } = ev.target;
        value = ev.target.type === 'checkbox' ? ev.target.checked : value;
        this.setState(prevState => ({ filter: { ...prevState.filter, [name]: value } }), () => {
            this.props.onSetFilter(this.state.filter)
        })

    }

    onSort = (sortBy)=>{
        this.setState({sortBy},()=>{this.props.onSort(this.state.sortBy)})
    }

    render() {
        return (
            <section className="toy-filter">
                <h2>Filter</h2>
                <div>
                <label>
                   Name:
                        <input className="search-input" type="text" name="toyName" value={this.state.toyName} onChange={this.handleChange} />
                </label>
                </div>
                <div>
                <label>
                    Type:
                    <select className="type-input" name="toyType" value={this.state.toyType} onChange={this.handleChange}>
                        <option value="All">All</option>
                        <option value="Educational">Educational</option>
                        <option value="Funny">Funny</option>
                        <option value="Adult">Adult</option>
                    </select>
                </label>
                </div>
                <div>
                <label>
                    In Stock:
                        <input className="inStock-input" type="checkbox" name="isInStock" checked={this.state.isInStock} onChange={this.handleChange} />

                </label>
                </div>
                <div>
                <label>
                    Sort By:
                        <button className="btn" onClick={()=>this.onSort('name')}>Name</button>
                        <button className="btn" onClick={()=>this.onSort('price')}>Price</button>
                </label>
                </div>

            </section>
        )

    }    

}