// import Image from "next/image";
import { Button } from "@/components/ui/button";

const projects = [
  {
    id: 1,
    title: "5nm工艺芯片设计工具套件",
    description: "为领先半导体公司定制的5nm工艺芯片设计工具，支持超大规模集成电路设计，包含先进的功耗分析和热优化功能。",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1000",
    category: "芯片设计"
  },
  {
    id: 2,
    title: "高速PCB信号完整性分析系统",
    description: "针对高速PCB设计的专用信号完整性分析工具，支持DDR5、PCI Express 5.0等高速接口的精确仿真和验证。",
    image: "https://images.unsplash.com/photo-1563770660941-10a2b12eef6c?q=80&w=1000",
    category: "PCB设计"
  },
  {
    id: 3,
    title: "汽车电子ADAS系统开发平台",
    description: "专为汽车ADAS（高级驾驶辅助系统）设计的开发平台，提供从算法设计到硬件实现的完整工具链。",
    image: "https://images.unsplash.com/photo-1559329255-2e7cb2e21ca7?q=80&w=1000",
    category: "嵌入式系统"
  },
  {
    id: 4,
    title: "医疗设备电子系统验证解决方案",
    description: "符合医疗设备安全标准的电子系统验证方案，提供全面的测试覆盖率分析和故障安全设计验证。",
    image: "https://images.unsplash.com/photo-1530026405186-ed1f139313f8?q=80&w=1000",
    category: "系统验证"
  }
];

export default function PortfolioSection() {
  return (
    <section id="portfolio" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4 text-slate-900">项目案例</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            以下是我们为客户提供的部分解决方案，展示了我们在电子设计自动化领域的专业能力和丰富经验。
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="group bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all border border-slate-200 hover:border-blue-300">
              <div className="relative h-64 w-full overflow-hidden">
                {/* <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                /> */}
                <div className="absolute top-4 right-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                  {project.category}
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-slate-900">{project.title}</h3>
                <p className="text-slate-600 mb-4">{project.description}</p>
                <Button size="sm" className="bg-blue-50 text-blue-600 hover:bg-blue-100 border border-blue-200 hover:border-blue-300">
                  查看详情
                </Button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-8 py-6 text-base shadow-sm">
            查看更多案例
          </Button>
        </div>
      </div>
    </section>
  );
} 