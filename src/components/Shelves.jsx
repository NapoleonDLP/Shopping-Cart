import React from 'react';

class Shelves extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      options:[{id:'a'}, {id:'b'}]
    }
  }

  componentDidMount() {
    fetch('http:localhost:3000/products')
    .then((response) => response.json())
    .then((items) => {
      console.log(items);
      return items;
    })
    .then(items => {
      this.setState({ options: json});
    });
  }

  render () {
    return (
      <ul>
        {this.state.options.map((option) => (
          <li key={option.id}>{option.id}</li>
        ))}
      </ul>
    )
  }
}

export default Shelves;
