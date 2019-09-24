import React, { Component } from 'react';
import ItemForm from './components/store/ItemForm';
import List from './components/store/List';
import Footer from './components/store/Footer';

class App extends Component {

  state = {
    items: [
      { id:1, name: 'TV', price: 9.99, completed: true},
      { id:2, name: 'DVD', price: 10.99, completed: true},
      { id:3, name: 'MAC', price: 11.99, completed: true},
    ]
  }

  setFilter = (filter) => {
    // filter: filter
this.setState({ filter })
}

  getUniqId = () => {
    //NOTE We are just using this as a helper function for id's since we aren't using a db yet
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
   }
 

  addItem = (item) => {
    const { name, price } = item
    const { items } = this.state
    const newItem = { name, price, complete: false, id: this.getUniqId() }
    this.setState({ items: [newItem, ...items] })
  }

  handleClick = (id) => {
  const { items } = this.state
  this.setState({
    items: items.map( item => {
      if (item.id === id) {
        return {
          ...item,
          complete: !item.complete
        }
      }
      return item
    })
  })
}

visibleItems = () => {
  const { items, filter } = this.state
  switch(filter) {
    case 'Active':
      return items.filter( t => !t.complete )
    case 'Completed':
      return items.filter( t => t.complete )
    default:
      return items
  }
}


  render() {
    const { items,filter } = this.state
    return(
      <div>
        <ItemForm addItem={this.addItem} />
        <List name={"Best Buy"} items={this.visibleItems()} itemClick={this.handleClick} />
        <Footer filter={filter} setFilter={this.setFilter} />
      </div>
    )
  }
}

export default App;
