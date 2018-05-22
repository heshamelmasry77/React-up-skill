import React, {Component} from 'react';

import Note from './Note';
import FaPlus from 'react-icons/lib/fa/plus';

class Board extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: []
    };
    this.add = this.add.bind(this);
    this.eachNote = this.eachNote.bind(this);
    this.update = this.update.bind(this);
    this.remove = this.remove.bind(this);
    this.add = this.add.bind(this);
    this.nextId = this.nextId.bind(this);
  }

//Now for each item in the notes array we're going to
// pass in the note and we're going to perform a little check here.
// So what we're going to say is, if the note id is not equal to 'i',
// then we want to return the note.
// So if we're not updating the note we're just going to return it as-is.
// Otherwise, after the colon here, we're going to return a new object.
// That's going to pass in all of the keys of the note but it's going to overwrite
// the text for the note key. So the next text
// is going to come in here. Order printer ink and replace it with order new paper.

  update(newText, i) {
    console.log('updating item at index', i, newText);
    this.setState((prevState) => ({
      notes: prevState.notes.map(
          (note) => (note.id !== i) ? note : {...note, note: newText}
      )
    }))
  }

  remove(id) {
    console.log('removing item at id', id);
    this.setState((prevState) => ({
      notes: prevState.notes.filter(
          (note) => (note.id !== id)
      )
    }))
  }

  add(text) {
    this.setState((prevState) => (
        {
          notes:[
            ...prevState.notes,
            {
              id: this.nextId(),
              note: text
            }]
        }
    ))
  }

  //function to generate id

  nextId() {
    this.uniqueId = this.uniqueId || 0;
    return this.uniqueId++
  }

  eachNote(note, i) {
    return (<Note key={i} index={i} onChange={this.update} onRemove={this.remove}>{note.note}</Note>)
  }


  render() {
    return (
        <div className="board">
          {/*{this.state.notes.map((note, i) => {*/}
          {/*return <Note key={i} index={i} onChange={this.update}>{note.note}</Note>*/}
          {/*}*/}
          {/*)}*/}
          {this.state.notes.map(this.eachNote)}
          <button onClick={this.add.bind(null, 'new note')} id="add">
            <FaPlus/>
          </button>
        </div>
    )
  }
}

export default Board;
