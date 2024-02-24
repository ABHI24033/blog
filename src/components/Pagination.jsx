import React from 'react';

const Pagination = ({ noOfPages, currentPage, setCurrentPage }) => {


    const pageNumbers = [...Array(noOfPages + 1).keys()].slice(1);
    const goToNextPage = () => {
        if (currentPage !== noOfPages) {
            setCurrentPage(currentPage + 1);
        }
    }
    const goToPreviousPage = () => {
        if (currentPage !== 1) {
            setCurrentPage(currentPage - 1);
        }
    }
    return (
        <div>
            <nav aria-label="Page navigation example">
                <ul className="inline-flex -space-x-px text-base h-10">
                    <li>
                        <a href="#"
                            className="flex items-center justify-center px-4 h-10 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-400 hover:text-gray-700 "
                            onClick={goToPreviousPage}
                        >Previous</a>
                    </li>
                    {
                        pageNumbers && pageNumbers.map((pgnumber) => (
                            <li key={pgnumber}>
                                <a href="#"
                                    className={`flex items-center justify-center px-4 h-10 leading-tight ${currentPage === pgnumber ? " bg-blue-300" : "bg-white"} text-gray-800 border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white`}
                                    onClick={() => setCurrentPage(pgnumber)}
                                >
                                    {pgnumber}
                                </a>
                                
                            </li>
                            
                        ))
                    }
                    <li>
                        <a href="#" className="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-400 hover:text-gray-700"
                            onClick={goToNextPage}
                        >Next</a>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default Pagination;
