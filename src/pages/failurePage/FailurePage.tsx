import { Button } from "@/components/ui/button";
import React from "react";
import { Link } from "react-router";

type Props = {};

const FailurePage = (props: Props) => {
  return (
    <div>
      OOPS! Something went wrong. Please try again
      <Link to={"/setup"}>
        <Button>Go To Setup Page</Button>
      </Link>
    </div>
  );
};

export default FailurePage;
