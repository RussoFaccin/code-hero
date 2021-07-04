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
  activePage = 1,
  onChange,
}: Props): JSX.Element | null => {
  if (!qtyItems || qtyItems <= 1) {
    return null;
  }

  const [limit, setLimit] = useState(3);
  const [offset, setOffset] = useState(0);
  const [currPage, setCurrPage] = useState(activePage);
  const [isMounted, setMounted] = useState(true);

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

  const setPage = useCallback(
    (pageNumber: number) => {
      setCurrPage(pageNumber);
      setOffset(Math.ceil(pageNumber / limit) - 1);
      onChange(pageNumber);
    },
    [limit]
  );

  const calculateLimit = useCallback(() => {
    const tmpLimit = window.innerWidth >= 768 ? 5 : 3;

    if (isMounted) {
      setLimit(tmpLimit);
      setOffset(Math.ceil(currPage / tmpLimit) - 1);
    }
  }, [currPage]);

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
    calculateLimit();
    window.addEventListener("resize", calculateLimit);

    return function cleanUp() {
      setMounted(false);
    };
  }, [limit]);

  useEffect(() => {
    setCurrPage(activePage);
  }, [activePage]);

  /**
   * Left buttons group
   */
  const LefButtons = () => {
    if (currPage < 2) {
      return null;
    }

    return (
      <>
        <Button onClick={() => setPage(1)}>
          <DoubleArrow />
          <Label>First</Label>
        </Button>
        <Button onClick={() => setPage(currPage - 1)}>
          <Arrow />
          <Label>Previous</Label>
        </Button>
      </>
    );
  };

  /**
   * Right buttons group
   */
  const RightButtons = () => {
    if (currPage > pages[pages.length - 2]) {
      return null;
    }

    return (
      <>
        <Button direction="right" onClick={() => setPage(currPage + 1)}>
          <Arrow />
          <Label>Next</Label>
        </Button>
        <Button direction="right">
          <DoubleArrow onClick={() => setPage(pages[pages.length - 1])} />
          <Label>Last</Label>
        </Button>
      </>
    );
  };

  return (
    <Container>
      <LefButtons />
      {pageList}
      <RightButtons />
    </Container>
  );
};

export default Pagination;
