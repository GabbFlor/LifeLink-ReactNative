// import { View, Text, TextInput, Pressable, Image, Alert, ScrollView, TouchableOpacity } from 'react-native';

import { View, Text, TextInput, Pressable, Image, Alert, ScrollView, Button, TouchableOpacity } from 'react-native';
import { db, auth } from '../../firebase';
import React, { useState, useEffect } from "react";
import { useNavigation, useFocusEffect } from '@react-navigation/native';
import { onAuthStateChanged } from 'firebase/auth';
import style from '../../style/style';
import { Ionicons } from '@expo/vector-icons'
import { deleteDoc, doc } from 'firebase/firestore';

export default function Home() {
    const [posts, setPosts] = useState([]);

    const getPosts = async () => {
        try {
            const postsSnapshot = await db.collection('Postagens')
                .orderBy('timestamp', 'desc')
                .get();

            const postsData = postsSnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
            setPosts(postsData);
        } catch (error) {
            console.error('Erro ao buscar os posts:', error);
        }
    };

    // logica para recarregar a pag quando deletar ou adicionar post
    useFocusEffect(
        React.useCallback(() => {
            getPosts();
        }, [])
    );
    
    async function deletePost(id) {
        try {
            const postDoc = doc(db, 'Postagens', id);
            await deleteDoc(postDoc);
            await getPosts();
            Alert.alert("Post deletado com sucesso!");
        } catch (error) {
            Alert.alert("Erro", `Erro ao deletar o post: ${error}`);
        }
    }

    // function openProfile(uid) {
    //     navigation.navigate('Perfil', { dynamicUID: uid })
    // }

    const [user, setUser] = useState(null);
    const navigation = useNavigation();

    auth.onAuthStateChanged((user) => {setUser(user)});

    return (
        <ScrollView  style={style.postagensScrool}>
            {
                posts.length === 0 ? (
                    <View>
                        <Text style={style.escritaTitulo}>Nenhum post por enquanto</Text>
                    </View>
                ) : (
                    posts.map(post => {
                        return(
                            <View style={style.post} key={post.id}>
                                {/* cabeçalho do post */}
                                <View style={style.headerPost}>
                                    <Image source={{ uri: `${post.userPhoto}` }} style={style.imgPerfil} />

                                    <View style={style.headerPostEscrita}>
                                        <Text style={style.escritaUser}>{post.userName}</Text>
                                        <Text style={style.escritaTitulo}>{post.title}</Text>
                                    </View>
                                </View>

                                {/* conteudo do post */}
                                {/* verifica se tem imagem ou não */}
                                {
                                    post.imgURL === null ? (
                                        <View />
                                    ) : (
                                        <View style={style.viewImage}>
                                            <Image source={{ uri: `${post.imgURL}` }} style={style.postImage} resizeMode="center"/>
                                        </View>
                                    )
                                }
                                

                                <View style={style.viewConteudo}>
                                    <Text style={style.escritaConteudo}>{post.content}</Text>

                                    <View style={style.iconsPost}>
                                        <TouchableOpacity>
                                            <Ionicons name='heart-outline' color={"#fff"} size={28} />
                                        </TouchableOpacity>
                                        
                                        <TouchableOpacity>
                                            <Ionicons name='send-outline' color={"#fff"} size={28} />
                                        </TouchableOpacity>

                                        <TouchableOpacity>
                                            <Ionicons name='chatbubbles-outline' color={"#fff"} size={28} />
                                        </TouchableOpacity>

                                        

                                        {
                                            post.userUID === user.uid ? (
                                                <TouchableOpacity onPress={() => deletePost(post.id)}>
                                                    <Ionicons name='trash-outline' color={"#fff"} size={28} />
                                                </TouchableOpacity>
                                            ) : (
                                                <View />
                                            )
                                        }

                                        {/* teste rota dinâmica */}
                                        {/* <TouchableOpacity onPress={() => openProfile(post.userUID)}>
                                            <Text style={style.escritaConteudo}>Abrir perfil</Text>
                                        </TouchableOpacity> */}
                                    </View>
                                </View>
                            </View>
                        )
                    })
                )
            }
        </ScrollView>
    )
}