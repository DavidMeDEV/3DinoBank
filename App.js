import React, { useState }from 'react';
import { StyleSheet, Text, View, Switch, TextInput, TouchableOpacity} from 'react-native';
import { Picker } from '@react-native-picker/picker';
import Slider from '@react-native-community/slider'
import  Icon  from 'react-native-vector-icons/';

export default function App()                                                       {
  const [nome,setNome]=useState('')
  const [idade,setIdade]=useState('')
  const [sexo,setSexo]=useState('')
  const [credit,setCredit]=useState(0)
  const [studant,setStudant]=useState(false)
  let sex=['','Masculino','Feminino']
  function cadastrar(nome,idade,sexo,credit,studant){
    alert(`${nome}, de idade ${idade}, do sexo ${sex[sexo]}, solicita seu cadastro com o valor de em crédito de R$ ${credit.toFixed(2)} se identificando como ${studant?'Estudante':'Não Estudante'}.`)
  }
  return (
    <View style={styles.container}>
      <View style={styles.header}> 
        <Text style={styles.headertxt}>3Dino Bank</Text>
      </View>
      {/*fim header*/}
      <View style={styles.databody}>
        <View style={styles.pickdata}>
          <Text style={styles.inputtxt}>Nome: </Text>
          <TextInput
            style={styles.textin}
            placeholder='Digite seu nome'
            onChangeText={(text)=>setNome(text)}
          />
        </View>
        <View style={styles.pickdata}>
          <Text style={styles.inputtxt}>Idade: </Text>
          <TextInput
            style={styles.textin}
            placeholder='Digite sua idade'
            onChangeText={(text)=>setIdade(text)}
          />
        </View>

        <View style={styles.pickdata}>
        <Text style={[styles.inputtxt,{marginTop:13}]}>Sexo:</Text>
          <Picker
            style={{flex:1,}}
            selectedValue={sexo}
            
            onValueChange={(itemvalue, itemindex)=>setSexo(itemvalue)}
          >
              <Picker.Item key={0} value={0} label=''/>
              <Picker.Item key={1} value={1} label='Masculino'/>
              <Picker.Item key={2} value={2} label='Feminino'/>
          </Picker>  
        </View>
        
        <View style={[styles.pickdata,{flexDirection:'column', alignItems:'center'}]}>
          <Text style={styles.headertxt}>Valor do Limite de Crédito</Text>
          <Slider
            style={{paddingHorizontal:110}}
            minimumValue={250}
            maximumValue={2000}
            value={credit}
            onValueChange={(value)=>setCredit(value)}
          />
            <Text style={[styles.headertxt, {borderWidth:1, paddingHorizontal:40, paddingVertical:20, borderRadius:15}]}>R$ {credit.toFixed(2)}</Text>  
        </View>

        <View style={styles.pickdata}>
          <Text style={[styles.headertxt,{marginTop:10, marginLeft:10}]}>Conta de Estudante? </Text>
          <Switch
            value={studant}
            onValueChange={(value)=>setStudant(value)}
          />
        </View>

        <TouchableOpacity style={styles.buttonv} onPress={()=>cadastrar(nome,idade,sexo,credit,studant)}>
          <View style={{alignItems:'center',justifyContent:'center'}}>
            <Text style={{fontSize:20, color:'#0000ff'}}>CADASTRAR!</Text>
          </View>
        </TouchableOpacity>
      </View>
      
      
        
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'black'
  },
  header:{
    alignItems:'center',
    backgroundColor:'#00FFFF',
    marginTop:20,
    padding:20,
    marginHorizontal:100,
    borderRadius:30
  },
  headertxt:{
    color:'black',
    fontSize:20
  },
  databody:{
    borderRadius:20,
    flex:1,
    flexDirection:'column',
    backgroundColor:'#00FFFF',
    marginTop:30,
    
  },
  inputtxt:{
    color:'black',
    marginTop:6,
    marginLeft:10,
    fontSize:18
  },
  pickdata:{
    backgroundColor:'#00EFFF', 
    flexDirection:'row', 
    marginTop:20,
    marginHorizontal:10,
    borderRadius:20,
    paddingVertical:10
  },
  textin:{
    padding:5,
    color:'black',
    fontSize:18,
    flex:1,
    marginRight:20, 
    borderBottomColor:'black'
  },
    buttonv:{
      backgroundColor:'#00CCFF',
      borderWidth:3,
      borderColor:'#0000FF',
      borderRadius:20,
      marginHorizontal:100,
      marginTop:50
    }
});
