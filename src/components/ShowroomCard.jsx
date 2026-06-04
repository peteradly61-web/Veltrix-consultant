'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import {
  Chart as ChartJS, CategoryScale, LinearScale, BarElement,
  LineElement, PointElement, ArcElement, Tooltip, Legend, Filler,
} from 'chart.js';
import { Bar, Line, Doughnut } from 'react-chartjs-2';
import { ArrowRight, Map, Network, FileBarChart2 } from 'lucide-react';

ChartJS.register(
  CategoryScale, LinearScale, BarElement,
  LineElement, PointElement, ArcElement,
  Tooltip, Legend, Filler
);

const TOOLTIP_STYLE = {
  backgroundColor: 'rgba(8,15,31,0.95)',
  borderColor: 'rgba(45,212,191,0.3)',
  borderWidth: 1,
  titleColor: '#f0f4ff',
  bodyColor: '#8b9ec7',
  padding: 12,
  cornerRadius: 8,
};

const AXIS_STYLE = {
  grid: { color: 'rgba(26,38,71,0.4)', drawBorder: false },
  ticks: { color: '#4a5b82', font: { size: 11, family: 'Inter' } },
  border: { display: false },
};

function MarketEntryChart() {
  return (
    <Bar
      data={{
        labels: ['Vietnam', 'Mexico', 'Poland', 'Morocco', 'Thailand', 'Indonesia'],
        datasets: [{
          label: 'Opportunity Score',
          data: [82, 74, 67, 61, 78, 70],
          backgroundColor: [
            'rgba(45,212,191,0.75)', 'rgba(45,212,191,0.60)',
            'rgba(45,212,191,0.45)', 'rgba(45,212,191,0.35)',
            'rgba(45,212,191,0.65)', 'rgba(45,212,191,0.50)',
          ],
          borderColor: 'rgba(45,212,191,0.3)',
          borderWidth: 1, borderRadius: 6, borderSkipped: false,
        }],
      }}
      options={{
        responsive: true, maintainAspectRatio: false,
        indexAxis: 'y',
        plugins: { legend: { display: false }, tooltip: { ...TOOLTIP_STYLE } },
        scales: {
          x: { ...AXIS_STYLE, max: 100 },
          y: { ...AXIS_STYLE, grid: { display: false } },
        },
        animation: { duration: 1200 },
      }}
    />
  );
}

function SupplyChainChart() {
  return (
    <Doughnut
      data={{
        labels: ['China', 'Taiwan', 'S. Korea', 'Japan', 'Others'],
        datasets: [{
          data: [58, 14, 11, 8, 9],
          backgroundColor: [
            'rgba(248,113,113,0.8)', 'rgba(251,191,36,0.7)',
            'rgba(45,212,191,0.7)', 'rgba(34,211,238,0.6)',
            'rgba(74,222,128,0.5)',
          ],
          borderColor: 'rgba(8,15,31,0.8)',
          borderWidth: 2, hoverOffset: 6,
        }],
      }}
      options={{
        responsive: true, maintainAspectRatio: false, cutout: '65%',
        plugins: {
          legend: {
            display: true, position: 'right',
            labels: { color: '#8b9ec7', font: { size: 10, family: 'Inter' }, boxWidth: 10, padding: 8 },
          },
          tooltip: { ...TOOLTIP_STYLE },
        },
        animation: { duration: 1200 },
      }}
    />
  );
}

function TariffImpactChart() {
  return (
    <Line
      data={{
        labels: ['2024', '2025', 'Scenario A', 'Scenario B', 'Scenario C'],
        datasets: [
          {
            label: 'Baseline ($M)',
            data: [12.4, 12.8, 13.1, 14.6, 16.2],
            borderColor: 'rgba(45,212,191,0.9)',
            backgroundColor: 'rgba(45,212,191,0.08)',
            borderWidth: 2.5, fill: true, tension: 0.4,
            pointBackgroundColor: 'rgba(45,212,191,1)',
            pointBorderColor: 'rgba(8,15,31,1)', pointBorderWidth: 2,
            pointRadius: 5, pointHoverRadius: 7,
          },
          {
            label: 'Optimised ($M)',
            data: [12.4, 12.5, 12.6, 13.0, 13.4],
            borderColor: 'rgba(74,222,128,0.9)',
            backgroundColor: 'rgba(74,222,128,0.05)',
            borderWidth: 2, fill: true, tension: 0.4, borderDash: [5, 4],
            pointBackgroundColor: 'rgba(74,222,128,1)',
            pointBorderColor: 'rgba(8,15,31,1)', pointBorderWidth: 2,
            pointRadius: 4, pointHoverRadius: 6,
          },
        ],
      }}
      options={{
        responsive: true, maintainAspectRatio: false,
        plugins: {
          legend: {
            display: true, position: 'top', align: 'end',
            labels: { color: '#8b9ec7', font: { size: 10, family: 'Inter' }, boxWidth: 16, padding: 8, usePointStyle: true },
          },
          tooltip: { ...TOOLTIP_STYLE },
        },
        scales: {
          x: { ...AXIS_STYLE },
          y: { ...AXIS_STYLE, ticks: { ...AXIS_STYLE.ticks, callback: (v) => `$${v}M` } },
        },
        animation: { duration: 1200 },
      }}
    />
  );
}

function ShowroomCard({ card, index }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });
  return (
    <motion.article
      ref={ref}
      id={`showroom-card-${index}`}
      className="glass-card flex flex-col"
      style={{ padding: '2rem' }}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.15, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="flex items-start justify-between mb-4">
        <div className="w-10 h-10 rounded-xl flex items-center justify-center"
          style={{ background: `rgba(${card.iconRgb},0.12)`, border: `1px solid rgba(${card.iconRgb},0.2)` }}>
          <card.icon size={18} style={{ color: card.iconColor }} />
        </div>
        <span className="metric-badge">{card.metric}</span>
      </div>
      <h3 className="text-lg font-bold text-[var(--text-primary)] mb-1 leading-snug">{card.title}</h3>
      <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-5">{card.description}</p>
      <div className="chart-wrapper flex-grow">{card.chart}</div>
      <div className="mt-4 p-3 rounded-xl text-sm text-[var(--text-secondary)]"
        style={{ background: 'rgba(26,38,71,0.4)' }}>
        <span className="text-[var(--text-primary)] font-semibold">Outcome: </span>
        {card.outcome}
      </div>
      <button id={`card-cta-${index}`}
        className="mt-4 flex items-center gap-2 text-sm font-semibold text-[var(--accent-teal)] hover:text-white transition-colors group">
        View Sample Report
        <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
      </button>
    </motion.article>
  );
}

export default function ShowroomGallery() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  const cards = [
    {
      icon: Map, iconColor: '#2dd4bf', iconRgb: '45,212,191',
      title: 'Market Entry Blueprint',
      description: 'Identifies low-competition markets with tariff-optimised entry points using harmonised import concentration data across 180+ trade zones.',
      metric: 'Tariff Δ: −4.2%',
      outcome: 'Pinpoints 3–5 target markets ranked by opportunity score, regulatory friction, and tariff advantage.',
      chart: <MarketEntryChart />,
    },
    {
      icon: Network, iconColor: '#f87171', iconRgb: '248,113,113',
      title: 'Supply Chain Resilience Audit',
      description: 'Quantifies single-source dependency risk across your supplier network. Translates geographic concentration into a 0–100 exposure score.',
      metric: 'Risk Score: 72/100',
      outcome: 'Surfaces critical concentration clusters and models revenue impact of a 30-, 60-, or 90-day supply disruption.',
      chart: <SupplyChainChart />,
    },
    {
      icon: FileBarChart2, iconColor: '#fbbf24', iconRgb: '251,191,36',
      title: 'Tariff Impact Simulation',
      description: 'Models landed-cost exposure across three policy scenarios — current, escalation, and re-routing — over a 5-year horizon.',
      metric: 'Scenario B: +$1.8M',
      outcome: 'Delivers a scenario comparison table with break-even thresholds, rerouting options, and FTA eligibility flags.',
      chart: <TariffImpactChart />,
    },
  ];

  return (
    <section id="showroom" className="section-wrapper">
      <div className="section-inner">
        <motion.div ref={ref} className="section-header"
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}>
          <span className="label-tag mb-4 inline-flex">The Showroom</span>
          <h2 className="gradient-text-subtle">
            Intelligence products built<br className="hidden sm:block" />
            for operating decisions.
          </h2>
          <p>
            Each service is packaged as a structured deliverable — not a slide deck.
            You receive data, model outputs, and an executive summary you can act on.
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cards.map((card, i) => (
            <ShowroomCard key={card.title} card={card} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
