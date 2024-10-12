import React, { useState } from 'react';
import { GoogleGenerativeAI, GenerativeModel, GenerationConfig, ChatSession } from '@google/generative-ai';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {marked} from 'marked'
// Ensure the API key is prefixed with REACT_APP_ in the .env file
const apiKey = 'AIzaSyCIX6lgzijZm6Of1JcCj15rMJqonrpvBc0';

const generationConfig: GenerationConfig = {
  temperature: 1,
  topP: 0.95,
  topK: 64,
  maxOutputTokens: 8192,
  responseMimeType: 'text/plain',
};

const GeminiChat: React.FC = () => {
  const [favoriteProduct, setFavoriteProduct] = useState('');
  const [purchaseFrequency, setPurchaseFrequency] = useState('');
  const [influenceFactors, setInfluenceFactors] = useState('');
  const [satisfaction, setSatisfaction] = useState('');
  const [comments, setComments] = useState('');
  const [response, setResponse] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    // Construct the prompt from survey responses
    const prompt = `
      Based on the following survey responses, please provide an analysis:
      1. Favorite Product Category: ${favoriteProduct}
      2. Purchase Frequency: ${purchaseFrequency}
      3. Factors Influencing Purchases: ${influenceFactors}
      4. Satisfaction Level (1-5): ${satisfaction}
      5. Additional Comments: ${comments}
    `;

    try {
      // Initialize the Google Generative AI SDK instance
      const genAI = new GoogleGenerativeAI(apiKey as string);

      // Get the generative model
      const model: GenerativeModel = genAI.getGenerativeModel({
        model: 'gemini-1.5-flash',
      });

      // Start a chat session with the model
      const chatSession: ChatSession = model.startChat({
        generationConfig,
        history: [],
      });

      // Send the constructed prompt to the API
      const result = await chatSession.sendMessage(prompt);

      // Set the API response
      setResponse(result.response.text());
    } catch (err) {
      setError('Error in AI generation');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mx-auto p-6 max-w-lg">
      <Card>
        <CardHeader>
          <CardTitle>Market Survey</CardTitle>
          <CardDescription>Answer the following questions to provide insights.</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="mb-4 space-y-4">
            <Input
              type="text"
              value={favoriteProduct}
              onChange={(e) => setFavoriteProduct(e.target.value)}
              placeholder="Favorite Product Category"
              className="w-full"
              required
            />
            <Input
              type="text"
              value={purchaseFrequency}
              onChange={(e) => setPurchaseFrequency(e.target.value)}
              placeholder="How often do you purchase? (e.g., Daily, Weekly)"
              className="w-full"
              required
            />
            <Input
              type="text"
              value={influenceFactors}
              onChange={(e) => setInfluenceFactors(e.target.value)}
              placeholder="Factors influencing your purchase decisions"
              className="w-full"
              required
            />
            <Input
              type="number"
              min="1"
              max="5"
              value={satisfaction}
              onChange={(e) => setSatisfaction(e.target.value)}
              placeholder="Satisfaction Level (1-5)"
              className="w-full"
              required
            />
            <textarea
              value={comments}
              onChange={(e) => setComments(e.target.value)}
              placeholder="Additional comments or suggestions"
              className="w-full"
            />
            <Button type="submit" className="w-full" disabled={loading}>
              {loading ? 'Submitting...' : 'Submit'}
            </Button>
          </form>

          {loading && (
            <div className="flex justify-center">
              <div className="animate-spin w-6 h-6 border-4 border-blue-500 border-t-transparent rounded-full"></div>
            </div>
          )}

          {error && <p className="text-red-500">{error}</p>}

          {response && (
            <div className="mt-4 p-4 border border-gray-300 rounded">
              <h2 className="text-lg font-semibold">AI Analysis:</h2>
              <div
                dangerouslySetInnerHTML={{ __html: marked(response) }} // Render the markdown as HTML
                className="markdown" // You can style this class in your CSS
              />
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default GeminiChat;
