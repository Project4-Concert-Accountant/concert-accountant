import React from 'react'
import firebase from '../firebase'
import { getDatabase, ref, push } from 'firebase/database'

const EventInfo = ({ eventArray, listKey, updatePrice }) => {


    const database = getDatabase(firebase);
    const dbRef = ref(database, `/${listKey}/concert`);

    const addEvent = (eventItem) => {
        push(dbRef, eventItem);
    }



    return (
        <div className='container'>
            {
                Object.keys(eventArray).length === 0 ? "this is empty" :

                    eventArray.map(singleEvent => {
                        return (
                            <div key={singleEvent.id} className='redBorder'>
                                <p>{singleEvent.name}</p>
                                <div className="imgContainer">
                                    <img src={singleEvent.images[2].url} alt={`a poster for ${singleEvent.name}`} />
                                </div>
                                {/* {props.children} */}
                                <p>{singleEvent.dates.start.localDate} at {singleEvent.dates.start.localTime}</p>
                                {/* <p>{singleEvent.priceRanges && singleEvent.priceRanges[0].min > 0 ? singleEvent.priceRanges[0].min : 'free event'}</p> */}
                                <p>{singleEvent.priceRanges[0].min}</p>
                                <button onClick={() => { addEvent(singleEvent); updatePrice(singleEvent.priceRanges[0].min); }}>Add this show</button>
                            </div>
                        )
                    })
            }
        </div>
    )
}

export default EventInfo