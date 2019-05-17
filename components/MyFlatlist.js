import React, { PureComponent } from 'react'
import { Text, View , FlatList , TouchableOpacity} from 'react-native'

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
        <TouchableOpacity
            style={{backgroundColor : 'green' , alignSelf : 'center' , borderRadius : 5, padding : 20}}
        >
            <Text style={{fontSize : 20 , color : 'white'}}>Click</Text>
        </TouchableOpacity>
      </View>
    )
  }
}
