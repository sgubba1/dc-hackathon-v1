import { InvestigationResult } from "@/types/investigation";

interface InvestigateResponse {
  success: boolean;
  data?: InvestigationResult;
  error?: string;
}

// Mock investigation data - frontend only
export async function investigate(subject: string): Promise<InvestigateResponse> {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 3000));

  const mockFindings = [
    {
      id: "1",
      title: `Major News Coverage: ${subject} Under Investigation`,
      source: "Reuters",
      url: "https://reuters.com/example",
      snippet: `Recent reports indicate that ${subject} has been under scrutiny by regulatory bodies. Multiple sources confirm ongoing investigations into business practices and financial disclosures. Industry experts suggest this could have significant implications for stakeholders.`,
      category: "news" as const,
      date: "2024-12-15"
    },
    {
      id: "2",
      title: `Legal Filing: Class Action Against ${subject}`,
      source: "Court Records",
      url: "https://courtlistener.com/example",
      snippet: `A class action lawsuit has been filed against ${subject} alleging misrepresentation and fraud. The plaintiffs claim damages exceeding $50 million. The case is currently pending in federal court with a hearing scheduled for next month.`,
      category: "legal" as const,
      date: "2024-12-10"
    },
    {
      id: "3",
      title: `Social Media Analysis: Public Sentiment on ${subject}`,
      source: "Twitter/X Analysis",
      url: "https://twitter.com/search",
      snippet: `Analysis of over 10,000 social media posts reveals mixed sentiment regarding ${subject}. Approximately 45% of posts express concern or skepticism, while 30% remain neutral. Key topics include transparency, accountability, and past incidents.`,
      category: "social" as const,
      date: "2024-12-18"
    },
    {
      id: "4",
      title: `Financial Report: ${subject} Revenue Analysis`,
      source: "SEC Filings",
      url: "https://sec.gov/example",
      snippet: `Financial disclosures reveal inconsistencies in reported revenue figures for ${subject}. Auditors have flagged several line items for further review. Year-over-year comparisons show unusual patterns that warrant additional investigation.`,
      category: "financial" as const,
      date: "2024-12-05"
    },
    {
      id: "5",
      title: `Background Check: Key Personnel at ${subject}`,
      source: "LinkedIn / Public Records",
      url: "https://linkedin.com/example",
      snippet: `Investigation into key personnel reveals several executives with prior involvement in controversial ventures. Background checks show multiple name changes and business registration discrepancies across state lines.`,
      category: "general" as const,
      date: "2024-12-12"
    }
  ];

  const legitimacyScore = Math.floor(Math.random() * 60) + 20; // Random score 20-80
  
  const getVerdict = (score: number) => {
    if (score >= 70) return "LEGITIMATE";
    if (score >= 40) return "SUSPICIOUS";
    return "SCAM";
  };

  const mockResult: InvestigationResult = {
    subject,
    findings: mockFindings,
    summary: `Our investigation into "${subject}" has uncovered multiple concerning patterns. Analysis of news sources, legal records, social media sentiment, and financial disclosures suggests elevated risk. Key red flags include ongoing regulatory scrutiny, pending litigation, and inconsistencies in public statements. We recommend exercising caution and conducting additional due diligence before any engagement.`,
    legitimacyScore,
    verdict: getVerdict(legitimacyScore),
    agentLog: [
      `[INIT] Starting deep investigation on "${subject}"`,
      "[PLAN] Analyzing subject type...",
      "[PLAN] Subject identified as: Organization/Entity",
      "[PLAN] Generating investigation strategy...",
      "[EXECUTE] Initiating web scraping agents...",
      "[EXECUTE] Searching news archives... Found 12 relevant articles",
      "[EXECUTE] Checking legal databases... Found 3 court filings",
      "[EXECUTE] Analyzing social media sentiment... Processed 10,847 posts",
      "[EXECUTE] Reviewing financial disclosures... Found SEC filings",
      "[EXECUTE] Running background checks on key personnel...",
      "[ANALYZE] Processing collected data...",
      "[ANALYZE] Cross-referencing sources...",
      "[ANALYZE] Calculating legitimacy score...",
      "[ANALYZE] Generating final verdict...",
      `[COMPLETE] Investigation finished. Verdict: ${getVerdict(legitimacyScore)}`
    ]
  };

  return { success: true, data: mockResult };
}
