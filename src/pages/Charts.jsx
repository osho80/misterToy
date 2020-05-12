import React from 'react';
import { connect } from 'react-redux'
import { loadToys } from '../store/actions.js'

import { Doughnut, Bar } from 'react-chartjs-2';


class Charts extends React.Component {

    state = {
        toys: null
    }

    componentDidMount() {
        this.props.loadToys();
        console.log('Charts props: ', this.props);

    }

    componentDidUpdate(prevProps) {
        if (prevProps.toys !== this.props.toys) this.setState({ toys: this.props.toys })
        this.getBooksPerCategory();

    }

    getBooksPerCategory = () => {
        const { toys } = this.state
        var dataToPresent = []
        if (!toys) return
        if (toys) {
            const funny = toys.filter(toy => toy.type === 'Funny').length;
            const adult = toys.filter(toy => toy.type === 'Adult').length;
            const educational = toys.filter(toy => toy.type === 'Educational').length;
            dataToPresent.push(funny, adult, educational)
            // console.log('Funny', funny);
            // console.log('Adult', adult);
            // console.log('data', dataToPresent);
        }
        return dataToPresent
    }

    getBooksByPrice = () => {
        const { toys } = this.state
        var dataToPresent = []
        if (!toys) return
        if (toys) {
            const cheap = toys.filter(toy => toy.price <= 20).length;
            const medium = toys.filter(toy => toy.price > 20 && toy.price <= 60).length;
            const expensive = toys.filter(toy => toy.price > 60).length;
            dataToPresent.push(cheap, medium, expensive, 0)
            // console.log('Funny', funny);
            // console.log('Adult', adult);
            console.log('data', dataToPresent);
        }
        return dataToPresent
    }

    render() {

        const dataDoughnut = {
            labels: [
                'Funny',
                'Adult',
                'Educational'
            ],
            datasets: [{
                data: this.getBooksPerCategory(),
                backgroundColor: [
                    '#FF6384',
                    '#36A2EB',
                    '#FFCE56'
                ],
                hoverBackgroundColor: [
                    '#FF6384',
                    '#36A2EB',
                    '#FFCE56'
                ]
            }]
        };

        const data = {
            labels: ['Cheap (<=20$)', 'Medium (21-60$)', 'Expensive (>60$)', 'ignore'],
            datasets: [
                {
                    label: 'basic order',
                    backgroundColor: 'rgba(255,99,132,0.2)',
                    borderColor: 'rgba(255,99,132,1)',
                    borderWidth: 1,
                    hoverBackgroundColor: 'rgba(255,99,132,0.4)',
                    hoverBorderColor: 'rgba(255,99,132,1)',
                    data: this.getBooksByPrice()
                }
            ]
        };

        return (
            <>
                <div>
                    <h2>Books per Category</h2>
                    <Doughnut data={dataDoughnut} width={100} options={{ maintainAspectRatio: false }} />
                </div>
                <div>
                    <h2>Books by Price</h2>
                    <Bar data={data} width={100} height={50} options={{ maintainAspectRatio: false }} />
                </div>

            </>)

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

export default connect(mapStateToProps, mapDispatchToProps)(Charts)






