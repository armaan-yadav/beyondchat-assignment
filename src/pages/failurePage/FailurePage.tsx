import { Button } from "@/components/ui/button";
import { Link } from "react-router";

const FailurePage = () => {
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
