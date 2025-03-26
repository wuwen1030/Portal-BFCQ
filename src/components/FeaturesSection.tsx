import Image from "next/image";

const features = [
  {
    title: "芯片设计工具",
    description: "先进的芯片设计工具套件，包括电路设计、验证和仿真功能，支持最新半导体工艺节点。",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-500">
        <rect width="14" height="14" x="5" y="5" rx="2" ry="2" />
        <path d="M5 10h14" />
        <path d="M10 5v14" />
      </svg>
    )
  },
  {
    title: "PCB设计与分析",
    description: "全面的PCB设计解决方案，提供高速信号完整性分析、热分析和电磁兼容性模拟。",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-500">
        <path d="M18 16v2a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h2" />
        <path d="M8 9h4" />
        <path d="M8 13h0" />
        <path d="M8 17h8" />
        <rect width="8" height="8" x="12" y="4" rx="2" />
      </svg>
    )
  },
  {
    title: "嵌入式系统开发",
    description: "适用于嵌入式系统开发的集成工具链，支持多种微控制器平台和实时操作系统。",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-500">
        <path d="M16 18h-8" />
        <path d="M12 10v4" />
        <rect width="20" height="16" x="2" y="4" rx="2" />
      </svg>
    )
  },
  {
    title: "设计自动化工具",
    description: "高效的设计自动化工具，帮助工程师简化重复工作，提高设计效率和准确性。",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-500">
        <path d="M6 10h4" />
        <path d="M6 14h2" />
        <circle cx="14" cy="12" r="3" />
        <path d="M10 2v2a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2V2" />
        <path d="M10 22v-2a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
      </svg>
    )
  },
  {
    title: "功耗优化解决方案",
    description: "专为低功耗设计优化的工具，适用于移动设备、物联网和其他对功耗敏感的应用。",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-500">
        <path d="M7 20V4a2 2 0 0 1 2-2h7a2 2 0 0 1 2 2v16" />
        <path d="M7 6h14" />
        <path d="M7 12h14" />
        <path d="M7 18h14" />
        <path d="M4 12a1 1 0 1 0 2 0 1 1 0 1 0-2 0Z" />
      </svg>
    )
  },
  {
    title: "测试验证框架",
    description: "完整的测试和验证框架，确保设计满足性能、功能和安全标准要求。",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-500">
        <path d="M22 12 3 21l3.5-9L3 3l19 9Z" />
        <path d="M10 12 3 3" />
      </svg>
    )
  }
];

export default function AboutSection() {
  return (
    <section className="py-20" id="about">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4 text-white">企业介绍</h2>
          <p className="text-lg text-slate-400 max-w-3xl mx-auto">
            杭州比飞长轻是一家专注于电子设计自动化（EDA）的高科技企业，致力于为客户提供先进、高效的设计工具和解决方案，
            帮助工程师应对当今电子产品设计中的各种挑战。
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-slate-800/50 p-8 rounded-xl border border-slate-700/50 hover:border-blue-500/50 transition-all hover:shadow-lg hover:shadow-blue-500/10"
            >
              <div className="bg-slate-800 p-3 rounded-lg inline-block mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">{feature.title}</h3>
              <p className="text-slate-400">{feature.description}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-24 text-center">
          <h2 className="text-3xl font-bold mb-4 text-white">我们的技术优势</h2>
          <p className="text-lg text-slate-400 max-w-3xl mx-auto mb-10">
            杭州比飞长轻在EDA领域拥有多项核心技术专利，我们的解决方案结合了先进的算法、人工智能和业界最佳实践，
            为客户提供卓越的设计体验。
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-16 items-center">
            <div className="bg-slate-800/40 rounded-xl overflow-hidden border border-slate-700/50">
              <div className="h-[320px] relative">
                <Image 
                  src="/hero.jpg"
                  alt="EDA技术展示" 
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            
            <div className="text-left space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-blue-500/10 p-3 rounded-lg">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-500">
                    <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
                    <polyline points="14 2 14 8 20 8" />
                    <path d="m10 13-2 2 2 2" />
                    <path d="m14 17 2-2-2-2" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-white">先进的算法技术</h3>
                  <p className="text-slate-400">
                    我们开发的专有算法可以大幅提高电路设计、布线和验证的效率，比传统工具快30%。
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-blue-500/10 p-3 rounded-lg">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-500">
                    <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
                    <polyline points="3.29 7 12 12 20.71 7" />
                    <line x1="12" x2="12" y1="22" y2="12" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-white">云端协同设计</h3>
                  <p className="text-slate-400">
                    基于云技术的协同设计平台，支持团队成员实时协作，显著提高大型项目的开发效率。
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-blue-500/10 p-3 rounded-lg">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-500">
                    <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
                    <path d="m9 12 2 2 4-4" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-white">智能设计辅助</h3>
                  <p className="text-slate-400">
                    利用人工智能技术辅助设计决策，自动优化布局布线，为工程师提供设计建议。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 