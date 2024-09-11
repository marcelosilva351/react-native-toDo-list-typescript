import { useState } from "react";
import { Button, Modal, TextInput, View } from "react-native"



interface AddTaskProps{
    add : (title: string) => void
}

const AddTask = (props : AddTaskProps) => {
    const [modal, setModal] = useState(false);
    const [title, setTitle] = useState(''); 
    const openModal = () => {
        setModal(true);
    }

    const closeModal = () => {
        setModal(false);
    }

    const addTaskHandler= () => {
        props.add(title);
        closeModal();
    }

    return <View 
            style={({
                width: '100%', 
                height: 200,
                justifyContent: 'center', 
                alignItems: 'center'
            })}
            >
                <Button onPress={() => openModal()} title="Adicionar tarefa"></Button>

                <Modal visible={modal}>
                    <View style={({
                        justifyContent: 'center', 
                        alignItems: 'center', 
                        flex: 1
                    })}>
                        <TextInput
                            onChangeText={newText => setTitle(newText)}
                            placeholder="Tarefa..." style={({
                            padding: 4,
                            width: '80%',
                            height: 60, 
                            borderWidth: 1,
                            borderColor: 'black', 
                            marginBottom: 15
                        })}></TextInput>
                        <Button onPress={() => addTaskHandler()} title="Adicionar"></Button>

                    </View>
                </Modal>
         </View>
}

export default AddTask;