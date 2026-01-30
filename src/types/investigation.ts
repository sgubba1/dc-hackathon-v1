export interface Finding {
  id: string;
  title: string;
  source: string;
  url: string;
  snippet: string;
  category: 'news' | 'legal' | 'social' | 'financial' | 'general';
  date?: string;
}

export interface InvestigationResult {
  subject: string;
  findings: Finding[];
  summary: string;
  legitimacyScore: number;
  verdict: string;
  agentLog: string[];
}
