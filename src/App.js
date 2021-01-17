import React, { useEffect, useState } from 'react'
import Data from './Components/Data'
import axios from 'axios'
import Pagination from './Components/Pagination'
function App() {
  const [q, setQ] =  useState("")
  const [posts, setPosts] = useState([])
  const [loading, setLoading] =useState(false)
  const [currentPage, setCurrentPage] = useState(1)
  const [postsPerPage] = useState(20)
  useEffect(()=>{
 const fetchPost = async () =>{
   setLoading(true)
   const res = await axios.get('http://api.enye.tech/v1/challenge/records')
   setPosts(res.data.records.profiles)
 }
 fetchPost()
  },[])
  console.log(posts.filter(post => post.FirstName[0]))
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost)
  const paginate = (pageNumber) => setCurrentPage(pageNumber)
  function search(posts){
return posts.filter((post)=> post.FirstName.toLowerCase().indexOf(q) > -1 || post.LastName.toLowerCase().indexOf(q) > - 1 || post.PaymentMethod.toLowerCase().indexOf(q) > - 1  )
  }
  return (
    <div className="App">
     <div style={{textAlign:'center', marginTop:'20px'}}>
       <h1 style={{fontSize:'.9rem'}}>Filter By FirstName, LastName and PaymentMethod.</h1>
       <input style={{width:'50%', padding:'10px', border:'2px solid #ccc', outlineColor:'lightblue', marginTop:'10px'}} type="text" value={q} onChange={(e) => setQ(e.target.value)} placeholder=" FILTER RECORDS"/>
     </div>
     <Pagination postsPerPage={postsPerPage} totalPosts={posts.length} paginate={paginate}/>
     <Data  posts={search(currentPosts)} loading={loading}/>
    </div>
  );
}

export default App;
 