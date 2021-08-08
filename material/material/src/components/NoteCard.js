import React from 'react';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import IconButton from '@material-ui/core/IconButton';
import DeleteOutlined from '@material-ui/icons/DeleteOutlined';
import Typography from '@material-ui/core/Typography';

function NoteCard({ note, handleDelete }) {
  return (
    <div>
      <Card elevation={1}>
        <CardHeader action={
          <IconButton onClick={ () => handleDelete(note.id)}>
          <DeleteOutlined />
        </IconButton>
        }
        title={note.title}
        subheader={note.category}
        />
        <CardContent>
          <Typography variant="body2" color="textSecondary">
            {note.details}
          </Typography>
        </CardContent>
      </Card>
    </div>
  )
}

export default NoteCard
