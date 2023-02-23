import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
    },
    buttonPaciente: {
      fontSize: 14,
      backgroundColor: "#153586",
      width: 300,
      height: 40,
      borderRadius: 16,
      justifyContent: 'center',
      paddingBottom: 2,
      marginVertical: 50
    },
    title: {
      width:410,
      height:250,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: "#153586",
      borderRadius: 6,
      textAlign: 'center',
      fontFamily: "Inter-Bold",
      color: "white"
    },
    textInput: {
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: 40,
        backgroundColor: "#FAFAFA",
        marginVertical: 10,
        includeFontPadding: true,
        paddingLeft: 10,
        borderRadius: 10,
        borderColor: "#8C8C8C",
        borderWidth: 1
    },
    button: {
        fontSize: 14,
        backgroundColor: "#153586",
        height: 36,
        borderRadius: 16,
        justifyContent: "center",
        paddingBottom: 2,
        marginVertical: 20
    },
    buttonTitle: {
        fontFamily: "Inter-Bold",
        color: "white",
        textAlign: "center",
    },
    logo: {
        fontFamily: "Andika-Regular",
        fontSize: 20,
    },
    link: {
        fontFamily: "Andika-Regular",
        fontSize: 12,
        color: "#153586",
        paddingTop: 10
    },
    labelError: {
        alignSelf: 'flex-start',
        color: '#d40a00',
        marginBottom: 8
    },
    error: {
        color: '#d30000',
        paddingBottom: 5
    },



    card:{
        width: 350,
        height: 130,
        borderColor: '#5042AB',
        borderWidth: 1,
        marginBottom: 10,

        borderRadius: 15,
        flexDirection: 'row',
        alignItems: 'center',
        padding:10,
        justifyContent: 'space-around',

      
    },

    cardTitle:{
        fontWeight: '700',
        fontSize: 22,
        lineHeight: 75,
        alignContent: 'flex-start',
        color: "#5042AB",
        textTransform: 'uppercase'
    },
    cardContent:{
        alignItems: 'flex-end',
        color: "#5042AB",
    },
    textContent:{
        color: "#5042AB",
    },


    shadow: {
        shadowColor: '#171717',
        shadowOpacity: 1,
        shadowRadius: 10,
        shadowOffset: {width: 0, height: 0},
        elevation:0,
      },

    loginContainer: {
        paddingRight:50,
        paddingLeft: 50,
        alignItems: 'center',
    }

    




});
