import React, {useState} from 'react';
import {View, StyleSheet, Text, Image, Button} from 'react-native';

function App() {
  const [nome, setNome] = useState('Seu Nome Completo');
  const [idade, setIdade] = useState('Com  Sua idade atual');

  const styles = StyleSheet.create({
    // criação de estilo do sistema
    area: {
      marginTop: 50,
      margin: 18,
      flex:1,
     
    },
    titulo: {
      fontSize: 20,
      color: '#FF6347',
    },
    subtitulo: {
      fontStyle: 'italic',
      fontFamily: 'verdana',
      fontSize: 22,
    },
    font: {
      fontSize: 19,
      textAlign: 'center',
    },
    imagem:{
      width :350,
      marginTop:350,
      height:20
    }
  });

  function entrar(nome, idade) {
    setNome(nome);
    setIdade(idade);
  }
  return (
    <View style={[styles.area]}>
      <Text style={[styles.titulo, styles.font]}>Julia Maria</Text>
      <Text style={[styles.titulo, styles.font]}>
        Mas, eu prefiro Maria Julia
      </Text>

      <Text style={[styles.subtitulo, styles.font]}> Tia Julia do Estagio</Text>
      <Logo
        largura={350}
        altura={350}
        espacamento={20}
        nomeLabel="React Logo"
      />

      <Text style={[styles.subtitulo, styles.font]}> {nome} </Text>
      <Text style={[styles.subtitulo, styles.font]}> {idade} </Text>

      <Button
        style={{margin: 456}}
        color="#841584"
        title="Mudar nome"
        onPress={() => entrar('Sávio Gomes da Silva', 'sua idade é  ' + 25)}
      />
    </View>
  );
}
export default App;

function Logo(props) {
  let img = 'https://sujeitoprogramador.com/reactlogo.png';

  return (
    <Image
      // source={require('../primeiro_projeto/img/FOTO.png')}
      source={{uri: img}}
      style={{
        width: props.largura,
        height: props.altura,
        margin: props.espacamento,
      }}
    />
  );
}
