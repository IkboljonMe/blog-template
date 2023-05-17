// Sidebar
export const sidebar = {
  hidden: { x: "-100%", opacity: 0 },
  visible: { x: 0, opacity: 1, transition: { duration: 0.8, type: "tween" } },
};

// Home Section
export const container = {
  hidden: { y: "100%" },
  visible: {
    y: 0,
    transition: {
      delay: 1.5,
      duration: 1,
    },
  },
};

// Icons
export const icon = {
  hover: {
    rotate: [0, 90, -90, 0],
    transition: { duration: 2 },
    cursor: "pointer",
  },
};

export const iconNode = {
  hover: {
    rotate: [0, 10, -10, 0],
    scale: 1.5,
    transition: { duration: 1, type: "keyframes", ease: "easeInOut" },
    cursor: "pointer",
  },
};

// Section title
export const title = {
  hidden: { x: "-100%" },
  visible: {
    x: 0,
  },
};

// About section
export const mainImg = {
  hidden: { scale: 0 },
  visible: {
    rotate: 0,
    scale: 1,
    transition: { delay: 0.5, type: "spring", stiffness: 260, damping: 20 },
  },
  hover: { scale: 1.1 },
  tap: { scale: 0.9 },
};

export const textAnim = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.5, delay: 0.5 } },
};

export const resumeBtn = {
  hidden: { scale: 0, opacity: 0 },
  visible: { scale: 1, opacity: 1, rotate: [0, 20, 0] },
};

// Tabs motion
export const tabContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.5, delay: 0.5 } },
  exit: { y: -10, opacity: 0 },
};

export const tabContent = {
  hidden: { y: 10, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.2 } },
  exit: { y: -10, opacity: 0 },
};

// Card motion
export const card = {
  hidden: { scale: 0, opacity: 0 },
  visible: { scale: 1, opacity: 1, transition: { duration: 1 } },
};

// Overlay & Modal motions
export const overlay = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

export const modal = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.5, delayChildren: 0.2 },
  },
};

export const imageVariants = {
  hidden: { opacity: 0, y: "-10vh" },
  visible: { opacity: 1, y: "0vh" },
};

export const content = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
};

export const text = {
  hidden: { opacity: 0, x: "10%" },
  visible: { opacity: 1, x: 0 },
};

// Contact
export const emoji = {
  hidden: { scale: 1 },
  visible: {
    scale: 1.5,
    rotate: [30, -30, 90, 0],
    transition: { type: "keyframes", duration: 0.5, delay: 1 },
  },
};
