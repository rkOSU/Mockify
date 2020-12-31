import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        position:'absolute',
        bottom: 79,
        backgroundColor: '#ff994c',
        flexDirection: 'row',
        width: '100%'
    },
    right_container: {
        justifyContent: 'space-around',
        margin: 10,
    },
    title: {
        color: "black",
        fontSize: 16
    },
    artist: {
        color: 'black'
    },
    image: {
        width: 75,
        height: 75,
    },
   
})

export default styles;