import { useEffect } from "react";
interface Props {
  message: string;
}
const Dog = (props: Props) => {
  // const groq = new Groq({
  //   apiKey: import.meta.env.VITE_GROQ_API_KEY,
  //   dangerouslyAllowBrowser: true,
  // });

  // const [isLoading, setIsLoading] = useState(false);
  // const [response, setResponse] = useState("");

  // async function fetchResponse() {
  //   try {
  //     setIsLoading(true);
  //     const completion = await groq.chat.completions.create({
  //       messages: [
  //         {
  //           role: "user",
  //           content: props.message,
  //         },
  //       ],
  //       model: "llama-3.3-70b-versatile",
  //     });
  //     completion.choices[0].message.content &&
  //       setResponse(completion.choices[0].message.content);
  //   } catch (error) {
  //     console.log(error);
  //     setResponse("OOPS! Something went wrong");
  //   } finally {
  //     setIsLoading(false);
  //   }
  // }
  useEffect(() => {
    // if (props.message) {
    //   fetchResponse();
    // } else {
    //   console.log("first");
    // }

    return;
  }, []);
  console.log("from dog", props.message);

  return <div>{/* {isLoading ? "loadinggg" : response} */}</div>;
};

export default Dog;
