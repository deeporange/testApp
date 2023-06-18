import React, { useEffect, useState } from 'react'
import { ScrollView, StyleSheet, View } from 'react-native'
import { Post } from '../../models/Post'
import { PostCard } from './PostCard'
import axios from 'axios'
import { fetchUrl } from '../../service/API'
import { Menu, Button } from 'react-native-paper'

export const PostList = () => {
    const [posts, setPosts] = useState<Post[]>([])
    const [pagesOnScreen, setPagesOnScreen] = useState(10)
    const [menuVisible, setMenuVisible] = useState<boolean>(false)
    const getPosts = async () => {
        try {
            const data = await axios(`${fetchUrl}?_limit=${pagesOnScreen}`);
            const postData:Post[] = data.data;
            console.log(postData);
            // postData.map((post:Post) => new Post(post.id, post.title, post.body))
            setPosts(postData)
        } catch (error: any) {
            throw new Error(error.message);
            
        }
    }

    const setPageLimit = (limit:number) => {
        setPagesOnScreen(limit)
    }
    useEffect(() => {
      getPosts()
    },
    [pagesOnScreen])
    
  return (
    <View>
        <Menu visible={menuVisible} anchor={<Button onPress={()=>setMenuVisible(true)}>menu</Button>}>
            <Menu.Item title='10' onPress={()=>setPageLimit(10)}/>
            <Menu.Item title='15' onPress={()=>setPageLimit(15)}/>
            <Menu.Item title='20' onPress={()=>setPageLimit(20)}/>
            </Menu>
        <ScrollView style={styles.postList}>
            {
                posts.map(post=><PostCard
                body={post.body} id={post.id} title={post.title} key={post.id}
                />
                )
            }
        </ScrollView>
    </View>
    
  )
 
}

const styles = StyleSheet.create({
    postList: {
        display:'flex',
        flexDirection: 'column',
        gap: 1
    }
        
})