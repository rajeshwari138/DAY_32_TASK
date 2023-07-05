import { Rating } from '@mui/material';
import React, { useContext } from 'react'
import { Link, useParams } from 'react-router-dom';
import UserContext from './contect';
import loadings from '../loading.svg'

function ViewBook() {
    let context = useContext(UserContext);
    const {deleteData,update,deleteLoading}= context;
    const params = useParams();
    
    console.log(params.id);
    let viewBook = update.find((item)=> item.id === params.id )
  
    console.log(viewBook);
  return (
   <>
   <div>
   <div className=' d-flex justify-content-center m-5'>
    
    <div>
    <h2 className='mb-3'>View Book Details</h2>
    <div style={{ width: "18rem"}} className=" d-flex justify-content-center">
                <div  style={{backgroundColor:"white",borderRadius:"10px"}}>
                <img src={viewBook.bookUrl} alt="img" style={{ width: "15rem",height:"20rem",borderRadius:"10px" }} />
                <div >
                    <h6 className="text-center mt-1 ">{viewBook.bookName}</h6>
                    
                    <h3 className="text-center"><Rating name="half-rating-read" defaultValue={viewBook.Rating} precision={0.5} readOnly /></h3>
                    { viewBook.currentStock === "In Stock" ? <h6 className="text-center text-success">{viewBook.currentStock}</h6> : <h6 className="text-center text-danger">{viewBook.currentStock}</h6>}
                    
                    <div className=' d-flex justify-content-center gap-2'>
                    <Link to={`/portal/edit-book/${viewBook.id}`} > <button  class="btn mb-2 "  style={{backgroundColor:"#FEC007"}}>Edit</button> </Link>
                     <button  class="btn mb-2"  style={{backgroundColor:"red"}} onClick ={()=>{
                        deleteData(viewBook.id);
                        
                     }}>Delete</button> {deleteLoading ? <img src={loadings} alt="load" style={{width:"3rem",paddingLeft:"10px"}} />: null} 
                       
                    </div>
                </div>

                
               

                </div>
            </div>
    </div>
   </div>

   <div className='w-75 mx-auto'>
   <h4 class="fw-bold">Book Name :<span class="fs-5 fw-normal">{viewBook.bookName}</span> </h4>
   <h4 class="fw-bold">Book Id :<span class="fs-5 fw-normal">{viewBook.bookId}</span> </h4>
   <h4 class="fw-bold">Author Name :<span class="fs-5 fw-normal">{viewBook.authorName}</span> </h4>
   <h4 class="fw-bold">Language :<span class="fs-5 fw-normal">{viewBook.language}</span> </h4>
   <h4 class="fw-bold">Gener : <span class="fs-5 fw-normal">{viewBook.gener}</span></h4>
   <h4 class="fw-bold">Edition : <span class="fs-5 fw-normal">{viewBook.edition}</span></h4>
   <h4 class="fw-bold">Book Cost : <span class="fs-5 fw-normal">{viewBook.bookCost}</span></h4>
   <h4 class="fw-bold">Page : <span class="fs-5 fw-normal">{viewBook.page}</span></h4>
   <h4 class="fw-bold">Publish Date : <span class="fs-5 fw-normal">{viewBook.publishDate}</span></h4>
   <h4 class="fw-bold">Book Description : <span class="fs-5 fw-normal">{viewBook.bookDescription}</span></h4>
   
   </div>
   </div>
   </>
  )
}

export default ViewBook
