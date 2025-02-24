import { Skill } from '@/types/skill';

const trimLen: number = -1; // 0 is accordion only, -1 is does not restrict the length

const skills: Skill[] = [
  {
    name: 'React & Next.js',
    // todo: use proper thumbnail pics
    thumbnail: '/images/skills/database-management.jpg',
    description: `Specializing in building scalable applications using React and Next.js with over 2 years of hands-on experience. Proficient in creating reusable components and implementing complex state management solutions. Expert in hooks and performance optimization.`
  },
  {
    name: 'Frontend Architecture',
    thumbnail: '/images/skills/ui-ux-design.jpg',
    description: `Master of modern frontend architectures focusing on scalability and maintainability. Skilled in optimizing application performance through code splitting and lazy loading. Experienced in creating responsive layouts that work seamlessly across all devices.`
  },
  {
    name: 'UI/UX Implementation',
    thumbnail: '/images/skills/database-management.jpg',
    description: `Expert in translating design mockups into pixel-perfect, responsive interfaces using modern CSS frameworks. Proficient in implementing intuitive user experiences with Tailwind CSS and Material UI. Experienced in optimizing for both desktop and mobile.`
  },
  {
    name: 'State Management & Performance',
    thumbnail: '/images/skills/mobile-development.jpg',
    description: `Advanced proficiency in implementing state management solutions using React hooks and context API. Experienced in optimizing application performance through efficient component rendering. Skilled in managing complex application states and data flow patterns.`
  },
  {
    name: 'Version Control & Development Tools',
    thumbnail: '/images/skills/mobile-development.jpg',
    description: `Advanced proficiency in Git version control and collaborative development workflows. Expert in using modern development tools like VS Code for efficient coding.Experienced in working with project management and version control platforms like GitHub. `
  }
];

export { trimLen, skills };
