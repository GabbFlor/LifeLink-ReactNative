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
        // height: 50
        display: "flex",
        flexDirection:"row",
        height: 60,
        alignItems: "center",
        padding: 5,
        // marginTop: 23.5
    },

    searchBar: {
        backgroundColor: "#252525",
        width: "75%",
        margin: "auto",
        height: 35,
        borderRadius: 7.5,
        padding: 5,
        borderColor: "#f7d547",
        borderWidth:1,
        fontSize: 15
    }
})