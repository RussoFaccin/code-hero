import React, { useEffect, useCallback, useState } from "react";
import { Props } from "./types";
import { Button, Container, Label } from "./styles";
import {
  HiChevronDoubleLeft as DoubleArrow,
  HiChevronLeft as Arrow,
} from "react-icons/hi";

/**
 * Pagination - Component
 */
const Pagination = ({
  qtyItems,
  limit,
  activePage = 1,
  onChange,
}: Props): JSX.Element | null => {
  if (qtyItems <= 1) {
    return null;
  }

  const [offset, setOffset] = useState(0);
  const [currPage, setCurrPage] = useState(activePage);

  const fillPages = useCallback(() => {
    const pageList = Array(qtyItems)
      .fill("")
      .map((item, index) => index + 1);

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

  useEffect(() => {
    setCurrPage(activePage);
  }, [activePage]);

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
