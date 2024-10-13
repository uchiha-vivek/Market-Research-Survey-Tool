import React, { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { PlusCircle, List, BarChart2, UserCircle } from 'lucide-react';

const mockSurveyData = [
  { name: 'Question 1', yes: 400, no: 240 },
  { name: 'Question 2', yes: 300, no: 139 },
  { name: 'Question 3', yes: 200, no: 980 },
  { name: 'Question 4', yes: 278, no: 390 },
  { name: 'Question 5', yes: 189, no: 480 },
];

const SurveyDashboard: React.FC = () => {
  const [activeTab, setActiveTab] = useState('create');

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Survey Dashboard</h1>
      
      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid w-full grid-cols-4 mb-4">
          <TabsTrigger value="create">Create Survey</TabsTrigger>
          <TabsTrigger value="list">My Surveys</TabsTrigger>
          <TabsTrigger value="results">Results</TabsTrigger>
          <TabsTrigger value="account">Account</TabsTrigger>
        </TabsList>
        
        <TabsContent value="create">
          <Card>
            <CardHeader>
              <CardTitle>Create New Survey</CardTitle>
              <CardDescription>Design your survey questions and options.</CardDescription>
            </CardHeader>
            <CardContent>
              <form>
                <div className="grid w-full items-center gap-4">
                  <div className="flex flex-col space-y-1.5">
                    <Input id="surveyTitle" placeholder="Survey Title" />
                  </div>
                  <div className="flex flex-col space-y-1.5">
                    <Input id="question" placeholder="Enter your question" />
                  </div>
                </div>
              </form>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline">Add Question</Button>
              <Button>Create Survey</Button>
            </CardFooter>
          </Card>
        </TabsContent>
        
        <TabsContent value="list">
          <Card>
            <CardHeader>
              <CardTitle>My Surveys</CardTitle>
              <CardDescription>View and manage your created surveys.</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                <li className="flex justify-between items-center">
                  <span>Customer Satisfaction Survey</span>
                  <Button variant="outline" size="sm">Edit</Button>
                </li>
                <li className="flex justify-between items-center">
                  <span>Product Feedback Survey</span>
                  <Button variant="outline" size="sm">Edit</Button>
                </li>
                <li className="flex justify-between items-center">
                  <span>Employee Engagement Survey</span>
                  <Button variant="outline" size="sm">Edit</Button>
                </li>
              </ul>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="results">
          <Card>
            <CardHeader>
              <CardTitle>Survey Results</CardTitle>
              <CardDescription>Analyze the responses to your surveys.</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={mockSurveyData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="yes" fill="#8884d8" />
                  <Bar dataKey="no" fill="#82ca9d" />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="account">
          <Card>
            <CardHeader>
              <CardTitle>Account Settings</CardTitle>
              <CardDescription>Manage your account details and preferences.</CardDescription>
            </CardHeader>
            <CardContent>
              <form className="space-y-4">
                <div className="flex flex-col space-y-1.5">
                  <Input id="name" placeholder="Full Name" />
                </div>
                <div className="flex flex-col space-y-1.5">
                  <Input id="email" type="email" placeholder="Email" />
                </div>
                <div className="flex flex-col space-y-1.5">
                  <Input id="password" type="password" placeholder="Change Password" />
                </div>
              </form>
            </CardContent>
            <CardFooter>
              <Button>Save Changes</Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
      
      <div className="fixed bottom-4 right-4 space-x-2">
        <Button size="icon" onClick={() => setActiveTab('create')}>
          <PlusCircle className="h-4 w-4" />
        </Button>
        <Button size="icon" onClick={() => setActiveTab('list')}>
          <List className="h-4 w-4" />
        </Button>
        <Button size="icon" onClick={() => setActiveTab('results')}>
          <BarChart2 className="h-4 w-4" />
        </Button>
        <Button size="icon" onClick={() => setActiveTab('account')}>
          <UserCircle className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
};

export default SurveyDashboard;