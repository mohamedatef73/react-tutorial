import React, { Component } from 'react';
import Table from './Table';
import Form from './form';
import Api from './Api';

class App extends Component {
    state = {
        characters: []
    };

    removeCharacter = index => {
        const { characters } = this.state;
    
        this.setState({
            characters: characters.filter((character, i) => { 
                return i !== index;
            })
        });
    }

    handleSubmit = character => {
        this.setState({characters: [...this.state.characters, character]});
    }

    render() {
        const { characters } = this.state;
        
        return (
            <div className="container">
                <h1>React Tutorial</h1>
                <p>Add a character with a name and a job to the table.</p>
                <Table
                    characterData={characters}
                    removeCharacter={this.removeCharacter}
                />
                <h3>Add New</h3>
                <Form handleSubmit={this.handleSubmit} />
            </div>
        );
    }
}

export default App;

// class App extends Component{
//   state = {
//     characters:[
//       {
//         name: 'Charlie',
//         job: 'Janitor',
//       },
//       {
//         name: 'Mac',
//         job: 'Bouncer',
//       },
//       {
//         name: 'Dee',
//         job: 'Aspring actress',
//       },
//       {
//         name: 'Dennis',
//         job: 'Bartender',
//       },
//     ],
//   }
// }
// class App extends Component {
//   state = {
//     characters:[],
// }
// removeCharacter = index =>{
//   const {character} = this.state;
//   this.setState({
//     character:character.filter((character,i) =>{
//       return i !== index;
//     })
//   })
// }
// handleSubmit = character =>{
//   this.setState({character: [...this.state.characters,character]})
// }
//   render() {
//     const { characters } = this.state
  
//     return (
//       <div className="container">
//         <Table characterData={characters} removeCharacter={this.removeCharacter} />
//         <Form handleSubmit ={this.removeCharacter} />
//       </div>
//     )
//   }
// }
// removeCharacter = index => {
//   const {characters} = this.state
//   this.setState({
//     characters: characters.filter ((character,i) =>{
//       return i !== index
//     })
//   }
//   )
//   return (
//     <div className="container">
//       <Table characterData={characters} removeCharacter={this.removeCharacter} />
//     </div>
//   )
// }
// }

// class App extends Component {
//   render() {
//     const characters = [
//       {
//         name: 'Charlie',
//         job: 'Janitor',
//       },
//       {
//         name: 'Mac',
//         job: 'Bouncer',
//       },
//       {
//         name: 'Dee',
//         job: 'Aspring actress',
//       },
//       {
//         name: 'Dennis',
//         job: 'Bartender',
//       },
//     ]

//     return (
//       <div className="container">
//         <Table characterData={characters} />
//       </div>
//     )
//   }
// }

// export default App
