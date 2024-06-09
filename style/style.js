import { StyleSheet } from "react-native";

export default StyleSheet.create({
    form: {
        display: "flex",
        flexDirection: "column",
        backgroundColor: "black",
        height: "100%"
    },
    
    inputs: {
        backgroundColor: "#252525",
        color: "white",
        height: 50,
        fontSize: 17.5,
        width: "92.5%",
        borderRadius: 7.5,
        padding: 5,
        borderColor: "#f7d547",
        borderWidth:2
    },

    inputsForm: {
        display: "flex",
        flexDirection: "column",
        gap: 15,
        alignItems: "center",
        marginTop:50
    },

    inputsFormLogin: {
        display: "flex",
        flexDirection: "column",
        gap: 20,
        alignItems: "center",
        marginTop: 50,
    },

    tituloForm: {
        fontSize: 30,
        textAlign: "center",
        marginBottom: 10,
        fontWeight: "500",
        color: "#fff",
    },

    buttonSubmit: {
        backgroundColor: "red",
        width: "50%",
        height: 50,
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems:"center",
        borderRadius: 7.5,
        backgroundColor: "#f7d547",
        marginTop: 5
    },

    buttonText: {
        fontSize: 17.5,
        color: "black",
        fontWeight: "bold",
    },

    Logo: {
        // backgroundColor: "red",
        width: 200,
        height: 200,
        margin: "auto",
        marginTop: 20
    },

    tituloSreen: {
        color: "#f7d547",
        fontSize: 40,
        textAlign: "center",
        fontWeight: "bold",
        marginTop: -40
    },

    link: {
        color: "#fff",
        fontSize: 14,
        textAlign: "center",
        marginTop: 15,
    },

    sublinhado: {
        textDecorationLine: "underline",
    },

    customHeader: {
        backgroundColor: "#000",
        display: "flex",
        flexDirection:"row",
        justifyContent: "space-between",
        height: 80,
        alignItems: "flex-end",
        paddingLeft: 15,
        paddingRight: 15,
        paddingBottom: 11
    },

    searchBar: {
        backgroundColor: "#252525",
        width: "75%",
        height: 35,
        borderRadius: 7.5,
        padding: 5,
        borderColor: "#f7d547",
        borderWidth:1,
        fontSize: 15
    },

    // post

    postagensScrool: {
        backgroundColor: "black",
        height: "100%"
    },

    escritaUser: {
        color: "white",
        fontSize: 16,
        fontWeight: "bold",
    },

    escritaTitulo: {
        color: "white",
        fontSize: 14
    },

    escritaConteudo: {
        color: "white",
        textAlign: "justify",
        fontSize: 14
    },

    post: {
        // backgroundColor: "red",
        margin: 10
    },

    imgPerfil: {
        height: 55,
        width: 55,
        borderRadius: 100,
        borderWidth: 2,
        borderColor: "#f7d547"
    },

    headerPost: {
        // backgroundColor: "blue",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        gap: 7.5,
        padding: 5
    },

    viewImage: {
        // backgroundColor: "green",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: 2.5,
        maxHeight: 252.5,
        maxWidth: "100%",
        overflow: "hidden",
    },

    postImage: {
        height: "100%",
        width: "100%",
        maxHeight: 350,
        maxWidth: 350,
        borderRadius: 15,
        // backgroundColor: "blue"
    },

    viewConteudo: {
        paddingTop: 10,
        paddingBottom: 5,
        paddingLeft: 10,
        paddingRight: 10,
    },

    iconsPost: {
        display: "flex",
        flexDirection: "row",
        gap: 5
    },

    // add publi
    addPubli: {
        backgroundColor: "black",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: 15
    },

    inputConteudo: {
        backgroundColor: "#252525",
        color: "white",
        height: 200,
        fontSize: 17.5,
        width: "92.5%",
        borderRadius: 7.5,
        padding: 5,
        borderColor: "#f7d547",
        borderWidth:2,
        textAlignVertical: "top"
    },

    TitleAddPubli: {
        fontSize: 27.5,
        fontWeight: "bold",
        color: "#fff"
    },
})