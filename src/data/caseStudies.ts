import { TrendingUp, PhoneMissed, Globe, Activity, DollarSign, Clock } from "lucide-react";

export interface CaseStudy {
    id: string;
    slug: string;
    title: string;
    subtitle: string;
    category: string;
    readTime: string;
    date: string;
    overview: string;
    stats: {
        label: string;
        value: string;
        description: string;
        icon: any;
    }[];
    content: {
        title: string;
        body: string;
        highlight?: string;
    }[];
    regionData?: {
        region: string;
        data: string[];
    }[];
}

export const caseStudies: CaseStudy[] = [
    {
        id: "1",
        slug: "missed-calls-revenue-impact",
        title: "The Silent Revenue Killer: Missed Calls in 2025",
        subtitle: "How unanswered calls cost dental practices $150k+ annually",
        category: "Revenue Impact",
        readTime: "5 min read",
        date: "Dec 2024",
        overview: "Dental practices typically handle dozens of patient calls per day, but many go unanswered. Industry reports indicate roughly one-third of incoming calls go unanswered during business hours, translating directly to significant lost revenue.",
        stats: [
            {
                label: "Missed Calls",
                value: "30-38%",
                description: "Of calls go unanswered during business hours",
                icon: PhoneMissed,
            },
            {
                label: "Annual Loss",
                value: "$150k",
                description: "Average revenue lost per practice annually",
                icon: DollarSign,
            },
            {
                label: "New Patients",
                value: "$850",
                description: "Cost of a single missed new-patient call",
                icon: TrendingUp,
            },
        ],
        content: [
            {
                title: "The Scale of the Problem",
                body: "U.S. practices receive on the order of 40–60 calls per day. Call traffic is heaviest on weekday mornings and around lunch hours. Crucially, roughly 47% of appointment inquiries fall outside normal office times. With few practices staffed overnight or on weekends, these after-hours calls initially go to voicemail, and studies show ~87% of callers simply hang up."
            },
            {
                title: "Business Hours vs. After Hours",
                body: "During office hours, about 30–38% of calls go unanswered. Abandon rates can spike to ~25% during lunch hours. This inefficiency isn't just an annoyance; it's a massive leak in the sales funnel. After hours, virtually 100% of calls are 'missed' until a callback occurs, by which time many patients have moved on to competitors.",
                highlight: "A single missed new-patient call typically costs about $850 in first-year revenue."
            }
        ],
        regionData: [
            {
                region: "United States",
                data: [
                    "Business-hours call volume: 40–60 calls/day",
                    "Missed calls: 300 calls/month (~33% of total)",
                    "Revenue Impact: $100k–$150k lost per year"
                ]
            },
            {
                region: "United Kingdom",
                data: [
                    "Missed calls: ~30-35% before AI implementation",
                    "Revenue Recovery: AI enabled programs recovered ~£138K per clinic",
                    "After-hours: Traditionally uncovered, now 24/7 with AI"
                ]
            },
            {
                region: "Australia",
                data: [
                    "Missed calls: ~33% of potential appointments lost",
                    "Cost: A$160k–A$2m per year depending on practice size",
                    "Impact: Single missed urgent call can forfeit $15k+ lifetime value"
                ]
            },
            {
                region: "Canada",
                data: [
                    "Volume: Similar to US, 40-60 calls/day",
                    "After-hours: ~47% of inquiries occur post 5 PM",
                    "loss: Tens of thousands of dollars annually per clinic"
                ]
            }
        ]
    },
    {
        id: "2",
        slug: "voice-ai-receptionist-adoption",
        title: "Voice AI: The New Standard for Dental Front Desks",
        subtitle: "24/7 coverage, zero wait times, and seamless PMS integration",
        category: "Technology",
        readTime: "4 min read",
        date: "Dec 2024",
        overview: "Dental practices are increasingly deploying AI-powered voice receptionists to handle incoming calls. These systems answer 24/7, triage inquiries, and book appointments directly into the practice management system.",
        stats: [
            {
                label: "Market Growth",
                value: "30%",
                description: "Annual growth projected for AI receptionists",
                icon: TrendingUp,
            },
            {
                label: "Adoption",
                value: "33%",
                description: "US practices using some form of AI",
                icon: Activity,
            },
            {
                label: "Efficiency",
                value: "100%",
                description: "Answer rate achievable with AI agents",
                icon: Globe,
            },
        ],
        content: [
            {
                title: "How It Works",
                body: "AI receptionists answer calls at all hours, handling multiple calls simultaneously. They read the live schedule in the PMS and book appointments in real time. Features include call triage, answering FAQs (hours, insurance), and even managing overflow during peak busy hours so no caller goes unanswered.",
                highlight: "One clinic saw missed calls drop by 80%, freeing staff ~2 hours per day."
            },
            {
                title: "Global Adoption Trends",
                body: "Adoption is accelerating globally. In the US, major DSOs are piloting AI receptionists. The UK saw the launch of its first AI receptionist in late 2025. Australian startups are emphasizing AHPRA and HIPAA compliance, while Canadian adoption follows US trends with bilingual support becoming a key feature."
            }
        ]
    },
    {
        id: "3",
        slug: "ai-receptionist-roi",
        title: "ROI Analysis: The Business Case for AI Receptionists",
        subtitle: "From $0 to $100k+ in recovered revenue",
        category: "Case Study",
        readTime: "6 min read",
        date: "Dec 2024",
        overview: "Unanswered calls represent revenue leakage. Capturing these calls quickly pays off. Implementations of Voice AI have shown rapid payback, often recouping subscription costs via extra bookings in the first month.",
        stats: [
            {
                label: "Revenue Boost",
                value: "$100k",
                description: "Additional monthly revenue for one DSO",
                icon: DollarSign,
            },
            {
                label: "Profit Increase",
                value: "24%",
                description: "Increase in profit reported after adoption",
                icon: TrendingUp,
            },
            {
                label: "Time Saved",
                value: "2 hrs",
                description: "Staff time saved per day on phone tasks",
                icon: Clock,
            },
        ],
        content: [
            {
                title: "Real World Returns",
                body: "In a Unified Dental Care case study, deployment of Arini's AI led to 12% revenue growth—over $100k in additional monthly revenue—by answering every call. This came alongside a 24% profit increase from cost savings and more bookings.",
                highlight: "Recovering even half of missed calls could recoup six-figure losses in new patient revenue."
            },
            {
                title: "SMB vs Enterprise",
                body: "Smaller practices also see massive gains. A mobile dental DSO credited AI with scheduling $56,000 in new appointments in the first month. For SMBs, the typical first-year ROI is on the order of 300%, with a 2-3 month breakeven period."
            }
        ]
    }
];
