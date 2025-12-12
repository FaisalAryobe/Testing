import { GoogleGenAI, Chat, GenerateContentResponse } from "@google/genai";

const SYSTEM_INSTRUCTION = `
You are 'Nebula', the AI sales assistant for Nebula Cloud, a premium enterprise cloud provider.
Your goal is to help potential customers understand our value proposition, products, and pricing.
Be professional, concise, and helpful.

Key Information about Nebula Cloud:
- Core Value: "Scale Without Limits. Secure by Design."
- Products:
  1. Nebula Compute (Virtual Machines, Kubernetes) - Starting at $0.04/hour
  2. Nebula Storage (S3-compatible object storage) - Starting at $0.02/GB
  3. Nebula AI (Managed AI/ML pipelines) - Custom pricing
- Key Features: 99.999% SLA, Global Edge Network, 24/7 Enterprise Support, ISO 27001 Certified.
- Call to Action: Encourage users to "Request a Consultation" for complex needs.

If a user asks about pricing, give the starting rates but emphasize that enterprise volume discounts apply.
If a user asks about technical specs, assure them of our high-performance infrastructure (latest gen CPUs/GPUs).
Keep responses under 100 words unless detailed technical info is requested.
`;

let chatSession: Chat | null = null;

export const initializeChat = async (): Promise<void> => {
  if (!process.env.API_KEY) {
    console.warn("API Key not found via process.env.API_KEY");
    return;
  }
  
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  chatSession = ai.chats.create({
    model: 'gemini-2.5-flash',
    config: {
      systemInstruction: SYSTEM_INSTRUCTION,
    },
  });
};

export const sendMessageToAI = async (message: string): Promise<string> => {
  if (!chatSession) {
    await initializeChat();
  }
  
  if (!chatSession) {
    return "I'm currently offline. Please try again later.";
  }

  try {
    const response: GenerateContentResponse = await chatSession.sendMessage({ message });
    return response.text || "I didn't catch that. Could you please rephrase?";
  } catch (error) {
    console.error("Error communicating with Gemini:", error);
    return "I'm having trouble connecting to the Nebula network right now. Please try again in a moment.";
  }
};