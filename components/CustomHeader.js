import { StatusBar } from 'expo-status-bar';
import { View, Text, TextInput, Pressable, Image, Alert, ScrollView, TouchableOpacity, SafeAreaView } from 'react-native';
import style from '../style/style';
import { Ionicons } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native';

const CustomHeader = () => {
    const navigation = useNavigation();

    return (
        <SafeAreaView>
            <View style={style.customHeader}>
                {/* <StatusBar /> */}
                <TouchableOpacity onPress={() => navigation.openDrawer()}>
                    <Ionicons name="menu" size={30} color="#f7d547"/>
                </TouchableOpacity>

                <TextInput 
                    style={style.searchBar}
                    placeholder='Procure alguma postagem...'
                    onChangeText={(text) => console.log(text)}
                    placeholderTextColor="#fff"
                />

                <View />
            </View>
        </SafeAreaView>
    )
}

export default CustomHeader;