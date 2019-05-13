import React, { PureComponent } from 'react'
import { Text, View , FlatList} from 'react-native'

const words = [
    {id : 'a1' , en : 'One' , vn : 'Mot' , isMemorized : true},
    {id : 'a2' , en : 'Two' , vn : 'Hai' , isMemorized : false},
    {id : 'a3' , en : 'Three' , vn : 'Ba' , isMemorized : false},
    {id : 'a4' , en : 'Four' , vn : 'Bon' , isMemorized : true}
   
]
export default class MyFlatlist extends PureComponent {

  render() {
    return (
      <View>
        <FlatList
            extraData={words}
            keyExtractor={item => item.id}
            data={words}
            renderItem={({item}) => <Text>{item.en}</Text>}
        >

        </FlatList>
      </View>
    )
  }
}
