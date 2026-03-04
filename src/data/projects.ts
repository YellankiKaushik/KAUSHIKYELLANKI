import youtubeImg from "../assets/logos/youtube.png";
import vaaniplanImg from "../assets/logos/vaaniplan.png";
import gymImg from "../assets/logos/gym.png";
import TabImg from "../assets/logos/tab.png";

export const projects = [
  {
    slug: "youtube-review",

    title: "Integrated Review of YouTube Videos – Sentiment Analysis using AI",

    image: youtubeImg,

    description:
      "Built an AI-powered review intelligence system that transforms thousands of YouTube comments into actionable sentiment insights and summaries.",

    highlights: [
      "Reduced manual review effort by 70% by automating sentiment analysis of large YouTube comment datasets.",
      "Enabled faster content decision-making by generating AI-powered summarized insights from audience feedback.",
    ],

    techStack: [
      "Python",
      "Hugging Face Transformers",
      "OpenAI API",
      "YouTube Data API",
      "NLP",
      "Sentiment Analysis",
    ],

    overview:
      "This system analyzes thousands of YouTube comments automatically and extracts meaningful insights using Natural Language Processing and AI summarization.",

    problem:
      "Popular YouTube videos receive thousands of comments, making it extremely difficult for creators or businesses to manually understand audience sentiment and feedback.",

    solution:
      "Developed an AI pipeline that collects comments via the YouTube Data API, performs sentiment classification using transformer-based NLP models, and generates summarized insights using LLMs.",

    results: [
      "70% reduction in manual review effort",
      "Automated large-scale audience sentiment analysis",
      "Faster decision-making for content and marketing strategies",
    ],

    screenshots: [
      youtubeImg
    ],

    github: "https://github.com/YellankiKaushik/Integrated-Review-YT-Videos",
    live: "",
    medium: "",
  },

  {
    slug: "vaaniplan",

    title: "VaaniPlan — Voice-First AI Daily Planning Assistant",

    image: vaaniplanImg,

    description:
      "A voice-first AI planning assistant that removes the need for manual typing and automatically structures daily tasks using LLM reasoning.",

    highlights: [
      "Reduced daily planning effort by 60–70% through voice-driven AI task generation.",
      "Improved productivity by ~50% by eliminating manual task structuring.",
    ],

    techStack: [
      "FastAPI",
      "LLMs",
      "Web Speech API",
      "AI Assistants",
      "Python",
    ],

    overview:
      "VaaniPlan is a voice-first planning assistant where users simply speak their tasks and the AI intelligently structures them into a daily plan.",

    problem:
      "Most productivity tools require manual typing and task organization, which slows down planning and reduces efficiency.",

    solution:
      "Built a voice interface using the Web Speech API and integrated LLM reasoning to automatically organize spoken tasks into structured daily schedules.",

    results: [
      "60–70% reduction in manual planning effort",
      "Voice-driven productivity workflow",
      "Accepted into the Unleash LLM Innovation Challenge",
    ],

    screenshots: [
      vaaniplanImg
    ],

    github: "",
    live: "https://yellankikaushik.github.io/VaaniPlan/",
    medium: "https://medium.com/@kaushikyellanki/️-vaaniplan-voice-first-ai-daily-planning-assistant-26f7477d35a6",
  },

  {
    slug: "gym-membership",

    title: "Gym Membership Management System",

    image: gymImg,

    description:
      "A web-based system that automates gym membership tracking and expiry notifications.",

    highlights: [
      "Reduced admin workload by 65–70% by automating membership management.",
      "Prevented 30–40% of missed renewals through automated expiry alerts.",
    ],

    techStack: [
      "PHP",
      "MySQL",
      "Web Application",
      "Admin Systems",
    ],

    overview:
      "A lightweight web application designed for small gyms to manage memberships, renewals, and customer records efficiently.",

    problem:
      "Small gyms often rely on manual notebooks or spreadsheets to track memberships, which leads to missed renewals and administrative inefficiencies.",

    solution:
      "Developed a PHP-MySQL web system that tracks member records, membership expiry dates, and automatically alerts administrators.",

    results: [
      "65–70% reduction in manual admin work",
      "Automated membership tracking",
      "Reduced missed renewals by 30–40%",
    ],

    screenshots: [
      gymImg
    ],

    github: "https://github.com/YellankiKaushik/Gym-Membership",
    live: "",
    medium: "",
  },

  {
    slug: "google-product-analysis",

    title: "Public Interest Analysis of Google Products",

    image: TabImg,

    description:
      "An interactive Tableau dashboard that analyzes Google Trends data to reveal product popularity patterns.",

    highlights: [
      "Converted raw Google Trends data into interactive product insights dashboards.",
      "Enabled quick comparison of search interest across multiple Google products.",
    ],

    techStack: [
      "Tableau",
      "Google Trends",
      "Data Visualization",
      "Data Analysis",
    ],

    overview:
      "This project analyzes Google Trends data and visualizes product popularity trends using an interactive Tableau dashboard.",

    problem:
      "Raw search trend data is difficult to interpret without proper visualization tools.",

    solution:
      "Built an interactive Tableau dashboard that visualizes search interest trends and enables comparison across different Google products.",

    results: [
      "Improved visibility into product search trends",
      "Interactive analytics dashboard for quick insights",
    ],

    screenshots: [
      TabImg
    ],

    github: "",
    live: "https://public.tableau.com/app/profile/yellanki.kaushik",
    medium: "",
  },
];