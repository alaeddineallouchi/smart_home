import { StyleSheet, Text, View,Image,TouchableOpacity, ScrollView } from 'react-native';
import React from 'react';
import { useSelector } from 'react-redux';
import { LinearGradient } from 'expo-linear-gradient';

const Home = ({navigation}) => {

  const userInfos = useSelector(state => state.infos);
  console.log(userInfos);
  
  // const authUser = useSelector(state => state.users);
  // console.log(authUser)


  return (
    <ScrollView Style={styles.scrollViewContainer}>
             <LinearGradient 
            colors={["#1A91DA", "orange"]}
            style={styles.container}
            >
      <View style={styles.row}>
        <TouchableOpacity onPress={()=>navigation.navigate('Chambre')}> 
        <View style={styles.column}>
          <Image source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSH0orSK430ywgmLjOgW99tJneIyVSYp90OgQ&usqp=CAU' }} style={styles.image} />
          <Text style={styles.title}>Chambre</Text>
        </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>navigation.navigate('Sallon')}>
        <View style={styles.column}>
          <Image source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbIN4-Dec0XPPbO9w9vE7nZMNZHQHB04xuQw&usqp=CAU' }} style={styles.image} />
          <Text style={styles.title}>Salon</Text>
        </View>
        </TouchableOpacity>
      </View>


       <View style={styles.row}>
       <TouchableOpacity onPress={()=>navigation.navigate('Garage')}>
        <View style={styles.column}>
          <Image source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1yt83Qq0CbsZp2sdec8tJWG08sf-FdKa84A&usqp=CAU' }} style={styles.image} />
          <Text style={styles.title}>Garage</Text>
        </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={()=>navigation.navigate('Jardin')}>
        <View style={styles.column}  >
          <Image source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzOftdUw9ApQ-CkrFvxmPl_ecAiZpNFvW61w&usqp=CAU' }} style={styles.image} />
          <Text style={styles.title}>Jardin</Text>
        </View>
        </TouchableOpacity>
      </View>

      <View style={styles.row} >
      <TouchableOpacity onPress={()=>navigation.navigate('Toillet')} >
        <View style={styles.column}>
          <Image source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHE8F-Qo5oH7rb785lKXK4ea8DCQzG5ncLEA&usqp=CAU' }} style={styles.image} />
          <Text style={styles.title}>Toilette</Text>
        </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={()=>navigation.navigate('Cuisine')}>
        <View style={styles.column}>
          <Image source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwaD8zPi5ZFzJ18mJzbqjKDxG9JXDfkzckew&usqp=CAU' }} style={styles.image} />
          <Text style={styles.title}>Cuisine</Text>
        </View>
        </TouchableOpacity>
        
        
        
        
      </View>
    </LinearGradient>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  scrollViewContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  imageContainer: {
    width: '49%',
    marginBottom: 10,
  },
  image: {
    width: '100%',
    height: 150,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 5,
    textAlign: 'center',
  },
});

export default Home;
