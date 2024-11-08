import React,{useState,useEffect} from 'react'
import Container from '../components/Container/Container'
import PostForm from '../components/post-form/PostForm'
import service from '../appwrite/config'
import { useNavigate, useParams } from 'react-router-dom'



function EditPosts() {

    const [posts,setPosts]=useState(null)
    const {slug}=useParams()
    const navigate = useNavigate()

    useEffect(()=>{
        if(slug){
            service.getPost(slug).then((post)=>{
                if(post){
                    setPosts(post)
                }
            })
        }else{ 
            navigate('/')
        }
    },[slug,navigate])
  return posts? (
    <div className="py-8">
        <Container>
            <PostForm post={posts}/>
        </Container>
    </div>

  ):null
}

export default EditPosts
