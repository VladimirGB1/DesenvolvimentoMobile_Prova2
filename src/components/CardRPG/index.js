import { Button, Image, Text, View } from "react-native";

import styles from './styles';

export default function CardRPG(props){
    return (
        <View style={styles.container}>
            <View style={styles.viewImg}>
                <Image source={{
                    uri: props.card.imgUrl
                }} style={styles.img}/>
            </View>
            <View style={styles.viewData}>
                <Text style={styles.name}>Nome: {props.card.nome}</Text>
                <Text style={styles.description}>Descrição: {props.card.descricao}</Text>
                <Button style={styles.btn} title="Trocar"/>
            </View>
        </View>
    );
}