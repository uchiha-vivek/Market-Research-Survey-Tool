import { useState } from "react";
import { Button } from "@/components/ui/button"; 
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import ReactMarkdown from "react-markdown";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { Card } from "@/components/ui/card";

const apiKey = 'AIzaSyCIX6lgzijZm6Of1JcCj15rMJqonrpvBc0';
const genAI = new GoogleGenerativeAI(apiKey);

const SurveyGenerator = () => {
  const [topic, setTopic] = useState("");
  const [questions, setQuestions] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);

  const handleGenerateQuestions = async () => {
    setLoading(true);
    const prompt = `Generate 5 sample survey questions related to ${topic}.`;

    try {
      const model = genAI.getGenerativeModel({
        model: "gemini-1.5-flash",
      });

      const chatSession = model.startChat({
        generationConfig: {
          temperature: 1,
          topP: 0.95,
          topK: 64,
          maxOutputTokens: 512,
          responseMimeType: "text/plain",
        },
        history: [],
      });

      const result = await chatSession.sendMessage(prompt);
      const responseText = result.response.text();
      const generatedQuestions = responseText.split("\n").filter(q => q); 
      setQuestions(generatedQuestions);
    } catch (error) {
      console.error("Error generating questions:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Card className="p-6 shadow-lg rounded-lg bg-white dark:bg-gray-800">
      <h2 className="text-xl font-semibold mb-4 text-center">Survey Question Generator</h2>
      <Select onValueChange={setTopic} defaultValue="">
        <SelectTrigger className="w-full mb-4">
          <SelectValue placeholder="Select a topic" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="Product Feedback">Product Feedback</SelectItem>
          <SelectItem value="Customer Satisfaction">Customer Satisfaction</SelectItem>
          <SelectItem value="Brand Perception">Brand Perception</SelectItem>
        </SelectContent>
      </Select>
      <Button onClick={handleGenerateQuestions} disabled={loading} className="w-full">
        {loading ? "Generating..." : "Generate Questions"}
      </Button>
      {questions.length > 0 && (
        <div className="mt-6">
          <h3 className="text-lg font-semibold mb-2">Generated Questions:</h3>
          <ul className="list-disc list-inside">
            {questions.map((question, index) => (
              <li key={index} className="mb-1">
                <ReactMarkdown>{`- ${question}`}</ReactMarkdown>
              </li>
            ))}
          </ul>
        </div>
      )}
    </Card>
  );
};

export default SurveyGenerator;
