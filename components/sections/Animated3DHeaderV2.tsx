"use client";

import { useEffect, useState, useRef } from 'react';
import { Brain, Zap, Cpu, Database, Globe, Shield, Sparkles, Layers, Target, Rocket, Atom, CircuitBoard } from 'lucide-react';

export default function Animated3DHeaderV2() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [time, setTime] = useState(0);
  const [scrollY, setScrollY] = useState(0);
  const [typedText, setTypedText] = useState('');
  const [showCursor, setShowCursor] = useState(true);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const fullText = "Where Artificial Intelligence Meets Humanity...";

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 2 - 1,
        y: (e.clientY / window.innerHeight) * 2 - 1,
      });
    };

    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    const handleTimeUpdate = () => {
      setTime(Date.now() * 0.001);
    };

    // Typing animation with infinite loop and pause
    let animationPhase = 'typing'; // 'typing', 'pausing', 'resetting'
    let pauseStartTime = 0;
    let cursorBlinkStartTime = 0;
    let isCursorBlinking = false;
    
    const typingInterval = setInterval(() => {
      setTypedText(prev => {
        if (animationPhase === 'typing') {
          if (prev.length < fullText.length) {
            return fullText.slice(0, prev.length + 1);
          } else {
            // Start pause phase with cursor blinking
            animationPhase = 'pausing';
            pauseStartTime = Date.now();
            cursorBlinkStartTime = Date.now();
            isCursorBlinking = true;
            return prev;
          }
        } else if (animationPhase === 'pausing') {
          // Check if pause duration is complete
          if (Date.now() - pauseStartTime >= 2000) {
            animationPhase = 'resetting';
            isCursorBlinking = false;
            return ''; // Clear text immediately
          }
          return prev;
        } else if (animationPhase === 'resetting') {
          animationPhase = 'typing';
          return '';
        }
        return prev;
      });
    }, 100);

    // Cursor blinking - 2 seconds at end, then normal blinking
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => {
        if (isCursorBlinking) {
          // Blink cursor for 2 seconds at the end (faster blinking)
          const blinkElapsed = Date.now() - cursorBlinkStartTime;
          if (blinkElapsed >= 2000) {
            isCursorBlinking = false;
            return true; // Keep cursor visible after blinking period
          }
          return !prev; // Faster blinking during the 2-second period
        } else if (animationPhase === 'resetting') {
          return true; // Keep cursor visible during reset
        }
        return !prev; // Normal blinking during typing
      });
    }, 200); // Faster blinking: 200ms instead of 500ms

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);
    const interval = setInterval(handleTimeUpdate, 16); // 60fps

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
      clearInterval(interval);
      clearInterval(typingInterval);
      clearInterval(cursorInterval);
    };
  }, [fullText]);

  // Enhanced floating elements with more variety
  const floatingElements = [
    { icon: Brain, delay: 0, size: 'w-16 h-16', color: 'from-purple-400 to-purple-600', speed: 0.3 },
    { icon: Zap, delay: 0.5, size: 'w-12 h-12', color: 'from-yellow-400 to-orange-500', speed: 0.4 },
    { icon: Cpu, delay: 1, size: 'w-18 h-18', color: 'from-blue-400 to-blue-600', speed: 0.2 },
    { icon: Database, delay: 1.5, size: 'w-14 h-14', color: 'from-green-400 to-green-600', speed: 0.5 },
    { icon: Globe, delay: 2, size: 'w-15 h-15', color: 'from-cyan-400 to-cyan-600', speed: 0.3 },
    { icon: Shield, delay: 2.5, size: 'w-11 h-11', color: 'from-red-400 to-red-600', speed: 0.6 },
    { icon: Sparkles, delay: 3, size: 'w-10 h-10', color: 'from-pink-400 to-pink-600', speed: 0.7 },
    { icon: Layers, delay: 3.5, size: 'w-17 h-17', color: 'from-indigo-400 to-indigo-600', speed: 0.2 },
    { icon: Target, delay: 4, size: 'w-13 h-13', color: 'from-emerald-400 to-emerald-600', speed: 0.4 },
    { icon: Rocket, delay: 4.5, size: 'w-12 h-12', color: 'from-violet-400 to-violet-600', speed: 0.8 },
    { icon: Atom, delay: 5, size: 'w-14 h-14', color: 'from-teal-400 to-teal-600', speed: 0.3 },
    { icon: CircuitBoard, delay: 5.5, size: 'w-16 h-16', color: 'from-amber-400 to-amber-600', speed: 0.5 },
  ];

  // Enhanced particle system with different types
  const particleTypes = [
    { color: 'bg-purple-300', size: 2, speed: 0.1 },
    { color: 'bg-blue-300', size: 1.5, speed: 0.15 },
    { color: 'bg-cyan-300', size: 3, speed: 0.08 },
    { color: 'bg-pink-300', size: 1, speed: 0.2 },
    { color: 'bg-yellow-300', size: 2.5, speed: 0.12 },
  ];

  return (
    <section className="relative h-screen overflow-hidden bg-gradient-to-br from-slate-800 via-indigo-800 to-purple-800">
      {/* Enhanced Animated Background */}
      <div className="absolute inset-0">
        {/* Dynamic Grid */}
        <div 
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: `
              linear-gradient(rgba(99, 102, 241, 0.15) 1px, transparent 1px),
              linear-gradient(90deg, rgba(99, 102, 241, 0.15) 1px, transparent 1px)
            `,
            backgroundSize: `${40 + Math.sin(time * 0.5) * 10}px ${40 + Math.sin(time * 0.5) * 10}px`,
            transform: `translate(${mousePosition.x * 15}px, ${mousePosition.y * 15}px) rotate(${time * 2}deg)`,
            transition: 'transform 0.1s ease-out',
          }}
        />
        
        {/* Hexagonal Pattern Overlay */}
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%236366f1' fill-opacity='0.1'%3E%3Cpath d='M30 0l15 8.66v17.32L30 34.64l-15-8.66V8.66L30 0z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            transform: `translate(${mousePosition.x * -5}px, ${mousePosition.y * -5}px)`,
            transition: 'transform 0.1s ease-out',
          }}
        />
      </div>

      {/* Enhanced Central 3D Orb - Mobile Responsive */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div 
          className="relative w-[200px] h-[200px] sm:w-[300px] sm:h-[300px] md:w-[350px] md:h-[350px] lg:w-[400px] lg:h-[400px] xl:w-[450px] xl:h-[450px]"
          style={{
            transform: `rotateX(${mousePosition.y * 30}deg) rotateY(${mousePosition.x * 30}deg) translateZ(${scrollY * 0.1}px)`,
            transition: 'transform 0.1s ease-out',
          }}
        >
          {/* Multi-layered Orb */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-purple-400 via-indigo-500 to-blue-500 opacity-90 blur-lg animate-pulse" />
          <div className="absolute inset-6 rounded-full bg-gradient-to-br from-purple-300 via-indigo-400 to-blue-400 opacity-70 blur-md" />
          <div className="absolute inset-12 rounded-full bg-gradient-to-br from-purple-200 via-indigo-300 to-blue-300 opacity-50 blur-sm" />
          <div className="absolute inset-18 rounded-full bg-gradient-to-br from-purple-100 via-indigo-200 to-blue-200 opacity-30" />
          
          {/* Enhanced Orb Rings */}
          <div 
            className="absolute inset-0 rounded-full border-2 border-purple-300 opacity-40"
            style={{
              transform: `rotateZ(${time * 40}deg)`,
              animation: 'spin 15s linear infinite',
            }}
          />
          <div 
            className="absolute inset-6 rounded-full border border-indigo-300 opacity-30"
            style={{
              transform: `rotateZ(${-time * 30}deg)`,
              animation: 'spin 12s linear infinite reverse',
            }}
          />
          <div 
            className="absolute inset-12 rounded-full border border-blue-300 opacity-20"
            style={{
              transform: `rotateZ(${time * 25}deg)`,
              animation: 'spin 18s linear infinite',
            }}
          />
          
          {/* Inner Core - Mobile Responsive */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-white opacity-80 animate-ping" />
        </div>
      </div>


      {/* Enhanced Floating Elements - Mobile Optimized */}
      {floatingElements.map((element, index) => {
        const Icon = element.icon;
        const angle = (index / floatingElements.length) * Math.PI * 2;
        const radius = 120 + Math.sin(time * element.speed + element.delay) * 30;
        const x = Math.cos(time * element.speed + angle) * radius;
        const y = Math.sin(time * element.speed * 0.7 + angle) * radius;
        const z = Math.sin(time * element.speed * 1.2 + element.delay) * 50;

        return (
          <div
            key={index}
            className={`absolute ${element.size} transform transition-all duration-1000`}
            style={{
              left: `calc(50% + ${x}px)`,
              top: `calc(50% + ${y}px)`,
              transform: `translate(-50%, -50%) translateZ(${z}px) rotateZ(${time * 60 + index * 30}deg) rotateY(${mousePosition.x * 20}deg)`,
              filter: `blur(${Math.abs(z) * 0.008}px)`,
            }}
          >
            <div className={`w-full h-full rounded-full bg-gradient-to-br ${element.color} flex items-center justify-center shadow-2xl border-2 border-white/20`}>
              <Icon className="w-1/2 h-1/2 text-white drop-shadow-lg" />
            </div>
          </div>
        );
      })}

      {/* Enhanced Particle System - Mobile Optimized */}
      {Array.from({ length: 40 }).map((_, i) => {
        const particleType = particleTypes[i % particleTypes.length];
        const angle = (i / 40) * Math.PI * 2;
        const radius = 150 + Math.sin(time * particleType.speed + i) * 40;
        const x = Math.cos(time * particleType.speed + angle) * radius;
        const y = Math.sin(time * particleType.speed * 0.8 + angle) * radius;
        const size = particleType.size + Math.sin(time + i) * particleType.size * 0.3;

        return (
          <div
            key={i}
            className={`absolute ${particleType.color} rounded-full opacity-60`}
            style={{
              left: `calc(50% + ${x}px)`,
              top: `calc(50% + ${y}px)`,
              width: `${size}px`,
              height: `${size}px`,
              transform: 'translate(-50%, -50%)',
              animation: `pulse ${1.5 + Math.random() * 2}s ease-in-out infinite`,
              boxShadow: `0 0 ${size * 1.5}px ${particleType.color.replace('bg-', '')}`,
            }}
          />
        );
      })}

      {/* Enhanced Neural Network - Mobile Optimized */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none">
        {Array.from({ length: 20 }).map((_, i) => {
          const startAngle = (i / 20) * Math.PI * 2;
          const endAngle = ((i + 7) / 20) * Math.PI * 2;
          const radius = 200;
          
          const x1 = Math.cos(time * 0.15 + startAngle) * radius + (typeof window !== 'undefined' ? window.innerWidth / 2 : 400);
          const y1 = Math.sin(time * 0.15 + startAngle) * radius + (typeof window !== 'undefined' ? window.innerHeight / 2 : 300);
          const x2 = Math.cos(time * 0.15 + endAngle) * radius + (typeof window !== 'undefined' ? window.innerWidth / 2 : 400);
          const y2 = Math.sin(time * 0.15 + endAngle) * radius + (typeof window !== 'undefined' ? window.innerHeight / 2 : 300);

          return (
            <line
              key={i}
              x1={x1}
              y1={y1}
              x2={x2}
              y2={y2}
              stroke="url(#enhancedGradient)"
              strokeWidth="2"
              opacity="0.4"
              style={{
                strokeDasharray: '8,4',
                strokeDashoffset: time * 80,
              }}
            />
          );
        })}
        <defs>
          <linearGradient id="enhancedGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#8B5CF6" />
            <stop offset="25%" stopColor="#3B82F6" />
            <stop offset="50%" stopColor="#06B6D4" />
            <stop offset="75%" stopColor="#10B981" />
            <stop offset="100%" stopColor="#F59E0B" />
          </linearGradient>
        </defs>
      </svg>

      {/* Enhanced Content Overlay - MOBILE RESPONSIVE */}
      <div className="absolute inset-0 flex items-center justify-center z-10 px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-6 sm:space-y-8 lg:space-y-10 w-full max-w-6xl">
          <div className="space-y-4 sm:space-y-6">
            {/* Welcome Badge - Mobile Responsive */}
            <div className="inline-block px-4 sm:px-6 lg:px-8 py-2 sm:py-3 bg-white/15 backdrop-blur-md rounded-full border border-white/30 shadow-2xl">
              <span className="text-white/95 text-sm sm:text-base font-semibold tracking-wide">Let's build our Future with AI</span>
            </div>
            
            {/* Main Title - MOBILE FIRST APPROACH */}
            <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl font-bold text-white leading-tight tracking-tight">
              DevTechAi<span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-indigo-400 via-blue-400 to-cyan-400 animate-pulse">.Org</span>
            </h1>
            
            {/* Typing Animation - MOBILE RESPONSIVE */}
            <div className="text-sm sm:text-base md:text-lg lg:text-xl text-white/85 max-w-5xl mx-auto leading-relaxed sm:leading-loose font-bold px-3 sm:px-4 md:px-6 py-3 sm:py-4 border-2 border-white/20 rounded-lg backdrop-blur-sm bg-white/5 shadow-lg" style={{ fontFamily: 'var(--font-orbitron)', boxShadow: '0 0 15px rgba(255, 255, 255, 0.15), inset 0 0 15px rgba(255, 255, 255, 0.05)' }}>
              <div className="flex flex-wrap justify-center items-center gap-0.5 sm:gap-1">
                {typedText.split('').map((char, index) => {
                  const isSpace = char === ' ';
                  const delay = index * 0.1;
                  const isVisible = index < typedText.length;
                  
                  return (
                    <span
                      key={index}
                      className={`inline-block transition-all duration-300 ${
                        isVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-4'
                      }`}
                      style={{
                        animationDelay: `${delay}s`,
                        transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                        textShadow: isVisible ? '0 0 2px rgba(255, 255, 255, 0.8), 0 0 4px rgba(255, 255, 255, 0.6), 0 0 6px rgba(255, 255, 255, 0.4), 0 0 8px rgba(255, 255, 255, 0.2)' : 'none',
                        WebkitTextStroke: isVisible ? '0.5px rgba(255, 255, 255, 0.6)' : 'none',
                        filter: isVisible ? 'drop-shadow(0 0 1px rgba(255, 255, 255, 0.8)) drop-shadow(0 0 2px rgba(255, 255, 255, 0.4))' : 'none',
                      }}
                    >
                      {isSpace ? '\u00A0' : char}
                    </span>
                  );
                })}
                {showCursor && (
                  <span 
                    className="inline-block w-0.5 h-4 sm:h-6 lg:h-8 bg-white/80 animate-pulse ml-1" 
                    style={{
                      boxShadow: '0 0 2px rgba(255, 255, 255, 0.8), 0 0 4px rgba(255, 255, 255, 0.6), 0 0 6px rgba(255, 255, 255, 0.4)',
                      filter: 'drop-shadow(0 0 1px rgba(255, 255, 255, 0.8)) drop-shadow(0 0 2px rgba(255, 255, 255, 0.4))',
                    }}
                  />
                )}
              </div>
            </div>
            
            {/* Technology Tags - MOBILE RESPONSIVE STACKING */}
            <div className="flex flex-col sm:flex-row justify-center items-center gap-3 sm:gap-4">
              <div className="flex flex-wrap justify-center gap-2 sm:gap-3 lg:gap-4">
                <a 
                  href="/services/machine-learning" 
                  className="px-3 sm:px-4 md:px-6 py-2 sm:py-3 bg-gradient-to-r from-purple-500/10 to-purple-600/15 backdrop-blur-xl rounded-full border border-purple-300/25 text-white font-semibold hover:from-purple-500/20 hover:to-purple-600/25 hover:border-purple-300/40 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-purple-500/20 text-xs sm:text-sm md:text-base min-h-[44px] flex items-center"
                >
                  Machine Learning
                </a>
                <a 
                  href="/services/natural-language-processing" 
                  className="px-3 sm:px-4 md:px-6 py-2 sm:py-3 bg-gradient-to-r from-blue-500/10 to-blue-600/15 backdrop-blur-xl rounded-full border border-blue-300/25 text-white font-semibold hover:from-blue-500/20 hover:to-blue-600/25 hover:border-blue-300/40 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-blue-500/20 text-xs sm:text-sm md:text-base min-h-[44px] flex items-center"
                >
                  NLP
                </a>
                <a 
                  href="/services/computer-vision" 
                  className="px-3 sm:px-4 md:px-6 py-2 sm:py-3 bg-gradient-to-r from-green-500/10 to-green-600/15 backdrop-blur-xl rounded-full border border-green-300/25 text-white font-semibold hover:from-green-500/20 hover:to-green-600/25 hover:border-green-300/40 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-green-500/20 text-xs sm:text-sm md:text-base min-h-[44px] flex items-center"
                >
                  Computer Vision
                </a>
                <a 
                  href="/services/cloud-saas" 
                  className="px-3 sm:px-4 md:px-6 py-2 sm:py-3 bg-gradient-to-r from-orange-500/10 to-orange-600/15 backdrop-blur-xl rounded-full border border-orange-300/25 text-white font-semibold hover:from-orange-500/20 hover:to-orange-600/25 hover:border-orange-300/40 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-orange-500/20 text-xs sm:text-sm md:text-base min-h-[44px] flex items-center"
                >
                  Cloud AI
                </a>
              </div>
            </div>
          </div>
          
          {/* CTA Button - MOBILE RESPONSIVE */}
          <div className="flex justify-center mt-6 sm:mt-8">
            <button 
              onClick={() => {
                const servicesSection = document.getElementById('services');
                servicesSection?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="px-6 sm:px-8 md:px-10 py-3 sm:py-4 md:py-5 bg-gradient-to-r from-purple-600/70 via-indigo-600/70 to-blue-600/70 hover:from-purple-700/80 hover:via-indigo-700/80 hover:to-blue-700/80 text-white rounded-full font-bold text-sm sm:text-base md:text-lg transform hover:scale-110 hover:shadow-2xl transition-all duration-300 border border-white/20 backdrop-blur-sm cursor-pointer min-h-[44px] min-w-[44px]"
            >
              Explore AI Solutions
            </button>
          </div>
        </div>
      </div>

      {/* Enhanced Scroll Indicator - MOBILE CENTERED */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 sm:absolute sm:bottom-8 sm:top-auto sm:left-1/2 sm:transform sm:-translate-x-1/2 sm:translate-y-0">
        <div className="flex flex-col items-center space-y-2 sm:space-y-3 text-white/70">
          <span className="text-xs sm:text-sm md:text-base font-medium">Scroll to explore</span>
          <div className="w-6 h-8 sm:w-8 sm:h-12 border-2 border-white/40 rounded-full flex justify-center backdrop-blur-sm bg-white/10">
            <div className="w-1.5 h-3 sm:w-2 sm:h-4 bg-white/80 rounded-full mt-1 sm:mt-2 animate-bounce" />
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes spin {
          from { transform: rotateZ(0deg); }
          to { transform: rotateZ(360deg); }
        }
        @keyframes pulse {
          0%, 100% { opacity: 0.4; transform: scale(1); }
          50% { opacity: 0.9; transform: scale(1.3); }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
      `}</style>
    </section>
  );
}