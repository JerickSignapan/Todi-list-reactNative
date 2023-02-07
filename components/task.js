import { StyleSheet, Text, View, ImageBackground } from 'react-native';
const TodoList = ({ text }) => {

    return (
        <View style={styles.taskContainer}>
            <View style={styles.textContent}>
                <ImageBackground source={require('../assets/todo-cartoon.gif')} style={styles.todoCartoon}></ImageBackground>
                <Text style={styles.text}>{text}</Text>
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    taskContainer: {
        backgroundColor: '#ffff',
        borderWidth: 1,
        borderStyle: 'solid',
        marginVertical: 8,
        paddingVertical: 8,
        paddingHorizontal: 8,
        borderRadius: 5,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    textContent: {
        flexDirection: 'row',
    },

    todoCartoon: {
        width: 25,
        height: 25,
    },

    text: {
        paddingLeft: 10,
        paddingTop: 2,
    },
});
export default TodoList;