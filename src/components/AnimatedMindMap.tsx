import { motion, AnimatePresence } from 'motion/react';
import { useState } from 'react';

interface Module {
  id: string;
  title: string;
}

interface Level {
  id: string;
  level?: string;
  title?: string;
  modules: Module[];
}

interface AnimatedMindMapProps {
  title: string;
  data: Level[];
  onModuleClick?: (moduleId: string) => void;
}

export default function AnimatedMindMap({ title, data, onModuleClick }: AnimatedMindMapProps) {
  const [hoveredNode, setHoveredNode] = useState<string | null>(null);
  const [activeLevelId, setActiveLevelId] = useState<string | null>(null);

  // Calculate positions
  const centerX = 400;
  const centerY = 300;
  const levelRadius = 150;
  const moduleRadius = 280;

  // Helper to get coordinates on a circle
  const getCoords = (index: number, total: number, radius: number, offsetAngle = 0) => {
    const angle = (index / total) * 2 * Math.PI + offsetAngle;
    return {
      x: centerX + radius * Math.cos(angle),
      y: centerY + radius * Math.sin(angle),
    };
  };

  const getLevelLabel = (level: Level) => {
    if (level.level) return level.level;
    if (level.title) return level.title;
    return level.id.charAt(0).toUpperCase() + level.id.slice(1);
  };

  return (
    <div className="w-full h-[600px] bg-slate-50 rounded-2xl border border-slate-200 overflow-hidden relative flex items-center justify-center">
      <svg 
        width="800" 
        height="600" 
        viewBox="0 0 800 600" 
        className="w-full h-full cursor-default"
        onClick={() => setActiveLevelId(null)}
      >
        {/* Connections from Center to Levels */}
        {data.map((level, i) => {
          const { x, y } = getCoords(i, data.length, levelRadius, -Math.PI / 2);
          const isActive = activeLevelId === level.id;
          const isDimmed = activeLevelId && !isActive;
          
          return (
            <motion.line
              key={`line-center-${level.id}`}
              x1={centerX}
              y1={centerY}
              x2={x}
              y2={y}
              stroke="#cbd5e1"
              strokeWidth="2"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ 
                pathLength: 1, 
                opacity: isDimmed ? 0.2 : 1 
              }}
              transition={{ duration: 0.5 }}
            />
          );
        })}

        {/* Connections from Levels to Modules */}
        <AnimatePresence>
          {data.map((level, i) => {
            if (activeLevelId !== level.id) return null;

            const levelPos = getCoords(i, data.length, levelRadius, -Math.PI / 2);
            return level.modules.map((module, j) => {
              const anglePerLevel = (2 * Math.PI) / data.length;
              const startAngle = (i * anglePerLevel) - (anglePerLevel / 2) - Math.PI / 2;
              const moduleAngleStep = anglePerLevel / (level.modules.length + 1);
              const moduleAngle = startAngle + (j + 1) * moduleAngleStep;
              
              const moduleX = centerX + moduleRadius * Math.cos(moduleAngle);
              const moduleY = centerY + moduleRadius * Math.sin(moduleAngle);

              return (
                <motion.line
                  key={`line-${level.id}-${module.id}`}
                  x1={levelPos.x}
                  y1={levelPos.y}
                  x2={moduleX}
                  y2={moduleY}
                  stroke="#e2e8f0"
                  strokeWidth="1"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 1 }}
                  exit={{ pathLength: 0, opacity: 0 }}
                  transition={{ duration: 0.3, delay: j * 0.05 }}
                />
              );
            });
          })}
        </AnimatePresence>

        {/* Module Nodes */}
        <AnimatePresence>
          {data.map((level, i) => {
            if (activeLevelId !== level.id) return null;

            return level.modules.map((module, j) => {
              const anglePerLevel = (2 * Math.PI) / data.length;
              const startAngle = (i * anglePerLevel) - (anglePerLevel / 2) - Math.PI / 2;
              const moduleAngleStep = anglePerLevel / (level.modules.length + 1);
              const moduleAngle = startAngle + (j + 1) * moduleAngleStep;
              
              const x = centerX + moduleRadius * Math.cos(moduleAngle);
              const y = centerY + moduleRadius * Math.sin(moduleAngle);

              return (
                <g 
                  key={module.id} 
                  onClick={(e) => {
                    e.stopPropagation();
                    onModuleClick?.(module.id);
                  }}
                  className="cursor-pointer"
                >
                  <motion.circle
                    cx={x}
                    cy={y}
                    r="6"
                    fill={hoveredNode === module.id ? "#4f46e5" : "#94a3b8"}
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0, opacity: 0 }}
                    whileHover={{ scale: 1.5 }}
                    transition={{ duration: 0.3, delay: j * 0.05 }}
                    onMouseEnter={() => setHoveredNode(module.id)}
                    onMouseLeave={() => setHoveredNode(null)}
                  />
                  {hoveredNode === module.id && (
                    <foreignObject x={x - 100} y={y - 60} width="200" height="50" className="pointer-events-none">
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="bg-slate-800 text-white text-xs p-2 rounded shadow-lg text-center"
                      >
                        {module.title}
                      </motion.div>
                    </foreignObject>
                  )}
                </g>
              );
            });
          })}
        </AnimatePresence>

        {/* Level Nodes */}
        {data.map((level, i) => {
          const { x, y } = getCoords(i, data.length, levelRadius, -Math.PI / 2);
          const colors = ['#10b981', '#f59e0b', '#f43f5e']; // emerald, amber, rose
          const isActive = activeLevelId === level.id;
          const isDimmed = activeLevelId && !isActive;
          
          return (
            <g 
              key={level.id} 
              onClick={(e) => {
                e.stopPropagation();
                setActiveLevelId(isActive ? null : level.id);
              }}
              className="cursor-pointer"
            >
              <motion.circle
                cx={x}
                cy={y}
                r={isActive ? 35 : 25}
                fill="white"
                stroke={colors[i % colors.length]}
                strokeWidth={isActive ? 4 : 3}
                initial={{ scale: 0 }}
                animate={{ 
                  scale: 1,
                  opacity: isDimmed ? 0.5 : 1,
                  strokeWidth: isActive ? 4 : 3,
                  r: isActive ? 35 : 25
                }}
                whileHover={{ scale: isActive ? 1.05 : 1.1 }}
                transition={{ type: "spring", stiffness: 260, damping: 20 }}
              />
              <motion.text
                x={x}
                y={y}
                dy=".3em"
                textAnchor="middle"
                className="text-[10px] font-bold fill-slate-700 pointer-events-none"
                initial={{ opacity: 0 }}
                animate={{ opacity: isDimmed ? 0.5 : 1 }}
              >
                {getLevelLabel(level).substring(0, 3).toUpperCase()}
              </motion.text>
              <motion.text
                x={x}
                y={y + (isActive ? 50 : 40)}
                textAnchor="middle"
                className="text-xs font-medium fill-slate-600"
                initial={{ opacity: 0 }}
                animate={{ 
                  opacity: isDimmed ? 0.5 : 1,
                  y: y + (isActive ? 50 : 40)
                }}
              >
                {getLevelLabel(level)}
              </motion.text>
            </g>
          );
        })}

        {/* Center Node */}
        <motion.circle
          cx={centerX}
          cy={centerY}
          r="40"
          fill="#4f46e5"
          initial={{ scale: 0 }}
          animate={{ 
            scale: [1, 1.05, 1],
            boxShadow: "0px 0px 20px rgba(79, 70, 229, 0.5)"
          }}
          transition={{ 
            scale: {
              repeat: Infinity,
              duration: 2,
              ease: "easeInOut"
            }
          }}
          onClick={(e) => {
            e.stopPropagation();
            setActiveLevelId(null);
          }}
          className="cursor-pointer hover:fill-indigo-500"
        />
        <motion.text
          x={centerX}
          y={centerY}
          dy=".3em"
          textAnchor="middle"
          fill="white"
          className="text-sm font-bold pointer-events-none"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          Start
        </motion.text>
      </svg>
      
      <div className="absolute bottom-4 right-4 text-xs text-slate-400">
        {activeLevelId ? "Click background to reset" : "Click a level to explore"}
      </div>
    </div>
  );
}
