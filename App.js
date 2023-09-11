import { StatusBar } from "expo-status-bar";
import React from "react";
import {StyleSheet, Text, View, Image, ScrollView, TextInput, Button, TouchableOpacity} from "react-native";
import { Avatar } from "react-native-elements";

function Login() {
  return (
    <ScrollView>
      <View style={styles.container}>
        <Avatar
          rounded
          containerStyle={{ height: 80, width: 80 }}
          source={{
            uri: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png",
          }}
        />
      </View>
      <Text>Login</Text>
      <TextInput
        style={{
          height: 40,
          borderColor: "gray",
          borderWidth: 1,
        }}
      />
      <Text>Senha</Text>
      <TextInput
        style={{
          height: 40,
          borderColor: "gray",
          borderWidth: 1,
        }}
      />
      <Button
        title="Entrar"
        buttonStyle={{
          backgroundColor: "rgba(78, 116, 289, 1)",
          borderRadius: 15,
        }}
        containerStyle={{
          width: 200,
          marginHorizontal: 50,
          marginVertical: 10,
        }}
      />
      <Button
        title="Cadastre-se"
        buttonStyle={{
          backgroundColor: "rgba(78, 116, 289, 1)",
          borderRadius: 15,
        }}
        containerStyle={{
          width: 200,
          marginHorizontal: 50,
          marginVertical: 10,
        }}
      />
    </ScrollView>
  );
}

function CadastroUsuario() {
  return (
    <ScrollView>
      <View>
        <Text>Usuário</Text>
      </View>
      <Text>Nome</Text>
      <TextInput
        style={{
          height: 40,
          borderColor: "gray",
          borderWidth: 1,
        }}
      />
      <Text>Cpf</Text>
      <TextInput
        style={{
          height: 40,
          borderColor: "gray",
          borderWidth: 1,
        }}
      />
      <Text>Email</Text>
      <TextInput
        style={{
          height: 40,
          borderColor: "gray",
          borderWidth: 1,
        }}
      />
      <Text>Senha</Text>
      <TextInput
        style={{
          height: 40,
          borderColor: "gray",
          borderWidth: 1,
        }}
      />
      <Button
        title="Salvar"
        buttonStyle={{
          backgroundColor: "rgba(78, 116, 289, 1)",
          borderRadius: 15,
        }}
        containerStyle={{
          width: 200,
          marginHorizontal: 50,
          marginVertical: 10,
        }}
      />
    </ScrollView>
  );
}

function CadastroContato() {
  return (
    <ScrollView>
      <View>
        <Text>Contato</Text>
      </View>
      <Text>Nome</Text>
      <TextInput
        style={{
          height: 40,
          borderColor: "gray",
          borderWidth: 1,
        }}
      />
      <Text>Email</Text>
      <TextInput
        style={{
          height: 40,
          borderColor: "gray",
          borderWidth: 1,
        }}
      />
      <Text>Telefone</Text>
      <TextInput
        style={{
          height: 40,
          borderColor: "gray",
          borderWidth: 1,
        }}
      />
      <Button
        title="Salvar"
        buttonStyle={{
          backgroundColor: "rgba(78, 116, 289, 1)",
          borderRadius: 15,
        }}
        containerStyle={{
          width: 200,
          marginHorizontal: 50,
          marginVertical: 10,
        }}
      />
    </ScrollView>
  );
}

function AlteracaoExclusaoContato() {
  return (
    <ScrollView>
      <View>
        <Text>Contato</Text>
      </View>
      <Text>Nome</Text>
      <TextInput
        style={{
          height: 40,
          borderColor: "gray",
          borderWidth: 1,
        }}
      />
      <Text>Email</Text>
      <TextInput
        style={{
          height: 40,
          borderColor: "gray",
          borderWidth: 1,
        }}
      />
      <Text>Telefone</Text>
      <TextInput
        style={{
          height: 40,
          borderColor: "gray",
          borderWidth: 1,
        }}
      />
      <Button
        title="Alterar"
        buttonStyle={{
          backgroundColor: "rgba(78, 116, 289, 1)",
          borderRadius: 15,
        }}
        containerStyle={{
          width: 200,
          marginHorizontal: 50,
          marginVertical: 10,
        }}
      />
      <Button
        title="Excluir"
        buttonStyle={{
          backgroundColor: "rgba(255, 0, 0)",
          borderRadius: 15,
        }}
        containerStyle={{
          width: 200,
          marginHorizontal: 50,
          marginVertical: 10,
        }}
      />
    </ScrollView>
  );
}

export default function ListaContatos() {
  return (
    <ScrollView>
      <View>
        <Text>Lista de Contatos</Text>
      </View>
      <Text>Nome</Text>
      <TextInput
        style={{
          height: 40,
          borderColor: "gray",
          borderWidth: 1,
        }}
      />
      <Text>Email</Text>
      <TextInput
        style={{
          height: 40,
          borderColor: "gray",
          borderWidth: 1,
        }}
      />
      <Text>Telefone</Text>
      <TextInput
        style={{
          height: 40,
          borderColor: "gray",
          borderWidth: 1,
        }}
      />
      <Button
        title="Alterar"
        buttonStyle={{
          backgroundColor: "rgba(78, 116, 289, 1)",
          borderRadius: 15,
        }}
        containerStyle={{
          width: 200,
          marginHorizontal: 50,
          marginVertical: 10,
        }}
      />
      <Button
        title="Excluir"
        buttonStyle={{
          backgroundColor: "rgba(255, 0, 0)",
          borderRadius: 15,
        }}
        containerStyle={{
          width: 200,
          marginHorizontal: 50,
          marginVertical: 10,
        }}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
