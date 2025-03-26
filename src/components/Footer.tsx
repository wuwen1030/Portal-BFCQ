import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-slate-100 py-12 border-t border-slate-200">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-9 h-9 relative">
                <Image 
                  src="/logo.svg" 
                  alt="比飞长轻 Logo" 
                  width={36} 
                  height={36}
                  className="object-contain"
                />
              </div>
              <h3 className="text-xl font-bold text-slate-900">比飞长轻</h3>
            </div>
            <p className="text-slate-600 max-w-xs">
              专业的电子设计自动化（EDA）解决方案提供商，致力于为客户提供高效、可靠的设计工具与技术支持。
            </p>
            <div className="flex space-x-4">
              <a href="#" className="bg-white p-2 rounded-full border border-slate-200 hover:border-blue-200 hover:bg-blue-50 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-600">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect width="4" height="12" x="2" y="9"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </a>
              <a href="#" className="bg-white p-2 rounded-full border border-slate-200 hover:border-blue-200 hover:bg-blue-50 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-600">
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                </svg>
              </a>
              <a href="#" className="bg-white p-2 rounded-full border border-slate-200 hover:border-blue-200 hover:bg-blue-50 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-600">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
                </svg>
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4 text-slate-900">快速链接</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#about" className="text-slate-600 hover:text-blue-600 transition-colors">
                  企业介绍
                </Link>
              </li>
              <li>
                <Link href="#portfolio" className="text-slate-600 hover:text-blue-600 transition-colors">
                  项目案例
                </Link>
              </li>
              <li>
                <Link href="#contact" className="text-slate-600 hover:text-blue-600 transition-colors">
                  联系我们
                </Link>
              </li>
              <li>
                <Link href="#careers" className="text-slate-600 hover:text-blue-600 transition-colors">
                  人才招聘
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4 text-slate-900">产品服务</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-slate-600 hover:text-blue-600 transition-colors">
                  芯片设计工具
                </Link>
              </li>
              <li>
                <Link href="#" className="text-slate-600 hover:text-blue-600 transition-colors">
                  PCB设计与分析
                </Link>
              </li>
              <li>
                <Link href="#" className="text-slate-600 hover:text-blue-600 transition-colors">
                  嵌入式系统开发
                </Link>
              </li>
              <li>
                <Link href="#" className="text-slate-600 hover:text-blue-600 transition-colors">
                  功耗优化解决方案
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4 text-slate-900">联系我们</h3>
            <div className="text-slate-600 space-y-4">
              <p className="flex items-start gap-2">
                <span className="font-medium text-slate-900">总部地址：</span>
                <span className="block">北京市海淀区科技园区创新大厦 100085</span>
              </p>
              <p className="flex flex-col">
                <span className="font-medium text-slate-900">联系电话：</span>
                <a href="tel:+8612345678901" className="text-blue-600 hover:underline">
                  +86 123 4567 8901
                </a>
              </p>
              <p className="flex flex-col">
                <span className="font-medium text-slate-900">业务咨询：</span>
                <a href="mailto:business@bifeichangqing.com" className="text-blue-600 hover:underline">
                  business@bifeichangqing.com
                </a>
              </p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-slate-200 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-slate-500 text-sm">
              © 2025 杭州比飞长轻科技有限公司. 保留所有权利.
            </p>
            <div className="flex gap-4 mt-4 md:mt-0">
              <Link href="#" className="text-sm text-slate-500 hover:text-blue-600 transition-colors">
                隐私政策
              </Link>
              <Link href="#" className="text-sm text-slate-500 hover:text-blue-600 transition-colors">
                服务条款
              </Link>
              <Link href="#" className="text-sm text-slate-500 hover:text-blue-600 transition-colors">
                网站地图
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
} 