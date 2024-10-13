import React, { useState } from 'react';
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Trash2 } from 'lucide-react';

type QuestionType = 'multiple_choice' | 'text' | 'rating';

interface Question {
  id: string;
  type: QuestionType;
  text: string;
  options?: string[];
}

const SurveyQuestionBuilder: React.FC = () => {
  const [questions, setQuestions] = useState<Question[]>([]);

  const addQuestion = (type: QuestionType) => {
    const newQuestion: Question = {
      id: Date.now().toString(),
      type,
      text: '',
      options: type === 'multiple_choice' ? [''] : undefined,
    };
    setQuestions([...questions, newQuestion]);
  };

  const updateQuestion = (id: string, updates: Partial<Question>) => {
    setQuestions(questions.map(q => q.id === id ? { ...q, ...updates } : q));
  };

  const deleteQuestion = (id: string) => {
    setQuestions(questions.filter(q => q.id !== id));
  };

  const addOption = (questionId: string) => {
    setQuestions(questions.map(q => 
      q.id === questionId ? { ...q, options: [...(q.options || []), ''] } : q
    ));
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold mr-5 ">Survey Questions</h2>
        <Select onValueChange={(value: QuestionType) => addQuestion(value)}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Add Question" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="multiple_choice">Multiple Choice</SelectItem>
            <SelectItem value="text">Text</SelectItem>
            <SelectItem value="rating">Rating</SelectItem>
          </SelectContent>
        </Select>
      </div>
      {questions.map((question, index) => (
        <div key={question.id} className="border p-4 rounded-md">
          <div className="flex justify-between items-center mb-2">
            <span className="font-semibold">Question {index + 1}</span>
            <Button variant="ghost" size="icon" onClick={() => deleteQuestion(question.id)}>
              <Trash2 className="h-4 w-4" />
            </Button>
          </div>
          <Input
            value={question.text}
            onChange={(e) => updateQuestion(question.id, { text: e.target.value })}
            placeholder="Enter question text"
            className="mb-2"
          />
          {question.type === 'multiple_choice' && (
            <div className="space-y-2">
              {question.options?.map((option, optionIndex) => (
                <Input
                  key={optionIndex}
                  value={option}
                  onChange={(e) => {
                    const newOptions = [...(question.options || [])];
                    newOptions[optionIndex] = e.target.value;
                    updateQuestion(question.id, { options: newOptions });
                  }}
                  placeholder={`Option ${optionIndex + 1}`}
                />
              ))}
              <Button onClick={() => addOption(question.id)}>Add Option</Button>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default SurveyQuestionBuilder;