import React, { useState } from 'react';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Share2, Copy, Mail } from 'lucide-react';

interface SurveyProps{
    surveyId:string;
    surveyTitle:string;
}

const SurveyShare:React.FC<SurveyProps> = ({surveyId,surveyTitle}) => {
            
    const[copied,setCopied] = useState(false)
    const surveyUrl = `https://your-survey-app-url/survey/${surveyId}`
    const copyToClipboard = () => {
        navigator.clipboard.writeText(surveyUrl)
        setCopied(true)
        setTimeout(() => {
            setCopied(false)
        },1500 )
    }
    const shareViaEmail = () => {
        const subject = encodeURIComponent(`Please take my survey: ${surveyTitle}`);
        const body = encodeURIComponent(`I'd appreciate if you could take a moment to fill out this survey: ${surveyUrl}`);
        window.location.href = `mailto:?subject=${subject}&body=${body}`;
      };
 
       return (

        <Dialog>
        <DialogTrigger asChild>
          <Button>
            <Share2 className="mr-2 h-4 w-4" />
            Share Survey
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Share Survey</DialogTitle>
            <DialogDescription>
              Share this survey with your audience.
            </DialogDescription>
          </DialogHeader>
          <div className="flex items-center space-x-2">
            <div className="grid flex-1 gap-2">
              <Label htmlFor="link" className="sr-only">
                Link
              </Label>
              <Input
                id="link"
                defaultValue={surveyUrl}
                readOnly
              />
            </div>
            <Button size="sm" className="px-3" onClick={copyToClipboard}>
              <span className="sr-only">Copy</span>
              <Copy className="h-4 w-4" />
            </Button>
          </div>
          <div className="flex justify-end space-x-2">
            {copied && <span className="text-sm text-green-500">Copied!</span>}
            <Button onClick={shareViaEmail}>
              <Mail className="mr-2 h-4 w-4" />
              Share via Email
            </Button>
          </div>
        </DialogContent>
      </Dialog>
       )


}
export default SurveyShare;