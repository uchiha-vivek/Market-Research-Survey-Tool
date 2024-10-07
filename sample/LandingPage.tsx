// import { Button } from "@/components/ui/button"
// import { Input } from "@/components/ui/input"
// import { Card, CardContent } from "@/components/ui/card"
// import { BrainCircuit, Zap, Shield, Sparkles } from "lucide-react"

// export default function LandingPage() {
//   return (
//     <div className="flex flex-col min-h-screen">
//       <header className="px-4 lg:px-6 h-14 flex items-center">
//         <Link className="flex items-center justify-center" href="#">
//           <BrainCircuit className="h-6 w-6 mr-2" />
//           <span className="font-bold">AI App</span>
//         </Link>
//         <nav className="ml-auto flex gap-4 sm:gap-6">
//           <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
//             Features
//           </Link>
//           <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
//             Pricing
//           </Link>
//           <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
//             About
//           </Link>
//           <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
//             Contact
//           </Link>
//         </nav>
//       </header>
//       <main className="flex-1">
//         <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
//           <div className="container px-4 md:px-6">
//             <div className="flex flex-col items-center space-y-4 text-center">
//               <div className="space-y-2">
//                 <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
//                   Revolutionize Your Workflow with AI
//                 </h1>
//                 <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
//                   Harness the power of artificial intelligence to streamline your tasks, boost productivity, and unlock new possibilities.
//                 </p>
//               </div>
//               <div className="space-x-4">
//                 <Button>Get Started</Button>
//                 <Button variant="outline">Learn More</Button>
//               </div>
//             </div>
//           </div>
//         </section>
//         <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
//           <div className="container px-4 md:px-6">
//             <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">Key Features</h2>
//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//               <FeatureCard
//                 icon={<Zap className="h-10 w-10 mb-4 text-primary" />}
//                 title="Lightning Fast"
//                 description="Process tasks at unprecedented speeds, saving you valuable time."
//               />
//               <FeatureCard
//                 icon={<Shield className="h-10 w-10 mb-4 text-primary" />}
//                 title="Secure & Private"
//                 description="Your data is protected with state-of-the-art encryption and privacy measures."
//               />
//               <FeatureCard
//                 icon={<Sparkles className="h-10 w-10 mb-4 text-primary" />}
//                 title="Intelligent Insights"
//                 description="Gain valuable insights from your data with our advanced AI algorithms."
//               />
//             </div>
//           </div>
//         </section>
//         <section className="w-full py-12 md:py-24 lg:py-32">
//           <div className="container px-4 md:px-6">
//             <div className="flex flex-col items-center space-y-4 text-center">
//               <div className="space-y-2">
//                 <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Join the AI Revolution</h2>
//                 <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
//                   Be among the first to experience the future of AI-powered productivity. Sign up for our newsletter to stay updated.
//                 </p>
//               </div>
//               <div className="w-full max-w-sm space-y-2">
//                 <form className="flex space-x-2">
//                   <Input type="email" placeholder="Enter your email" />
//                   <Button type="submit">Subscribe</Button>
//                 </form>
//               </div>
//             </div>
//           </div>
//         </section>
//       </main>
//       <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
//         <p className="text-xs text-gray-500 dark:text-gray-400">© 2024 AI App. All rights reserved.</p>
//         <nav className="sm:ml-auto flex gap-4 sm:gap-6">
//           <Link className="text-xs hover:underline underline-offset-4" href="#">
//             Terms of Service
//           </Link>
//           <Link className="text-xs hover:underline underline-offset-4" href="#">
//             Privacy
//           </Link>
//         </nav>
//       </footer>
//     </div>
//   )
// }

// function FeatureCard({ icon, title, description }) {
//   return (
//     <Card>
//       <CardContent className="flex flex-col items-center p-6 text-center">
//         {icon}
//         <h3 className="text-xl font-bold mb-2">{title}</h3>
//         <p className="text-gray-500 dark:text-gray-400">{description}</p>
//       </CardContent>
//     </Card>
//   )
// }