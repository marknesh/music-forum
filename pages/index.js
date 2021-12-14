import { collection, getDocs, orderBy, query } from 'firebase/firestore'
import Head from 'next/head'
import ForumPosts from '../components/ForumPosts'
import Layout from '../components/Layout'
import { db } from '../firebase'



export default function Home({posts}) {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <Layout>

      
      <ForumPosts posts={posts}/>
      </Layout>

     
    </div>
  )
}

export async function getServerSideProps(){

  const posts=await getDocs(query(collection(db,"posts"),orderBy("timestamp","desc")))

  const forumPosts=posts.docs.map((post)=>({

    ...post.data(),id:post.id,timestamp:post.data().timestamp.toDate().getTime()
  }))
  

  return{
    props:{
      posts:forumPosts
    }
  }


}
