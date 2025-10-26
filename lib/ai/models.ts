export const DEFAULT_CHAT_MODEL: string = "chat-model";

export type ChatModel = {
  id: string;
  name: string;
  description: string;
};

const useOllama = process.env.NEXT_PUBLIC_USE_OLLAMA === "true";

export const chatModels: ChatModel[] = useOllama ? [
  {
    id: "chat-model",
    name: "Ollama",
    description: "Advanced multimodal model with vision and text capabilities",
  }] : [
  {
    id: "chat-model",
    name: "OpenAI",
    description:
      "Uses advanced chain-of-thought reasoning for complex problems",
  },
];
