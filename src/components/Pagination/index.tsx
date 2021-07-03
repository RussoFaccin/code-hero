import React, { useCallback, useState } from "react";
import { Props } from "./types";
import { Button, Container, Label } from "./styles";
import {
  HiChevronDoubleLeft as DoubleArrow,
  HiChevronLeft as Arrow,
} from "react-icons/hi";

/**
 * Pagination - Component
 */
const Pagination = ({ qtyItems, limit, onChange }: Props): JSX.Element => {
  const [offset, setOffset] = useState(0);
  const [currPage, setCurrPage] = useState(1);

  const fillPages = useCallback(() => {
      const pageList = Array(qtyItems).fill("").map((item, index) => index + 1);
      
      return pageList;
  }, [qtyItems]);
  
  const getStart = useCallback(() => {
      if (offset * limit < 0) {
          return 0;
      }
      
    return offset * limit;
  }, [offset, limit]);

  const getEnd = useCallback(() => {
    return getStart() + limit;
  }, [getStart, limit]);

  const setPage = useCallback((pageNumber: number) => {
    setCurrPage(pageNumber);
    setOffset(Math.ceil(pageNumber / limit) - 1);
    onChange(pageNumber);
  }, []);

  const pages = fillPages();

  const pageList = pages.slice(getStart(), getEnd()).map((pageNumber) => {
    const activeClass = pageNumber === currPage ? "--active" : undefined;
    return (
      <Button
        className={activeClass}
        key={`button_${pageNumber}`}
        onClick={() => setPage(pageNumber)}
      >
        {pageNumber}
      </Button>
    );
  });

  return (
    <Container>
      <Button>
        <DoubleArrow />
        <Label>First</Label>
      </Button>
      <Button onClick={() => setPage(currPage - 1)}>
        <Arrow />
        <Label>Previous</Label>
      </Button>
      {pageList}
      <Button direction="right" onClick={() => setPage(currPage + 1)}>
        <Arrow />
        <Label>Next</Label>
      </Button>
      <Button direction="right">
        <DoubleArrow />
        <Label>Last</Label>
      </Button>
    </Container>
  );
};

export default Pagination;
