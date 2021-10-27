import React, { useState } from 'react'
import { View, Text } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'


export default function HeaderTabs() {
    const [activeTab, setActiveTab] = useState("Delevery")
    return (
        <View style={{flexDirection:'row', alignItems:'center', justifyContent:'center'}}>
            <HeaderButtons 
            text="Delevery" 
            bgColor="black" 
            txColor="white"
            activeTab={activeTab}
            setActiveTab={setActiveTab}
            />
            <HeaderButtons 
            text="Pick Up" 
            bgColor="white" 
            txColor="black"
            activeTab={activeTab}
            setActiveTab={setActiveTab}
            />
        </View>
    )
}

const HeaderButtons =(props)=>(
    <TouchableOpacity
    style={{
        backgroundColor:props.activeTab === props.text ? 'black' :'white', 
        paddingHorizontal:31, 
        paddingVertical:10, 
        borderRadius:30,

    }}
    onPress={() => props.setActiveTab(props.text)}
    >
        <Text style={{color:props.activeTab === props.text ?'white':'black',fontWeight:'bold'}}>{props.text}</Text>
    </TouchableOpacity>
)