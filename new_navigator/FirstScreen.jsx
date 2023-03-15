import {View, Text, StyleSheet} from 'react-native';

function FirstScreen(){

    return(
        <View>
            <Text> Pierwszy ekran 
                <Text style={styles.siemanko}> SIEMANKO !!!!</Text>
           
            </Text>
        </View>
    )
}

export default FirstScreen;

const styles = StyleSheet.create({
    siemanko: {
        color: 'red'
    }
})