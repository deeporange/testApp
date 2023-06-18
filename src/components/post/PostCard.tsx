import React, { FC } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Post } from '../../models/Post'

export const PostCard:FC<Post> = ({id, title, body}) => {
  return (
    <View style={styles.postCard}>
        <Text style={styles.postTitle}>{title}</Text>
        <Text style={styles.postBody}>{body}</Text>
        </View>
  )
}

const styles = StyleSheet.create({
    postCard: {
        padding : 15,
        flex : 1,
        backgroundColor:"#4169E1",
        color: 'white',
        marginTop: 10,
        borderRadius: 15
    },
    postTitle: {
        fontWeight: 'bold',

    },
    postBody: {
        fontSize: 8
    }
})