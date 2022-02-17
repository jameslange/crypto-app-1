import React, { useEffect, useState, useRef } from "react";
import CurrentNfts from "./CurrentNfts";
import ReactPaginate from "react-paginate";
import "../style.css";
function PaginatedItems({
  itemOffset,
  setItemOffset,
  selected,
  setSelected,
  itemsPerPage,
  nftBalances,
  currentItems,
  setCurrentItems,
  scrollUp,
  executeScroll,
}) {
  const [pageCount, setPageCount] = useState(0);

  const firstUpdate = useRef(true);

  useEffect(() => {
    if (firstUpdate.current) {
      firstUpdate.current = false;
      return;
    }

    const endSlice = itemOffset + itemsPerPage;
    console.log(`Loading items from ${itemOffset} to ${endSlice}`);
    console.log(currentItems);
    setCurrentItems(nftBalances.slice(itemOffset, endSlice));
    setPageCount(Math.ceil(nftBalances.length / itemsPerPage));
    // eslint-disable-next-line
  }, [itemOffset, itemsPerPage, nftBalances]);

  const handlePageClick = (event) => {
    // console.log("hi");
    let offset = document.documentElement.scrollTop + window.innerHeight;
    if (offset + 1 >= document.documentElement.offsetHeight) {
      executeScroll();
    }
    setSelected(event.selected);
    const newOffset = (event.selected * itemsPerPage) % nftBalances.length;
    console.log(`User requested page number ${event.selected} which is offset ${newOffset}`);
    setItemOffset(newOffset);
  };

  return (
    <div ref={scrollUp} className="">
      <div className="flex w-full py-10 ">
        <ReactPaginate
          pageClassName="btn btn-xs md:btn-sm"
          className=" btn-group mx-auto"
          nextClassName="btn btn-xs md:btn-sm"
          previousClassName="btn btn-xs md:btn-sm"
          breakLabel="..."
          breakClassName="btn btn-xs md:btn-sm"
          nextLabel="next >"
          onPageChange={handlePageClick}
          pageRangeDisplayed={5}
          pageCount={pageCount}
          previousLabel="< prev"
          renderOnZeroPageCount={null}
          activeClassName="btn-active"
          forcePage={selected}
        />
      </div>
      <div className="flex flex-col items-center md:block ">
        <div className="grid grid-cols-auto-fit gap-12 mx-20">
          <CurrentNfts currentItems={currentItems} />
        </div>
      </div>
      <div className="flex w-full pt-10">
        <ReactPaginate
          pageClassName="btn btn-xs md:btn-sm"
          className="btn-group mx-auto"
          nextClassName="btn btn-xs md:btn-sm"
          previousClassName="btn btn-xs md:btn-sm"
          breakLabel="..."
          breakClassName="btn btn-xs md:btn-sm"
          nextLabel="next >"
          onPageChange={handlePageClick}
          pageRangeDisplayed={5}
          pageCount={pageCount}
          previousLabel="< prev"
          renderOnZeroPageCount={null}
          activeClassName="btn-active"
          forcePage={selected}
        />
      </div>
    </div>
  );
}

export default PaginatedItems;
