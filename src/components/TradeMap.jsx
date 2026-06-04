'use client';

import { useEffect, useRef, useState } from 'react';

const HUBS = [
  { name: 'Shanghai', x: 810, y: 175 },
  { name: 'Rotterdam', x: 490, y: 110 },
  { name: 'New York', x: 260, y: 140 },
  { name: 'São Paulo', x: 340, y: 325 },
  { name: 'Dubai', x: 590, y: 170 },
  { name: 'Singapore', x: 780, y: 250 },
  { name: 'Sydney', x: 880, y: 340 },
  { name: 'Cape Town', x: 520, y: 340 },
  { name: 'Los Angeles', x: 155, y: 165 },
  { name: 'London', x: 470, y: 105 },
  { name: 'Mumbai', x: 665, y: 215 },
  { name: 'Tokyo', x: 870, y: 150 },
];

const CONNECTIONS = [
  [0, 1], [0, 2], [0, 4], [0, 5], [1, 2], [1, 4], [2, 3], [3, 7], [4, 5], [5, 6], [8, 0], [8, 3],
  [9, 2], [9, 4], [10, 1], [10, 5], [11, 8], [11, 2],
];

/* ── Continent Polygon Coordinates (Simplified outlines) ── */
const NORTH_AMERICA = [
  [120,55],[140,50],[180,40],[220,40],[260,50],[280,55],[290,60],[285,70],[270,75],
  [260,80],[265,90],[275,95],[290,100],[300,110],[305,120],[300,130],[290,135],
  [280,140],[275,150],[270,155],[265,160],[255,170],[245,180],[230,185],[220,190],
  [210,195],[195,198],[185,195],[175,190],[165,185],[155,180],[150,175],[148,170],
  [145,168],[140,165],[130,160],[120,155],[115,150],[112,145],[110,140],[105,130],
  [100,120],[95,110],[92,100],[90,90],[92,80],[95,72],[100,65],[110,58],
];

const SOUTH_AMERICA = [
  [300,215],[310,210],[320,210],[330,215],[340,220],[350,230],[355,240],[358,250],
  [360,260],[362,275],[360,290],[358,305],[355,320],[350,335],[345,350],[338,365],
  [330,378],[320,385],[310,388],[300,385],[295,378],[290,370],[288,360],[285,345],
  [283,330],[282,315],[283,300],[285,285],[288,270],[290,260],[292,250],[295,240],
  [298,225],
];

const EUROPE = [
  [440,50],[450,48],[460,50],[475,52],[490,55],[500,58],[510,60],[520,58],
  [530,60],[540,65],[545,70],[548,78],[545,85],[540,90],[535,95],[530,100],
  [525,108],[520,115],[515,120],[510,125],[505,128],[500,130],[495,128],
  [490,125],[485,120],[478,115],[472,110],[468,108],[462,105],[458,100],
  [455,95],[450,90],[448,85],[445,80],[442,72],[440,65],[438,58],
];

const AFRICA = [
  [460,155],[470,150],[480,148],[490,150],[500,152],[510,155],[520,158],
  [530,162],[538,168],[542,175],[545,185],[548,195],[550,208],[552,220],
  [553,235],[552,250],[550,265],[548,280],[545,295],[540,308],[535,320],
  [528,335],[520,345],[510,350],[500,352],[490,348],[482,340],[478,330],
  [475,318],[472,305],[470,290],[468,275],[466,260],[464,245],[462,230],
  [460,215],[458,200],[457,185],[458,170],
];

const ASIA = [
  [540,55],[560,50],[580,48],[600,50],[620,48],[640,50],[660,52],[680,55],
  [700,55],[720,52],[740,50],[760,48],[780,50],[800,52],[820,55],[840,58],
  [855,62],[865,70],[870,80],[872,90],[870,100],[868,110],[865,120],
  [860,130],[855,140],[848,148],[840,155],[832,160],[825,168],[820,175],
  [815,182],[810,190],[800,195],[790,200],[785,210],[780,220],[775,228],
  [770,235],[762,240],[750,238],[740,232],[730,225],[720,220],[710,218],
  [700,215],[690,218],[680,222],[670,228],[660,232],[650,230],[640,225],
  [630,218],[620,212],[610,205],[600,198],[590,192],[580,185],[570,178],
  [560,170],[555,162],[550,155],[548,145],[545,135],[542,125],[540,115],
  [538,105],[536,95],[535,85],[536,72],[538,62],
];

const AUSTRALIA = [
  [820,300],[835,295],[850,292],[865,295],[878,300],[888,308],[895,318],
  [898,330],[895,340],[890,350],[882,358],[872,362],[860,365],[848,362],
  [838,358],[830,350],[825,340],[822,330],[820,318],[818,308],
];

const ALL_CONTINENTS = [
  { points: NORTH_AMERICA, color: '#e8e8ed' },
  { points: SOUTH_AMERICA, color: '#e8e8ed' },
  { points: EUROPE, color: '#e8e8ed' },
  { points: AFRICA, color: '#e8e8ed' },
  { points: ASIA, color: '#e8e8ed' },
  { points: AUSTRALIA, color: '#e8e8ed' },
];

export default function TradeMap() {
  const canvasRef = useRef(null);
  const [hoveredHub, setHoveredHub] = useState(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let time = 0;

    const render = () => {
      time += 0.008;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // 1. Draw Solid Filled Continents
      ALL_CONTINENTS.forEach(({ points, color }) => {
        ctx.beginPath();
        ctx.moveTo(points[0][0], points[0][1]);
        for (let i = 1; i < points.length; i++) {
          ctx.lineTo(points[i][0], points[i][1]);
        }
        ctx.closePath();
        ctx.fillStyle = color;
        ctx.fill();
      });

      // 2. Draw Trade Route Connections (Arcs)
      CONNECTIONS.forEach(([startIdx, endIdx]) => {
        const start = HUBS[startIdx];
        const end = HUBS[endIdx];
        const isRelated = hoveredHub !== null && (startIdx === hoveredHub || endIdx === hoveredHub);

        ctx.beginPath();
        ctx.moveTo(start.x, start.y);
        const midX = (start.x + end.x) / 2;
        const midY = (start.y + end.y) / 2 - Math.abs(start.x - end.x) * 0.12;
        ctx.quadraticCurveTo(midX, midY, end.x, end.y);
        ctx.strokeStyle = isRelated ? '#0071e3' : 'rgba(0, 113, 227, 0.18)';
        ctx.lineWidth = isRelated ? 2.5 : 1;
        ctx.stroke();

        // Animated moving pulses (3 per line)
        for (let i = 0; i < 3; i++) {
          const t = (time + startIdx * 0.1 + i * 0.33) % 1;
          const pos = getQuadraticBezierXYatT(start, { x: midX, y: midY }, end, t);
          ctx.beginPath();
          ctx.arc(pos.x, pos.y, isRelated ? 2.5 : 1.5, 0, Math.PI * 2);
          ctx.fillStyle = isRelated ? '#0071e3' : 'rgba(0, 113, 227, 0.5)';
          ctx.fill();
        }
      });

      // 3. Draw Hubs
      HUBS.forEach((hub, idx) => {
        const isHovered = hoveredHub === idx;

        // Hover glow ring
        if (isHovered) {
          ctx.beginPath();
          ctx.arc(hub.x, hub.y, 14, 0, Math.PI * 2);
          ctx.fillStyle = 'rgba(0, 113, 227, 0.08)';
          ctx.fill();
          ctx.beginPath();
          ctx.arc(hub.x, hub.y, 8, 0, Math.PI * 2);
          ctx.fillStyle = 'rgba(0, 113, 227, 0.12)';
          ctx.fill();
        }

        // Hub dot
        ctx.beginPath();
        ctx.arc(hub.x, hub.y, isHovered ? 4 : 3, 0, Math.PI * 2);
        ctx.fillStyle = isHovered ? '#0071e3' : '#1d1d1f';
        ctx.fill();

        // Hub label on hover
        if (isHovered) {
          const label = hub.name;
          ctx.font = 'bold 11px -apple-system, BlinkMacSystemFont, sans-serif';
          const textWidth = ctx.measureText(label).width;
          
          // Label background
          ctx.fillStyle = '#1d1d1f';
          ctx.beginPath();
          ctx.roundRect(hub.x - textWidth / 2 - 8, hub.y - 28, textWidth + 16, 20, 6);
          ctx.fill();
          
          // Label text
          ctx.fillStyle = '#ffffff';
          ctx.textAlign = 'center';
          ctx.fillText(label, hub.x, hub.y - 14);
        }
      });

      animationFrameId = requestAnimationFrame(render);
    };

    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      const x = (e.clientX - rect.left) * (canvas.width / rect.width);
      const y = (e.clientY - rect.top) * (canvas.height / rect.height);
      let found = null;
      HUBS.forEach((hub, idx) => {
        const dist = Math.sqrt((x - hub.x) ** 2 + (y - hub.y) ** 2);
        if (dist < 15) found = idx;
      });
      setHoveredHub(found);
    };

    canvas.addEventListener('mousemove', handleMouseMove);
    render();
    return () => {
      cancelAnimationFrame(animationFrameId);
      canvas.removeEventListener('mousemove', handleMouseMove);
    };
  }, [hoveredHub]);

  return (
    <div className="relative w-full max-w-5xl mx-auto aspect-[2/1] bg-white rounded-[32px] overflow-hidden border border-gray-100 shadow-sm p-4">
      <canvas ref={canvasRef} width={1000} height={500} className="w-full h-full cursor-crosshair" />
      <div className="absolute bottom-8 left-10 flex items-center gap-4">
        <div className="flex items-center gap-2">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#0071e3] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#0071e3]"></span>
          </span>
          <span className="text-[10px] font-black uppercase tracking-[0.2em] text-[#86868b]">Live Intelligence</span>
        </div>
        <div className="h-4 w-[1px] bg-gray-200" />
        <p className="text-[10px] font-bold text-[#1d1d1f] uppercase tracking-widest">Global Trade Matrix</p>
      </div>
      <div className="absolute top-8 right-10 flex gap-6">
        <div className="text-right">
          <p className="text-[10px] font-bold text-[#86868b] uppercase tracking-tighter">Active Routes</p>
          <p className="text-sm font-bold">12,842</p>
        </div>
        <div className="text-right">
          <p className="text-[10px] font-bold text-[#86868b] uppercase tracking-tighter">Trade Volume</p>
          <p className="text-sm font-bold text-emerald-500">$4.2T</p>
        </div>
      </div>
    </div>
  );
}

function getQuadraticBezierXYatT(start, control, end, t) {
  const x = (1 - t) * (1 - t) * start.x + 2 * (1 - t) * t * control.x + t * t * end.x;
  const y = (1 - t) * (1 - t) * start.y + 2 * (1 - t) * t * control.y + t * t * end.y;
  return { x, y };
}
