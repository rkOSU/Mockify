import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        position:'absolute',
        bottom: 79,
        backgroundColor: '#ff994c',
        
        width: '100%'
    },
    right_container: {
        justifyContent: 'space-between',
        flex: 1,
        flexDirection: 'row',
        alignItems: "center"
    },
    title: {
        color: "white",
        fontSize: 16,
        fontWeight: 'bold'
    },
    artist: {
        color: 'white'
    },
    image: {
        width: 75,
        height: 75,
    },
    name_and_artist: {
        margin: 10,
    },
    play_button: {
        margin:10,
        alignItems: 'center',
        marginRight: 20
    },
    progress: {
         height: 3,
         backgroundColor: 'white'
    },

    remainder: {
        flexDirection: 'row',
    }

   

})

export default styles;