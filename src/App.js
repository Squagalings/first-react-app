import './App.css';
import { useState } from 'react'
// import React from 'react';
import Title from './components/Title'
import Modal from './components/Modal'
import EventList from './components/EventList'
import NewEventForm from './components/NewEventForm';


function App() {
  const [showModal, setShowModal] = useState(false)
  const [showEvents, setShowEvents] = useState(true)
  const [events, setEvents] = useState([
    // {title: "mario's birthday bash", id: 1},
    // {title: "bowser's live stream", id: 2},
    // {title: "race on moo moo farm", id: 3}
  ])

  const addEvent = (event) => {
    setEvents((prevEvents) => {
      return [...prevEvents, event]
    })
    setShowModal(false)
  }

  const handleClick = (id) => {
    setEvents((prevEvents) => {
      return prevEvents.filter((event) => {
        return id !== event.id
      })
    })
    console.log(id)
  }

  const subtitle = "All the latest events in Marioland"

  return (

    <div className="App">

      <Title title="Local News" subtitle={subtitle}/>
      {showEvents && (
        <div>
        <button onClick={() => setShowEvents(false)}>hide events</button>
      </div>

      )}

      {!showEvents && (
      <div>
        <button onClick={() => setShowEvents(true)}>show events</button>
      </div>

      )}
      {showEvents && <EventList events={events} handleClick={handleClick} />}

      {showModal && <Modal isSalesModal={true}>
        <NewEventForm addEvent={addEvent} />
        {/* <h2>Terms and Conditions</h2>
        <p>We respect your privacy and blah blah blah so therefore only use cookies to improve your experience plz accept the Terms and Conditions to go on or else I will set Goose and Swan on you</p> */}
        {/* <a href="#"> find out more...</a> */}
      </Modal>}
      <div>
        <button onClick={() => setShowModal(true)}>Add New Event</button>
      </div>
    </div> 

    );
}

export default App;