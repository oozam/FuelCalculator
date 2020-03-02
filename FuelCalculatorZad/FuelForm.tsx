import React, { useState} from 'react'
import { View, TextInput, Button, Platform, Text } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

interface IFuelForm {
    carName: string; 
    cost: string;
    date: Date;
    distance: string;
}

const FuelForm : React.FC = () => {
    const [form, setFuelForm] = useState<IFuelForm>({carName: "",cost: "",date: new Date(),distance: ""});
    const [showDatePicker, setShowDatePicker] = useState(false);
    const handleSubmit = () => {
        console.log(form);
    }


    return (
        <>
            <View>
                <Text>Date: {form?.date.toDateString()}</Text>
                <Button onPress={() => setShowDatePicker(!showDatePicker)} title="Choose date" />
                <Text>Distance</Text>
                <TextInput
                    value={form?.carName}
                    onChangeText={e => setFuelForm({...form, carName: e})}
                />
                <Text>Distance</Text>
                <TextInput
                
                    value={form?.distance}
                    keyboardType='numeric'
                    onChangeText={e => setFuelForm({...form, distance: e})}
                />
                
                
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
                        onChange={(e,d) => {
                            setShowDatePicker(false)
                            setFuelForm({...form, date: d || new Date()});
                        }}
                    />
                )}
                <TextInput
                    value={form?.cost}
                    keyboardType='decimal-pad'
                    onChangeText={e => setFuelForm({...form, cost: e})}
                />
                <Button title="Submit" color="#00FF00" onPress={handleSubmit}></Button>
            </View>
        </>
    )
}

export default FuelForm;