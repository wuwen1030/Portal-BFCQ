import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm shadow-sm">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-10 h-10 relative">
              <Image 
                src="/logo.svg" 
                alt="比飞长轻 Logo" 
                width={40} 
                height={40}
                className="object-contain"
              />
            </div>
            <span className="text-2xl font-bold text-slate-900">比飞长轻</span>
          </Link>
          
          <nav className="hidden md:flex items-center space-x-6 ml-8">
            <Link 
              href="#about" 
              className="font-medium text-slate-700 hover:text-blue-600 transition-colors"
            >
              企业介绍
            </Link>
            <Link 
              href="#portfolio" 
              className="font-medium text-slate-700 hover:text-blue-600 transition-colors"
            >
              项目案例
            </Link>
            <Link 
              href="#careers" 
              className="font-medium text-slate-700 hover:text-blue-600 transition-colors"
            >
              人才招聘
            </Link>
          </nav>
        </div>
        
        <div className="flex items-center space-x-3">
          <Button className="rounded-full px-5 py-2 bg-blue-600 hover:bg-blue-700" asChild>
            <Link href="#contact">联系我们</Link>
          </Button>
        </div>
      </div>
    </header>
  );
} 