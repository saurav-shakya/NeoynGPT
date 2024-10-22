import { GoogleGenerativeAI } from '@google/generative-ai';

const API_KEY = import.meta.env.VITE_GEMINI_API_KEY;
const genAI = new GoogleGenerativeAI(API_KEY);

export async function processQuery(query: string) {
  try {
    const model = genAI.getGenerativeModel({ model: "gemini-pro" });

    const result = await model.generateContent(query);
    const response = await result.response;
    const text = response.text();

    // Determine if the response should be visual or text-based
    const isVisualQuery = query.toLowerCase().includes('diagram') || 
                          query.toLowerCase().includes('flowchart') ||
                          query.toLowerCase().includes('visual');

    if (isVisualQuery) {
      // For visual queries, we'll return a placeholder for now
      // In a real implementation, you'd generate or retrieve a visual representation
      return {
        type: 'visual',
        content: 'Visual representation placeholder',
      };
    } else {
      return {
        type: 'text',
        content: text,
      };
    }
  } catch (error) {
    console.error('Error calling Gemini API:', error);
    throw error;
  }
}