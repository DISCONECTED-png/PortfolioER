import React from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

import nodeimg from "../assets/nodejs.svg";
import reactimg from "../assets/react.svg";
import mongoimg from "../assets/mongodb.svg";
import flutterimg from "../assets/flutter.svg";
import firebaseimg from "../assets/firebase.svg";
import sql from "../assets/sql.svg";
import unreal from "../assets/unreal.svg";

const skillsData = [
  { id: 1, name: "Node JS", jp: "ノード", tag: "Backend", img: nodeimg, size: "large", power: "92%", serial: "SYS-01-ND" },
  { id: 2, name: "React JS", jp: "リアクト", tag: "Frontend", img: reactimg, size: "medium", power: "95%", serial: "SYS-02-RC" },
  { id: 3, name: "MongoDB", jp: "モンゴ", tag: "Database", img: mongoimg, size: "medium", power: "88%", serial: "SYS-03-MG" },
  { id: 4, name: "Flutter", jp: "フラッター", tag: "Mobile", img: flutterimg, size: "tall", power: "96%", serial: "SYS-04-FL" },
  { id: 7, name: "Express JS", jp: "エクスプレス", tag: "Backend", img: "https://www.manektech.com/storage/developer/1646733543.webp", size: "medium", power: "90%", serial: "SYS-05-EX" },
  { id: 6, name: "SQL", jp: "データ", tag: "Database", img: sql, size: "small", power: "85%", serial: "SYS-06-SQ" },
  { id: 5, name: "Firebase", jp: "基盤", tag: "Cloud", img: firebaseimg, size: "medium", power: "94%", serial: "SYS-07-FB" },
  { id: 8, name: "Unreal", jp: "アンリアル", tag: "Game Dev", img: unreal, size: "small", power: "75%", serial: "SYS-08-UR" },
];

// --- THE HOLOGRAPHIC 3D CARD COMPONENT ---
const SkillCard = ({ skill, index }) => {
  // Framer Motion 3D Physics
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 300, damping: 30 });
  const mouseYSpring = useSpring(y, { stiffness: 300, damping: 30 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      className={`manga-panel-card ${skill.size}`}
      initial={{ opacity: 0, scale: 0.8, y: 50 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1, type: "spring", stiffness: 100 }}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* Tactical Corners */}
      <div className="ui-corner tl"></div>
      <div className="ui-corner tr"></div>
      <div className="ui-corner bl"></div>
      <div className="ui-corner br"></div>

      {/* Hover Background FX */}
      <div className="panel-bg-slash"></div>
      <div className="radar-sweep"></div>
      
      {/* Content floats above the card in 3D! */}
      <div className="panel-content" style={{ transform: "translateZ(40px)" }}>
        <div className="panel-top-data">
          <span className="serial-num">[{skill.serial}]</span>
          <div className="barcode"></div>
        </div>

        <div className="panel-header">
          <h4>{skill.name}</h4>
          <span className="panel-jp">{skill.jp}</span>
        </div>
        
        <div className="icon-wrapper">
          <div className="target-lock-ring"></div>
          <div className="icon-manga-frame">
            <img src={skill.img} alt={skill.name} className="tech-icon" />
          </div>
        </div>
        
        <div className="panel-bottom-data">
          <span className="skill-tag">CLASS: {skill.tag}</span>
          <div className="power-meter">
            <span className="power-label blink-fast">SYNC_</span>
            <div className="power-bar-bg">
              <div className="power-bar-fill" style={{ width: skill.power }}></div>
            </div>
            <span className="power-value">{skill.power}</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

// --- MAIN ARSENAL COMPONENT ---
const Skills = () => {
  return (
    <div id="skills" className="manga-grid-section">
      <div className="manga-container">
        
        <div className="section-header">
          <span className="skills-label">CHAPTER 2 / 第2章</span>
          <h2 className="glitch-text" data-text="ARSENAL">ARSENAL</h2>
          <div className="katana-slash-static"></div>
          <p className="manga-subtitle">
            Weaponized tech stack. Hover over modules to initialize <span className="highlight-red">TARGET_LOCK</span> and reveal 3D system specs.
          </p>
        </div>

        {/* 3D Perspective Grid */}
        <div className="manga-panel-grid" style={{ perspective: "1200px" }}>
          {skillsData.map((skill, index) => (
            <SkillCard key={skill.id} skill={skill} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;