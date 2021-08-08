import React, { useState, useEffect } from 'react'
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import NoteCard from '../components/NoteCard';

const Notes = () => {
  const [notes, setNotes] = useState([])

  useEffect(() => {
    fetch(`http://localhost:8000/notes`)
      .then(res => res.json())
      .then(data => setNotes(data))
  }, []) //get this data once

  const handleDelete = async (id) => {
    await fetch('http://localhost:8000/notes/'+ id, { // at the end: / !!!
      method: 'DELETE'
    })
    const newNotes = notes.filter( note => note.id !== id);
    setNotes(newNotes)
  }

  return (
    <Container>
      <Grid container spacing={3}>

      {notes.map(note => (
        // breakpoints is built-in
          <Grid item xs={12} md={6} lg={4} key={note.id}> 
            <NoteCard note={ note } handleDelete={handleDelete}/>
          </Grid>
      ))}
      </Grid>
    </Container>
  )
}

export default Notes
