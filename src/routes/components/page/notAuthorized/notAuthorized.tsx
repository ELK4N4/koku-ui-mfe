import { Card, CardBody, PageSection } from '@patternfly/react-core';
import React from 'react';

import { NotAuthorizedState } from './notAuthorizedState';

interface NotAuthorizedOwnProps {
  pathname?: string;
  title?: string;
}

type NotAuthorizedProps = NotAuthorizedOwnProps;

const NotAuthorized = ({ pathname, title }: NotAuthorizedProps) => {
  return (
    <PageSection hasBodyWrapper={false}>
      <Card>
        <CardBody>
          <NotAuthorizedState pathname={pathname} />
        </CardBody>
      </Card>
    </PageSection>
  );
};

export { NotAuthorized };
