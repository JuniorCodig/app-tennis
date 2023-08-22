import React, { useEffect, useState } from 'react'
import { FlatList, Text, View } from 'react-native'
import { api } from '../../services/city'
import { CenteredView } from './style'

export const City = () => {

  type CityType = {
    id: string,
    name: string
  }
  const [cityList, setCityList] = useState<CityType[]>()

  useEffect(() => {
    api.get('http://educacao.dadosabertosbr.com/api/cidades/pr').then(response => {
      console.log(response.data)
      const parsedList = response.data.map((item : string) => {
        const [id, name] = item.split(":");
        return { id, name };
      });
      setCityList(parsedList.splice(0, 50))
    }).catch(error => {
      console.log(error)
    })
  }, [])

  const renderItem = ({ item }: { item: CityType }) => {
    return (<View >
      <Text>{item.name}</Text>
    </View>)
  }

  return (
    <View style={{height:250}}>
      <Text style={{marginBottom:15, fontSize:20}}>Lista de cidade Cidades Do Parana</Text>
      <FlatList
        data={cityList}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </View>
  )
  }
