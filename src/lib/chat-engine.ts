import {
  categories,
  searchCompanies,
  allCompanies,
  type Company,
  type Category,
} from "@/data/companies";

export interface ChatMessage {
  role: "user" | "assistant";
  content: string;
}

const MARKET_MAP_URL =
  "https://thegerontechnologist.com/wp-content/uploads/2025/11/2025-AgeTech-Market-Map-Final-Nov.pdf";

function formatCompanyCard(company: Company): string {
  const websiteLink = company.website
    ? ` | [Website](${company.website})`
    : "";
  return `**${company.name}** (${company.category})${websiteLink}\n${company.description}\nTags: ${company.tags.join(", ")}`;
}

function formatCategoryOverview(category: Category): string {
  const companyList = category.companies
    .map((c) => `- **${c.name}**: ${c.description.slice(0, 100)}...`)
    .join("\n");
  return `### ${category.name}\n${category.description}\n\n${companyList}`;
}

export function generateResponse(userMessage: string): string {
  const msg = userMessage.toLowerCase().trim();

  // Greeting
  if (
    msg.match(
      /^(hi|hello|hey|good morning|good afternoon|good evening|howdy)/
    )
  ) {
    return `Hello! I'm the AgeTech Directory Assistant. I can help you find companies and solutions in the aging technology space.\n\nYou can ask me about:\n- **Specific categories** (e.g., "Show me caregiving companies")\n- **Specific needs** (e.g., "I need fall detection solutions")\n- **Company search** (e.g., "Tell me about ElliQ")\n- **Market overview** (e.g., "What categories are in the market map?")\n\nThe data is sourced from the [2025 AgeTech Market Map](${MARKET_MAP_URL}) by TheGerontechnologist, featuring 300+ companies across 20+ categories.\n\nWhat would you like to know?`;
  }

  // List all categories
  if (
    msg.includes("categories") ||
    msg.includes("market map") ||
    msg.includes("overview") ||
    msg.includes("all categories") ||
    msg.includes("what do you have")
  ) {
    const catList = categories
      .map((c) => `- **${c.name}** (${c.companies.length} companies): ${c.description.slice(0, 80)}...`)
      .join("\n");
    return `## 2025 AgeTech Market Map Categories\n\nThe [2025 AgeTech Market Map](${MARKET_MAP_URL}) by TheGerontechnologist features 300+ companies across these categories:\n\n${catList}\n\nAsk me about any category to see its companies, or search for specific solutions!`;
  }

  // Search for specific company by name
  const exactCompany = allCompanies.find(
    (c) => msg.includes(c.name.toLowerCase())
  );
  if (exactCompany) {
    return `## ${exactCompany.name}\n\n${formatCompanyCard(exactCompany)}\n\n---\n*Source: [2025 AgeTech Market Map](${MARKET_MAP_URL})*`;
  }

  // Match category by name
  const matchedCategory = categories.find((cat) => {
    const catLower = cat.name.toLowerCase();
    return (
      msg.includes(catLower) ||
      catLower.split(" ").some((word) => word.length > 3 && msg.includes(word))
    );
  });

  // Keyword-based category matching
  const keywordMap: Record<string, string[]> = {
    "For Caregivers": ["caregiver", "caregiving", "family care", "care support", "caring for"],
    "Cognitive Care": ["cognitive", "dementia", "alzheimer", "brain health", "memory loss", "brain"],
    Finance: ["finance", "financial", "retirement", "banking", "money", "wealth"],
    "Scam & Fraud Protection": ["scam", "fraud", "exploit", "identity theft", "financial abuse"],
    Independence: ["independence", "aging in place", "independent", "live alone", "aging-in-place"],
    Transportation: ["transportation", "ride", "driving", "mobility", "transit", "transport"],
    "Assistive Tech": ["assistive", "hearing", "vision", "wheelchair", "adaptive", "disability"],
    "Everyday Assistance": ["everyday", "daily", "errands", "groceries", "chores", "household"],
    Wellness: ["wellness", "health", "chronic", "nutrition", "mental health", "preventive"],
    "Fall Prevention & Detection": ["fall", "falling", "balance", "fall detection", "fall prevention"],
    Wearables: ["wearable", "watch", "sensor", "biometric", "vital signs", "monitoring device"],
    Fitness: ["fitness", "exercise", "workout", "physical activity", "gym", "strength"],
    "Smart Home": ["smart home", "iot", "voice assistant", "home automation", "sensor", "smart device"],
    "End of Life Planning": ["end of life", "estate", "will", "funeral", "advance directive", "death"],
    "Tech-Enabled Home Care": ["home care", "home health", "in-home", "visiting nurse", "home aide"],
    "For Healthcare Providers": ["healthcare provider", "hospital", "clinic", "physician", "nurse", "clinical"],
    "Companionship & Communication": ["companion", "loneliness", "isolation", "social", "communication", "lonely", "friend"],
    Legacy: ["legacy", "memories", "life story", "family history", "photo", "memoir"],
    Housing: ["housing", "senior living", "care home", "retirement community", "assisted living"],
    "Tech Training": ["tech training", "digital literacy", "learn technology", "computer class", "tech help"],
    "For Adult Day": ["adult day", "day care", "day program", "day center"],
    Robotics: ["robot", "robotic", "autonomous", "humanoid"],
  };

  let keywordCategory: Category | undefined;
  if (!matchedCategory) {
    for (const [catName, keywords] of Object.entries(keywordMap)) {
      if (keywords.some((kw) => msg.includes(kw))) {
        keywordCategory = categories.find((c) => c.name === catName);
        break;
      }
    }
  }

  const resolvedCategory = matchedCategory || keywordCategory;
  if (resolvedCategory) {
    return `${formatCategoryOverview(resolvedCategory)}\n\n---\n*Source: [2025 AgeTech Market Map](${MARKET_MAP_URL}). Browse the Directory tab for full details.*`;
  }

  // General search
  const searchTerms = msg
    .replace(/[?!.,]/g, "")
    .split(" ")
    .filter((w) => w.length > 2 && !["what", "which", "show", "find", "tell", "about", "need", "want", "looking", "for", "the", "are", "can", "help", "with", "any", "some", "that", "this", "how", "who"].includes(w));

  let results: Company[] = [];
  for (const term of searchTerms) {
    results = [...results, ...searchCompanies(term)];
  }
  // Deduplicate
  const uniqueResults = Array.from(
    new Map(results.map((c) => [c.name, c])).values()
  );

  if (uniqueResults.length > 0) {
    const limited = uniqueResults.slice(0, 8);
    const resultText = limited.map((c) => formatCompanyCard(c)).join("\n\n---\n\n");
    const moreText =
      uniqueResults.length > 8
        ? `\n\n*...and ${uniqueResults.length - 8} more. Try a more specific search or browse the Directory tab.*`
        : "";
    return `## Search Results (${uniqueResults.length} companies found)\n\n${resultText}${moreText}\n\n---\n*Source: [2025 AgeTech Market Map](${MARKET_MAP_URL})*`;
  }

  // Fallback
  return `I couldn't find specific companies matching your query. Here are some things you can try:\n\n- **Browse categories**: "Show me all categories"\n- **Search by need**: "I need fall detection solutions" or "companionship technology"\n- **Search by category**: "caregiving companies" or "smart home for seniors"\n- **Search by company**: "Tell me about ElliQ"\n\nThe full market map with 300+ companies is available at the [2025 AgeTech Market Map](${MARKET_MAP_URL}) by TheGerontechnologist.\n\nYou can also browse the **Directory** tab to explore all companies by category.`;
}
