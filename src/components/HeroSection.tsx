import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative pt-36 pb-24 overflow-hidden bg-white">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-tr from-white via-blue-50 to-white opacity-90" />
        
        <div className="absolute bottom-0 left-0 w-full h-full">
          <div className="absolute bottom-20 right-[10%] w-[300px] h-[300px] rounded-full bg-blue-600/10 blur-[100px]"></div>
          <div className="absolute top-40 left-[10%] w-[350px] h-[350px] rounded-full bg-purple-600/10 blur-[120px]"></div>
        </div>
      </div>
      
      <div className="container mx-auto px-4 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-left max-w-xl">
            <div className="inline-block bg-blue-50 text-blue-600 px-4 py-1 rounded-full text-sm font-medium mb-6">
              <span className="inline-block w-2 h-2 rounded-full bg-blue-600 mr-2"></span>
              专业EDA解决方案提供商
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 text-slate-900">
              引领电子设计<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-500">自动化</span>创新
            </h1>
            
            <p className="text-lg mb-8 text-slate-700">
              比飞长轻致力于提供先进的EDA（电子设计自动化）解决方案，
              帮助客户简化设计流程，提高生产效率，实现创新突破。
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="px-8 py-6 text-base bg-blue-600 hover:bg-blue-700 rounded-full" asChild>
                <Link href="#about">了解我们的解决方案</Link>
              </Button>
            </div>
          </div>
          
          <div className="relative h-[500px] w-full hidden lg:block">
            <div className="absolute top-0 right-0 w-full h-full">
              <div className="relative w-full h-full">
                <Image
                  src="/hero.jpg"
                  alt="EDA解决方案图示"
                  fill
                  className="object-cover rounded-lg shadow-md"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 