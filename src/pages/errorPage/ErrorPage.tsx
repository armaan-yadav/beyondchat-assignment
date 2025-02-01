import { Button } from "@/components/ui/button";
import { Link } from "react-router";

const ErrorPage = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-white via-gray-100 to-gray-200 text-black p-4 flex-col gap-4">
      <div className="text-center space-y-6">
        <p className="text-xl font-bold">Wesbite still under development :)</p>

        <Link to={"/"}>
          <Button>Go to homepage</Button>
        </Link>
      </div>
      <img
        src="https://res.cloudinary.com/dzdgpwtox/image/upload/w_600,c_scale,f_auto/v1732259664/designer-tool-uploads/bucket_3267/1732259662197.png"
        alt=""
        className="h-[400px]"
      />
    </div>
  );
};

export default ErrorPage;
