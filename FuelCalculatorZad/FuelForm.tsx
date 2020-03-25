import React, { useState } from 'react'
import { View, TextInput, Button, Platform, Text, Alert, StyleSheet } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { NavigationContainer, useNavigation, useRoute } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

export interface IFuelForm {
    carName: string;
    cost: number;
    distance: number;
    fuelEfficiency: number;
    date: Date;
}

const FuelForm = () => {
    const [form, setFuelForm] = useState<IFuelForm>({ carName: "", cost: 0, fuelEfficiency: 0, date: new Date(), distance: 0 });
    const [showDatePicker, setShowDatePicker] = useState(false);
    const navigation = useNavigation();
    const handleSubmit = () => {
        if (!form.cost && !form.distance && 
            !form.fuelEfficiency && !form.carName)
            Alert.alert("Type text into all inputs!");
        else
            navigation.navigate('CalculatorResult', form);
    }

    return (

        <View style={styles.fuelContainer}>
            <Text style={styles.header}>Type your details below!</Text>
            <View style={styles.formContainer}>
                <Text style={styles.textMargin}>Car model</Text>
                <TextInput
                    style={styles.fuelForm}
                    value={form?.carName}
                    onChangeText={e => setFuelForm({ ...form, carName: e })}
                />
            </View>
            <View style={styles.formContainer}>
                <Text style={styles.textMargin}>Distance</Text>
                <TextInput
                    style={styles.fuelForm}
                    value={form?.distance === 0 ? "" : form?.distance.toString()}
                    keyboardType='numeric'
                    onChangeText={e => {
                        let distance = +e;
                        if (!e.match(/^\d+$/g))
                        {
                            distance = 0;
                        }
                        setFuelForm({ ...form, distance: distance });
                    }}

                />
            </View>
            <View style={styles.dateContainer}>
                <Text style={styles.dateMargin}>Date: {form?.date.toDateString()}</Text>
                <View style={styles.buttonOval}>
                    <Button onPress={() => setShowDatePicker(!showDatePicker)} title="Choose date" />
                </View>
            </View>
            {showDatePicker && (
                <DateTimePicker
                    onTouchCancel={(e) => {
                        setShowDatePicker(false)
                    }}
                    date={form?.date}
                    display='default'
                    neutralButtonLabel="clear"
                    value={form?.date}
                    mode="date"
                    onChange={(e, d) => {
                        setShowDatePicker(false)
                        setFuelForm({ ...form, date: d || new Date() });
                    }}
                />
            )}
            <View style={styles.formContainer}>
                <Text style={styles.textMargin}>Cost per litr</Text>
                <TextInput
                    style={styles.fuelForm}
                    value={form?.cost === 0 ? "" : form?.cost.toString()}
                    keyboardType='decimal-pad'
                    onChangeText={e => {
                        let cost = +e;
                        if (!e.match(/^\d+$/g))
                            cost = 0;
                        setFuelForm({ ...form, cost: cost });
                    }}
                />
            </View>
            <View style={styles.formContainer}>
                <Text style={styles.textMargin}>Fuel Efficiency per 100km</Text>
                <TextInput
                    style={styles.fuelForm}
                    value={form?.fuelEfficiency === 0 ? "" : form?.fuelEfficiency.toString()}
                    keyboardType='decimal-pad'
                    onChangeText={e => {
                        let fuelEfficiency = +e;
                        if (!e.match(/^\d+$/g))
                            fuelEfficiency = 0;
                        setFuelForm({ ...form, fuelEfficiency: fuelEfficiency });
                    }}
                />
            </View>
            <View style={styles.buttonOval}>
                <Button title="Submit" onPress={handleSubmit}></Button>
            </View>
        </View>
    )
}

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

export default FuelForm;