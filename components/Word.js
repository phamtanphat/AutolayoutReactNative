import React, { PureComponent } from 'react'
import { Text, View , StyleSheet} from 'react-native'

export default class Word extends PureComponent {
  render() {
    const color = this.props.isMemorized ? "green" : "red";
    
   
    //Thang cha phai co flex(Phai co kich thuoc) thi con moi co duoc
    //Chia khong deu cho cac con thi lay moc flex 1 cac ben trong nhan gia tri flex = 1
    //flexDirection 
    // 1dong minh nhin thay => 1 cot (chieu ngang maximum)(column)
    // 1cot  minh nhin thay => 1 dong (chieu cao maximum)(row)
     //Direction : column => justifyContent (2 dua cung nhin` ve 1 huong) => anh huong ve chieu cao , alignItems (nhin nguoc) => nhin ve chieu ngang
    return (
      <View style={{ flex : 1 , flexDirection : 'column' }}>
            <Text style={{backgroundColor : 'orange' , textAlign : 'center' , textAlignVertical : 'center'}}>1</Text>
            <Text style={{backgroundColor : 'firebrick', textAlign : 'center' , textAlignVertical : 'center'}}>2</Text>
            <Text style={{backgroundColor : 'gold', textAlign : 'center' , textAlignVertical : 'center'}}>3</Text>
            <Text style={{backgroundColor : 'green', textAlign : 'center' , textAlignVertical : 'center'}}>4</Text>
        
       
      </View>
    )
  }
}


