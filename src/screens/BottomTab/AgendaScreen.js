import React, { Component } from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import CollapsibleView from '../../components/CollapsibleView';
import TodoItem from '../../components/Items/TodoItem';

function randomNumGenerator() {
  return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
}

class AgendaScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [
        {
          description: 'Lab 20A Write Up',
          id: randomNumGenerator(),
          check: true
        },
        {
          description: 'Lab 20A Test',
          id: randomNumGenerator(),
          check: true
        },
      ]
    }
    this.onTodoChange = this.onTodoChange.bind(this);
  }

  onTodoChange(id, check) {
    this.state.todos.map((item, index) => {
      if (item.id === id) {
        this.setState(state => (state.todos[index].check = !check, state))
      }
    })
  }
  

  render() {
    console.log(this.state);
    return (
      <ScrollView 
          style={styles.scrollStyle}>
        <CollapsibleView 
            courseColor='#3E3E3E'
            height={50}
            courseBlock='Todo'
            expand={false}
            children={
              this.state.todos.map((item) => {
                if (item.check === true) {
                  return (<TodoItem key={item.id} id={item.id} description={item.description} check={item.check} onChange={this.onTodoChange}/>)
                } else {
                  return null;
                }
              })
            }/>
        <CollapsibleView 
            courseColor='#3E3E3E'
            height={50}
            courseBlock='Completed'
            expand={false}
            children={
              this.state.todos.map((item, index) => {
                if (item.check === false) {
                  return (<TodoItem key={item.id} id={item.id} description={item.description} check={item.check} onChange={this.onTodoChange}/>)
                } else {
                  return null;
                }
              })
            }/>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  scrollStyle: {
    width: '100%'
  },
});

export default AgendaScreen;