import React, { useContext} from 'react'
import { useFormik } from 'formik';
import Rating from '@mui/material/Rating';
import loadings from '../loading1.svg'
import UserContext from './contect';
import { useParams } from 'react-router-dom';
function Edit() {
    const params = useParams();
  let context = useContext(UserContext);
  const {update,putData,putLoading}= context;

    

  let edit = update.find((item)=> item.id === params.id )
 

  const formik = useFormik({
    initialValues:{
      Rating: edit.Rating ,
      bookUrl: edit.bookUrl ,
      bookId: edit.bookId ,
      bookName: edit.bookName ,
      language: edit.language,
      authorName: edit.authorName ,
      gener: edit.gener,
      edition: edit.edition,
      bookCost: edit.bookCost,
      currentStock: edit.currentStock ,
      page: edit.page ,
      publishDate: edit.publishDate,
      bookDescription: edit.bookDescription

    },
    validate : (values)=>{
        const errors ={};
    if (values.Rating.length === 0 ){
          errors.Rating = "Rating is required"
        }
if (values.bookUrl.length === 0 ){
  errors.bookUrl = "Book image URL is required"
}
if (values.bookId.length === 0 ){
  errors.bookId = "Book id is required"
}
if (values.bookName.length === 0 ){
  errors.bookName = "Book name isRequired"
}
if (values.language.length === 0 ){
  errors.language = "Language is required"
}
if (values.authorName.length === 0 ){
  errors.authorName = " Author name required"
}

if (values.gener.length === 0 ){
  errors.gener = " Gener is required"
}
if (values.edition.length === 0 ){
  errors.edition = " Edition is required"
}
if (values.bookCost.length === 0 ){
  errors.bookCost = " Book is required"
}
if (values.currentStock.length === 0 ){
  errors.currentStock = "Current stock required"
}
if (values.page.length === 0 ){
  errors.page = "No of pages required"
}
if (values.publishDate.length === 0 ){
  errors.publishDate = " Publish date is required"
}
if (values.bookDescription.length === 0 ){
  errors.bookDescription = " Book discription is required"
}

        return errors;
    },
    
    onSubmit: async(values)=>{
     

     await putData(values,params.id)
     
}
});


  return (
    <div className='container w-75 mx-auto ' >
      <h1 className='text-center mt-2'> Edit Book Details</h1>
      <img src={edit.bookUrl} className=" mx-auto d-block w-25" alt="bookimage" style={{ width: "15rem",height:"20rem",borderRadius:"10px" }}/>
      <form className=' w-100' onSubmit={(values)=>{
  formik.handleSubmit(values)
 }}>
    
  <div className="row">
  <div className="col-md-12 mt-3">
   <div className=' d-flex justify-content-center '> 
    <Rating
        name="Rating"
        value={formik.values.value}
        onChange ={formik.handleChange}
        size = 'large'
        defaultValue={edit.Rating} 
        precision={0.5}
        
        
      /></div>
      <div style={{color:"red", textAlign:"end"}}> {formik.errors.Rating}</div>
  </div>

  <div className="col-md-12 mt-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Add Book Image URL</label>
    <input type="url" className="form-control" id="exampleInputEmail1"   value={formik.values.bookUrl}
       onChange ={formik.handleChange}
       name = "bookUrl" placeholder='Enter the book image URL'/>
        <div style={{color:"red", textAlign:"end"}}> {formik.errors.bookUrl}</div>
  </div>

  <div className="col-md-6 mt-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Book Id</label>
    <input type="text" className="form-control" id="exampleInputEmail1"   value={formik.values.bookId}
       onChange ={formik.handleChange}
       name = "bookId" placeholder='Enter the book ID'/>
        <div style={{color:"red", textAlign:"end"}}> {formik.errors.bookId}</div>
  </div>

  <div className="col-md-6 mt-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Book Name</label>
    <input type="text" className="form-control" id="exampleInputEmail1"   value={formik.values.bookName}
       onChange ={formik.handleChange}
       name = "bookName" placeholder='Enter the book name'/>
        <div style={{color:"red", textAlign:"end"}}> {formik.errors.bookName}</div>
  </div>
  <div className="col-md-6 mt-3">
    <label htmlFor="validationCustom04" className="form-label">Language</label>
    <select className="form-select" id="validationCustom04"  value={formik.values.language}
       onChange ={formik.handleChange}
       name = "language" >
      <option selected disabled value="">Enter book language</option>
      <option value="Assamese">Assamese</option>
      <option value="Bengali">Bengali</option>
      <option value="Bengali">Bengali</option>
      <option value="English">English</option>
      <option value="Kannada">Kannada</option>
      <option value="Kashmiri">Kashmiri</option>
      <option value="Nepali">Nepali</option>
      <option value="Malayalam">Malayalam</option>
      <option value="Punjabi">Punjabi</option>
      <option value="Tamil">Tamil</option>
      <option value="Telugu">Telugu</option>
      <option value="Urdu">Urdu</option>
      <option value="Oriya">Oriya</option>
      
    </select>
     <div style={{color:"red", textAlign:"end"}}> {formik.errors.language}</div>
 </div>
  <div className="col-md-6 mt-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Author Name</label>
    <input type="text" className="form-control" id="exampleInputEmail1"  value={formik.values.authorName}
       onChange ={formik.handleChange}
       name = "authorName" placeholder='Enter the author name'/>
       <div style={{color:"red", textAlign:"end"}}> {formik.errors.authorName}</div>
  </div>

 
  
  <div className="col-md-6 mt-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Edition</label>
    <input type="text" className="form-control" id="exampleInputEmail1"  value={formik.values.edition}
       onChange ={formik.handleChange}
       name = "edition" placeholder='Enter the edition'/>
        <div style={{color:"red", textAlign:"end"}}> {formik.errors.edition}</div>
  </div>

  <div className="col-md-6 mt-3">
    <label htmlFor="validationCustom04" className="form-label">Gener</label>
    <select className="form-select" id="validationCustom04"  value={formik.values.gener}
       onChange ={formik.handleChange}
       name = "gener">
              <option selected disabled value="">Enter the gener</option>
              <option value="All">All</option>
              <option value="Action">Action</option>
              <option value="Adventure">Adventure</option>
              <option value="Animation">Animation</option>
              <option value="Biography">Biography</option>
              <option value="Comedy">Comedy</option>
              <option value="Crime">Crime</option>
              <option value="Kids">Kids</option>
              <option value="Thrillers">Thrillers</option>
              <option value="Documentary">Documentary</option>
    </select>
     <div style={{color:"red", textAlign:"end"}}> {formik.errors.gener}</div>
 </div>

  <div className="col-md-6 mt-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Book Cost</label>
    <input type="text" className="form-control" id="exampleInputEmail1"  value={formik.values.bookCost}
       onChange ={formik.handleChange}
       name = "bookCost" placeholder='Enter the book cost'/>
        <div style={{color:"red", textAlign:"end"}}> {formik.errors.bookCost}</div>
  </div>

  <div className="col-md-6 mt-3">
    <label htmlFor="validationCustom04" className="form-label">Current Stock</label>
    <select className="form-select" id="validationCustom04"  value={formik.values.currentStock}
       onChange ={formik.handleChange}
       name = "currentStock">
      <option selected disabled value="">Choose...</option>
      <option value="out of stock">out of stock</option>
      <option value="In Stock">In Stock</option>
    </select>
     <div style={{color:"red", textAlign:"end"}}> {formik.errors.currentStock}</div>
 </div>
  <div className="col-md-6 mt-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Pages</label>
    <input type="text" className="form-control" id="exampleInputEmail1"  value={formik.values.page}
       onChange ={formik.handleChange}
       name = "page" placeholder='Enter the no of pages in this book'/>
        <div style={{color:"red", textAlign:"end"}}> {formik.errors.page}</div>
  </div>

  <div className="col-md-6 mt-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Publish Date</label>
    <input type="month" className="form-control" id="exampleInputEmail1"  value={formik.values.publishDate}
       onChange ={formik.handleChange}
       name = "publishDate"/>
        <div style={{color:"red", textAlign:"end"}}> {formik.errors.publishDate}</div>
  </div>

  <div className="col-md-6 w-100 mt-3">
  <label htmlFor="exampleFormControlTextarea1" className="form-label">Book Description</label>
  <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" cols="30"  value={formik.values.bookDescription}
       onChange ={formik.handleChange}
       name = "bookDescription" placeholder='Tell some point in this book'></textarea>
        <div style={{color:"red", textAlign:"end"}}> {formik.errors.bookDescription}</div>
</div>
  
  </div>
  
  <div className=' d-flex justify-content-center mt-5 mb-5'>
  <button type="submit" className="btn btn-primary" disabled = {!formik.isValid}>Edit Book</button> {putLoading ? <img src={loadings} alt="load" style={{width:"3rem",paddingLeft:"10px"}} />: null} 
  </div>
</form>
       
      
    </div>


  )
}

export default Edit