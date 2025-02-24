import { Contact } from '@/types/contact';
import {
  SiGithub,
  SiLinkedin,
  SiX,
  SiYoutube
} from '@icons-pack/react-simple-icons';

const contact: Contact = {
  email: 'mudit.devjpr@gmail.com',
  socials: [
    {
      name: 'Github',
      href: 'https://github.com/muditxdev',
      Icon: SiGithub
    },
    {
      name: 'X',
      href: 'https://x.com/muditxdev',
      Icon: SiX
    },
    {
      name: 'Linkedin',
      href: 'https://linkedin.com/muditxdev',
      Icon: SiLinkedin
    }
  ]
};

export { contact };
