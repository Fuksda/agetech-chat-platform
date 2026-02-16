export interface Company {
  name: string;
  category: string;
  description: string;
  website?: string;
  tags: string[];
}

export interface Category {
  name: string;
  icon: string;
  description: string;
  companies: Company[];
}

export const categories: Category[] = [
  {
    name: "For Caregivers",
    icon: "heart-handshake",
    description:
      "Technology solutions supporting family and professional caregivers with coordination, management, and wellness tools.",
    companies: [
      {
        name: "Carely",
        category: "For Caregivers",
        description:
          "Free app that brings families together around the care of a loved one. Enables organizing, tracking activities, planning visits, and sharing updates within a care circle.",
        website: "https://www.carely.com",
        tags: ["care coordination", "family caregiving", "app"],
      },
      {
        name: "Cariloop",
        category: "For Caregivers",
        description:
          "Employer-sponsored caregiver support platform with dedicated care coaches who help employees manage complex caregiving situations.",
        website: "https://www.cariloop.com",
        tags: ["employer benefits", "care coaching", "caregiver support"],
      },
      {
        name: "Wellthy",
        category: "For Caregivers",
        description:
          "Care coordination platform that pairs families with a dedicated Care Coordinator to help manage complex care logistics.",
        website: "https://www.wellthy.com",
        tags: ["care coordination", "employer benefits", "logistics"],
      },
      {
        name: "CareYaya",
        category: "For Caregivers",
        description:
          "Connects pre-health students as affordable, compassionate caregivers with families needing elder care support. Named a top AgeTech startup by LinkedIn.",
        website: "https://www.careyaya.org",
        tags: ["affordable care", "students", "companionship"],
      },
      {
        name: "Ianacare",
        category: "For Caregivers",
        description:
          "Caregiver support platform that helps family caregivers organize help, manage tasks, and access employer-sponsored caregiver benefits.",
        website: "https://www.ianacare.com",
        tags: ["caregiver support", "task management", "employer benefits"],
      },
      {
        name: "Grayce",
        category: "For Caregivers",
        description:
          "Enterprise caregiver support solution providing expert guidance and personalized care plans for working caregivers.",
        website: "https://www.withgrayce.com",
        tags: ["enterprise", "care planning", "expert guidance"],
      },
      {
        name: "Homethrive",
        category: "For Caregivers",
        description:
          "AI-powered platform providing personalized caregiver support, combining technology with human care guides for family caregivers.",
        website: "https://www.homethrive.com",
        tags: ["AI", "caregiver support", "personalized"],
      },
      {
        name: "Sensi.AI",
        category: "For Caregivers",
        description:
          "AI-powered audio monitoring platform that analyzes sounds in the home to provide insights on the well-being of older adults and quality of care.",
        website: "https://www.sensi.ai",
        tags: ["AI", "audio monitoring", "care quality"],
      },
    ],
  },
  {
    name: "Cognitive Care",
    icon: "brain",
    description:
      "Solutions focused on brain health, dementia care, cognitive assessment, and memory support technologies.",
    companies: [
      {
        name: "Tembo Health",
        category: "Cognitive Care",
        description:
          "Makes dementia care easier by partnering with health plans, providers, and senior living communities, offering concierge care, coaching, and virtual urgent care.",
        website: "https://www.tembohealth.com",
        tags: ["dementia", "virtual care", "coaching"],
      },
      {
        name: "MyndYou",
        category: "Cognitive Care",
        description:
          "AI-based voice analysis platform that monitors cognitive and mental health changes in older adults through regular phone conversations.",
        website: "https://www.myndyou.com",
        tags: ["AI", "voice analysis", "cognitive monitoring"],
      },
      {
        name: "Linus Health",
        category: "Cognitive Care",
        description:
          "Digital cognitive assessment platform using AI and digital biomarkers to detect early signs of cognitive decline and Alzheimer's.",
        website: "https://www.linushealth.com",
        tags: ["cognitive assessment", "AI", "early detection"],
      },
      {
        name: "Appscent Medical",
        category: "Cognitive Care",
        description:
          "FDA-registered medical platform (SCENTIFIC) for sleep, brain health, and diagnostics through AI-driven scent stimulation.",
        website: "https://www.appscentmedical.com",
        tags: ["brain health", "FDA", "scent therapy"],
      },
      {
        name: "MemoryWell",
        category: "Cognitive Care",
        description:
          "Digital life story platform that helps care teams deliver person-centered dementia care through narrative profiles.",
        website: "https://www.memorywell.com",
        tags: ["life stories", "dementia care", "person-centered"],
      },
      {
        name: "Dakim",
        category: "Cognitive Care",
        description:
          "Clinically tested brain fitness software designed specifically for older adults, offering personalized cognitive training exercises.",
        tags: ["brain fitness", "cognitive training", "clinically tested"],
      },
      {
        name: "Neuroglee",
        category: "Cognitive Care",
        description:
          "Digital therapeutics company developing prescription cognitive care programs for people living with mild cognitive impairment and dementia.",
        tags: ["digital therapeutics", "prescription", "MCI"],
      },
    ],
  },
  {
    name: "Finance",
    icon: "wallet",
    description:
      "Financial technology solutions addressing retirement planning, senior-specific banking, wealth management, and longevity fintech.",
    companies: [
      {
        name: "Silvur",
        category: "Finance",
        description:
          "Retirement planning app that helps people approaching and in retirement understand their Social Security benefits and financial options.",
        website: "https://www.silvurapp.com",
        tags: ["retirement planning", "Social Security", "app"],
      },
      {
        name: "Charlie",
        category: "Finance",
        description:
          "Financial guidance platform specifically for retirees, providing personalized answers about Social Security, Medicare, and retirement income.",
        website: "https://www.charlie.com",
        tags: ["retiree finance", "Medicare", "guidance"],
      },
      {
        name: "True Link Financial",
        category: "Finance",
        description:
          "Financial services company protecting vulnerable populations with customizable payment cards and investment management for seniors.",
        website: "https://www.truelinkfinancial.com",
        tags: ["financial protection", "payment cards", "vulnerable adults"],
      },
      {
        name: "Whealthcare Planning",
        category: "Finance",
        description:
          "Combines health and wealth planning, helping financial advisors incorporate clients' health status into financial plans.",
        tags: ["health-wealth", "financial advisors", "planning"],
      },
      {
        name: "Genivity",
        category: "Finance",
        description:
          "Health-wealth planning technology that helps financial advisors estimate and plan for future health-related costs.",
        tags: ["health costs", "financial planning", "longevity"],
      },
    ],
  },
  {
    name: "Scam & Fraud Protection",
    icon: "shield-check",
    description:
      "Technologies that protect older adults from financial exploitation, phone scams, online fraud, and identity theft.",
    companies: [
      {
        name: "TrueLink",
        category: "Scam & Fraud Protection",
        description:
          "Customizable Visa cards that let families set spending controls, block certain merchants, and prevent financial exploitation.",
        website: "https://www.truelinkfinancial.com",
        tags: ["spending controls", "financial protection", "Visa"],
      },
      {
        name: "Carefull",
        category: "Scam & Fraud Protection",
        description:
          "Financial monitoring service that watches for unusual activity, missed bills, and signs of financial exploitation in aging parents' accounts.",
        website: "https://www.getcarefull.com",
        tags: ["financial monitoring", "exploitation detection", "alerts"],
      },
      {
        name: "EverSafe",
        category: "Scam & Fraud Protection",
        description:
          "AI-powered platform monitoring financial accounts for fraud, exploitation, and identity theft targeting older adults.",
        website: "https://www.eversafe.com",
        tags: ["AI", "fraud detection", "identity theft"],
      },
    ],
  },
  {
    name: "Independence",
    icon: "home",
    description:
      "Aging-in-place solutions that help older adults maintain independence through monitoring, home modifications, and support services.",
    companies: [
      {
        name: "Care Daily",
        category: "Independence",
        description:
          "Fully integrated home health AI SaaS (Arti) that works in homes to predict and uncover hidden health problems through connected devices.",
        website: "https://www.caredaily.com",
        tags: ["AI", "home health", "predictive", "IoT"],
      },
      {
        name: "Independa",
        category: "Independence",
        description:
          "Telehealth and remote monitoring platform integrated into LG smart TVs, enabling seniors to stay connected with care providers and family.",
        website: "https://www.independa.com",
        tags: ["telehealth", "smart TV", "remote monitoring"],
      },
      {
        name: "Envoy At Home",
        category: "Independence",
        description:
          "Non-medical home assistance service connecting older adults with vetted helpers for everyday tasks like groceries, errands, and tech help.",
        tags: ["home assistance", "errands", "non-medical"],
      },
      {
        name: "K4Connect",
        category: "Independence",
        description:
          "Smart home and engagement platform designed for senior living communities, integrating IoT devices, communication, and wellness tools.",
        website: "https://www.k4connect.com",
        tags: ["smart home", "senior living", "IoT"],
      },
      {
        name: "Safely You",
        category: "Independence",
        description:
          "AI-enabled video analytics that detect falls in senior living communities and claim to reduce falls by 40%.",
        website: "https://www.safelyyou.com",
        tags: ["AI", "fall detection", "video analytics"],
      },
    ],
  },
  {
    name: "Transportation",
    icon: "car",
    description:
      "Mobility and transportation services designed for older adults, including ride services, autonomous vehicles, and accessible transit.",
    companies: [
      {
        name: "GoGoGrandparent",
        category: "Transportation",
        description:
          "On-demand ride service for older adults that works via phone call (no smartphone needed), connecting to Uber and Lyft with caregiver notifications.",
        website: "https://www.gogograndparent.com",
        tags: ["rides", "phone-based", "accessibility"],
      },
      {
        name: "Onward",
        category: "Transportation",
        description:
          "Ride service providing accompanied transportation for older adults, with trained drivers who assist door-to-door.",
        website: "https://www.rideonward.com",
        tags: ["accompanied rides", "door-to-door", "trained drivers"],
      },
      {
        name: "RideAlong",
        category: "Transportation",
        description:
          "Technology platform helping healthcare organizations coordinate non-emergency medical transportation (NEMT) for patients.",
        tags: ["NEMT", "healthcare", "coordination"],
      },
    ],
  },
  {
    name: "Assistive Tech",
    icon: "accessibility",
    description:
      "Assistive devices and technologies that help older adults with hearing, vision, mobility, and other physical needs.",
    companies: [
      {
        name: "Cadense",
        category: "Assistive Tech",
        description:
          "Adaptive shoes using patented Variable Friction Technology to help people with mobility challenges walk more confidently. MIT-backed and clinically tested.",
        website: "https://www.cadense.com",
        tags: ["mobility", "shoes", "MIT", "clinical"],
      },
      {
        name: "OrCam",
        category: "Assistive Tech",
        description:
          "AI-powered wearable devices that assist people with visual impairments by reading text, recognizing faces, and identifying products.",
        website: "https://www.orcam.com",
        tags: ["vision", "AI", "wearable", "reading"],
      },
      {
        name: "Lotus",
        category: "Assistive Tech",
        description:
          "Wearable rings that control home environments through simple gestures, providing accessibility that travels with the user.",
        tags: ["gesture control", "wearable ring", "smart home"],
      },
      {
        name: "Skip MO/GO",
        category: "Assistive Tech",
        description:
          "Wearable tech for legs that reduces fatigue, supports joints, and gives extra boost for everyday movement. Designed for comfort and daily use.",
        tags: ["mobility", "wearable", "joint support"],
      },
    ],
  },
  {
    name: "Everyday Assistance",
    icon: "hand-helping",
    description:
      "Solutions for daily living tasks including grocery delivery, meal services, home maintenance, and personal assistance.",
    companies: [
      {
        name: "Papa",
        category: "Everyday Assistance",
        description:
          "Connects college students ('Papa Pals') with older adults for companionship, transportation, household help, and tech support.",
        website: "https://www.papa.com",
        tags: ["companionship", "errands", "students"],
      },
      {
        name: "Mon Ami",
        category: "Everyday Assistance",
        description:
          "Technology platform connecting older adults with vetted companions for social visits, errands, and assistance with daily activities.",
        website: "https://www.monami.io",
        tags: ["companionship", "daily activities", "vetted companions"],
      },
      {
        name: "Kindly Care",
        category: "Everyday Assistance",
        description:
          "Platform connecting families directly with experienced caregivers for in-home senior care, offering personalized matching.",
        tags: ["caregiver matching", "in-home care", "personalized"],
      },
    ],
  },
  {
    name: "Wellness",
    icon: "heart-pulse",
    description:
      "Health and wellness platforms focused on chronic disease management, preventive care, nutrition, and mental health for older adults.",
    companies: [
      {
        name: "Hibiscus Health",
        category: "Wellness",
        description:
          "AI-powered facial scanning to identify early signs of diabetes and hypertension, then connects users with dietitians and meal planning.",
        website: "https://www.hibiscushealth.io",
        tags: ["AI", "facial scanning", "diabetes", "nutrition"],
      },
      {
        name: "Livongo",
        category: "Wellness",
        description:
          "Digital health platform for chronic condition management including diabetes, hypertension, and behavioral health, with AI-driven insights.",
        website: "https://www.livongo.com",
        tags: ["chronic conditions", "diabetes", "AI insights"],
      },
      {
        name: "Bold",
        category: "Wellness",
        description:
          "Exercise programs designed specifically for older adults, offering personalized routines based on health conditions and fitness level.",
        website: "https://www.agebold.com",
        tags: ["exercise", "personalized", "fitness"],
      },
    ],
  },
  {
    name: "Fall Prevention & Detection",
    icon: "shield-alert",
    description:
      "Technologies for detecting, preventing, and responding to falls, including sensors, wearables, and AI-powered monitoring.",
    companies: [
      {
        name: "Pontosense",
        category: "Fall Prevention & Detection",
        description:
          "Ambient wireless sensor capturing falls, emergencies, health data, and habits, offering caregivers real-time insights for home safety.",
        website: "https://www.pontosense.com",
        tags: ["wireless sensor", "ambient", "real-time"],
      },
      {
        name: "SafelyYou",
        category: "Fall Prevention & Detection",
        description:
          "AI-enabled video analytics for senior living that detect falls and claim to reduce falls by 40% through proactive insights.",
        website: "https://www.safelyyou.com",
        tags: ["AI", "video analytics", "senior living"],
      },
      {
        name: "VirtuSense",
        category: "Fall Prevention & Detection",
        description:
          "Predictive fall prevention technology using motion sensors and AI to identify fall risk before falls happen.",
        website: "https://www.virtusense.com",
        tags: ["predictive", "motion sensors", "AI"],
      },
      {
        name: "Medical Guardian",
        category: "Fall Prevention & Detection",
        description:
          "Personal emergency response systems (PERS) including wearable medical alert devices with fall detection and GPS tracking.",
        website: "https://www.medicalguardian.com",
        tags: ["PERS", "medical alert", "GPS"],
      },
    ],
  },
  {
    name: "Wearables",
    icon: "watch",
    description:
      "Wearable devices and sensors for health monitoring, activity tracking, vital signs, and emergency response for older adults.",
    companies: [
      {
        name: "CarePredict",
        category: "Wearables",
        description:
          "AI-powered wearable and sensors for senior living that track daily activity patterns and predict health declines before they become emergencies.",
        website: "https://www.carepredict.com",
        tags: ["AI", "activity tracking", "predictive", "senior living"],
      },
      {
        name: "Elemind",
        category: "Wearables",
        description:
          "Wearable neurotech that reads and responds to brainwaves in real time for better sleep. Developed by MIT neuroscientists and clinically validated.",
        website: "https://www.elemindtech.com",
        tags: ["neurotech", "sleep", "brainwaves", "MIT"],
      },
      {
        name: "Osteoboost",
        category: "Wearables",
        description:
          "FDA-approved wearable medical device using precision vibration therapy to treat osteopenia and osteoporosis, strengthening bones non-invasively.",
        website: "https://www.osteoboost.com",
        tags: ["FDA", "osteoporosis", "vibration therapy"],
      },
      {
        name: "BioVitals",
        category: "Wearables",
        description:
          "Continuous vital sign monitoring platform that uses AI to analyze data from wearable sensors and detect health deterioration early.",
        tags: ["vital signs", "AI", "continuous monitoring"],
      },
    ],
  },
  {
    name: "Fitness",
    icon: "dumbbell",
    description:
      "Fitness and physical activity platforms tailored for older adults, including virtual classes, personalized programs, and rehabilitation.",
    companies: [
      {
        name: "Bold",
        category: "Fitness",
        description:
          "Personalized exercise programs for older adults, adapting to health conditions and fitness levels with evidence-based routines.",
        website: "https://www.agebold.com",
        tags: ["exercise", "personalized", "evidence-based"],
      },
      {
        name: "Mighty Health",
        category: "Fitness",
        description:
          "Health and fitness app designed for adults over 50, offering guided exercises, nutrition advice, and health coaching.",
        website: "https://www.mightyhealth.com",
        tags: ["fitness app", "nutrition", "coaching"],
      },
      {
        name: "SilverSneakers",
        category: "Fitness",
        description:
          "Fitness program for Medicare-eligible adults offering gym access, group classes, online workouts, and community events.",
        website: "https://www.silversneakers.com",
        tags: ["Medicare", "gym", "group fitness"],
      },
    ],
  },
  {
    name: "Smart Home",
    icon: "house",
    description:
      "Smart home technologies enabling aging-in-place through automated monitoring, voice control, environmental sensors, and safety systems.",
    companies: [
      {
        name: "K4Connect",
        category: "Smart Home",
        description:
          "Smart home and engagement platform for senior living communities integrating IoT devices, communication tools, and wellness features.",
        website: "https://www.k4connect.com",
        tags: ["IoT", "senior living", "engagement"],
      },
      {
        name: "iGuard Home",
        category: "Smart Home",
        description:
          "24/7 stove monitoring that auto-shuts stoves to prevent fires, plus behavioral monitoring to flag potential health or memory issues.",
        tags: ["stove safety", "fire prevention", "behavioral monitoring"],
      },
      {
        name: "Cherry Home",
        category: "Smart Home",
        description:
          "AI-powered smart home system using cameras and sensors to monitor older adults, detecting falls and unusual behavior patterns.",
        tags: ["AI", "cameras", "behavior monitoring"],
      },
      {
        name: "Alarm.com",
        category: "Smart Home",
        description:
          "Smart home platform with wellness features allowing families to monitor activity patterns of aging loved ones through connected sensors.",
        website: "https://www.alarm.com",
        tags: ["security", "activity monitoring", "connected sensors"],
      },
    ],
  },
  {
    name: "End of Life Planning",
    icon: "scroll-text",
    description:
      "Digital tools for advance care planning, estate management, funeral planning, and end-of-life documentation.",
    companies: [
      {
        name: "Cake",
        category: "End of Life Planning",
        description:
          "End-of-life planning platform helping people explore mortality, deal with grief, and manage wills, estate planning, and final wishes.",
        website: "https://www.joincake.com",
        tags: ["estate planning", "wills", "grief support"],
      },
      {
        name: "Lantern",
        category: "End of Life Planning",
        description:
          "End-of-life planning platform providing step-by-step guidance for pre-planning, caregiving, and post-loss tasks.",
        website: "https://www.lantern.co",
        tags: ["pre-planning", "post-loss", "guidance"],
      },
      {
        name: "Everplans",
        category: "End of Life Planning",
        description:
          "Digital vault for storing and sharing important documents, final wishes, and plans with trusted family members.",
        website: "https://www.everplans.com",
        tags: ["digital vault", "documents", "family sharing"],
      },
    ],
  },
  {
    name: "Tech-Enabled Home Care",
    icon: "stethoscope",
    description:
      "Technology platforms powering home health agencies and enabling tech-driven in-home care delivery and management.",
    companies: [
      {
        name: "Ona Care",
        category: "Tech-Enabled Home Care",
        description:
          "Helps home care agencies build reliable talent pipelines through modern sourcing, AI-assisted screening, and streamlined recruitment.",
        website: "https://www.myonacare.com",
        tags: ["recruitment", "AI screening", "home care agencies"],
      },
      {
        name: "Honor",
        category: "Tech-Enabled Home Care",
        description:
          "Technology-powered home care company combining a care platform with a network of home care agencies to deliver personalized in-home care.",
        website: "https://www.honorcare.com",
        tags: ["home care platform", "care network", "technology"],
      },
      {
        name: "Homage",
        category: "Tech-Enabled Home Care",
        description:
          "Holistic health and caregiving services for seniors in Singapore, using technology for convenient and personalized care with dedicated advisors.",
        website: "https://www.homage.sg",
        tags: ["holistic care", "Singapore", "personalized"],
      },
      {
        name: "Herewith",
        category: "Tech-Enabled Home Care",
        description:
          "Flexible and personalized in-home care services including assistance around the home, companionship, and memory care.",
        website: "https://www.herewith.com",
        tags: ["flexible care", "companionship", "memory care"],
      },
      {
        name: "Amedisys",
        category: "Tech-Enabled Home Care",
        description:
          "One of the largest home health and hospice companies in the US, leveraging technology for clinical decision support and patient monitoring.",
        website: "https://www.amedisys.com",
        tags: ["home health", "hospice", "clinical"],
      },
    ],
  },
  {
    name: "For Healthcare Providers",
    icon: "hospital",
    description:
      "Tools and platforms helping healthcare providers deliver better care for older adult populations.",
    companies: [
      {
        name: "VitalConnect",
        category: "For Healthcare Providers",
        description:
          "Wearable biosensor platform providing continuous, real-time patient monitoring for healthcare providers in hospital and home settings.",
        website: "https://www.vitalconnect.com",
        tags: ["biosensor", "continuous monitoring", "hospital"],
      },
      {
        name: "Current Health",
        category: "For Healthcare Providers",
        description:
          "Remote patient monitoring platform combining wearable sensors with AI analytics to help providers manage patients at home.",
        tags: ["remote monitoring", "AI", "wearable sensors"],
      },
      {
        name: "CarePort",
        category: "For Healthcare Providers",
        description:
          "Care coordination platform helping providers track and manage patient transitions across the care continuum from hospital to home.",
        tags: ["care coordination", "transitions", "hospital-to-home"],
      },
    ],
  },
  {
    name: "Companionship & Communication",
    icon: "message-circle",
    description:
      "Social connectivity solutions combating loneliness and isolation through AI companions, video calling, and social platforms for older adults.",
    companies: [
      {
        name: "ElliQ",
        category: "Companionship & Communication",
        description:
          "AI-powered companion robot by Intuition Robotics providing social interaction, health tips, and entertainment to extend independence.",
        website: "https://www.elliq.com",
        tags: ["AI companion", "robot", "social interaction"],
      },
      {
        name: "GrandPad",
        category: "Companionship & Communication",
        description:
          "Purpose-built tablet for seniors with simplified video calling, photo sharing, and games, designed for people with no tech experience.",
        website: "https://www.grandpad.net",
        tags: ["tablet", "video calling", "simplified tech"],
      },
      {
        name: "Hyodol",
        category: "Companionship & Communication",
        description:
          "AI-powered companion robot from Korea designed to resemble a soft doll, providing emotional support and interaction for older adults.",
        tags: ["AI companion", "robot", "Korea", "emotional support"],
      },
      {
        name: "Rendever",
        category: "Companionship & Communication",
        description:
          "Virtual reality platform for senior living communities, enabling shared experiences like travel, reminiscence, and social activities.",
        website: "https://www.rendever.com",
        tags: ["VR", "senior living", "shared experiences"],
      },
      {
        name: "Stitch",
        category: "Companionship & Communication",
        description:
          "Online community for adults over 50 offering companionship through activities, travel groups, and social connections.",
        website: "https://www.stitch.net",
        tags: ["social network", "activities", "companionship"],
      },
    ],
  },
  {
    name: "Legacy",
    icon: "book-open",
    description:
      "Digital tools for preserving life stories, memories, photos, and family history for future generations.",
    companies: [
      {
        name: "Artifcts",
        category: "Legacy",
        description:
          "Platform for documenting the stories behind personal artifacts and belongings, preserving memories and context for future generations.",
        website: "https://www.artifcts.com",
        tags: ["memory preservation", "artifacts", "storytelling"],
      },
      {
        name: "StoryWorth",
        category: "Legacy",
        description:
          "Service that sends weekly questions to loved ones, compiling their answers into a beautiful bound book of family stories.",
        website: "https://www.storyworth.com",
        tags: ["family stories", "book", "weekly questions"],
      },
      {
        name: "Remento",
        category: "Legacy",
        description:
          "Video storytelling app that guides older adults through recording their life stories with prompts and produces keepsake books.",
        website: "https://www.remento.com",
        tags: ["video stories", "keepsake", "guided prompts"],
      },
    ],
  },
  {
    name: "Housing",
    icon: "building",
    description:
      "Senior housing platforms including senior living marketplaces, co-living solutions, and housing-related technology.",
    companies: [
      {
        name: "Lottie",
        category: "Housing",
        description:
          "Platform revolutionizing senior care by making it easier to find the best care homes and retirement communities in the UK.",
        website: "https://www.lottie.org",
        tags: ["UK", "care homes", "marketplace"],
      },
      {
        name: "Caring.com",
        category: "Housing",
        description:
          "Senior care directory helping families find senior living communities and in-home care across the United States.",
        website: "https://www.caring.com",
        tags: ["directory", "senior living", "US"],
      },
      {
        name: "Silvernest",
        category: "Housing",
        description:
          "Home-sharing platform matching older adults with compatible housemates, enabling aging-in-place while generating rental income.",
        website: "https://www.silvernest.com",
        tags: ["home sharing", "housemates", "rental income"],
      },
    ],
  },
  {
    name: "Tech Training",
    icon: "graduation-cap",
    description:
      "Digital literacy and technology training programs helping older adults learn and adopt new technologies.",
    companies: [
      {
        name: "GetSetUp",
        category: "Tech Training",
        description:
          "Interactive learning platform for older adults offering live classes on technology, health, finance, and social engagement.",
        website: "https://www.getsetup.io",
        tags: ["live classes", "digital literacy", "social"],
      },
      {
        name: "Candoo Tech",
        category: "Tech Training",
        description:
          "Tech support service specifically for older adults, providing patient, personalized help with devices, apps, and digital tools.",
        website: "https://www.candootech.com",
        tags: ["tech support", "personalized", "patient"],
      },
      {
        name: "TechBoomers",
        category: "Tech Training",
        description:
          "Free educational platform teaching older adults how to use popular websites, apps, and technology through easy-to-follow tutorials.",
        website: "https://www.techboomers.com",
        tags: ["free tutorials", "websites", "apps"],
      },
    ],
  },
  {
    name: "For Adult Day",
    icon: "sun",
    description:
      "Technology solutions for adult day care centers, including engagement platforms, management tools, and activity programming.",
    companies: [
      {
        name: "iN2L + LifeBio",
        category: "For Adult Day",
        description:
          "Content and engagement platform for senior care communities providing personalized activities, life stories, and therapeutic content.",
        tags: ["engagement", "activities", "life stories"],
      },
      {
        name: "Linked Senior",
        category: "For Adult Day",
        description:
          "Person-centered engagement platform for senior living and adult day programs, offering evidence-based activities and life enrichment.",
        tags: ["person-centered", "evidence-based", "enrichment"],
      },
    ],
  },
  {
    name: "Robotics",
    icon: "bot",
    description:
      "Robotic solutions for elder care including companion robots, care assistance robots, and autonomous delivery systems.",
    companies: [
      {
        name: "Diligent Robotics",
        category: "Robotics",
        description:
          "Socially-intelligent humanoid robot assistant (Moxi) supporting nurses in 25+ US hospitals by handling routine tasks.",
        website: "https://www.diligentrobots.com",
        tags: ["hospital", "nurse support", "humanoid"],
      },
      {
        name: "Labrador Systems",
        category: "Robotics",
        description:
          "Autonomous assistive robots designed to help older adults and people with disabilities maintain independence at home.",
        website: "https://www.labradorsystems.com",
        tags: ["assistive", "autonomous", "home"],
      },
      {
        name: "Intuition Robotics",
        category: "Robotics",
        description:
          "Creator of ElliQ, a proactive AI companion robot for older adults that initiates conversations and suggests activities.",
        website: "https://www.intuitionrobotics.com",
        tags: ["ElliQ", "AI companion", "proactive"],
      },
    ],
  },
];

export const allCompanies: Company[] = categories.flatMap((cat) =>
  cat.companies
);

export function searchCompanies(query: string): Company[] {
  const q = query.toLowerCase();
  return allCompanies.filter(
    (c) =>
      c.name.toLowerCase().includes(q) ||
      c.description.toLowerCase().includes(q) ||
      c.category.toLowerCase().includes(q) ||
      c.tags.some((t) => t.toLowerCase().includes(q))
  );
}

export function getCompaniesByCategory(categoryName: string): Company[] {
  const cat = categories.find(
    (c) => c.name.toLowerCase() === categoryName.toLowerCase()
  );
  return cat?.companies ?? [];
}

export function getCategoryNames(): string[] {
  return categories.map((c) => c.name);
}
