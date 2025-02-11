import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Context } from "@/context";
import { toast } from "@/hooks/use-toast";
import { motion } from "framer-motion";
import { AlertCircle, Loader2 } from "lucide-react";
import {
  Dispatch,
  SetStateAction,
  useContext,
  useEffect,
  useState,
} from "react";
import { MdNavigateNext } from "react-icons/md";

interface Props {
  companyUrl: string;
  setCompanyUrl: Dispatch<SetStateAction<string>>;
  next: () => void;
}

export interface MetaDataResponse {
  description: string;
  domain: string;
  duration: number;
  favicon: string;
  images: string[];
  sitename: string;
  title: string;
  url: string;
}

const SetupStep1 = ({ companyUrl, setCompanyUrl, next }: Props) => {
  const [metadata, setMetadata] = useState<MetaDataResponse | null>();
  const [isFetching, setIsFetching] = useState<boolean>(false);
  const { setCompanyDetails, companyDetails } = useContext(Context);
  const [errors, setErrors] = useState({
    name: "",
    url: "",
    description: "",
  });

  const [isUrlValid, setIsUrlValid] = useState<boolean>(false);

  const inputVariants = {
    initial: { opacity: 0, x: -20 },
    animate: { opacity: 1, x: 0 },
  };

  const urlRegex =
    /^(https?:\/\/)?([\w.-]+)\.([a-zA-Z]{2,})(:[0-9]{1,5})?(\/[\w\-./?%&=]*)?$/;

  const validateUrl = (url: string) => {
    const isValid = urlRegex.test(url);
    setIsUrlValid(isValid);
    if (!isValid) {
      setErrors((prev) => ({ ...prev, url: "Invalid URL format" }));
    } else {
      setErrors((prev) => ({ ...prev, url: "" }));
    }
  };

  const fetchMetaData = async () => {
    validateUrl(companyUrl);

    if (!isUrlValid) {
      console.log("first");
      return;
    }

    const apiUrl = `https://jsonlink.io/api/extract?url=${companyUrl}&api_key=${
      import.meta.env.VITE_METADATA_API_KEY
    }`;
    setIsFetching(true);
    fetch(apiUrl)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Error: ${response.status} - ${response.statusText}`);
        }
        return response.json();
      })
      .then((data) => {
        setMetadata(data as MetaDataResponse);
      })
      .catch((error) => {
        console.error("An error occurred:", error);
      })
      .finally(() => {
        setIsFetching(false);
      });
  };

  useEffect(() => {
    check();
  }, []);

  const check = () => {
    companyDetails && setMetadata(companyDetails);
  };

  return (
    <div>
      <Card className="shadow-lg rounded-lg bg-white w-full">
        <CardHeader>
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <CardTitle className="text-xl font-semibold text-gray-800">
              Setup a new Organization
            </CardTitle>
            <CardDescription className="text-gray-600">
              Enter the details of your organization
            </CardDescription>
          </motion.div>
        </CardHeader>

        <CardContent className="space-y-6">
          <motion.div
            variants={inputVariants}
            initial="initial"
            animate="animate"
            transition={{ delay: 0.2 }}
          >
            <Label htmlFor="url" className="text-sm font-medium text-gray-700">
              Organization URL
            </Label>
            <Input
              type="text"
              placeholder="www.beyondchats.com"
              name="url"
              value={companyUrl}
              onChange={(e) => {
                setCompanyUrl(e.target.value);
              }}
              className={`${
                errors.url ? "border-red-500" : "border-gray-300"
              } p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition`}
            />
            {errors.url && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-red-500 text-sm mt-1 flex items-center"
              >
                <AlertCircle className="mr-2 h-4 w-4" />
                {errors.url}
              </motion.div>
            )}
          </motion.div>

          <Button
            onClick={fetchMetaData}
            disabled={isFetching}
            className="w-full py-3 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition duration-200"
          >
            {isFetching ? (
              <Loader2 className="animate-spin mr-2 h-5 w-5" />
            ) : (
              "Auto Fetch"
            )}
          </Button>

          {metadata && (
            <div className="space-y-4 mt-6">
              <div className="flex items-center">
                <img
                  src={metadata.favicon}
                  alt="Favicon"
                  className="w-8 h-8 mr-4"
                />
                <span className="font-medium">{metadata.sitename}</span>
              </div>
              <Label
                htmlFor="sitename"
                className="text-sm font-medium text-gray-700"
              >
                Sitename
              </Label>
              <Input
                value={metadata.sitename}
                name="sitename"
                className="border-gray-300 p-3 rounded-lg"
              />

              <Label
                htmlFor="title"
                className="text-sm font-medium text-gray-700"
              >
                Title
              </Label>
              <Input
                value={metadata.title}
                name="title"
                className="border-gray-300 p-3 rounded-lg"
              />

              <Label
                htmlFor="description"
                className="text-sm font-medium text-gray-700"
              >
                Description
              </Label>
              <Textarea
                value={metadata.description}
                name="description"
                className="border-gray-300 p-3 rounded-lg"
              />
            </div>
          )}
        </CardContent>
      </Card>

      <div className="flex justify-end pt-4">
        <Button
          className="flex items-center gap-2"
          onClick={() => {
            if (metadata) {
              setCompanyDetails(metadata);
            } else {
              toast({ description: "Something went wrong. Please try again" });
              return;
            }
            next();
          }}
          disabled={!metadata}
        >
          Next
          <MdNavigateNext />
        </Button>
      </div>
    </div>
  );
};

export default SetupStep1;
