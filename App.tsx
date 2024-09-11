import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Task } from './types/task';
import AddTask from './components/AddTaskModal';
import TaskList from './components/TaskList';

export default function App() {

  const [tasks, setTasks] = useState<Task[]>([]);

  const addTask = (title:string) => {
    setTasks(currentTasks => [...currentTasks, {
      id: Math.random().toString(), 
      title: title,
      isDone: false
    }])

    console.log(tasks);
  }

 function changeTaskToDone(id: string) {
    const newTasks = [...tasks];
    const task = newTasks.find(
      taskFind => taskFind.id === id
    );
   task!.isDone = !task?.isDone;
    setTasks(newTasks);
  }
  return (
    <View style={styles.container}>
        <AddTask add={addTask}></AddTask>
        <TaskList changeTaskToDone={changeTaskToDone} taskList={tasks}></TaskList>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'purple'
  },
});
