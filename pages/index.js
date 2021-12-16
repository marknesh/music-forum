import { collection, getDocs, getFirestore, onSnapshot, orderBy, query } from 'firebase/firestore'
import Head from 'next/head'
import ForumPosts from '../components/ForumPosts'
import Layout from '../components/Layout'
import { app, db } from '../firebase'
import {useState,useEffect} from "react"



export default function Home({posts}) {
  // const [posts,setPosts]=useState([])
  const [loading,setLoading]=useState(true)

  // useEffect(()=>{
  //   setLoading(true)
  //   const unsubscribe=onSnapshot(query(collection(db,"posts"),orderBy("timestamp","desc")),snapshot=>{
      
  //     setPosts(snapshot.docs)
  //     setLoading(false)
    
  //   })
    



  //   return ()=>unsubscribe()
    
  // },[])

  
  return (
    <div>
      <Head>
        <title>Music Forum</title>
        <meta name="description" content="music forum" />
        <link rel="icon" href="/musiclogo.png" />
      </Head>
      
      <Layout>

      
      <ForumPosts posts={posts} loading={loading} />
      </Layout>

     
    </div>
  )
}



export async function getServerSideProps(){

  const posts=await getDocs(query(collection(db,"posts"),orderBy("timestamp","desc")))
  const allPosts=posts.docs.map((post)=>({
    ...post.data(),id:post.id,timestamp:post.data().timestamp.toDate().getTime()
  }))


  return{
    props:{
posts:allPosts
    }
  }
}