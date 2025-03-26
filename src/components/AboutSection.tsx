// import Image from "next/image";

export default function AboutSection() {
  return (
    <section id="about" className="py-16 md:py-24 bg-slate-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900">企业介绍</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            了解我们公司的历史、使命和价值观，以及我们如何帮助客户取得成功。
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-200 hover:border-blue-200 transition-colors">
            <h3 className="text-2xl font-bold mb-4 text-slate-900">我们的历史</h3>
            <p className="text-slate-600">
              成立于2005年，我们已经成为行业内领先的技术解决方案提供商，服务了超过500家企业客户，遍布全国各地。
              我们的团队由行业专家组成，拥有丰富的经验和专业知识。
            </p>
          </div>
          
          <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-200 hover:border-blue-200 transition-colors">
            <h3 className="text-2xl font-bold mb-4 text-slate-900">我们的使命</h3>
            <p className="text-slate-600">
              我们的使命是通过创新的技术解决方案，帮助企业实现数字化转型，提升业务效率和竞争力。
              我们致力于成为客户值得信赖的长期合作伙伴，共同成长。
            </p>
          </div>
          
          <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-200 hover:border-blue-200 transition-colors">
            <h3 className="text-2xl font-bold mb-4 text-slate-900">我们的价值观</h3>
            <ul className="text-slate-600 space-y-2">
              <li className="flex items-start">
                <span className="mr-2 text-blue-500">•</span>
                <span>客户至上：以客户需求为中心，提供超出预期的服务</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-blue-500">•</span>
                <span>创新驱动：不断探索和应用新技术，引领行业发展</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-blue-500">•</span>
                <span>团队协作：相互尊重，共同成长，合作共赢</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-blue-500">•</span>
                <span>诚信负责：诚实守信，对客户、员工和社会负责</span>
              </li>
            </ul>
          </div>
          
          <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-200 hover:border-blue-200 transition-colors">
            <h3 className="text-2xl font-bold mb-4 text-slate-900">我们的团队</h3>
            <p className="text-slate-600 mb-4">
              我们拥有一支来自顶尖学府和知名企业的专业团队，为客户提供卓越的技术支持和服务。
            </p>
            <ul className="text-slate-600 space-y-2">
              <li className="flex items-start">
                <span className="mr-2 text-blue-500">•</span>
                <span>团队成员毕业自清华、北大、复旦等211、985名校</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-blue-500">•</span>
                <span>核心技术人员曾就职于阿里巴巴、字节跳动、华为等知名企业</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-blue-500">•</span>
                <span>平均拥有8年以上芯片设计与EDA开发经验</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
} 