import React,{useEffect, useState, useRef} from 'react'
import CurrentNfts from './CurrentNfts';
import ReactPaginate from 'react-paginate';

function PaginatedItems({itemsPerPage, nftBalances}) {
    const [currentItems, setCurrentItems] = useState([]);
   const [pageCount, setPageCount] = useState(0);
    const [itemOffset, setItemOffset] = useState(0);
    const [selected, setSelected] = useState(null);

  const scrollUp = useRef(null)
  const executeScroll = () => scrollUp.current.scrollIntoView({behavior:'smooth'})

    useEffect(() => {
        const endSlice = itemOffset + itemsPerPage;
        console.log(`Loading items from ${itemOffset} to ${endSlice}`);
        console.log(currentItems)
        setCurrentItems(nftBalances.slice(itemOffset, endSlice));
        setPageCount(Math.ceil(nftBalances.length / itemsPerPage));
      }, [itemOffset, itemsPerPage, nftBalances]);


    const handlePageClick = (event) => {
        let offset = document.documentElement.scrollTop + window.innerHeight;
        if(offset +1 >= document.documentElement.offsetHeight) {
          executeScroll();
        }
        setSelected(event.selected);
        const newOffset = (event.selected * itemsPerPage) % nftBalances.length;
        console.log(`User requested page number ${event.selected} which is offset ${newOffset}` );
        setItemOffset(newOffset);
    }
    
    return (
        <>
        <div ref={scrollUp} className="flex w-full pb-10">
        <ReactPaginate 
                    pageClassName="btn"
                    className="flex justify-around btn-group mx-auto"
                    nextClassName="btn"
                    previousClassName="btn"
                    breakLabel="..."
                    breakClassName="btn"
                    nextLabel="next >"
                    onPageChange={handlePageClick}
                    pageRangeDisplayed={5}
                    pageCount={pageCount}
                    previousLabel="< previous"
                    renderOnZeroPageCount={null}
                    activeClassName="btn-active"
                    forcePage={selected}
                   />
                   </div>
          <div className="flex flex-col items-center md:block"  >
                <div className="grid grid-cols-auto-fit gap-12 mx-20">
                <CurrentNfts currentItems={currentItems} />
                </div>
          </div>
          <div className="flex w-full pt-10">
            <ReactPaginate 
                    pageClassName="btn"
                    className="flex justify-around btn-group mx-auto"
                    nextClassName="btn"
                    previousClassName="btn"
                    breakLabel="..."
                    breakClassName="btn"
                    nextLabel="next >"
                    onPageChange={handlePageClick}
                    pageRangeDisplayed={5}
                    pageCount={pageCount}
                    previousLabel="< previous"
                    renderOnZeroPageCount={null}
                    activeClassName="btn-active"
                    forcePage={selected}
                   />
            </div>
        </>
    )
}

export default PaginatedItems
