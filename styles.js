import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    textInput: {
        alignItems: 'center',
        justifyContent: 'center',
        width: 300,
        height: 36,
        backgroundColor: "#FAFAFA",
        marginVertical: 6,
        includeFontPadding: true,
        paddingLeft: 8,
        borderRadius: 16,
        borderColor: "#8C8C8C",
        borderWidth: 1
    },
    button: {
        fontSize: 14,
        backgroundColor: "#153586",
        width: 191,
        height: 36,
        borderRadius: 16,
        justifyContent: "center",
        paddingBottom: 2,
        marginVertical: 50
    },
    buttonTitle: {
        fontFamily: "Inter-Bold",
        color: "white",
        textAlign: "center",
    },
    logo: {
        fontFamily: "Andika-Regular",
        fontSize: 20,
    }
});
