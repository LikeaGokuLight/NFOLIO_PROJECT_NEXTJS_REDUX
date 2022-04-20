import React, { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
import styles from "./Test.module.scss";
import {useSelector, useDispatch} from "react-redux";
import {loadCardsData} from "../redux/actions/cardsAction";
import Stack from "@mui/material/Stack";
import {Pagination} from "@mui/material";

// Example items, to simulate fetching from another resources.
const items = [
  { id: 1, name:'vitali', age:'27', job:'freelancer'},
  {id: 2, name:'Ryuji', age:'36', job:'Samurai'},
  {id: 3, name:'Goku', age:'32', job:'Sayan'},
  {id: 4, name:'Sung Jin Whoo', age:'23', job:'Monarch'},
  {id: 5, name:'Cosmo Jesus', age:'33', job:'Brother'},
  {id: 6, name:'Father', age:'UNKNOWN', job:'All'},
  { id: 7, name:'vitali', age:'27', job:'freelancer'},
  {id: 8, name:'Ryuji', age:'36', job:'Samurai'},
  {id: 9, name:'Goku', age:'32', job:'Sayan'},
  {id: 10, name:'Sung Jin Whoo', age:'23', job:'Monarch'},
  {id: 11, name:'Cosmo Jesus', age:'33', job:'Brother'},
  {id: 12, name:'Father', age:'UNKNOWN', job:'All'},
  { id: 13, name:'vitali', age:'27', job:'freelancer'},
  {id: 14, name:'Ryuji', age:'36', job:'Samurai'},
  {id: 15, name:'Goku', age:'32', job:'Sayan'},
  {id: 16, name:'Sung Jin Whoo', age:'23', job:'Monarch'},
  {id: 17, name:'Cosmo Jesus', age:'33', job:'Brother'},
  {id: 18, name:'Father', age:'UNKNOWN', job:'All'},
  { id: 19, name:'vitali', age:'27', job:'freelancer'},
  {id: 20, name:'Ryuji', age:'36', job:'Samurai'},
  {id: 21, name:'Goku', age:'32', job:'Sayan'},
  {id: 22, name:'Sung Jin Whoo', age:'23', job:'Monarch'},
  {id: 23, name:'Cosmo Jesus', age:'33', job:'Brother'},
  {id: 24, name:'Father', age:'UNKNOWN', job:'All'}
];

const PER_PAGE = 2;

export default function Test() {
  const [currentPage, setCurrentPage] = useState(0);
  const [data, setData] = useState([]);

  const { cards_data, is_loading_cards } = useSelector((state) => state.cards);

  const dispatch = useDispatch();

  useEffect(() => {
    fetchData()
  }, []);

  function fetchData() {
    const dataLoad = dispatch(loadCardsData());
    setData(dataLoad);
  }

  const offset = currentPage * PER_PAGE;

  // const currentPageData = data
  //   .slice(offset, offset + PER_PAGE)
  //   .map((d) => (
  //     <div key={d.id}>
  //       <h1>{ d.name }</h1>
  //       <h1>{ d.id }</h1>
  //       <hr/>
  //     </div>
  //   ));

  const pageCount = Math.ceil(cards_data?.length / PER_PAGE);


  function handlePageClick({ selected: selectedPage }) {
    console.log(selectedPage, 'selectedPage')
    setCurrentPage(selectedPage);
  }

  const handleClick = (event, value) => {
    console.log(value, 'value')
    setCurrentPage(value - 1);
  }

  return (
    <div className="App">
      {
        is_loading_cards
          ? (
            <h1>LOADING CARDS....</h1>
          )
          : (
            <div>
              {
                cards_data.slice(offset, offset + PER_PAGE)
                  .map((d, i) => (
                    <div key={d.id}>
                      <h1>{ d.name }</h1>
                      <h1>{ d.id }</h1>
                      <h1>{ i }</h1>
                      <hr/>
                    </div>
                  ))
              }
              <h1>React Paginate Example</h1>


              <Stack spacing={2}>
              <Pagination count={pageCount} variant="outlined" shape="rounded" onChange={handleClick} />
              </Stack>


              <ReactPaginate
                previousLabel={"← Previous"}
                nextLabel={"Next →"}
                pageCount={pageCount}
                onPageChange={handlePageClick}
                containerClassName={styles.container}
              />
            </div>
          )
      }

    </div>
  )
}






























// export default function Test() {
//   const [data, setData] = React.useState([]);
//   const [page, setPage] = React.useState(0);
//   const [rowsPerPage, setRowsPerPage] = React.useState(5);
//   const handleChange = (event, value) => {
//     setPage(value);
//   };
//
//   useEffect(() => {
//     setData(items)
//   })
//
//   return (
//     <Stack spacing={2}>
//       <Typography>Page: {page}</Typography>
//       <div>
//         {
//           data.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
//           .map(d=>(
//             <div key={d.id}>
//               <h1>
//                 {d.name}
//                 {d.id}
//               </h1>
//             </div>
//           ))
//         }
//       </div>
//       <Pagination count={items.length} rowsPerPage={rowsPerPage} page={page} onChange={handleChange} />
//     </Stack>
//   );
// }

