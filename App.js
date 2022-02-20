import React, {useState} from 'react';
import {View, StyleSheet, Text, Image, Button} from 'react-native';

function App() {
  const [nome, setNome] = useState('Seu Nome Completo');
  const [idade, setIdade] = useState('Com  Sua idade atual');

  function entrar(nome, idade) {
    setNome(nome);
    setIdade(idade);
  }
  return (
    <View>
      <Text
        style={{
          margin: 25,
          textAlign: 'center',
          color: '#FF6347',
          fontSize: 29,
        }}>
        Julia Maria
      </Text>
      <Text style={{margin: 25, fontSize: 29, textAlign: 'center'}}>
        Mas, eu prefiro Maria Julia
      </Text>

      <Text
        style={{
          color: '#6959CD',
          fontSize: 25,
          margin: 15,
          textAlign: 'center',
        }}>
        Julia do pastelzinho
      </Text>
      <Logo
        largura={350}
        altura={350}
        espacamento={20}
        nomeLabel="React Logo"
      />

      <Text style={{fontSize: 19}}> {nome} </Text>
      <Text style={{fontSize: 17}}> {idade} </Text>

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
