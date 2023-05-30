const options: Options = {
  fullScreen: { enable: false },
  fps_limit: 60,
  interactivity: {
    detect_on: "canvas",
    events: {
      onclick: { enable: true, mode: "push" },
      onhover: {
        enable: true,
        mode: "attract",
        parallax: { enable: false, force: 60, smooth: 10 },
      },
      resize: true,
    },
    modes: {
      push: { quantity: 4 },
      attract: { distance: 200, duration: 0.4, factor: 5 },
    },
  },
  particles: {
    color: { value: "#000" },
    line_linked: {
      color: "#000",
      distance: 150,
      enable: true,
      opacity: 0.4,
      width: 1,
    },
    move: {
      attract: { enable: false, rotateX: 600, rotateY: 1200 },
      bounce: false,
      direction: "none",
      enable: true,
      out_mode: "out",
      random: false,
      speed: 2,
      straight: false,
    },
    number: { density: { enable: true, value_area: 800 }, value: 80 },
    opacity: {
      anim: { enable: false, opacity_min: 0.1, speed: 1, sync: false },
      random: false,
      value: 0.5,
    },
    shape: {
      character: {
        fill: false,
        font: "Verdana",
        style: "",
        value: "*",
        weight: "400",
      },
      image: {
        height: 100,
        replace_color: true,
        src: "images/github.svg",
        width: 100,
      },
      polygon: { nb_sides: 5 },
      stroke: { color: "#000000", width: 0 },
      type: "circle",
    },
    size: {
      anim: { enable: false, size_min: 0.1, speed: 40, sync: false },
      random: true,
      value: 5,
    },
  },
  polygon: {
    draw: { enable: false, lineColor: "#ffffff", lineWidth: 0.5 },
    move: { radius: 10 },
    scale: 1,
    type: "none",
    url: "",
  },
  retina_detect: true,
};
export default options;

type Options = {
  fullScreen: { enable: boolean };
  fps_limit: number;
  interactivity: {
    detect_on: "canvas";
    events: {
      onclick: { enable: boolean; mode: "push" };
      onhover: {
        enable: boolean;
        mode: "attract";
        parallax: { enable: boolean; force: number; smooth: number };
      };
      resize: boolean;
    };
    modes: {
      push: { quantity: number };
      attract: { distance: number; duration: number; factor: number };
    };
  };
  particles: {
    color: { value: string };
    line_linked: {
      color: string;
      distance: number;
      enable: boolean;
      opacity: number;
      width: number;
    };
    move: {
      attract: { enable: boolean; rotateX: number; rotateY: number };
      bounce: boolean;
      direction: "none";
      enable: boolean;
      out_mode: "out";
      random: boolean;
      speed: number;
      straight: boolean;
    };
    number: { density: { enable: boolean; value_area: number }; value: number };
    opacity: {
      anim: {
        enable: boolean;
        opacity_min: number;
        speed: number;
        sync: boolean;
      };
      random: boolean;
      value: number;
    };
    shape: {
      character: {
        fill: boolean;
        font: string;
        style: string;
        value: string;
        weight: string;
      };
      image: {
        height: number;
        replace_color: boolean;
        src: string;
        width: number;
      };
      polygon: { nb_sides: number };
      stroke: { color: string; width: number };
      type: "circle";
    };
    size: {
      anim: { enable: boolean; size_min: number; speed: number; sync: boolean };
      random: boolean;
      value: number;
    };
  };
  polygon: {
    draw: { enable: boolean; lineColor: string; lineWidth: number };
    move: { radius: number };
    scale: number;
    type: "none";
    url: string;
  };
  retina_detect: boolean;
};
