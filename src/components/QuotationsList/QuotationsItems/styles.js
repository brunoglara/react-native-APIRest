import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        width: '95%',
        height: 'auto',
        backgroundColor: '#000000',
        marginLeft: '3%',
        marginBottom: 15,
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
    },
    contentLeft: {
        width: '36%',
        height: '100%',
        alignItems: 'flex-start',
    },
    contentRight: {
        width: '60%',
        alignItems: 'flex-end',
    },
    boxLogo: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    logoBitcoin: {
        width: 40,
        height: 40,
        marginLeft: 2,
        backgroundColor: '#000000'
    },
    dayRate: {
        fontSize: 16,
        paddingLeft: 2,
        color: '#ffffff',
        fontWeight: 'bold',
    },
    price: {
        fontSize: 16,
        paddingLeft: 2,
        color: '#ffffff',
        fontWeight: 'bold',
    }

})

export default styles