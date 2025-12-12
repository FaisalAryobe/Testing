import React, { useState } from 'react';
import { 
  Cloud, 
  Shield, 
  Zap, 
  Server, 
  Database, 
  Cpu, 
  Globe, 
  ArrowRight,
  Menu,
  X,
  Check
} from 'lucide-react';
import { AIChat } from './components/AIChat';
import { Modal } from './components/Modal';
import { ConsultationForm } from './components/ConsultationForm';

const App: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openConsultation = () => setIsModalOpen(true);

  return (
    <div className="min-h-screen bg-slate-900 font-sans text-slate-100 overflow-x-hidden">
      {/* Navigation */}
      <nav className="fixed w-full z-40 bg-slate-900/80 backdrop-blur-md border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center space-x-2">
              <div className="bg-gradient-to-br from-brand-500 to-indigo-600 p-2 rounded-lg">
                <Cloud className="h-6 w-6 text-white" />
              </div>
              <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-400">
                Nebula Cloud
              </span>
            </div>
            
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                <a href="#products" className="hover:text-brand-400 transition-colors">Products</a>
                <a href="#solutions" className="hover:text-brand-400 transition-colors">Solutions</a>
                <a href="#pricing" className="hover:text-brand-400 transition-colors">Pricing</a>
                <a href="#customers" className="hover:text-brand-400 transition-colors">Customers</a>
              </div>
            </div>

            <div className="hidden md:block">
              <button 
                onClick={openConsultation}
                className="bg-white text-slate-900 hover:bg-slate-100 px-5 py-2.5 rounded-lg font-semibold transition-all hover:shadow-lg transform hover:-translate-y-0.5"
              >
                Request Consultation
              </button>
            </div>

            <div className="md:hidden">
              <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="text-slate-300 hover:text-white">
                {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-slate-800 border-b border-slate-700 animate-fade-in">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <a href="#products" onClick={() => setIsMobileMenuOpen(false)} className="block px-3 py-2 rounded-md text-base font-medium hover:bg-slate-700">Products</a>
              <a href="#solutions" onClick={() => setIsMobileMenuOpen(false)} className="block px-3 py-2 rounded-md text-base font-medium hover:bg-slate-700">Solutions</a>
              <a href="#pricing" onClick={() => setIsMobileMenuOpen(false)} className="block px-3 py-2 rounded-md text-base font-medium hover:bg-slate-700">Pricing</a>
              <button 
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  openConsultation();
                }}
                className="w-full text-left mt-4 bg-brand-600 px-3 py-3 rounded-md font-semibold"
              >
                Request Consultation
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
        {/* Background Gradients */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl pointer-events-none">
          <div className="absolute top-20 right-0 w-96 h-96 bg-brand-500/20 rounded-full blur-[100px] animate-pulse-slow"></div>
          <div className="absolute bottom-0 left-0 w-72 h-72 bg-indigo-500/10 rounded-full blur-[80px]"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center px-4 py-2 rounded-full border border-brand-500/30 bg-brand-500/10 mb-8 backdrop-blur-sm">
              <span className="flex h-2 w-2 rounded-full bg-brand-400 mr-2 animate-pulse"></span>
              <span className="text-sm font-medium text-brand-300">New: GPU Instances H100 Available</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8 bg-clip-text text-transparent bg-gradient-to-b from-white to-slate-400">
              Scale Without Limits.<br />Secure by Design.
            </h1>
            
            <p className="text-xl md:text-2xl text-slate-400 mb-10 max-w-2xl mx-auto leading-relaxed">
              The enterprise cloud platform built for mission-critical workloads. Deploy globally in seconds with industry-leading reliability.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button 
                onClick={openConsultation}
                className="bg-brand-600 hover:bg-brand-500 text-white text-lg px-8 py-4 rounded-xl font-semibold transition-all hover:shadow-xl hover:shadow-brand-500/20 transform hover:-translate-y-1 flex items-center justify-center gap-2"
              >
                Start Free Trial <ArrowRight className="w-5 h-5" />
              </button>
              <button className="bg-slate-800 hover:bg-slate-700 border border-slate-700 text-white text-lg px-8 py-4 rounded-xl font-semibold transition-all">
                View Documentation
              </button>
            </div>

            <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 opacity-60">
              <div className="flex items-center justify-center gap-2">
                <Globe className="w-5 h-5" /> <span>24 Regions</span>
              </div>
              <div className="flex items-center justify-center gap-2">
                <Shield className="w-5 h-5" /> <span>ISO 27001</span>
              </div>
              <div className="flex items-center justify-center gap-2">
                <Zap className="w-5 h-5" /> <span>99.999% SLA</span>
              </div>
              <div className="flex items-center justify-center gap-2">
                <Cpu className="w-5 h-5" /> <span>Bare Metal</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-24 bg-slate-800/50 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">High-Performance Infrastructure</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              Everything you need to build, deploy, and scale your applications.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <ProductCard 
              icon={<Server className="w-8 h-8 text-brand-400" />}
              title="Nebula Compute"
              description="Virtual machines ranging from shared instances to dedicated bare metal high-performance clusters."
              price="From $0.04/hour"
              features={['Intel Xeon & AMD EPYC', 'Auto-scaling groups', 'Root access']}
            />
            <ProductCard 
              icon={<Database className="w-8 h-8 text-purple-400" />}
              title="Managed Databases"
              description="Fully managed Postgres, MySQL, and Redis with automated backups and point-in-time recovery."
              price="From $15/month"
              features={['High availability', 'Auto-backups', 'Performance insights']}
            />
            <ProductCard 
              icon={<Cpu className="w-8 h-8 text-emerald-400" />}
              title="Nebula AI"
              description="Managed Kubernetes service optimized for machine learning workloads and inference."
              price="Pay for compute only"
              features={['Pre-configured ML images', 'JupyterHub integration', 'GPU acceleration']}
            />
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="customers" className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Trusted by Innovators</h2>
            <p className="text-slate-400">
              Powering the next generation of enterprise applications.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Testimonial 
              quote="Nebula Cloud's reliability is unmatched. We migrated our entire financial platform in weeks, not months."
              author="Sarah Chen"
              role="CTO, FinStream Global"
              logo="FS"
            />
            <Testimonial 
              quote="The performance per dollar on Nebula Compute is incredible. It allowed us to scale our AI models 10x faster."
              author="Marcus Rodriguez"
              role="VP Engineering, DataMind"
              logo="DM"
            />
            <Testimonial 
              quote="Support that actually answers. The enterprise team helped us architect a complex multi-region failover system."
              author="Elena Kowalski"
              role="Lead Architect, OmniRetail"
              logo="OR"
            />
          </div>

          <div className="mt-20 border-t border-slate-800 pt-10 flex flex-wrap justify-center gap-12 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
             {/* Simple Logo Placeholders */}
             <div className="text-2xl font-bold font-serif text-white">Acme Corp</div>
             <div className="text-2xl font-bold font-mono text-white">GlobalTech</div>
             <div className="text-2xl font-bold font-sans italic text-white">Starlight</div>
             <div className="text-2xl font-bold font-serif text-white">Umbrella</div>
             <div className="text-2xl font-bold font-mono text-white">Cyberdyne</div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-brand-600/10"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-transparent to-slate-900"></div>
        
        <div className="max-w-4xl mx-auto px-4 relative z-10 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to transform your infrastructure?</h2>
          <p className="text-xl text-slate-300 mb-10">
            Join thousands of developers and businesses building on Nebula Cloud today.
            Get $200 in free credits when you sign up.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
             <button 
                onClick={openConsultation}
                className="bg-white text-brand-900 text-lg px-10 py-4 rounded-xl font-bold hover:bg-gray-100 transition-all shadow-xl"
              >
                Request Consultation
              </button>
             <button className="bg-transparent border-2 border-slate-600 hover:border-white text-white text-lg px-10 py-4 rounded-xl font-bold transition-all">
                Contact Sales
              </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 border-t border-slate-800 py-12 text-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Cloud className="h-5 w-5 text-brand-500" />
              <span className="font-bold text-white text-lg">Nebula</span>
            </div>
            <p className="text-slate-500">
              © 2024 Nebula Cloud Inc.<br/>All rights reserved.
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold text-white mb-4">Products</h3>
            <ul className="space-y-2 text-slate-400">
              <li><a href="#" className="hover:text-brand-400">Compute</a></li>
              <li><a href="#" className="hover:text-brand-400">Storage</a></li>
              <li><a href="#" className="hover:text-brand-400">Networking</a></li>
              <li><a href="#" className="hover:text-brand-400">Databases</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-white mb-4">Solutions</h3>
            <ul className="space-y-2 text-slate-400">
              <li><a href="#" className="hover:text-brand-400">Startups</a></li>
              <li><a href="#" className="hover:text-brand-400">Enterprise</a></li>
              <li><a href="#" className="hover:text-brand-400">AI & Machine Learning</a></li>
              <li><a href="#" className="hover:text-brand-400">Multi-Cloud</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-white mb-4">Company</h3>
            <ul className="space-y-2 text-slate-400">
              <li><a href="#" className="hover:text-brand-400">About Us</a></li>
              <li><a href="#" className="hover:text-brand-400">Careers</a></li>
              <li><a href="#" className="hover:text-brand-400">Legal</a></li>
              <li><a href="#" className="hover:text-brand-400">Status</a></li>
            </ul>
          </div>
        </div>
      </footer>

      {/* Interactive Elements */}
      <AIChat />
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} title="Request a Consultation">
        <ConsultationForm onSuccess={() => setIsModalOpen(false)} />
      </Modal>

    </div>
  );
};

// Helper Components
const ProductCard: React.FC<{
  icon: React.ReactNode;
  title: string;
  description: string;
  price: string;
  features: string[];
}> = ({ icon, title, description, price, features }) => (
  <div className="bg-slate-800/50 border border-slate-700 rounded-2xl p-8 hover:bg-slate-800 transition-all hover:border-brand-500/50 group">
    <div className="mb-6 bg-slate-900 w-16 h-16 rounded-xl flex items-center justify-center border border-slate-700 group-hover:border-brand-500/50 transition-colors">
      {icon}
    </div>
    <h3 className="text-xl font-bold mb-3 text-white">{title}</h3>
    <p className="text-slate-400 mb-6 leading-relaxed">{description}</p>
    <div className="mb-6">
      <span className="text-2xl font-bold text-white">{price}</span>
    </div>
    <ul className="space-y-3">
      {features.map((feature, i) => (
        <li key={i} className="flex items-center text-sm text-slate-300">
          <Check className="w-4 h-4 text-brand-500 mr-3" />
          {feature}
        </li>
      ))}
    </ul>
    <button className="mt-8 w-full py-3 rounded-lg border border-slate-600 hover:border-brand-500 hover:text-brand-400 font-medium transition-all">
      Learn More
    </button>
  </div>
);

const Testimonial: React.FC<{
  quote: string;
  author: string;
  role: string;
  logo: string;
}> = ({ quote, author, role, logo }) => (
  <div className="bg-slate-900 border border-slate-800 p-8 rounded-2xl relative">
    <div className="text-brand-600 text-6xl font-serif absolute top-4 left-6 opacity-20">"</div>
    <p className="text-slate-300 text-lg mb-8 relative z-10 italic">
      {quote}
    </p>
    <div className="flex items-center">
      <div className="w-12 h-12 bg-gradient-to-br from-slate-700 to-slate-600 rounded-full flex items-center justify-center font-bold text-white">
        {logo}
      </div>
      <div className="ml-4">
        <div className="text-white font-semibold">{author}</div>
        <div className="text-slate-500 text-sm">{role}</div>
      </div>
    </div>
  </div>
);

export default App;