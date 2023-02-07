import { StyleSheet, Text, View, ScrollView, KeyboardAvoidingView, ImageBackground, TextInput, TouchableOpacity, Alert, Keyboard } from 'react-native';
import React, { useState } from 'react';
import Todo from './components/task';

export default function App() {
  const [task, setTask] = useState('')
  const [taskList, setTaskList] = useState([])

  const handleTask = () => {
    if (task == null || task == " ") {
      Alert.alert('Task Empty')
    } else {
      setTaskList([...taskList, task])
      setTask(null)
      Keyboard.dismiss()
    }
  }
  const handleDelete = (id) => {
    const newArray = taskList.filter((task, index) => index !== id)
    setTaskList(newArray)
  }
  return (
    <View style={styles.container}>
      <ScrollView style={styles.layoutContainer}>
        <Text style={styles.title}>TO-DO LIST</Text>
        <View>
          {
            taskList.map((elem, index) => {
              return (
                <TouchableOpacity key={index}
                  onPress={() => handleDelete(index)}>
                  <View><Todo text={elem} /></View>
                </TouchableOpacity>
              )
            })
          }
        </View>
      </ScrollView>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'iOS' ? 'padding' : 'height'}
        style={styles.writeTaskContainer}>

        <TextInput style={styles.input} placeholder={'New task'}
          onChangeText={(value) => setTask(value)} value={task} />

        <TouchableOpacity

          onPress={handleTask}>
          <ImageBackground source={require('../Todo-list/assets/clickBackground.gif')} style={styles.addTasks}></ImageBackground>

        </TouchableOpacity>
      </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFB26B',
    alignItems: 'center'
  },

  layoutContainer: {
    marginTop: 30,
  },

  title: {
    fontSize: 50,
    fontWeight: 'bold',
    color: 'white',
    margin: 'auto'
  },

  input: {
    width: 250,
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: 'white',
    paddingLeft: 10,
    marginHorizontal: 10,
    marginRight: 20,
    color: '#1A120B'
  },

  writeTaskContainer: {
    bottom: 50,
    flexDirection: 'row',
    marginHorizontal: 10,
  },

  addTasks: {
    width: 60,
    height: 50,
    borderRadius: 45,
    justifyContent: 'center',
    alignItems: 'center'

  },
});



