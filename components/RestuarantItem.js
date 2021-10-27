import React from 'react'
import { View, Text ,Image} from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'



export const resList = [
    
    {
        id:2,
        img:'https://upload.wikimedia.org/wikipedia/commons/6/62/Barbieri_-_ViaSophia25668.jpg',
        title:'Kabul Restaurant'
    },
    {
        id:3,
        img:'https://media.architecturaldigest.com/photos/590cc6c3b3064307ffee59a4/master/w_3000,h_2000,c_limit/Tallest%20Restaurants%20in%20the%20World%207.jpg',
        title:'Chaaye Khana'
    },
    {
        id:4,
        img:'https://www.businesslist.pk/img/cats/restaurants.jpg',
        title:'Street 1 Cafe'
    },
]

export default function RestuarantItem(props) {
    return (
        <>
            <TouchableOpacity activeOpacity={1} >
        {props.restuaranData.map((item) =>(
                <View key={item.id} style={{backgroundColor:'#fff', marginTop:10, padding:15}}>
                    <RestuaranImage image={item.img}/>
                    <RestuaranInfo title={item.title}/>
                </View>
        ))}
            </TouchableOpacity>
        </>
    )
}


const RestuaranImage =(props)=>(
    <>
        <Image source={{
            uri:props.image
        }}
        style={{width:"100%", height:180}}
        />
    </>
)

const RestuaranInfo =(props)=>(
    <View style={{flexDirection:'row',  paddingVertical:3, alignItems:'center', justifyContent:'space-between'}}>
        <View>
            <Text style={{fontSize:17, fontWeight:'bold'}}>{props.title}</Text>
            <Text  style={{color:'gray', fontSize:15}}>30-45 . min</Text>
        </View>
        <View style={{backgroundColor:'#eee', padding:10, borderRadius:30}}>
            <Text style={{fontWeight:'bold'}}>4.5</Text>
        </View>
    </View>
)