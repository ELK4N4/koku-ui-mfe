import React, { useLayoutEffect, useRef } from 'react';

export interface ChromeComponentProps {
  chrome: {
    isOrgAdmin?: boolean;
  };
}

export const withChrome = Component => {
  const ComponentWithChromeProp: React.FC<any> = props => {
    const isMounted = useRef(false);
    useLayoutEffect(() => {
      isMounted.current = true;
      return () => {
        isMounted.current = false;
      };
    }, []);

    return <Component {...props} />;
  };

  return ComponentWithChromeProp;
};
