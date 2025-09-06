"use client";

import { useEffect, useState } from 'react';
import { Brain, Zap, Cpu, Database, Globe, Shield, Sparkles, Layers } from 'lucide-react';

export default function Animated3DHeader() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [time, setTime] = useState(0);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 2 - 1,
        y: (e.clientY / window.innerHeight) * 2 - 1,
      });
    };

    const handleTimeUpdate = () => {
      setTime(Date.now() * 0.001);
    };

    window.addEventListener('mousemove', handleMouseMove);
    const interval = setInterval(handleTimeUpdate, 16); // 60fps

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      clearInterval(interval);
    };
  }, []);

  const floatingElements = [
    { icon: Brain, delay: 0, size: 'w-12 h-12', color: 'from-purple-400 to-purple-600' },
    { icon: Zap, delay: 0.5, size: 'w-10 h-10', color: 'from-yellow-400 to-orange-500' },
    { icon: Cpu, delay: 1, size: 'w-14 h-14', color: 'from-blue-400 to-blue-600' },
    { icon: Database, delay: 1.5, size: 'w-11 h-11', color: 'from-green-400 to-green-600' },
    { icon: Globe, delay: 2, size: 'w-13 h-13', color: 'from-cyan-400 to-cyan-600' },
    { icon: Shield, delay: 2.5, size: 'w-9 h-9', color: 'from-red-400 to-red-600' },
    { icon: Sparkles, delay: 3, size: 'w-8 h-8', color: 'from-pink-400 to-pink-600' },
    { icon: Layers, delay: 3.5, size: 'w-15 h-15', color: 'from-indigo-400 to-indigo-600' },
  ];

  return (
    <section className="relative h-screen overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Animated Background Grid */}
      <div className="absolute inset-0 opacity-20">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(rgba(147, 51, 234, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(147, 51, 234, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px',
            transform: `translate(${mousePosition.x * 10}px, ${mousePosition.y * 10}px)`,
            transition: 'transform 0.1s ease-out',
          }}
        />
      </div>

      {/* Central 3D Orb */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <div 
          className="relative w-96 h-96"
          style={{
            transform: `rotateX(${mousePosition.y * 20}deg) rotateY(${mousePosition.x * 20}deg)`,
            transition: 'transform 0.1s ease-out',
          }}
        >
          {/* Main Orb */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-purple-400 via-blue-500 to-cyan-400 opacity-80 blur-sm animate-pulse" />
          <div className="absolute inset-4 rounded-full bg-gradient-to-br from-purple-300 via-blue-400 to-cyan-300 opacity-60 blur-sm" />
          <div className="absolute inset-8 rounded-full bg-gradient-to-br from-purple-200 via-blue-300 to-cyan-200 opacity-40" />
          
          {/* Orb Rings */}
          <div 
            className="absolute inset-0 rounded-full border-2 border-purple-300 opacity-30"
            style={{
              transform: `rotateZ(${time * 30}deg)`,
              animation: 'spin 20s linear infinite',
            }}
          />
          <div 
            className="absolute inset-8 rounded-full border border-blue-300 opacity-20"
            style={{
              transform: `rotateZ(${-time * 20}deg)`,
              animation: 'spin 15s linear infinite reverse',
            }}
          />
        </div>
      </div>

      {/* Floating Elements */}
      {floatingElements.map((element, index) => {
        const Icon = element.icon;
        const angle = (index / floatingElements.length) * Math.PI * 2;
        const radius = 200 + Math.sin(time + element.delay) * 50;
        const x = Math.cos(time * 0.5 + angle) * radius;
        const y = Math.sin(time * 0.3 + angle) * radius;
        const z = Math.sin(time * 0.7 + element.delay) * 100;

        return (
          <div
            key={index}
            className={`absolute ${element.size} transform transition-all duration-1000`}
            style={{
              left: `calc(50% + ${x}px)`,
              top: `calc(50% + ${y}px)`,
              transform: `translate(-50%, -50%) translateZ(${z}px) rotateZ(${time * 50 + index * 45}deg)`,
              filter: `blur(${Math.abs(z) * 0.01}px)`,
            }}
          >
            <div className={`w-full h-full rounded-full bg-gradient-to-br ${element.color} flex items-center justify-center shadow-2xl`}>
              <Icon className="w-1/2 h-1/2 text-white" />
            </div>
          </div>
        );
      })}

      {/* Particle System */}
      {Array.from({ length: 50 }).map((_, i) => {
        const angle = (i / 50) * Math.PI * 2;
        const radius = 300 + Math.sin(time + i) * 100;
        const x = Math.cos(time * 0.2 + angle) * radius;
        const y = Math.sin(time * 0.15 + angle) * radius;
        const size = 2 + Math.sin(time + i) * 2;

        return (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full opacity-60"
            style={{
              left: `calc(50% + ${x}px)`,
              top: `calc(50% + ${y}px)`,
              width: `${size}px`,
              height: `${size}px`,
              transform: 'translate(-50%, -50%)',
              animation: `pulse ${2 + Math.random() * 3}s ease-in-out infinite`,
            }}
          />
        );
      })}

      {/* Neural Network Lines */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none">
        {Array.from({ length: 20 }).map((_, i) => {
          const startAngle = (i / 20) * Math.PI * 2;
          const endAngle = ((i + 5) / 20) * Math.PI * 2;
          const radius = 250;
          
          const x1 = Math.cos(time * 0.1 + startAngle) * radius + window.innerWidth / 2;
          const y1 = Math.sin(time * 0.1 + startAngle) * radius + window.innerHeight / 2;
          const x2 = Math.cos(time * 0.1 + endAngle) * radius + window.innerWidth / 2;
          const y2 = Math.sin(time * 0.1 + endAngle) * radius + window.innerHeight / 2;

          return (
            <line
              key={i}
              x1={x1}
              y1={y1}
              x2={x2}
              y2={y2}
              stroke="url(#gradient)"
              strokeWidth="1"
              opacity="0.3"
              style={{
                strokeDasharray: '5,5',
                strokeDashoffset: time * 50,
              }}
            />
          );
        })}
        <defs>
          <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#8B5CF6" />
            <stop offset="50%" stopColor="#3B82F6" />
            <stop offset="100%" stopColor="#06B6D4" />
          </linearGradient>
        </defs>
      </svg>

      {/* Content Overlay */}
      <div className="absolute inset-0 flex items-center justify-center z-10">
        <div className="text-center space-y-8">
          <div className="space-y-4">
            <div className="inline-block px-6 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
              <span className="text-white/90 text-sm font-medium">Welcome to the Future</span>
            </div>
            <h1 className="text-6xl sm:text-7xl lg:text-8xl font-bold text-white leading-tight">
              DevTechAi
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400">
                .Org
              </span>
            </h1>
            <p className="text-xl sm:text-2xl text-white/80 max-w-3xl mx-auto leading-relaxed">
              Where Artificial Intelligence Meets Infinite Possibilities
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white rounded-full font-semibold transform hover:scale-105 hover:shadow-2xl transition-all duration-300">
              Explore AI Solutions
            </button>
            <button className="px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/20 text-white rounded-full font-semibold hover:bg-white/20 transform hover:scale-105 transition-all duration-300">
              Watch Demo
            </button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="flex flex-col items-center space-y-2 text-white/60">
          <span className="text-sm">Scroll to explore</span>
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-bounce" />
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes spin {
          from { transform: rotateZ(0deg); }
          to { transform: rotateZ(360deg); }
        }
        @keyframes pulse {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 0.8; transform: scale(1.2); }
        }
      `}</style>
    </section>
  );
}
