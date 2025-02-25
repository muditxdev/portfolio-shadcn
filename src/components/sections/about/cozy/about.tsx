import React from 'react';
import MotionWrap from '@/components/motion-wrap';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowUpRightIcon } from 'lucide-react';
import TextReveal from '@/components/motion/text-reveal';

function About() {
  return (
    <MotionWrap className="w-full py-24 lg:py-32" id="about">
      <div className="px-4 md:px-6">
        <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-2">
          <div className="space-y-4">
            <TextReveal
              as="h2"
              className="text-4xl leading-tight font-bold tracking-tighter sm:text-5xl md:text-5xl md:leading-tight lg:text-6xl lg:leading-tight"
            >
              About Me
            </TextReveal>
            <div className="space-y-4">
              <TextReveal
                as="p"
                className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400"
              >
                I'm a passionate Frontend Developer with over 2 years of
                expertise in creating responsive and intuitive web applications.
                Specializing in React and Next.js, I transform complex
                requirements into elegant, user-friendly solutions.
              </TextReveal>
              <div className="flex gap-2">
                <Button asChild variant={'outline'}>
                  <Link href="Mudit-Resume.pdf" target="_blank">
                    View Resume <ArrowUpRightIcon className="ml-2 size-5" />
                  </Link>
                </Button>
                <Button asChild>
                  <Link href="/about">Learn More</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MotionWrap>
  );
}

export default About;
