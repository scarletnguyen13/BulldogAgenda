import React, { Component } from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import CollapsibleView from '../../components/CollapsibleView';
import TodoItem from '../../components/Items/TodoItem';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { toggleTodo } from '../../actions/TodoActions';
import store from '../../store/index';

class AgendaScreen extends Component {
  render() {
    console.log(store.getState());
    return (
      <ScrollView 
          style={styles.scrollStyle}>
        <CollapsibleView 
            courseColor='#3E3E3E'
            height={50}
            courseBlock='Todo'
            expand={false}
            children={
              this.props.todos.todoList.map((item) => {
                if (item.check === true) {
                  return (
                    <TodoItem 
                      key={item.id}
                      item={item}
                      onChange={(id) => this.props.toggleTodo(id)}/>
                  )
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
              this.props.todos.todoList.map((item) => {
                if (item.check === false) {
                  return (
                    <TodoItem 
                      key={item.id}
                      item={item}
                      onChange={(id) => this.props.toggleTodo(id)}/>
                  )
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

const mapStateToProps = (state) => {
  const { todos } = state
  return { todos }
};

const mapDispatchToProps = dispatch => (
  bindActionCreators({
    toggleTodo
   }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(AgendaScreen);