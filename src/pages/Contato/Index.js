import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TextInput, Platform, FlatList } from 'react-native';
import Button from '../../components/Button';
import SkillCard from '../../components/SkillCard';


export default function Contato() {

    const [newSkill, setNewSkill] = useState('');
    const [mySkills, setMySkills] = useState([]);
    const [greeting, setGreeting] = useState('');


    function handleAddSkill() {
        setMySkills(oldState => [...oldState, newSkill])
    }

    useEffect(() => {
        const currentHour = new Date().getHours();
        if (currentHour < 12) {
            setGreeting('Bom dia!')
        }
        else if (currentHour >= 12 && currentHour < 18) {
            setGreeting('Boa tarde!')
        }
        else {
            setGreeting('Boa noite!')
        }
    }, [])

    return (
        <View style={styles.container}>
            <Text style={styles.title}>CONTATO!!!!!!</Text>
            <Text style={styles.greetings}>
                {greeting}
            </Text>

            <TextInput style={styles.input} placeholder="New Skill" placeholderTextColor="#555" onChangeText={setNewSkill} />

            <Button onPress={handleAddSkill} />

            <Text style={[styles.title, { marginVertical: 50 }]}>
                My Skills
            </Text>

            <FlatList
                data={mySkills}
                keyExtractor={item => item}
                renderItem={({ item }) => (
                    <SkillCard skill={item} />
                )}
            />

        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#121015',
        paddingTop: 70,
        paddingBottom: 10,
        paddingHorizontal: 30
    },
    title: {
        color: '#fff',
        fontSize: 24,
        fontWeight: 'bold'
    },
    input: {
        backgroundColor: '#1f1e25',
        color: '#fff',
        fontSize: 18,
        padding: Platform.OS === 'ios' ? 15 : 10,
        marginTop: 30,
        borderRadius: 7
    },
    greetings: {
        color: "#fff"
    }
});