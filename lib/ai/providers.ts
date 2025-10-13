import {
  customProvider,
} from "ai";
import { createOllama } from 'ollama-ai-provider-v2';
import { openai } from '@ai-sdk/openai';

const ollama = createOllama({
  // optional settings, e.g.
  baseURL: 'http://192.168.1.220:30068/api',
});

const useOllama = process.env.USE_OLLAMA === "true";

export const myProvider = useOllama ? customProvider({
  languageModels: {
    "chat-model": ollama("llama3.1:8b-instruct-q4_K_M"),
    "title-model": ollama("llama3.1:8b-instruct-q4_K_M"),
    "chat-model-reasoning": ollama("llama3.1:8b-instruct-q4_K_M"),
  },
}) : customProvider({
  languageModels: {
    "chat-model": openai("gpt-5-nano-2025-08-07"),
    "title-model": openai("gpt-5-nano-2025-08-07"),
    "chat-model-reasoning": openai("gpt-5-nano-2025-08-07"),
  },
});

// export const myProvider = isTestEnvironment
//   ? (() => {
//       const {
//         artifactModel,
//         chatModel,
//         reasoningModel,
//         titleModel,
//       } = require("./models.mock");
//       return customProvider({
//         languageModels: {
//           "chat-model": chatModel,
//           "chat-model-reasoning": reasoningModel,
//           "title-model": titleModel,
//           "artifact-model": artifactModel,
//         },
//       });
//     })()
//   : customProvider({
//       languageModels: {
//         "chat-model": gateway.languageModel("xai/grok-2-vision-1212"),
//         "chat-model-reasoning": wrapLanguageModel({
//           model: gateway.languageModel("xai/grok-3-mini"),
//           middleware: extractReasoningMiddleware({ tagName: "think" }),
//         }),
//         "title-model": gateway.languageModel("xai/grok-2-1212"),
//         "artifact-model": gateway.languageModel("xai/grok-2-1212"),
//       },
//     });
