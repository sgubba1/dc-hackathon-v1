interface AgentLogProps {
  logs: string[];
  isLoading?: boolean;
}

const AgentLog = ({ logs, isLoading }: AgentLogProps) => {
  return (
    <div className="bg-secondary/80 backdrop-blur-sm rounded-sm border border-border p-4 h-full overflow-hidden flex flex-col">
      <h3 className="font-typewriter text-sm uppercase tracking-wider text-primary mb-4 border-b border-primary/30 pb-2">
        Agent Log
      </h3>
      <div className="flex-1 overflow-y-auto space-y-2 font-mono text-xs">
        {logs.map((log, index) => (
          <div 
            key={index}
            className={`${
              log.includes('[INIT]') ? 'text-primary' :
              log.includes('[PLAN]') ? 'text-blue-400' :
              log.includes('[EXECUTE]') ? 'text-green-400' :
              log.includes('[ANALYZE]') ? 'text-yellow-400' :
              log.includes('[RESULT]') ? 'text-accent' :
              log.includes('[VERDICT]') ? 'text-primary font-bold' :
              'text-muted-foreground'
            }`}
          >
            {log}
          </div>
        ))}
        {isLoading && (
          <div className="text-muted-foreground animate-pulse">
            [PROCESSING] Analyzing data...
          </div>
        )}
      </div>
    </div>
  );
};

export default AgentLog;
