import React, { Component } from 'react';

class ItemForm extends Component {
    state = { name: '', price: '' }

    handleChange = (e) => {
        const { name, value } = e.target
        this.setState({ [name]: value })
      }

    handleSubmit = (e) => {
        e.preventDefault()
        this.props.addItem(this.state)
        this.setState( {name: '', price:''})
    }

    render() {
        const { name, price } = this.state
        return (
            <form onSubmit={this.handleSubmit}>
                <input 
                onChange={this.handleChange}
                required
                placeholder='Add Item'
                name='name'
                value={name}
                />
               <input onChange={this.handleChange} name='price' placeholder='Item price 9.99' value={price} required/>
               <input type="submit" />
            </form>
        )
    }
}

export default ItemForm;
