import React from 'react';

interface GraphProps {
  type: 'simple' | 'network';
}

export const Graph: React.FC<GraphProps> = ({ type }) => {
  const renderSimpleGraph = () => (
    <svg className="w-full h-[120px]" viewBox="0 0 200 120">
      {/* Generate Nodes */}
      <circle cx="40" cy="60" r="15" fill="#66B2B2" />
      <circle cx="100" cy="30" r="15" fill="#66B2B2" />
      <circle cx="100" cy="90" r="15" fill="#90EE90" />
      <circle cx="160" cy="60" r="15" fill="#9370DB" />
      
      {/* Arrows */}
      <defs>
        <marker
          id="arrowhead"
          markerWidth="10"
          markerHeight="7"
          refX="9"
          refY="3.5"
          orient="auto">
          <polygon points="0 0, 10 3.5, 0 7" fill="#000" />
        </marker>
      </defs>
      
      <path
        d="M 55 60 Q 77.5 45 85 30"
        fill="none"
        stroke="#000"
        strokeWidth="2"
        markerEnd="url(#arrowhead)"
      />
      <path
        d="M 55 60 Q 77.5 75 85 90"
        fill="none"
        stroke="#000"
        strokeWidth="2"
        markerEnd="url(#arrowhead)"
      />
      <path
        d="M 115 30 L 145 60"
        fill="none"
        stroke="#000"
        strokeWidth="2"
        markerEnd="url(#arrowhead)"
      />
      <path
        d="M 115 90 L 145 60"
        fill="none"
        stroke="#000"
        strokeWidth="2"
        markerEnd="url(#arrowhead)"
      />
    </svg>
  );

  const renderNetworkGraph = () => (
    <svg className="w-full h-[120px]" viewBox="0 0 200 120">
      {/* Network nodes */}
      {[0, 1, 2].map((i) => (
        <g key={i}>
          {[0, 1, 2].map((j) => (
            <circle
              key={`${i}-${j}`}
              cx={40 + i * 60}
              cy={30 + j * 30}
              r="12"
              fill="#66B2B2"
            />
          ))}
        </g>
      ))}
      
      {/* Network connections */}
      <g stroke="#000" strokeWidth="1" opacity="0.3">
        {[0, 1, 2].map((i) => (
          <g key={i}>
            {[0, 1, 2].map((j) => (
              <g key={`${i}-${j}`}>
                {[0, 1, 2].map((k) => (
                  [0, 1, 2].map((l) => (
                    <line
                      key={`${i}-${j}-${k}-${l}`}
                      x1={40 + i * 60}
                      y1={30 + j * 30}
                      x2={40 + k * 60}
                      y2={30 + l * 30}
                    />
                  ))
                ))}
              </g>
            ))}
          </g>
        ))}
      </g>
    </svg>
  );

  return type === 'simple' ? renderSimpleGraph() : renderNetworkGraph();
}