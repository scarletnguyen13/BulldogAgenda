import React, { Component } from 'react';
import { StyleSheet, ScrollView, FlatList } from 'react-native';
import CollapsibleView from '../../components/CollapsibleView';
import TodoItem from '../../components/Items/TodoItem';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { toggleTodo } from '../../actions/TodoActions';

class AgendaScreen extends Component {
  render() {
    return (
      <ScrollView 
          style={styles.scrollStyle}>
        <CollapsibleView 
            courseColor='#3E3E3E'
            height={50}
            courseBlock='Todo'
            expand={false}
            children={
              <FlatList
                data={this.props.todos.todoList}
                renderItem={({ item }) => {
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
                }}
                keyExtractor={(item) => item.id}
              />
            }/>
        <CollapsibleView 
            courseColor='#3E3E3E'
            height={50}
            courseBlock='Completed'
            expand={false}
            children={
              <FlatList
                data={this.props.todos.todoList}
                renderItem={({ item }) => {
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
                }}
                keyExtractor={(item) => item.id}
              />
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