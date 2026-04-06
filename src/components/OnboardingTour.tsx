import * as Joyride from 'react-joyride';
import type { Step } from 'react-joyride';

const steps: Step[] = [
  {
    target: '.dashboard-header',
    content: 'Welcome to your dashboard! Here you can see your progress, XP, and streak.',
    disableBeacon: true,
  },
  {
    target: '.course-list',
    content: 'Browse our courses and start learning.',
  },
  {
    target: '.leaderboard',
    content: 'See how you rank against other learners.',
  },
];

export default function OnboardingTour() {
  return (
    <Joyride.default
      steps={steps}
      continuous
      showSkipButton
      styles={{
        options: {
          primaryColor: '#4f46e5',
        },
      }}
    />
  );
}
