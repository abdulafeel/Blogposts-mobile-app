import React, { useContext } from "react";
import { View,StyleSheet,Text } from "react-native";
import {Context} from '../context/BlogContext';
import BlogPostForm from '../components/BlogPostForm';
import { TextInput } from "react-native-gesture-handler";

const CreateScreen=({navigation})=>{

    const {addBlogPost} =useContext(Context);
    return(
        <BlogPostForm
        onSubmit={(title,content)=>{
            addBlogPost(title,content,()=> navigation.navigate('Index'));
        }}
        />
    );
};

const styles= StyleSheet.create({});

export default CreateScreen;