import React from 'react';
import { Text, View, Image, StyleSheet} from 'react-native';

export default class PeopleDetailPage extends React.Component{
    render() {
        const { people } = this.props.navigation.state.params;

        return (
            <View style={styles.container}>
                <Image 
                    source={{ uri: people.picture.large}} 
                    style={styles.avatar}
                />
                <View style={styles.campoView}>
                    <Text style={styles.campoDescricao}> Eu Sou Marcinho do DENDÊ </Text>
                    <Text>e-mail: {people.email}</Text>
                </View>
            </View>
        );
    }
} 

const styles = StyleSheet.create({
    container:{
        padding: 15,
    },
    avatar: {
        aspectRatio: 1,
    },
    campoDescricao:{
        padding: 5,
        color: 'green',        
    },
    campoView:{
        marginTop: 10,
        backgroundColor: '#6ca2f7',
    },
});