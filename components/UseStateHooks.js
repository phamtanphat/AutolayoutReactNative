import React, { useState } from 'react';
import { View, Text , TouchableOpacity } from 'react-native';
export function ScreenA(){
    const[count , setCount] = useState(0);
    const [object , setName] = useState({name : 'A'})
    return(
        <View>
            <Text style={{color : 'red'}}>{count}</Text>
            <TouchableOpacity
                onPress={() => setCount(count + 1)}> 
                <Text>Increase</Text>
            </TouchableOpacity>
        </View>
    )
}
export function ScreenB(){
    return(
        <View>
            <TouchableOpacity>
                <Text style={{color : 'red'}}>Increase</Text>
            </TouchableOpacity>
        </View>
    )
}
