import React, { useState, useEffect,useCallback } from 'react';
import * as peopleService from "../../services/peopleService";
import Person from '../Person';
import AddEditFriendForm from './AddEditFriendFrom';
import { Link,Routes,Route } from "react-router-dom";


function Friends(){

  const [pageData,setPageData] = useState({arrayOfPeople: [],peopleComponents:[] });
  
  const [count, setCount] =useState(0);
 
 false && console.log(pageData.arrayOfPeople);

 const onDeleteRequested =useCallback ((myPerson,eObj) => {
  console.log(myPerson.id.value,{myPerson,eObj});

  const handler = getDeleteSuccessHandler(myPerson.id.value);

  peopleService
    .deletePerson(myPerson.id.value)
    .then(handler)
    .catch(onDeleteError);

},[]);

const getDeleteSuccessHandler =(idToBeDeleted) => {
  console.log("getDeleteSuccessHandler",idToBeDeleted);

  return() => {
    console.log("onDeleteSuccess",idToBeDeleted);

    setPageData(prevState => {
      const pd={...prevState};
      pd.arrayOfPeople =[...pd.arrayOfPeople]; //pointing to the brand new array

      const idxOf = pd.arrayOfPeople.findIndex(person =>{

        let result = false;

        if(person.id.value === idToBeDeleted)
        {
          result = true;
        }

        return result;
      });

      if(idxOf >= 0)
      {
        pd.arrayOfPeople.splice(idxOf,1);
        pd.peopleComponents = pd.arrayOfPeople.map(mapPerson);
      }


      return pd;
    })

  }

}

  const mapPerson = (aPerson) => {
    //console.log("mapping",aPerson);
    return (
      <Person person={aPerson} key={"ListA-" + aPerson.id.value} onPersonClicked ={onDeleteRequested} />
    )
    }

    useEffect(() => {
      console.log("firing useEffect");
      peopleService.getPeople().then(onGetPeopleSuccess).catch(onGetPeopleError);
     
    },[]);

    const onGetPeopleSuccess = (data) => {
      console.log(data);
      let arrayOfPeeps = data.item.pagedItems;
      console.log({arrayOfPeeps});

      setPageData ((prevState) => {
        const pd ={...prevState};
        pd.arrayOfPeople = arrayOfPeeps;
        pd.peopleComponents = arrayOfPeeps.map(mapPerson);
        return pd;
      })

    }

    const onGetPeopleError =err => {
      console.log(err);
    }

    const onDeleteError =err => {
      console.log("Deleting",err);
    }

    const onHeaderClicked =() => {
      setCount((prevState) => {
        return prevState +1;
      });
    }

  return(
    <React.Fragment>
      <Link to="/addeditform"> Add/Edit Friend </Link>    
      <div className='container'>
        <h3 onClick= {onHeaderClicked} > Rendering {count} </h3>
        <div className='row'> {pageData.arrayOfPeople.map(mapPerson)} </div>
      </div>

      <Routes>
        <Route path= "/addeditform" element={<AddEditFriendForm />}></Route>
      </Routes>
      
    </React.Fragment>

  )
}



  export default Friends;