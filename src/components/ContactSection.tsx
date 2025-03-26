import { Button } from "@/components/ui/button";

export default function ContactSection() {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4 text-slate-900">联系我们</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            如果您对我们的EDA解决方案有任何疑问或需求，请随时与我们联系。我们的专业团队将竭诚为您服务。
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12">
          <div className="bg-white rounded-lg p-8 shadow-md border border-slate-200">
            <h3 className="text-xl font-bold mb-6 text-slate-900">发送消息</h3>
            
            <form className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2 text-slate-700">姓名</label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-2 rounded-md border border-slate-300 bg-white text-slate-900 placeholder:text-slate-400 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none"
                    placeholder="您的姓名"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2 text-slate-700">邮箱</label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-2 rounded-md border border-slate-300 bg-white text-slate-900 placeholder:text-slate-400 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none"
                    placeholder="您的邮箱地址"
                    required
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium mb-2 text-slate-700">主题</label>
                <input
                  type="text"
                  id="subject"
                  className="w-full px-4 py-2 rounded-md border border-slate-300 bg-white text-slate-900 placeholder:text-slate-400 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none"
                  placeholder="消息主题"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2 text-slate-700">消息</label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-2 rounded-md border border-slate-300 bg-white text-slate-900 placeholder:text-slate-400 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none"
                  placeholder="请描述您的需求或问题..."
                  required
                ></textarea>
              </div>
              
              <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 rounded-md">
                发送消息
              </Button>
            </form>
          </div>
          
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-bold mb-4 text-slate-900">联系方式</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-4">
                  <div className="bg-blue-100 p-3 rounded-lg">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-600">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900">电话</h4>
                    <p className="text-slate-600">+86 123 4567 8901</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="bg-blue-100 p-3 rounded-lg">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-600">
                      <rect width="20" height="16" x="2" y="4" rx="2" />
                      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900">邮箱</h4>
                    <p className="text-slate-600">contact@bifeichangqing.com</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="bg-blue-100 p-3 rounded-lg">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-600">
                      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900">地址</h4>
                    <p className="text-slate-600">
                      北京市海淀区科技园区创新大厦 100085
                    </p>
                  </div>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-4 text-slate-900">工作时间</h3>
              <ul className="space-y-2 text-slate-600">
                <li className="flex justify-between">
                  <span>周一至周五：</span>
                  <span>9:00 - 18:00</span>
                </li>
                <li className="flex justify-between">
                  <span>周六：</span>
                  <span>9:30 - 15:00</span>
                </li>
                <li className="flex justify-between">
                  <span>周日：</span>
                  <span>休息</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-blue-50 p-6 rounded-lg border border-blue-100">
              <h3 className="text-xl font-bold mb-4 text-slate-900">技术支持</h3>
              <p className="text-slate-600 mb-4">
                我们提供专业的技术支持服务，帮助您解决在使用我们EDA工具时遇到的问题。
              </p>
              <p className="text-slate-600">
                技术支持热线：<span className="text-blue-600 font-medium">400-888-9999</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 