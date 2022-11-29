import { View, Text, Image, SafeAreaView, TextInput, ImageBackground } from "react-native";
import Icon from 'react-native-vector-icons/Feather';
import RowItem from "../components/RowItem";

export const Friends = () => (
  <SafeAreaView style={{ flex:1}}>
    <ImageBackground
      source={require("../assets/back-smile-bottL.png")}
      resizeMode="cover"
      style={{flex:1}}
    >
      <View style={{flexDirection:"row", justifyContent:"space-between", marginTop:40, marginRight:20}}>
        <Image
          source={require('../assets/logo.png')}
          style={{width:200, height:70, marginLeft:40}}
        />
        <Icon name='plus-circle' size={50} color="black"/>
      </View>
      <View style={{paddingTop:40, paddingBottom:20,  alignItems:"center"}}>
        <TextInput
          placeholder="   Search by username"
          style={{backgroundColor:"#FFD29C", width:300, height:50, borderRadius:16, borderColor:"black", borderWidth:2}}
        />
      </View>
      <RowItem
        title="ben_j_01"
        icon="image"
      />
      <RowItem
        title="james_wyatt"
        icon="image"
      />
      <RowItem
        title="stevie_okes"
        icon="image"
      />
      <RowItem
        title="Jill_bass"
        icon="image"
      />
      <RowItem
        title="dave_b7"
        icon="image"
      />
      <RowItem
        title="yusty"
        icon="image"
      />
      <RowItem
        title="craigy"
        icon="image"
      />
    </ImageBackground>
  </SafeAreaView>
);
