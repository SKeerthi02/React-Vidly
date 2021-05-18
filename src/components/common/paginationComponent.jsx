import React, {Component} from 'react';
import _ from "lodash";
import PropTypes from 'prop-types';

const PaginationComponent = props => {
        const {totalCount, pageSize, onPageChange, currentPage} = props
        const pagesCount = Math.ceil( totalCount/ pageSize);

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

PaginationComponent.propTypes = {
    totalCount: PropTypes.number.isRequired,
    pageSize: PropTypes.number.isRequired,
    onPageChange: PropTypes.func.isRequired,
    currentPage: PropTypes.number.isRequired
}
export default PaginationComponent;