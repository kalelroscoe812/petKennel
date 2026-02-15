import React, { Component } from 'react';
import ChildComponent from './ChildComponent';
import { initialData } from './data';

class App extends Component {
  constructor(props) {
    super(props);

 
    this.state = {
      pets: initialData
    };
  }


  handleInteract = (id) => {
    const updatedPets = this.state.pets.map(pet => {
      if (pet.id === id) {
        return {
          ...pet,
          image: "https://www.baldivisvet.com.au/wp-content/uploads/2017/10/happy-dog-on-grass1920.jpg", 
          status: "Happy 🐶❤️"
        };
      }
      return pet;
    });

    this.setState({ pets: updatedPets });
  };

  render() {
    return (
      <div style={{ padding: "40px", fontFamily: "Arial" }}>
        <h1>🐾 Pet Kennel Dashboard</h1>

        <div style={{ display: "flex", gap: "20px", marginTop: "20px" }}>
          
          {this.state.pets.map(pet => (
            <ChildComponent
              key={pet.id}
              id={pet.id}
              name={pet.name}
              image={pet.image}
              status={pet.status}
              onInteract={this.handleInteract}
            />
          ))}

        </div>
      </div>
    );
  }
}

export default App;
