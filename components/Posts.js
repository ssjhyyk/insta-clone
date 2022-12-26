import React from 'react';
import Post from './Post';

const DUMMY_DATA=[
    {
        id:'123',
        username:'james',
        userImg:'https://links.papareact.com/3ke',
        img:'https://links.papareact.com/3ke',
        caption:'this is a caption'
    },
    {
        id:'123',
        username:'james',
        userImg:'https://links.papareact.com/3ke',
        img:'https://links.papareact.com/3ke',
        caption:'this is a caption'
    },
];


function Posts() {
  return (
    <div>
        {DUMMY_DATA.map((post) => (
        <Post key={post.id}
        id={post.id}
        username={post.username}
        userImg={post.userImg}
        img={post.img}
        caption={post.caption}
        />
        ))}
        <Post/>
        <Post/>
        <Post/>
    </div>
  )
};

export default Posts;
