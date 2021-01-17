import React from 'react'
import {Card,CardBody, CardTitle} from 'reactstrap'

 const Data = ({posts, loading}) => {
const style ={
    paddingBottom:"10px",
}     

    return (
 <div className="Card">
     {posts.map((post)=>
     <div key={post} style={style}  className="container-fluid d-flex justify-content-center">
         <div className="row">
         <div className="col-sm-12 col-xs-12">
         <Card>
        <CardBody className="shadow p-6  bg-white rounded">
          <CardTitle><h5>FirstName: {post.FirstName}</h5></CardTitle>
          <CardTitle><h5>LastName: {post.LastName}</h5></CardTitle>
          <CardTitle><h5>Gender: {post.Gender}</h5></CardTitle>
          <CardTitle><h5>Latitude: {post.Latitude}</h5></CardTitle>
          <CardTitle><h5>Longitude: {post.Longitude}</h5></CardTitle>
          <CardTitle><h5>CreditCardNumber: {post.CreditCardNumber}</h5></CardTitle>
          <CardTitle><h5>CreditCardType: {post.CreditCardType}</h5></CardTitle>
          <CardTitle><h5>Email: {post.Email}</h5></CardTitle>
          <CardTitle><h5>DomainName: {post.DomainName}</h5></CardTitle>
          <CardTitle><h5>PhoneNumber: {post.PhoneNumber}</h5></CardTitle>
          <CardTitle><h5>MacAddress: {post.MacAddress}</h5></CardTitle>
          <CardTitle><h5>URL: <a href="#">{post.URL}</a></h5></CardTitle>
          <CardTitle><h5>UserName: {post.UserName}</h5></CardTitle>
          <CardTitle><h5>LastLogin: {post.LastLogin}</h5></CardTitle>
          <CardTitle><h5>PaymentMethod: {post.PaymentMethod}</h5></CardTitle>
        </CardBody>
      </Card>
         </div>
         </div>
     </div>
      )}
 </div>
    )
}
export default Data