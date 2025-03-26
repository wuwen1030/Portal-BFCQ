import { Button } from "@/components/ui/button";

const jobListings = [
  {
    id: 1,
    title: "高级芯片设计工程师",
    department: "研发部",
    location: "北京",
    type: "全职",
    requirements: [
      "5年以上芯片设计经验",
      "精通Verilog/VHDL等硬件描述语言",
      "熟悉先进工艺节点设计流程",
      "具有从事过成功流片项目经验"
    ]
  },
  {
    id: 2,
    title: "EDA算法开发工程师",
    department: "研发部",
    location: "上海",
    type: "全职",
    requirements: [
      "硕士及以上学历，计算机或电子工程相关专业",
      "精通C++/Python，具备良好的算法基础",
      "对EDA领域如布局布线、时序分析等问题有深入理解",
      "有并行算法开发经验者优先"
    ]
  },
  {
    id: 3,
    title: "PCB设计工具产品经理",
    department: "产品部",
    location: "北京",
    type: "全职",
    requirements: [
      "3年以上EDA相关产品经理经验",
      "深入了解PCB设计流程和行业需求",
      "具有优秀的沟通能力和需求分析能力",
      "有工程背景者优先"
    ]
  },
  {
    id: 4,
    title: "嵌入式系统开发工程师",
    department: "研发部",
    location: "深圳",
    type: "全职",
    requirements: [
      "3年以上嵌入式系统开发经验",
      "熟悉主流MCU/SoC平台和RTOS",
      "有FPGA开发经验优先",
      "熟悉嵌入式软硬件协同设计流程"
    ]
  }
];

export default function CareersSection() {
  return (
    <section id="careers" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4 text-slate-900">人才招聘</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            比飞长轻正在寻找对EDA领域充满热情的优秀人才。如果您对电子设计自动化技术充满热情，愿意挑战前沿技术难题，欢迎加入我们！
          </p>
        </div>
        
        <div className="space-y-6">
          {jobListings.map((job) => (
            <div key={job.id} className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-all border border-slate-200 hover:border-blue-300">
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                <div>
                  <h3 className="text-xl font-bold text-slate-900">{job.title}</h3>
                  <div className="flex flex-wrap gap-2 mt-2">
                    <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm">
                      {job.department}
                    </span>
                    <span className="bg-slate-100 text-slate-700 px-3 py-1 rounded-full text-sm">
                      {job.location}
                    </span>
                    <span className="bg-slate-100 text-slate-700 px-3 py-1 rounded-full text-sm">
                      {job.type}
                    </span>
                  </div>
                </div>
                <Button className="mt-4 md:mt-0 bg-blue-600 hover:bg-blue-700 rounded-md">
                  申请职位
                </Button>
              </div>
              
              <div>
                <h4 className="font-semibold mb-2 text-slate-900">职位要求：</h4>
                <ul className="list-disc list-inside text-slate-600 space-y-1 pl-2">
                  {job.requirements.map((req, index) => (
                    <li key={index}>{req}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 bg-white rounded-lg p-8 text-center border border-slate-200 shadow-md">
          <h3 className="text-2xl font-bold mb-4 text-slate-900">没有找到合适的职位？</h3>
          <p className="text-slate-600 mb-6 max-w-2xl mx-auto">
            即使没有列出符合您专业背景的职位，我们也欢迎对EDA技术有热情的优秀人才加入。请发送您的简历，我们会在有适合您的职位时联系您。
          </p>
          <Button size="lg" className="bg-blue-600 hover:bg-blue-700 rounded-md px-8">
            发送简历
          </Button>
        </div>
      </div>
    </section>
  );
} 