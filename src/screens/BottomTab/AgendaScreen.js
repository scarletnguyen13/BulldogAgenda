/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import { StyleSheet, ScrollView, FlatList } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import CollapsibleView from '../../components/CollapsibleView';
import TodoItem from '../../components/Items/TodoItem';
import { toggleTodo } from '../../actions/TodoActions';

class AgendaScreen extends Component {
  render() {
    const { todos } = this.props;
    return (
      <ScrollView style={styles.scrollStyle}>
        <CollapsibleView
          courseColor="#3E3E3E"
          height={50}
          courseBlock="Todo"
          expand={false}
          // eslint-disable-next-line react/no-children-prop
          children={(
            <FlatList
              data={todos.todoList}
              renderItem={({ item }) => {
                if (item.check === true) {
                  return (
                    <TodoItem
                      key={item.id}
                      item={item}
                      // eslint-disable-next-line react/destructuring-assignment
                      onChange={id => this.props.toggleTodo(id)}
                    />
                  );
                }
                return null;
              }}
              keyExtractor={item => item.id}
            />
          )}
        />
        <CollapsibleView
          courseColor="#3E3E3E"
          height={50}
          courseBlock="Completed"
          expand={false}
          // eslint-disable-next-line react/no-children-prop
          children={(
            <FlatList
              data={todos.todoList}
              renderItem={({ item }) => {
                if (item.check === false) {
                  return (
                    <TodoItem
                      key={item.id}
                      item={item}
                      // eslint-disable-next-line react/destructuring-assignment
                      onChange={id => this.props.toggleTodo(id)}
                    />
                  );
                }
                return null;
              }}
              keyExtractor={item => item.id}
            />
          )}
        />
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
  const { todos } = state;
  return { todos };
};

const mapDispatchToProps = dispatch => (
  bindActionCreators({
    toggleTodo
  }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(AgendaScreen);
