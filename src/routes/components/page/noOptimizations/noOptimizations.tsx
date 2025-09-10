import { PageSection } from '@patternfly/react-core';
import React from 'react';

import { NoOptimizationsState } from './noOptimizationsState';

interface NoOptimizationsOwnProps {
  title?: string;
}

type NoOptimizationsProps = NoOptimizationsOwnProps;

const NoOptimizations = ({ title }: NoOptimizationsProps) => {
  return (
    <PageSection hasBodyWrapper={false}>
      <NoOptimizationsState />
    </PageSection>
  );
};

export default NoOptimizations;
