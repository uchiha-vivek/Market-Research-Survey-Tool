import React,{ReactNode} from 'react'
import {Card,CardContent} from '@/components/ui/card'

interface FeatureCardProps {
    icon:ReactNode;
    title:string;
    description:string
}

const FeatureCard:React.FC<FeatureCardProps> = ({icon,title,description}) => {
    return (
        <>
        <Card>
           <CardContent className='flex flex-col items-center p-6 text-center' >
            {icon}
            <h3 className='text-xl font-bold mb-2'> {title} </h3>
            <p className='text-gray-500 dark:text-gray-400'> {description} </p>
           </CardContent>
        </Card>
        </>
    )
}
export default FeatureCard
