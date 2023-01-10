import React,{useState} from 'react';
import toastr from 'toastr';
import friendService from '../../services/friendService';

function AddEditFriendForm(){


  const[addEditFormData,setAddEditFormData] = useState({
    
    title: "",
    bio: "",
    summary: "",
    headline: "",
    slug: "",
    statusId: "Active",
    primaryImage: ""
  
});



const onAddClick =(e) => {     
  e.preventDefault();
  
  friendService
  .getAddFriend(addEditFormData)
  .then(onAddSuccess)
  .catch(onAddError)
}

const onAddSuccess = (response) => {
  console.log("Add/Edit",response);
  toastr.success("You are now added", "Adding Success")
}

const onAddError = (error) => {
  console.log("Adding Fail",error);
  toastr.error("Your adding request failed", "Adding Failure")
}

const onAddEditFormFieldChange = (event) =>{
  console.log("onChange", { syntheticEvent : event});
  // target represents input
  const target = event.target;

  const newUserValue = target.value;

  const nameOfField = target.name;
  console.log(nameOfField,newUserValue);

  setAddEditFormData((prevState) => {
    console.log("updater onChange");

    //update our current obj
    const newUserObject = {
      ...prevState,
    };

    newUserObject[nameOfField] = newUserValue;
    return  newUserObject;
  });

  console.log("end onChange");

}

return(
  <React.Fragment>
    <form>
      <div className="mb-3">
        <label for="exampleInputtitle" className="form-label">Title</label>
        <input 
          type="title" 
          className="form-control" 
          id="exampleInputtitle" 
          placeholder="Enter Your Title"
          aria-describedby="titleHelp"
          name="title" 
          value={addEditFormData.title}
          onChange={onAddEditFormFieldChange}
        />
        <div id="emailHelp" class="form-text"></div>
      </div>

      <div className="mb-3">
        <label for="exampleInputbio" className="form-label">Bio</label>
        <input 
          type="bio" 
          className="form-control" 
          id="exampleInputbio" 
          placeholder="Enter Your Bio"
          name="bio"
          value={addEditFormData.bio}
          onChange={onAddEditFormFieldChange}
        />
      </div>

      <div className="mb-3">
        <label for="exampleInputSummary" className="form-label">Summary</label>
        <input 
          type="summary" 
          className="form-control" 
          id="exampleInputSummary" 
          placeholder="Enter Your Summary"
          name="summary"
          value={addEditFormData.summary}
          onChange={onAddEditFormFieldChange}
          

        />
      </div>

      <div className="mb-3">
        <label for="exampleInputHeadline" className="form-label">Headline</label>
        <input 
          type="headline" 
          className="form-control" 
          id="exampleInputHeadline" 
          placeholder="Enter Your headline"
          name="headline"
          value={addEditFormData.headline}
          onChange={onAddEditFormFieldChange}
        />
      </div>

      <div className="mb-3">
        <label for="exampleInputSlug" className="form-label">Slug</label>
        <input 
          type="slug" 
          className="form-control" 
          id="exampleInputSlug" 
          placeholder="Please Enter Your Slug"
          name="slug"
          value={addEditFormData.slug}
          onChange={onAddEditFormFieldChange}
        />
      </div>

      <div className="mb-3">
        <label for="exampleInputimg" class="form-label">Primary Image</label>
        <input 
          type="img" 
          className="form-control" 
          id="exampleInputimg" 
          placeholder="Provide Primary Image"
          aria-describedby="imgHelp"
          name="primaryImage"
          value={addEditFormData.primaryImage}
          onChange={onAddEditFormFieldChange}
        />
      </div>
      <button type="submit" class="btn btn-primary" onClick = {onAddClick}>Submit</button>
    </form>
  </React.Fragment>

)
}

export default AddEditFriendForm;
