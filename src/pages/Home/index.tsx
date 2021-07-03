import * as React from "react";
import { Pagination } from "components";
const Home = (): JSX.Element => {
  return (
    <>
      <h1>Home page</h1>
      <Pagination qtyItems={10} limit={3} onChange={(n) => console.log("PAGE", n)} />
    </>
    );
};

export default Home;
