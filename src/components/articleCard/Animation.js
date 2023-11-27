const shareVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      type: "spring",
      duration: 0.3,
      staggerChildren: 0.05,
    },
  },
};

const iconVariants = {
  hidden: {
    opacity: 0,
    scale: 0.1,
  },
  visible: {
    opacity: 1,
    scale: 1,
  },
};

const btnVariants = {
  hidden: {
    fill: "#48556a",
  },

  visible: {
    fill: "#fff",
  },

  bgOpen: {
    backgroundColor: "#6E8098",
  },

  bgClosed: {
    backgroundColor: "#ecf2f8",
  },
};

module.exports = { shareVariants, iconVariants, btnVariants };
