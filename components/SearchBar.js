import React from 'react'
import { View, Text  } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';

export default function SearchBar() {
    return (
        <View style={{flexDirection:'row', marginTop:15}}>
            <GooglePlacesAutocomplete
            placeholder='Search'
            styles={{
                textInput:{
                    backgroundColor:'#eee',
                    borderRadius:20,
                    fontWeight:'700',
                    fontSize:14,
                    marginTop:9,
                    height: 30,
                },
                textInputContainer:{
                    borderRadius:50,
                    backgroundColor:'#eee',
                    flexDirection:'row',
                    alignItems:'center',

                },
            }}

            renderLeftButton={() =>(
                <View style={{marginLeft:10}}>
                    <Ionicons name="location-sharp" size={18}/>
                </View>
            )}

            renderRightButton ={() =>(
                <View style={{ 
                    backgroundColor:'#fff', 
                    paddingHorizontal:13, 
                    paddingVertical:5,
                    marginRight:10,
                    flexDirection:'row',
                    alignItems:'center',
                    borderRadius:30,
                    }}>
                    <Ionicons name="time" size={17} style={{marginRight:5}}/>
                    <Text style={{marginRight:10}}>search</Text>
                </View>
            )}
        />
        </View>
    )
}
