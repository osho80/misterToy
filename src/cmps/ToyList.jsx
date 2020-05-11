import React from 'react';
import { ToyPreview } from './ToyPreview'

export function ToyList(props) {
    const { toys } = props
    var toysSliced = toys.slice(0, 4);
    console.log('ToysList props:', props);
    console.log('ToysList toys:', toysSliced);

    return (
        <section className="toy-list">
            {/* <h1>ToyPreview</h1> */}
            {toysSliced.map(toy => { 
                return(

                <div className="toy-item" key={toy._id}>
                    <ToyPreview toy={toy} onEditToy={props.onEditToy}></ToyPreview>
                </div>
            )})}
        </section>
    )
}