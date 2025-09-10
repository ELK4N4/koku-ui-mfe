import { PageSection } from '@patternfly/react-core';
import React from 'react';

import { WelcomeState } from './welcomeState';

interface WelcomeOwnProps {
  title?: string;
}

const Welcome = ({ title }: WelcomeOwnProps) => {
  return (
    <PageSection hasBodyWrapper={false}>
      <WelcomeState />
    </PageSection>
  );
};

export default Welcome;
