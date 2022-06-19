import React from 'react';
import {
  View,
  Image,
  Text,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  Pressable,
  Linking
} from 'react-native';

const colorGitHub = '#010409';
const colorFontGitHub = '#C9D1D9';
const colorDarkFontGitHub = '#4F565E';

const imageProfileGitHub = 'https://avatars.githubusercontent.com/u/107730889?s=400&u=c195863782a7fdfd1f98d17f828418e9552076e5&v=4';
const urlToMyGitHub = 'https://github.com/claritaaa6';

const colorDarkProgressGit = 'https://color-hex.org/colors/006d32.png';
const colorLightProgressGit = 'https://cdn.crispedge.com/2bc545.png';

const App = () => {
 
  const handlePressGoToGitHub = async () =>{
    console.log('Verificando Link');
    const res = await Linking.canOpenURL(urlToMyGitHub)
    if(res){
      console.log('Link aprovado');
      console.log('Abrindo Link...');
      await Linking.openURL(urlToMyGitHub);
    }
  };

  return (
    <SafeAreaView style = {style.container}>
    <StatusBar backgroundColor={colorGitHub} barStyle='light-content'/>
      <View style = {style.content}>
        <Image
          accessibilityLabel='Eu tirando uma foto no espelho'
          style = {style.avatar}
          source={{uri:imageProfileGitHub}}
        />
        <Text
          accessibilityLabel='Nome: Maria Clara'
          style = {[style.defaultText,style.name]}>
          Maria Clara
        </Text>
        <Text
          accessibilityLabel='Nickname: Claritaaa6'
          style = {[style.defaultText,style.nickname]}>
          Claritaaa6
        </Text>
        <Text 
          accessibilityLabel='Descrição: Cursando Analise e desenvolvimento de sistemas | @Claritaaa6 '
          style = {[style.defaultText,style.description]}>
          Cursando Análise e Desenvolvimento de Sistemas | Nordestina/PE | @Claritaaa6
        </Text>

        <View style = {style.content3} >

        <View style = {style.content2} >
            <Image
              accessibilityLabel='Box Green'
              style = {style.darkProgress} 
              source={{uri:colorDarkProgressGit}}
            />

            <Image
              accessibilityLabel='Box Green'
              style = {style.darkProgress} 
              source={{uri:colorDarkProgressGit}}
            />

            <Image
              accessibilityLabel='Box Green'
              style = {style.darkProgress} 
              source={{uri:colorDarkProgressGit}}
            />

            <Image
              accessibilityLabel='Box Green'
              style = {style.darkProgress} 
              source={{uri:colorDarkProgressGit}}
            />

            <Image
              accessibilityLabel='Box Green'
              style = {style.darkProgress} 
              source={{uri:colorDarkProgressGit}}
            />

            <Image
              accessibilityLabel='Box Green'
              style = {style.darkProgress} 
              source={{uri:colorDarkProgressGit}}
            />

            <Image
              accessibilityLabel='Box Green'
              style = {style.darkProgress} 
              source={{uri:colorDarkProgressGit}}
            />

            <Image
              accessibilityLabel='Box Green'
              style = {style.darkProgress} 
              source={{uri:colorDarkProgressGit}}
            />

            <Image
              accessibilityLabel='Box Green'
              style = {style.darkProgress} 
              source={{uri:colorDarkProgressGit}}
            />

            <Image
              accessibilityLabel='Box Green'
              style = {style.darkProgress} 
              source={{uri:colorDarkProgressGit}}
            />

            <Image
              accessibilityLabel='Box Green'
              style = {style.darkProgress} 
              source={{uri:colorDarkProgressGit}}
            />

            <Image
              accessibilityLabel='Box Green'
              style = {style.darkProgress} 
              source={{uri:colorDarkProgressGit}}
            />

            <Image
              accessibilityLabel='Box Green'
              style = {style.darkProgress} 
              source={{uri:colorDarkProgressGit}}
            />
            
          </View>

          <View style = {style.content2} >
            <Image
              accessibilityLabel='Box Green'
              style = {style.darkProgress} 
              source={{uri:colorDarkProgressGit}}
            />

            <Image
              accessibilityLabel='Box Green'
              style = {style.darkProgress} 
              source={{uri:colorLightProgressGit}}
            />

            <Image
              accessibilityLabel='Box Green'
              style = {style.darkProgress} 
              source={{uri:colorLightProgressGit}}
            />

            <Image
              accessibilityLabel='Box Green'
              style = {style.darkProgress} 
              source={{uri:colorDarkProgressGit}}
            />

            <Image
              accessibilityLabel='Box Gree'
              style = {style.darkProgress} 
              source={{uri:colorDarkProgressGit}}
            />

            <Image
              accessibilityLabel='Box Green'
              style = {style.darkProgress} 
              source={{uri:colorDarkProgressGit}}
            />

            <Image
              accessibilityLabel='Box Green'
              style = {style.darkProgress} 
              source={{uri:colorLightProgressGit}}
            />

            <Image
              accessibilityLabel='Box Green'
              style = {style.darkProgress} 
              source={{uri:colorDarkProgressGit}}
            />

            <Image
             accessibilityLabel='Box Green'
              style = {style.darkProgress} 
              source={{uri:colorDarkProgressGit}}
            />

            <Image
              accessibilityLabel='Box Green'
              style = {style.darkProgress} 
              source={{uri:colorDarkProgressGit}}
            />

            <Image
              accessibilityLabel='Box Green'
              style = {style.darkProgress} 
              source={{uri:colorLightProgressGit}}
            />

            <Image
              accessibilityLabel='Box Green'
              style = {style.darkProgress} 
              source={{uri:colorDarkProgressGit}}
            />

            <Image
              accessibilityLabel='Box Green'
              style = {style.darkProgress} 
              source={{uri:colorDarkProgressGit}}
            />

          </View>

          <View style = {style.content2}>

            <Image
              accessibilityLabel='Box Green'
              style = {style.darkProgress} 
              source={{uri:colorDarkProgressGit}}
            />

            <Image
              accessibilityLabel='Box Green'
              style = {style.darkProgress} 
              source={{uri:colorLightProgressGit}}
            />

            <Image
              accessibilityLabel='Box Green'
              style = {style.darkProgress} 
              source={{uri:colorDarkProgressGit}}
            />

            <Image
              accessibilityLabel='Box Green'
              style = {style.darkProgress} 
              source={{uri:colorLightProgressGit}}
            />

            <Image
              accessibilityLabel='Box Green'
              style = {style.darkProgress} 
              source={{uri:colorDarkProgressGit}}
            />

            <Image
              accessibilityLabel='Box Green'
              style = {style.darkProgress} 
              source={{uri:colorDarkProgressGit}}
            />

            <Image
              accessibilityLabel='Box Green'
              style = {style.darkProgress} 
              source={{uri:colorLightProgressGit}}
            />

            <Image
              accessibilityLabel='Box Green'
              style = {style.darkProgress} 
              source={{uri:colorDarkProgressGit}}
            />

            <Image
              accessibilityLabel='Box Green'
              style = {style.darkProgress} 
              source={{uri:colorDarkProgressGit}}
            />

            <Image
              accessibilityLabel='Box Green'
              style = {style.darkProgress} 
              source={{uri:colorLightProgressGit}}
            />

            <Image
              accessibilityLabel='Box Green'
              style = {style.darkProgress} 
              source={{uri:colorDarkProgressGit}}
            />

            <Image
              accessibilityLabel='Box Green'
              style = {style.darkProgress} 
              source={{uri:colorLightProgressGit}}
            /> 

            <Image
              accessibilityLabel='Box Green'
              style = {style.darkProgress} 
              source={{uri:colorDarkProgressGit}}
            />

          </View>
     
          <View style = {style.content2} >

            <Image
              accessibilityLabel='Box Green'
              style = {style.darkProgress} 
              source={{uri:colorDarkProgressGit}}
            />

            <Image
              accessibilityLabel='Box Green'
              style = {style.darkProgress} 
              source={{uri:colorLightProgressGit}}
            />

            <Image
              accessibilityLabel='Box Green'
              style = {style.darkProgress}
              source={{uri:colorDarkProgressGit}}
            />

            <Image
              accessibilityLabel='Box Green'
              style = {style.darkProgress}
              source={{uri:colorLightProgressGit}}
            />
            <Image
              accessibilityLabel='Box Green'
              style = {style.darkProgress} 
              source={{uri:colorDarkProgressGit}}
            />

            <Image
              accessibilityLabel='Box Green'
              style = {style.darkProgress} 
              source={{uri:colorDarkProgressGit}}
            />

            <Image
              accessibilityLabel='Box Green'
              style = {style.darkProgress} 
              source={{uri:colorLightProgressGit}}
            />

            <Image
              accessibilityLabel='Box Green'
              style = {style.darkProgress} 
              source={{uri:colorDarkProgressGit}}
            />

            <Image
             accessibilityLabel='Box Green'
              style = {style.darkProgress} 
              source={{uri:colorDarkProgressGit}}
            />

            <Image
              accessibilityLabel='Box Green'
              style = {style.darkProgress} 
              source={{uri:colorLightProgressGit}}
            />

            <Image
              accessibilityLabel= 'Box Green'
              style = {style.darkProgress} 
              source={{uri:colorDarkProgressGit}}
            />

            <Image
              accessibilityLabel='Box Green'
              style = {style.darkProgress} 
              source={{uri:colorLightProgressGit}}
            />

            <Image
              accessibilityLabel='Box Green'
              style = {style.darkProgress}
              source={{uri:colorDarkProgressGit}}
            />
          </View>

            <View style = {style.content2} >
            <Image
              accessibilityLabel='Box Green'
              style = {style.darkProgress} 
              source={{uri:colorDarkProgressGit}}
            />

            <Image
               accessibilityLabel='Box Green'
              style = {style.darkProgress} 
              source={{uri:colorLightProgressGit}}
            />

            <Image
               accessibilityLabel='Box Green'
              style = {style.darkProgress} 
              source={{uri:colorLightProgressGit}}
            />

            <Image
               accessibilityLabel='Box Green'
              style = {style.darkProgress} 
              source={{uri:colorDarkProgressGit}}
            />

            <Image
               accessibilityLabel='Box Green'
              style = {style.darkProgress} 
              source={{uri:colorDarkProgressGit}}
            />

            <Image
               accessibilityLabel='Box Green'
              style = {style.darkProgress} 
              source={{uri:colorDarkProgressGit}}
            />

            <Image
              accessibilityLabel='Box Green'
              style = {style.darkProgress} 
              source={{uri:colorLightProgressGit}}
            />

            <Image
               accessibilityLabel='Box Green'
              style = {style.darkProgress} 
              source={{uri:colorDarkProgressGit}}
            />

            <Image
               accessibilityLabel='Box Green'
              style = {style.darkProgress} 
              source={{uri:colorDarkProgressGit}}
            />

            <Image
               accessibilityLabel='Box Green'
              style = {style.darkProgress} 
              source={{uri:colorDarkProgressGit}}
            />

            <Image
              accessibilityLabel='Box Green'
              style = {style.darkProgress} 
              source={{uri:colorLightProgressGit}}
            />

            <Image
               accessibilityLabel='Box Green'
              style = {style.darkProgress} 
              source={{uri:colorDarkProgressGit}}
            />

            <Image
              accessibilityLabel='Box Green'
              style = {style.darkProgress} 
              source={{uri:colorDarkProgressGit}}
            />

          </View>

          <View style = {style.content2} >
            <Image
              accessibilityLabel='Box Green'
              style = {style.darkProgress} 
              source={{uri:colorDarkProgressGit}}
            />

            <Image
              accessibilityLabel='Box Green'
              style = {style.darkProgress} 
              source={{uri:colorDarkProgressGit}}
            />

            <Image
              accessibilityLabel='Box Green'
              style = {style.darkProgress} 
              source={{uri:colorDarkProgressGit}}
            />

            <Image
              accessibilityLabel='Box Green'
              style = {style.darkProgress} 
              source={{uri:colorDarkProgressGit}}
            />

            <Image
              accessibilityLabel='Box Green'
              style = {style.darkProgress} 
              source={{uri:colorDarkProgressGit}}
            />

            <Image
              accessibilityLabel='Box Green'
              style = {style.darkProgress} 
              source={{uri:colorDarkProgressGit}}
            />

            <Image
              accessibilityLabel='Box Green'
              style = {style.darkProgress} 
              source={{uri:colorDarkProgressGit}}
            />

            <Image
              accessibilityLabel='Box Green'
              style = {style.darkProgress} 
              source={{uri:colorDarkProgressGit}}
            />

            <Image
              accessibilityLabel='Box Green'
              style = {style.darkProgress} 
              source={{uri:colorDarkProgressGit}}
            />

            <Image
              accessibilityLabel='Box Green'
              style = {style.darkProgress} 
              source={{uri:colorDarkProgressGit}}
            />

            <Image
              accessibilityLabel='Box Green'
              style = {style.darkProgress} 
              source={{uri:colorDarkProgressGit}}
            />

            <Image
              accessibilityLabel='Box Green'
              style = {style.darkProgress} 
              source={{uri:colorDarkProgressGit}}
            />

            <Image
              accessibilityLabel='Box Green'
              style = {style.darkProgress} 
              source={{uri:colorDarkProgressGit}}
            />

          </View>

        </View>

       <Pressable onPress={handlePressGoToGitHub}>
          <View style={style.button}>
            <Text style={[style.defaultText,style.textButton]}> Open in GitHub </Text>
          </View>
        </Pressable>

      </View>

    </SafeAreaView>
  );
};

export default App;

const style = StyleSheet.create({
  container:{ 
    backgroundColor: colorGitHub,
    flex:1,
    justifyContent:'center',
  },
  content:{
    alignItems:'center',
    padding:20,
  },
  content2:{
    flexDirection:'row',
    padding:1,
  },
  content3:{
    padding:20,
  },
  avatar:{
    height:200,
    width:200,
    borderRadius:100,
    borderColor: 'white',
    borderWidth:2,
  },
  defaultText:{
    color:colorFontGitHub,
  },
  name:{
    marginTop:20,
    fontSize:24,
    fontWeight:'bold',
  },
  nickname:{
    fontSize:18,
    color: colorDarkFontGitHub,
  },
  description:{
    fontSize:14,
    fontWeight:'bold',
    marginBottom:6,
  },
  button:{
    marginTop:20,
    backgroundColor:colorDarkFontGitHub,
    borderRadius:10,
    padding:20,
  },
  textButton:{
    fontSize:16,
    fontWeight:'bold',
  },
  darkProgress:{
    height:10, 
    width:10, 
    borderRadius:2.5,
    marginLeft:2,
  },
  lightProgress:{
    height:15, 
    width:15, 
    borderRadius:5, 
  }
});