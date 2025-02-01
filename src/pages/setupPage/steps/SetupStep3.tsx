import { IoSendOutline } from "react-icons/io5";
import { Button } from "@/components/ui/button";

import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useState } from "react";
import { FaRegCopy } from "react-icons/fa";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";

type Props = {};

const SetupStep3 = (props: Props) => {
  const [email, setEmail] = useState("");
  const { toast } = useToast();
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  const isValidEmail = email.length > 0 && emailRegex.test(email);
  return (
    <Card>
      <Button
        className="w-full"
        onClick={() => {
          // TODO open client ki website and add chatbot along with top bar of share feedback
        }}
      >
        Test Chatbot
      </Button>

      <Card>
        <CardHeader>Integrate on your webiste</CardHeader>
        <CardContent>
          <Tabs defaultValue="copy" className="w-full">
            <TabsList className="w-full">
              <TabsTrigger value="copy" className="w-full">
                Copy Code
              </TabsTrigger>
              <TabsTrigger value="email" className="w-full">
                Email Instructions
              </TabsTrigger>
            </TabsList>
            <TabsContent value="copy">
              <Card>
                <CardContent className="pt-4">
                  <code className="block bg-gray-50 p-4 rounded overflow-x-auto">
                    {
                      '<script src="https://beyondchats.com/widget.js"> //The code which adds the chatbot to the user\'s website </script>'
                    }
                  </code>
                  <Button
                    className="mt-4"
                    onClick={() => {
                      navigator.clipboard.writeText("I am the  code");
                      toast({
                        description: "Code copied to Clipboard !",
                        duration: 1500,
                      });
                    }}
                  >
                    <FaRegCopy />
                    Copy Code
                  </Button>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="email">
              <Card>
                <CardContent className="pt-4">
                  <Input
                    onChange={(e) => setEmail(e.target.value)}
                    type="email"
                    placeholder="Developer's email"
                  />
                  {email.length > 0 && !isValidEmail && (
                    <p className="text-red-500 text-sm">
                      Please enter a valid email address
                    </p>
                  )}
                  <Button
                    className="mt-4 flex items-center gap-2"
                    disabled={!isValidEmail}
                  >
                    <IoSendOutline className="w-4 h-4" />
                    Send Email
                  </Button>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>

      <Button className="w-full" onClick={() => {}}>
        Test Integration
      </Button>
    </Card>
  );
};

export default SetupStep3;
