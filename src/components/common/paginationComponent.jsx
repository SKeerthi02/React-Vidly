import React, {Component} from 'react';
import _ from "lodash";

const PaginationComponent = props => {
        const {totalCount, pageSize, onPageChange, currentPage} = props
        const pagesCount = Math.ceil( totalCount/ pageSize);
        console.log(pagesCount)

        if (pagesCount <= 1 ) return null
        const pages = _.range(1, pagesCount+1);

        return (
            <div>
                <nav>
                    <ul className="pagination">
                        { pages.map(page =>(
                            <li key = {page} className={ currentPage === page? "page-item active": "page-item"}>
                                <a className="page-link" onClick={() => onPageChange(page)}>{page}</a>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
        );
    }


export default PaginationComponent;