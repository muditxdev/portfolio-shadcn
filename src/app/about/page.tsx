'use client';
import TextReveal from '@/components/motion/text-reveal';

import React, { useRef } from 'react';
import { ArrowUpRightIcon, ChevronDown, MailIcon } from 'lucide-react';
import { Button, buttonVariants } from '@/components/ui/button';

import SkillCard from '@/app/about/_components/skill-card';
import { skills } from '@/components/sections/skills/config';
import { Footer } from '@/components/sections';
import ContactForm from '@/components/sections/contact/cozy/contact-form';
import { contact } from '@/components/sections/contact/config';

import Link from '@/components/motion/link';
import { cn } from '@/lib/utils';
import { Separator } from '@/components/ui/separator';
import { motion, useScroll, useTransform } from 'motion/react';
import { experiences } from '@/components/sections/experience/config';
import ExperienceCard from '@/components/sections/experience/cozy/experience-card';
import TechnologyCard from '@/components/sections/technologies/modern/technology-card';
import { technologies } from '@/components/sections/technologies/config';
import ImageTrail from '@/components/motion/motion-trail';
import { exampleImages } from '@/lib/example-images';
import Image from 'next/image';

export default function About() {
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const heroRef = useRef<HTMLDivElement>(null);
  const testimonialsRef = useRef<HTMLDivElement>(null);

  return (
    <main className="flex-1 px-4 sm:px-8 md:px-12 lg:px-16 2xl:px-24">
      <section className="relative -mx-4 flex h-[calc(100svh-(--spacing(14)))] items-center justify-center overflow-hidden pb-12 sm:-mx-8 md:-mx-12 lg:-mx-16 2xl:-mx-24">
        <div className="absolute top-0 left-0 z-0" ref={heroRef}>
          <ImageTrail containerRef={heroRef}>
            {exampleImages.map((image, index) => (
              <div
                key={`image_${index}`}
                className="relative flex h-24 w-24 overflow-hidden"
              >
                <Image
                  src={image}
                  alt="image"
                  loading="lazy"
                  fill
                  className="absolute inset-0 object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
            ))}
          </ImageTrail>
        </div>
        <div className="relative container mx-auto flex flex-col items-center px-4">
          <TextReveal
            as="h1"
            className="leading-wide tracking-relaxed z-20 text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl"
          >
            Tech
          </TextReveal>
          <TextReveal
            as="h1"
            className="leading-wide tracking-relaxed z-20 text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl"
          >
            Enthusiast
          </TextReveal>
          <motion.div
            className="mt-8"
            style={{ opacity }}
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <ChevronDown className="h-8 w-8" />
          </motion.div>
        </div>
      </section>

      <Separator />
      <section className="py-12">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-5 md:gap-8">
          <div className="col-span-1 md:col-span-2">
            <h2 className="text-xl font-semibold sm:text-2xl">About</h2>
          </div>
          <div className="col-span-1 md:col-span-3">
            <div className="space-y-8">
              <TextReveal
                as="h3"
                className="font-serif text-3xl leading-tight sm:text-4xl md:text-4xl lg:text-5xl xl:text-6xl"
              >
                The Developer Behind the Code
              </TextReveal>
              <TextReveal
                as="p"
                className="text-muted-foreground text-base leading-relaxed sm:text-lg md:text-lg lg:text-xl xl:text-2xl"
              >
              {`  As a BCA graduate from Poddar International College, I've
                transformed my academic foundation into real-world solutions
                through:`}
              </TextReveal>
              <ul className="text-muted-foreground text-base leading-relaxed sm:text-lg md:text-lg lg:text-xl xl:text-2xl">
                <li key="achievement-1">{`🛠️ 5000+ hours of hands-on development experience`}</li>
                <li key="achievement-2">{`🌐 15+ production-grade projects delivered`}</li>
                <li key="achievement-3">
                 {` ⚡ Performance optimization specialist (30-40% load time
                  improvements achieved)`}
                </li>
              </ul>
              <Button asChild variant={'outline'} className="rounded-full px-6">
                <a href="Mudit-Resume.pdf" target="_blank">
                  View Resume <ArrowUpRightIcon className="ml-2 size-5" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Separator />
      <section className="py-12">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-5 md:gap-8">
          <div className="col-span-1 md:col-span-2">
            <h2 className="text-xl font-semibold sm:text-2xl">Skills</h2>
          </div>
          <div className="col-span-1 md:col-span-3">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-1 md:gap-6 xl:grid-cols-2">
              {skills.map((skill, index) => (
                <SkillCard
                  key={`skill_${index}`}
                  index={index + 1}
                  name={skill.name}
                  description={skill.description}
                  thumbnail={skill.thumbnail}
                  className="flex rounded-lg"
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      <Separator />
      <section className="py-12">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-5 md:gap-8">
          <div className="col-span-1 md:col-span-2">
            <h2 className="text-xl font-semibold sm:text-2xl">Technologies</h2>
          </div>
          <div className="col-span-1 md:col-span-3">
            <div
              className="relative h-full w-full cursor-pointer items-center justify-center overflow-hidden"
              ref={testimonialsRef}
            >
              <div className="flex h-full w-full flex-wrap items-center justify-start gap-4">
                {technologies.map((technology, index) => (
                  <React.Fragment key={`tech_fragment_${index}`}>
                    <TechnologyCard
                      key={`technology_${index}`}
                      name={technology.name}
                      containerRef={testimonialsRef}
                    />

                    {index < technologies.length - 1 && (
                      <TechnologyCard
                        key={`technology_sep_${index}`}
                        name={','}
                        containerRef={testimonialsRef}
                      />
                    )}
                  </React.Fragment>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <Separator />
      <section className="py-12">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-5 md:gap-8">
          <div className="col-span-1 md:col-span-2">
            <h2 className="text-xl font-semibold sm:text-2xl">Experience</h2>
          </div>
          <div className="col-span-1 md:col-span-3">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-1 md:gap-6 xl:grid-cols-2">
              {experiences.map((experience, index) => (
                <ExperienceCard
                  key={`experience_${index}`}
                  name={experience.name}
                  description={experience.description}
                  company={experience.company}
                  duration={experience.duration}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      <Separator />
      <section className="py-12">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-5 md:gap-8">
          <div className="col-span-1 md:col-span-2">
            <h2 className="text-xl font-semibold sm:text-2xl">Contact</h2>
            <div className="mt-2 flex flex-col gap-1">
              <Link
                className={cn(
                  buttonVariants({ variant: 'link' }),
                  'h-min w-min p-0 text-sm font-normal sm:text-base md:text-lg'
                )}
                href={`mailto:${contact.email}`}
              >
                <MailIcon className="h-4 w-4" />
                {contact.email}
              </Link>
              {contact.socials.map(({ Icon, name, href }, index) => (
                <Link
                  key={`contact-social_${index}`}
                  target="_blank"
                  href={href}
                  className={cn(
                    buttonVariants({ variant: 'link' }),
                    'h-min w-min gap-1 p-0 text-sm sm:text-base md:text-lg'
                  )}
                >
                  {Icon && <Icon className="h-4 w-4" />}
                  {name}
                </Link>
              ))}
            </div>
          </div>
          <div className="col-span-1 md:col-span-3">
            <ContactForm />
          </div>
        </div>
      </section>
    </main>
  );
}