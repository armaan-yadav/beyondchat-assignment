import { createChatBotMessage } from "react-chatbot-kit";
import Dog from "./widgets/Dog";

const botName = "Laila";
const config = {
  initialMessages: [
    createChatBotMessage(
      `Namaste Visitor,I am ${botName}. How may i help you? `,
      {}
    ),
  ],
  botName: botName,
  state: {
    message: "",
  },
  widgets: [
    {
      widgetName: "dog",
      widgetFunc: (props: any) => {
        return <Dog {...props} />;
      },
      mapStateToProps: ["message"],
    },
  ],
};

export default config;
