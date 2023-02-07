import { Alert, Text, TouchableOpacity, View } from "react-native/";
import React from "react";
import CardStyle from "./Card.style";

const Card = (props) =>{

    return(

    <View style={CardStyle.container}>

    <View style={CardStyle.body}>

    <Text style={CardStyle.title}>{props.title} </Text>
    <Text style={CardStyle.text}>{props.text}</Text>

    </View>
    <TouchableOpacity 
    style={CardStyle.button_card}
    onPress={()=> Alert.alert('Merhaba ' + props.title)}
    
    >
        <Text style={CardStyle.card_button_title}>I LIKED</Text>
    </TouchableOpacity>
    </View>    

    )


};

export default Card;