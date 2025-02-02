import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";
import { FaRegCopy } from "react-icons/fa";
import { IoSendOutline } from "react-icons/io5";
import { MdNavigateBefore } from "react-icons/md";
import { Link } from "react-router";

interface Props {
  back: () => void;
}

const SetupStep3 = (props: Props) => {
  const [email, setEmail] = useState("");
  const { toast } = useToast();
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const isValidEmail = email.length > 0 && emailRegex.test(email);

  const handleCopyCode = () => {
    const code = '<script src="https://beyondchats.com/widget.js"></script>';
    navigator.clipboard.writeText(code);
    toast({
      title: "Success!",
      description: "Code copied to clipboard",
      duration: 1500,
    });
  };

  return (
    <div className="space-y-6 sm:space-y-8 ">
      <Card className="border-2 border-blue-100">
        <CardHeader>
          <CardTitle className="text-2xl font-bold">
            Test Your Chatbot
          </CardTitle>
          <CardDescription>
            Preview how your chatbot will appear to users
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Link to="/dummy" target="_blank">
            <Button className="w-full bg-blue-600 hover:bg-blue-700">
              Launch Test Environment
            </Button>
          </Link>
        </CardContent>
      </Card>

      <Card className="border-2 border-blue-100">
        <CardHeader>
          <CardTitle className="text-2xl font-bold">
            Website Integration
          </CardTitle>
          <CardDescription>
            Choose how you want to integrate the chatbot
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="copy" className="w-full">
            <TabsList className="grid w-full grid-cols-2 gap-4 mb-6 sm:gap-8">
              <TabsTrigger value="copy" className="text-sm font-medium">
                Copy Code
              </TabsTrigger>
              <TabsTrigger value="email" className="text-sm font-medium">
                Email to Developer
              </TabsTrigger>
            </TabsList>

            <TabsContent value="copy">
              <Card className="border border-gray-200">
                <CardContent className="pt-6">
                  <div className="bg-gray-50 p-4 rounded-lg relative group">
                    <code className="block font-mono text-sm overflow-x-auto">
                      {
                        '<script src="https://beyondchats.com/widget.js"></script>'
                      }
                    </code>
                  </div>
                  <Button
                    className="mt-4 w-full sm:w-auto flex items-center justify-center gap-2"
                    onClick={handleCopyCode}
                  >
                    <FaRegCopy className="w-4 h-4" />
                    Copy Code
                  </Button>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="email">
              <Card className="border border-gray-200">
                <CardContent className="pt-6 space-y-4">
                  <div className="space-y-2">
                    <Input
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      type="email"
                      placeholder="Enter developer's email address"
                      className="w-full"
                    />
                    {email.length > 0 && !isValidEmail && (
                      <p className="text-red-500 text-sm">
                        Please enter a valid email address
                      </p>
                    )}
                  </div>
                  <Button
                    className="w-full sm:w-auto flex items-center justify-center gap-2"
                    disabled={!isValidEmail}
                  >
                    <IoSendOutline className="w-4 h-4" />
                    Send Instructions
                  </Button>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>

      <Card className="border-2 border-blue-100">
        <CardHeader>
          <CardTitle className="text-2xl font-bold">
            Verify Integration
          </CardTitle>
          <CardDescription>
            Make sure everything is working correctly
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Link to={"/success"} target="_blank">
            <Button className="w-full bg-green-600 hover:bg-green-700">
              Run Integration Test
            </Button>
          </Link>
        </CardContent>
      </Card>
      <div className="flex justify-start pt-4">
        <Button
          variant="outline"
          className="flex items-center gap-2 text-white"
          onClick={props.back}
        >
          <MdNavigateBefore />
          Back
        </Button>
      </div>
    </div>
  );
};

export default SetupStep3;
