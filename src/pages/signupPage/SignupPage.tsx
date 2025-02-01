import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { authServices } from "@/services/authServices";
import { useState } from "react";
import { FaGoogle } from "react-icons/fa";
import { FallingLines } from "react-loader-spinner";
import { Link, useNavigate } from "react-router";

type Props = {};

const SignupPage = (props: Props) => {
  const [name, setName] = useState("Raj");
  const [email, setEmail] = useState("yadavarmaan10@gmail.com");
  const [password, setPassword] = useState("11111111");
  const [otp, setOtp] = useState("");
  const [showOtp, setShowOtp] = useState(false);
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const [showVerifyBtn, setShowVerifyBtn] = useState(false);
  const [userId, setUserId] = useState("");
  const [isVerifyLoading, setIsVerifyLoading] = useState(false);
  const navigator = useNavigate();

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // delay for processing
    // TODO add  auth
    // await new Promise((resolve) => setTimeout(resolve, 1000));

    await authServices.createAccount({ email, name, password });
    setShowOtp(true);
    setIsLoading(false);
    const userId = await authServices.sendOTP({ email });
    setUserId(userId);
  };

  const handleVerifyOtp = async (e: React.FormEvent) => {
    e.preventDefault();

    if (otp.length < 6) {
      console.log("huh");

      toast({
        description: "Enter complete otp!",
        duration: 900,
      });
      return;
    }

    setIsVerifyLoading(true);

    await authServices.verifyOTP({ userId, otp });
    setIsVerifyLoading(false);
    navigator("/setup");
  };

  return (
    <div
      className="min-h-screen w-full flex items-center justify-center p-4"
      {...props}
    >
      <Card className="w-full max-w-md relative">
        <div className="relative overflow-hidden">
          {/* Signup Form */}
          <div
            className={`transform transition-transform duration-500 ${
              showOtp ? "-translate-x-full" : "translate-x-0"
            }`}
          >
            <CardHeader>
              <CardTitle className="text-2xl md:text-3xl text-center">
                Sign Up
              </CardTitle>
              <CardDescription className="text-center">
                Enter your details to create new account with us :)
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form className="space-y-6" onSubmit={handleSignup}>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label className="text-sm md:text-base" htmlFor="name">
                      Name
                    </Label>
                    <Input
                      id="name"
                      type="text"
                      placeholder="John the Don"
                      required
                      className="h-10 md:h-11"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label className="text-sm md:text-base" htmlFor="email">
                      Email
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="something@beyondchats.com"
                      required
                      className="h-10 md:h-11"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label className="text-sm md:text-base" htmlFor="password">
                      Password
                    </Label>
                    <Input
                      id="password"
                      type="password"
                      minLength={8}
                      placeholder="* * * * * * * * "
                      required
                      className="h-10 md:h-11"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>
                </div>

                <div className="space-y-4">
                  <Button type="submit" className="w-full h-10 md:h-11">
                    {!isLoading ? (
                      "Sign Up"
                    ) : (
                      <div className=" scale-[2]">
                        <FallingLines
                          visible={true}
                          height="100"
                          width="100"
                          color="#ffffff"
                        />
                      </div>
                    )}
                  </Button>

                  <Button
                    variant="outline"
                    className="w-full h-10 md:h-11 gap-2"
                    onClick={(e) => {
                      e.preventDefault();
                    }}
                  >
                    Sign Up with <FaGoogle />
                  </Button>
                </div>

                <div className="text-center text-sm md:text-base text-muted-foreground">
                  Already have an account?{" "}
                  <Link
                    to={"/sign-in"}
                    className="text-primary hover:underline underline-offset-4"
                  >
                    Sign In
                  </Link>
                </div>
              </form>
            </CardContent>
          </div>

          {/* OTP Verification Form */}
          <div
            className={`absolute top-0 left-0 w-full transform transition-transform duration-500 ${
              showOtp ? "translate-x-0" : "translate-x-full"
            }`}
          >
            <CardHeader>
              <CardTitle className="text-2xl md:text-3xl text-center">
                Verify Email
              </CardTitle>
              <CardDescription className="text-center">
                Please enter the verification code sent to
                <br />
                <span className="font-medium">{email}</span>
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form className="space-y-6" onSubmit={handleVerifyOtp}>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <div className="w-full items-center flex justify-center">
                      <InputOTP
                        maxLength={6}
                        onComplete={() => {
                          {
                            setShowVerifyBtn(true);
                          }
                        }}
                        onChange={(e) => setOtp(e)}
                      >
                        <InputOTPGroup>
                          <InputOTPSlot index={0} />
                          <InputOTPSlot index={1} />
                          <InputOTPSlot index={2} />
                          <InputOTPSlot index={3} />
                          <InputOTPSlot index={4} />
                          <InputOTPSlot index={5} />
                        </InputOTPGroup>
                      </InputOTP>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <Button
                    type="submit"
                    className="w-full h-10 md:h-11"
                    disabled={!showVerifyBtn}
                  >
                    {isVerifyLoading ? (
                      <FallingLines
                        visible={true}
                        height="100"
                        width="100"
                        color="#ffffff"
                      />
                    ) : (
                      "Verify"
                    )}
                  </Button>
                  <Button
                    type="button"
                    variant="outline"
                    className="w-full h-10 md:h-11"
                    onClick={() => setShowOtp(false)}
                  >
                    Go Back
                  </Button>
                </div>

                <div className="text-center text-sm md:text-base text-muted-foreground">
                  Didn't receive the code?{" "}
                  <button
                    type="button"
                    className="text-primary hover:underline underline-offset-4"
                    onClick={() => {
                      toast({
                        description:
                          "Verification code has been sent again. Please check ",
                        duration: 1000,
                      });
                    }}
                  >
                    Resend
                  </button>
                </div>
              </form>
            </CardContent>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default SignupPage;
