import React from 'react';
import { NodeCard } from './NodeCard';
import { NodeSection } from './NodeSection';
import { OperatorSection } from './OperatorSection';
import { Graph } from './Graph';

export const NodeDiagram: React.FC = () => {
  return (
    <div className="flex gap-4 p-4 bg-white">
      {/* Node Card */}
      <NodeCard title="Node">
        <NodeSection>
          <p className="font-bold">Prompt:</p>
          <p className="text-[#8B4513]">You're a helpful assistant...</p>
          <p className="text-[#8B4513]">Let's think step by step...</p>
          <p className="text-[#8B4513]">Reason and act...</p>
          <p className="text-[#8B4513]">Generate answer based on the context...</p>
          <p>Temperature:[0,1]🌡️</p>
        </NodeSection>
        
        <NodeSection>
          <p className="font-bold">Models</p>
          <div className="flex gap-2 mt-2">
            {/* Add model icons here */}
            <span>🔄</span>
            <span>AI</span>
            <span>💎</span>
            <span>🐋</span>
            <span>🚀</span>
          </div>
        </NodeSection>

        <NodeSection>
          <code>
            &lt;thought&gt;...&lt;/thought&gt;<br/>
            &lt;solution&gt;...&lt;/solution&gt;
          </code>
        </NodeSection>
      </NodeCard>

      {/* Operator Card */}
      <NodeCard title="Operator">
        <div className="mb-4">
          <div className="flex gap-2 mb-2">
            <span className="w-4 h-4 rounded-full bg-[#66B2B2]"></span>
            <span>Generate Node</span>
            <span className="w-4 h-4 rounded-full bg-[#9370DB] ml-2"></span>
            <span>Judge Node</span>
          </div>
          <div className="flex gap-2">
            <span className="w-4 h-4 rounded-full bg-[#808080]"></span>
            <span>Ensemble Node</span>
            <span className="w-4 h-4 rounded-full bg-[#90EE90] ml-2"></span>
            <span>Revise Node</span>
          </div>
        </div>

        <OperatorSection title="Self-Consistency Ensemble">
          <svg className="w-full h-[60px]" viewBox="0 0 200 60">
            <circle cx="40" cy="30" r="12" fill="#66B2B2" />
            <circle cx="80" cy="30" r="12" fill="#66B2B2" />
            <circle cx="120" cy="30" r="12" fill="#66B2B2" />
            <text x="160" y="35">...</text>
            <path d="M 160 30 L 180 30" stroke="#000" strokeWidth="2" />
            <circle cx="180" cy="30" r="12" fill="#808080" />
          </svg>
        </OperatorSection>

        <OperatorSection title="Multi-Agent Debate">
          <svg className="w-full h-[80px]" viewBox="0 0 200 80">
            <circle cx="40" cy="30" r="12" fill="#66B2B2" />
            <circle cx="80" cy="30" r="12" fill="#66B2B2" />
            <circle cx="120" cy="30" r="12" fill="#66B2B2" />
            <rect x="60" y="50" width="80" height="20" fill="#D3D3D3" />
            <text x="80" y="65" className="text-sm">History</text>
          </svg>
        </OperatorSection>

        <OperatorSection title="Self Refine">
          <svg className="w-full h-[60px]" viewBox="0 0 200 60">
            <circle cx="40" cy="30" r="12" fill="#66B2B2" />
            <path d="M 52 30 L 78 30" stroke="#000" strokeWidth="2" markerEnd="url(#arrowhead)" />
            <circle cx="90" cy="30" r="12" fill="#808080" />
            <path d="M 102 30 L 128 30" stroke="#000" strokeWidth="2" markerEnd="url(#arrowhead)" />
            <circle cx="140" cy="30" r="12" fill="#90EE90" />
          </svg>
        </OperatorSection>
      </NodeCard>

      {/* Edge Card */}
      <NodeCard title="Edge">
        <NodeSection>
          <Graph type="simple" />
        </NodeSection>

        <NodeSection className="flex items-center justify-center gap-4">
          <img src="/python.png" alt="Python" className="w-8 h-8" />
          <img src="/java.png" alt="Java" className="w-8 h-8" />
          <img src="/cpp.png" alt="C++" className="w-8 h-8" />
          <span>...</span>
          <code>&lt;/&gt; Code</code>
        </NodeSection>

        <NodeSection>
          <Graph type="network" />
        </NodeSection>
      </NodeCard>
    </div>
  );
}