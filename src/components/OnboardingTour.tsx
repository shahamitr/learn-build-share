import { Joyride } from 'react-joyride';
import type { Step } from 'react-joyride';

const steps: Step[] = [
  {
    target: '.dashboard-header',
    content: 'Welcome to your dashboard! Here you can see your progress, XP, and streak.',
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
    <Joyride
      steps={steps}
      run={true}
    />
  );
}
