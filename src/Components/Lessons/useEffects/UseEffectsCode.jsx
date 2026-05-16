import React from 'react';

const UseEffectsCode = `
import React, { useEffect, useState } from 'react';
import axios from 'axios';

import ReactPaginateModule from "react-paginate";
const ReactPaginate = ReactPaginateModule.default || ReactPaginateModule;
const Effects = () => {

    const [total, setTotal] = useState(0);
    const [comments, setComments] = useState([]);
    const [limit, setLimit] = useState(10);
    const [page, setPage] = useState(1);
    const [pageCount, setPageCount] = useState(1);

    const getComments = async (currentPage, currentLimit) => {
        try {
            const response = await axios.get(
                \`https://jsonplaceholder.typicode.com/comments?_page=\${currentPage}&_limit=\${currentLimit}\`
            );

            setComments(response.data);
            setTotal(500);

        } catch (e) {
            console.log(e);
        }
    };

    useEffect(() => {
        if (total) {
            setPageCount(Math.ceil(total / limit));
        }
    }, [total, limit]);

    useEffect(() => {
        getComments(page, limit);
    }, [page, limit]);

    const handlePageClick = (event) => {
        setPage(event.selected + 1);
    };

    return (
        <div className="flex gap-6 flex-col items-center">
            <ul className="w-70 mx-auto">
                {comments.map(el => {
                  return <li
                      className="border p-4 flex text-l justify-center items-center text-center my-1"
                      key={el.id}
                  >
                        {el.id + "." + el.name}
                    </li>
                })}
            </ul>
            <select
                className="w-13 rounded-md"
                onChange={(e) => {
                    setLimit(+e.target.value);
                    setPage(1);
                }}
            >
                <option value="50">50</option>
                <option value="100">100</option>
                <option value="150">150</option>
                <option value="250">250</option>
                <option value="300">300</option>
            </select>
            <ReactPaginate
                breakLabel="..."
                nextLabel=">"
                onPageChange={handlePageClick}
                pageRangeDisplayed={5}
                pageCount={pageCount}
                previousLabel="<"
                renderOnZeroPageCount={null}
                className="flex gap-4"
                pageClassName="w-16 h-16 rounded-md border"
                pageLinkClassName="w-full h-full flex justify-center items-center text-xl"
                breakClassName="w-16 h-16 rounded-md border"
                breakLinkClassName="w-full h-full flex justify-center items-center text-xl"
                previousClassName="w-16 h-16 rounded-md border"
                previousLinkClassName="w-full h-full flex justify-center items-center text-xl"
                nextClassName="w-16 h-16 rounded-md border"
                nextLinkClassName="w-full h-full flex justify-center items-center text-xl"
                activeClassName="bg-green-800 text-white"
            />
        </div>
    );
};

export default Effects;
`

export default UseEffectsCode;