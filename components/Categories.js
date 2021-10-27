import React from 'react'
import { View, Text ,Image} from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'


const items = [
    {
        image:require('../assets/images/deals.png'),
        title:'Deals'
    },
    {
        image:require('../assets/images/desserts.png'),
        title:'Desserts'
    },
    {
        image:require('../assets/images/soft-drink.png'),
        title:'Soft Drinks'
    },
    {
        image:require('../assets/images/shopping-bag.png'),
        title:'Shoping'
    },
    {
        image:require('../assets/images/splash.png'),
        title:'Splash'
    },
    {
        image:require('../assets/images/soft-drink.png'),
        title:'Soft Drinks'
    },
    {
        image:require('../assets/images/splash.png'),
        title:'Splash'
    },
]
export default function Categories() {


    return (
        <View style={{backgroundColor:'#fff', marginTop:6, paddingVertical:6, paddingLeft:20}}>
            <ScrollView horizontal showsHorizontalScrollIndicator={true}>
                {items.map((i) =>(
                <View style={{ alignItems:'center', marginRight:20 }}>
                <Image source={i.image}
                style={{
                    width: 40,
                    height: 50,
                    resizeMode:'contain'
                }}
                />  
                <Text 
                style={{fontWeight:'bold'}}
                >{i.title}</Text>
                </View>
                ))}
            </ScrollView>
        </View>
    )
}
