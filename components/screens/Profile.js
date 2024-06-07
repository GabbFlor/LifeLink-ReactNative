import { View, Text, TextInput, Pressable, Image, Alert, ScrollView, Button } from 'react-native';
import { auth } from '../../firebase';
import React, { useState, useEffect } from "react";
import { useNavigation } from '@react-navigation/native';
import { onAuthStateChanged } from 'firebase/auth';


export default function Profile() {
    const [user, setUser] = useState(null);
    const navigation = useNavigation();

    auth.onAuthStateChanged((user) => {setUser(user)});

    function userSignOut() {
        auth.signOut()
        // navigation.navigate('Login');
    }

    if (user) {
        return (
            <View>
                <Text>email: {user.email}</Text>
                <Text>uid: {user.uid}</Text>
                <Button title="Logout" onPress={userSignOut} />
            </View>
        ) 
    } else {
        return (
            <View>
                <Text>Sem usuário autenticado</Text>
            </View>
        ) 
    }
}