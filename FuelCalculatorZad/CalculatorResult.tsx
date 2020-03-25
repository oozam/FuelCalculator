import React from 'react'
import { View, Text, StyleSheet } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native'
import { IFuelForm } from './FuelForm'
import { RouteProp } from '@react-navigation/native';
import { RootStackParams } from './App'
type ProfileScreenRouteProp = RouteProp<RootStackParams, 'CalculatorResult'>;

type Props = {
    route: ProfileScreenRouteProp;
};

const CalculatorResult = () => {
    const route = useRoute<ProfileScreenRouteProp>();
    let combustion = (route.params?.distance || 0) * ((route.params?.fuelEfficiency || 0) / 100);
    let cost = combustion * (route.params?.cost || 0);
    return (
        <View>
            <Text style={styles.header}>Model: {route.params?.carName}</Text>
            <Text style={styles.header}>Calculation date: {route.params?.date.toDateString()}</Text>
            <Text style={styles.header}>Combustion: {combustion} L/100KM</Text>
            <Text style={styles.header}>Total cost: {cost}PLN</Text>
        </View>
    )
}

export default CalculatorResult;

const styles = StyleSheet.create({
    fuelContainer: {
        margin: 5,
        marginTop: 12,
        padding: 5
    },
    header: {
        fontSize: 24,
        padding: 5,
        marginBottom: 5
    },
    textMargin: {
        marginLeft: 5
    },
    dateMargin: {
        marginLeft: 5,
    },
    fuelForm: {
        margin: 5,
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 15,
        padding: 5
    },
    buttonOval: {
        position: 'relative',
        display: 'flex',
        alignSelf: 'center',
        borderRadius: 45,
        marginTop: 5,
        padding: 5,
        width: '50%'
    },
    dateContainer: {
        position: 'relative',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    formContainer: {
        marginTop: 5
    }
});