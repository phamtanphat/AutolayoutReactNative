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
      <View style={{backgroundColor : 'red' , flex : 1 , flexDirection : 'column' }}>
        <View style={{flexDirection : 'row' , justifyContent : 'space-between' , alignItems : 'flex-start' , flex : 0.5}}>
            <Text style={{backgroundColor : 'black' , color : 'white'}}>One</Text>
            <Text style={{backgroundColor : 'green' , color : 'white'}}>Two</Text>
        </View>
        <View style={{flexDirection : 'row' , justifyContent : 'space-between' , alignItems : 'flex-end' , flex : 0.5}}>
            <Text style={{backgroundColor : 'yellow' , color : 'white'}}>Three</Text>
            <Text style={{backgroundColor : 'black' , color : 'white'}}>Four</Text>
        </View>
       
      </View>
    )
  }
}


