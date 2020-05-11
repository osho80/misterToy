import React from 'react';
import { ToyPreview } from './ToyPreview'
import '../style/cmps/ToyList.css'

export function ToyList(props) {
    const { toys } = props
    console.log('ToyList props: ', props);
    
    
    return (
        <section className="toy-list">
            {toys.map(toy => { 
                return(

                <div className="toy-item" key={toy._id}>
                    <ToyPreview toy={toy} onDetails={props.onDetails} onRemove={props.onRemove} onEditToy={props.onEditToy}></ToyPreview>
                </div>
            )})}
        </section>
    )
}