import { useState } from "react";
import { Finding } from "@/types/investigation";

interface ManilaFolderProps {
  findings: Finding[];
}

const ManilaFolder = ({ findings }: ManilaFolderProps) => {
  const [activeTab, setActiveTab] = useState(0);

  const getCategoryIcon = (category: Finding['category']) => {
    switch (category) {
      case 'news': return '📰';
      case 'legal': return '⚖️';
      case 'social': return '👥';
      case 'financial': return '💰';
      default: return '📄';
    }
  };

  const getCategoryColor = (category: Finding['category']) => {
    switch (category) {
      case 'news': return 'border-blue-400/50';
      case 'legal': return 'border-red-400/50';
      case 'social': return 'border-green-400/50';
      case 'financial': return 'border-yellow-400/50';
      default: return 'border-muted-foreground/50';
    }
  };

  if (findings.length === 0) {
    return (
      <div className="flex items-center justify-center h-full">
        <p className="font-typewriter text-muted-foreground">No findings available</p>
      </div>
    );
  }

  return (
    <div className="relative h-full">
      {/* Manila folder container */}
      <div className="relative h-full">
        {/* Folder back */}
        <div 
          className="absolute inset-0 rounded-t-lg"
          style={{
            background: 'linear-gradient(135deg, hsl(35 50% 65%) 0%, hsl(35 45% 55%) 100%)',
            boxShadow: '0 4px 20px rgba(0,0,0,0.4)',
          }}
        />
        
        {/* Folder tab */}
        <div 
          className="absolute -top-6 left-8 px-6 py-2 rounded-t-md font-typewriter text-sm uppercase tracking-wide"
          style={{
            background: 'linear-gradient(180deg, hsl(35 50% 70%) 0%, hsl(35 50% 65%) 100%)',
            color: 'hsl(30 30% 20%)',
          }}
        >
          Case Files
        </div>

        {/* Paper tabs - stacked */}
        <div className="absolute top-4 right-4 flex gap-1">
          {findings.map((finding, index) => (
            <button
              key={finding.id}
              onClick={() => setActiveTab(index)}
              className={`
                px-3 py-1.5 font-typewriter text-xs uppercase tracking-wide
                transition-all duration-200 rounded-t-sm
                ${index === activeTab 
                  ? 'bg-paper text-ink -translate-y-1 shadow-lg z-10' 
                  : 'bg-paper/80 text-ink/60 hover:bg-paper hover:-translate-y-0.5'
                }
                border-t-2 ${getCategoryColor(finding.category)}
              `}
              style={{ transform: index === activeTab ? 'translateY(-4px)' : undefined }}
            >
              {getCategoryIcon(finding.category)} {index + 1}
            </button>
          ))}
        </div>

        {/* Active paper content */}
        <div className="absolute inset-0 top-12 p-6 overflow-hidden">
          {/* Paper stack effect */}
          <div className="absolute inset-4 bg-paper/90 rounded-sm transform rotate-1" />
          <div className="absolute inset-4 bg-paper/95 rounded-sm transform -rotate-0.5" />
          
          {/* Active paper */}
          <div className="relative h-full paper-texture rounded-sm p-6 overflow-y-auto notepad-shadow">
            {/* Red margin line */}
            <div className="absolute left-8 top-0 bottom-0 w-[2px] bg-accent/30" />
            
            <div className="pl-6 space-y-4">
              {/* Source badge */}
              <div className="flex items-center gap-2">
                <span className="text-2xl">{getCategoryIcon(findings[activeTab].category)}</span>
                <span className="font-typewriter text-xs uppercase bg-ink/10 px-2 py-1 rounded text-ink">
                  {findings[activeTab].source}
                </span>
                {findings[activeTab].date && (
                  <span className="font-typewriter text-xs text-ink/50">
                    {findings[activeTab].date}
                  </span>
                )}
              </div>

              {/* Title */}
              <h2 className="font-typewriter text-xl text-ink leading-tight border-b-2 border-ink/20 pb-3">
                {findings[activeTab].title}
              </h2>

              {/* Content */}
              <div className="font-serif text-ink/80 leading-relaxed">
                <p>{findings[activeTab].snippet}</p>
              </div>

              {/* URL */}
              <div className="pt-4 border-t border-dashed border-ink/20">
                <p className="font-typewriter text-xs text-ink/50 uppercase mb-1">Source URL</p>
                <a 
                  href={findings[activeTab].url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="font-mono text-xs text-primary hover:underline break-all"
                >
                  {findings[activeTab].url}
                </a>
              </div>

              {/* Navigation hint */}
              <div className="pt-6 text-center">
                <p className="font-typewriter text-xs text-ink/40 uppercase">
                  Click tabs above to view other sources ({activeTab + 1} of {findings.length})
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManilaFolder;
