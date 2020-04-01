import React from 'react';

class Shelves extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isFetching: false,
      options:[{id:'a'}, {id:'b'}]
    }
  }

  componentDidMount() {
    this.setState({isFetching: true}, () => {
      fetch('http://localhost:3000/products')
      .then(res => res.json())
      .then(items => {
        this.setState({ options: items, isFetching: false})
      })
      .catch((err) => {
        return err
      })
    })
  }

  render () {
    if (this.state.isFetching === true) {
      return <h1>Loading...</h1>
    }

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
