import React from 'react';
import { Pagination as BSPagination } from 'react-bootstrap';

const Pagination = ({ total, perPage, currentPage, setPage }) => {
  const pages = Math.ceil(total / perPage);
  if (pages <= 1) return null;

  return (
    <BSPagination>
      {[...Array(pages)].map((_, i) => (
        <BSPagination.Item
          key={i}
          active={i + 1 === currentPage}
          onClick={() => setPage(i + 1)}
        >
          {i + 1}
        </BSPagination.Item>
      ))}
    </BSPagination>
  );
};

export default Pagination;
