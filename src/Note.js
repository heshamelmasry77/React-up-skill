import React, {Component} from 'react';
import './Note.css';
import FaPencil from 'react-icons/lib/fa/pencil';
import FaTrash from 'react-icons/lib/fa/trash';
import FaFloppy0 from 'react-icons/lib/fa/floppy-o';

class Note extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editing: false
    };

    this.edit = this.edit.bind(this);
    this.remove = this.remove.bind(this);
    this.renderForm = this.renderForm.bind(this);
    this.renderDisplay = this.renderDisplay.bind(this);
    this.save = this.save.bind(this);
  }

  edit() {
    console.log('edit note');
    this.setState({
      editing: true
    })
  }

  remove() {
    console.log('remove note');
    this.props.onRemove(this.props.index);
  }

  save(e) {
    e.preventDefault();
    this.props.onChange(this._newText.value, this.props.index);
    this.setState({
      editing: false
    })
  }

  renderForm() {
    return (
        <div className="note">
          <form onSubmit={this.save}>
            <textarea ref={(input) => {
              this._newText = input
            }}/>
            <button id="save" onClick={this.save}><FaFloppy0/></button>
          </form>
        </div>
    );
  }

  renderDisplay() {
    //jsx tags
    return (
        <div className="note">
          <p>{this.props.children}</p>
          <span>
            <button onClick={this.edit} id="edit"><FaPencil/></button>
            <button onClick={this.remove} id="remove"><FaTrash/></button>
          </span>
        </div>
    );
  }

  render() {
    return this.state.editing ? this.renderForm() : this.renderDisplay();

    // if (this.state.editing) {
    //   return this.renderForm();
    // } else {
    //   return this.renderDisplay();
    // }
  }
}

export default Note;
