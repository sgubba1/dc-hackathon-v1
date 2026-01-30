interface VerdictPanelProps {
  subject: string;
  legitimacyScore: number;
  verdict: string;
  summary: string;
}

const VerdictPanel = ({ subject, legitimacyScore, verdict, summary }: VerdictPanelProps) => {
  const getVerdictColor = () => {
    if (verdict === 'LEGITIMATE') return 'text-green-400';
    if (verdict === 'SUSPICIOUS') return 'text-yellow-400';
    if (verdict === 'SCAM') return 'text-accent';
    return 'text-muted-foreground';
  };

  const getScoreColor = () => {
    if (legitimacyScore >= 70) return 'bg-green-500';
    if (legitimacyScore >= 40) return 'bg-yellow-500';
    return 'bg-accent';
  };

  return (
    <div className="bg-secondary/80 backdrop-blur-sm rounded-sm border border-border p-4 h-full overflow-hidden flex flex-col">
      <h3 className="font-typewriter text-sm uppercase tracking-wider text-primary mb-4 border-b border-primary/30 pb-2">
        Case Verdict
      </h3>
      
      <div className="flex-1 space-y-6">
        {/* Subject */}
        <div>
          <p className="font-typewriter text-xs text-muted-foreground uppercase">Subject</p>
          <p className="font-serif text-lg text-foreground">{subject}</p>
        </div>

        {/* Legitimacy Score */}
        <div>
          <p className="font-typewriter text-xs text-muted-foreground uppercase mb-2">Legitimacy Score</p>
          <div className="relative h-4 bg-muted rounded-full overflow-hidden">
            <div 
              className={`absolute inset-y-0 left-0 ${getScoreColor()} transition-all duration-1000`}
              style={{ width: `${legitimacyScore}%` }}
            />
          </div>
          <p className="font-typewriter text-2xl text-foreground mt-1">{legitimacyScore}%</p>
        </div>

        {/* Verdict */}
        <div>
          <p className="font-typewriter text-xs text-muted-foreground uppercase">Verdict</p>
          <p className={`font-typewriter text-xl uppercase ${getVerdictColor()}`}>
            {verdict}
          </p>
        </div>

        {/* Summary */}
        <div className="flex-1">
          <p className="font-typewriter text-xs text-muted-foreground uppercase mb-2">Summary</p>
          <p className="font-serif text-sm text-foreground/80 leading-relaxed">
            {summary}
          </p>
        </div>
      </div>
    </div>
  );
};

export default VerdictPanel;
