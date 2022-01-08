import "./App.css";
import { Component } from "react";
import { CardList } from "./components/card-list/card-list";
import { SearchBox } from "./components/search-box/search-box";

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField: "",
    };
  }

  // fill the monsters array
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((users) => this.setState({ monsters: users }));
  }

  render() {
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter((monster) => {
      return monster.name.toLowerCase().includes(searchField.toLowerCase());
    });

    const handleChange = (e) => {
      this.setState({ searchField: e.target.value });
    };

    return (
      <div className="App">
        <h1> Monsters Rolodex</h1>
        <SearchBox placeholder="search monsters" handleChange={handleChange} />
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;
