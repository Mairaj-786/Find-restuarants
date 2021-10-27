import React, { useState } from 'react'
import { View, Text } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { set } from 'react-native-reanimated'
import Ionicons from 'react-native-vector-icons/Ionicons'




export default function Bottom() {
    
    const [active, setActive] = useState('')
    const [selected, setSelected] = useState('home')
    const bottomNav = [
        {
            id:'home',
            name:"home",
            text:'Home'
        },
        {
            id:'search',
            name:"search",
            text:'Browse'
        },
        {
            id:'layer',
            name:"layers",
            text:'Find'
        },
        {
            id:'person',
            name:"person",
            text:'Account'
        },
    ]
    return (
        <View style={{flexDirection:'row', alignItems:'center', justifyContent:"space-between", marginHorizontal:20, margin:10 }}>
            {bottomNav.map((i) =>(
                <TouchableOpacity key={i.id} >
                    <Icon iconName={i.name} text={i.text}  />
                </TouchableOpacity>
            ))}
        </View>
    )
}


const Icon =(props) =>(
    <View style={{alignItems:'center'}} >
        <Ionicons 
        name={props.iconName}
        size={25}
        style={{
            color:'black'
        }} 
        />
        <Text style={{fontWeight:'bold'}}>{props.text}</Text>
    </View>
)