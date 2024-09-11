import { FlatList, Image, Pressable, Text, View } from "react-native";
import { Task } from "../types/task";





interface TaskListProps{
    taskList : Task[]
    changeTaskToDone:(id: string) => void
}


const TaskList = (props : TaskListProps) => {
  return (

    <FlatList data={props.taskList} renderItem={task => 
      
        <View style={({
            width: '100%', 
            height: 50, 
                        alignItems: 'center',

        })}>
        <View style={({
            flexDirection: 'row', 
            justifyContent: 'space-between',
            padding: 10,
            width: '90%', 
            height: 40, 
            borderRadius: 10,
            backgroundColor: 'white', 
            margin: 10
        })}
             id={task.item.id}>
            
            <Text style={({color: 'black'})}>{task.item.title}</Text>
            <Pressable onPress={() => props.changeTaskToDone(task.item.id)}>

            {
                task.item.isDone ?    <Image style={({
                width: 20, 
                height: 20,
            
            })}
            src="https://as1.ftcdn.net/v2/jpg/03/22/80/06/1000_F_322800646_UoY0E0MJRAmr9EjzA2UjDvNy1IsJuRaF.jpg"
            ></Image> :
            <Text>Concluir</Text>
            }
                        </Pressable>

          
        
        </View>
        </View>
    
    }>

    </FlatList>
);
}

export default TaskList;