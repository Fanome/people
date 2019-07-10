import React from 'react';
import { StyleSheet, Text, FlatList } from 'react-native';

import PeopleListItem from './PeopleListItem';

const PeopleList = props => {
    const { peoples, onPressItem } = props;

    // const items = peoples.map(people => { 
    //     return (
    //         <PeopleListItem 
    //             key={people.name.first}
    //             people={people} 
    //             navigateToPeopleDetail={onPressItem} 
    //         />
    //     );
    // });

    return(
        <FlatList 
            style={styles.container}
            data={peoples}
            renderItem={({ item }) => (
                <PeopleListItem 
                    people={item} 
                    navigateToPeopleDetail={onPressItem} 
                />
            )}
            keyExtractor= {item => item.name.first}
        />
    );
}; 

const styles = StyleSheet.create ({
    container: {
        backgroundColor: '#e2f9ff'
    },
});

export default PeopleList;
