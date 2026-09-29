export interface TimelineEntry {
  title: string;
  subtitle?: string;
  /** YYYY-MM-DD, YYYY-MM, or YYYY. Omit until the actual date is known. */
  date?: string;
  /** Omit when there is no published page to link to. */
  href?: string;
}

export const publications: TimelineEntry[] = [];

export const researchInterests = "The theoretical foundations of machine learning, with a focus on Transformer architectures, attention mechanisms, and kernel methods and approximation.";

// Education dates represent enrollment, matching the start-date convention.
export const education: TimelineEntry[] = [
  {
    title: "Beijing Normal University at Zhuhai",
    subtitle: "M.S. Candidate in Applied Statistics",
    date: "2025-09",
  },
  {
    title: "Renmin University of China",
    subtitle: "B.S. in Applied Statistics",
    date: "2021-09",
  },
];

// Research dates are start months from cv/src/cv_eng.tex, Research Experience.
export const researchExperience: TimelineEntry[] = [
  {
    title: "Not All Dimensions Are Equal: Outlier-Aware Attention Linearization with Grouped Quadratic Kernels",
    date: "2026-02",
  },
  {
    title: "Smoking Behavior Prediction and Smoking-Cessation Recommendation Modeling",
    date: "2025-11",
  },
  {
    title: "Generative AI for Smoking Cessation: A Three-Arm Randomised Controlled Trial",
    date: "2026-06",
  },
  {
    title: "Financial Factor Modeling and Time-Series Forecasting",
    date: "2024-09",
  },
];
