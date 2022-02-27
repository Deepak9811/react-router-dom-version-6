import React, { useEffect } from 'react'
import { useParams, useSearchParams } from 'react-router-dom'

const Post = () => {
    let {category,id}= useParams()
    let [searchParams,setSearchParams]=useSearchParams()

   
    

    console.log(category,id)
    console.log(searchParams.get('price'))
  return (
    <>
    <h1>Post page category = {category}</h1>
    <h1>Post page id = {id}</h1>
    <h1>Post query id = {searchParams.get('price')} & type = {searchParams.get("type")}</h1>
    </>
  )
}

export default Post