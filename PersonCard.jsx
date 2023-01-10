// // import React from 'react';

// // function PersonCard(props) {
// //   console.log(props);
// //   const deleteClicked = () => {
// //     props.handleDelete(props.item);
// //   }
// //   return (
// //     <div className='col-4 card' style={{ width: "18rem" }}>
// //       <img src={props.item.icon} className="card-img-top" alt="..." />
// //       <div className='card-body'>
// //         <h5 className='card-title'>{props.item.firstName}</h5>
// //         <button
// //           type="button"
// //           className='btn btn-danger'
// //           onClick={deleteClicked}
// //         >
// //           {" "}
// //           Click Me
// //         </button>
// //       </div>
// //     </div>

// //   );
// // };
// // export default PersonCard;

// const handleMapping = () => {
//   const filteringTenTen = handleFiltering()
//   console.log(filteringTenTen)
//   const mappedList = filteringTenTen.map(mapItem);
//   setPeople((prevState) => {
//     let state = { ...prevState };
//     state.mappedList = mappedList;
//     return state;
//   });
//   return mappedList
// };

// const handleMapping = () => {
//   const filterPres = handleFiltering()
//   console.log("filterPres", filterPres);
//   const mappedList = filterPres.map(mapPresidents);
//   console.log("presidents.list", presidents.list);
//   setPresidents((prevState) => {
//     let state = { ...prevState };
//     state.mappedList = mappedList;
//     return state;
//   });
//   return mappedList
// };
// const handleFiltering = () => {
//   const filterList = presidents.list.filter(mapPresidents);
//   setPresidents((prevState) => {
//     let filterState = { ...prevState };
//     filterState.filterList = filterList;
//     return filterState
//   });
//   return filterList
// };

// // const handleMapping = () => {
// //   const filteringTenTen = handleFiltering()
// //   console.log(filteringTenTen)
// //   const mappedList = filteringTenTen.map(mapItem);
// //   setPeople((prevState) => {
// //     let state = { ...prevState };
// //     state.mappedList = mappedList;
// //     return state;
// //   });
// //   return mappedList
// // };
// // Collapse