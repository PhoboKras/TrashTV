import React from "react";
import { View, StyleSheet } from "react-native";
import YoutubePlayer from "react-native-youtube-iframe";


export default function PlayerYoutube({ videoId }) {

  if (!videoId) {
    return null;
  }


  return (
    <View style={styles.container}>

      <YoutubePlayer
        height={220}
        play={false}
        videoId={videoId}
      />

    </View>
  );
}


const styles = StyleSheet.create({

  container:{
    width:"100%",
    borderRadius:12,
    overflow:"hidden",
    marginTop:15,
  },

});