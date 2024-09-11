import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, Modal, View, Pressable, Image } from 'react-native';
import React, {useState} from 'react';

export default function App() {
  const [modalVisible, setModalVisible] = useState(false);
  return (

    <View style={{flex: 1, backgroundColor: "plum", padding: 60}}>
     <Pressable
      onPress={() => setModalVisible(true)}>
      <Text style = {styles.textButton} >
      Show modal message by pressing this magical text :)
      </Text>
      </Pressable>

      <Modal visible = {modalVisible} 
      onRequestClose={() => setModalVisible (false)} 
      animationType='slide'
       >
      
      <View style={{flex: 1, backgroundColor: "lightblue", padding: 60}}>
        <Text>This is a modal, I guess! To go back click "Close" or slide your screen.</Text>
        <Pressable onPress={() => setModalVisible(false)}>
          <Text style={styles.textButton}>close</Text> 
        </Pressable>
        <Image
          source={require('./assets/ThumbsUp.jpg')}
          style = {styles.image}
        />
       </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
 textButton: {
    color: 'midnightblue',
    fontSize: 18,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 10, 
    height: 10, 
    marginBottom: 20, 
  },

});
