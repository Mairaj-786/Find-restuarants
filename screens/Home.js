import React, { useState } from 'react'
import { View,Text } from 'react-native'
import { Divider } from 'react-native-elements/dist/divider/Divider'
import { ScrollView } from 'react-native-gesture-handler'
import { SafeAreaView } from 'react-native-safe-area-context'
import Bottom from '../components/Bottom'
import Categories from '../components/Categories'
import HeaderTabs from '../components/HeaderTabs'
import RestuarantItem, { resList } from '../components/RestuarantItem'
import SearchBar from '../components/SearchBar'


const Home = () => {
    const [restuaranData, setRestuaranData] = useState(resList)
    return (
        <SafeAreaView style={{backgroundColor:'#eee', flex:1}}>
            <View style={{backgroundColor:'#fff', padding:10, marginTop:10}}>
                <HeaderTabs />
                <SearchBar />
            </View>
            <ScrollView showsVerticalScrollIndicator={false}>
                <Categories />
                <RestuarantItem restuaranData={restuaranData}/>
            </ScrollView>
            <Divider width={1}/>
            <Bottom />
        </SafeAreaView>
    )
}

export default Home
