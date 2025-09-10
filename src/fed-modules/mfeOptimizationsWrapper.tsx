import React from 'react';
import { Provider } from 'react-redux';
import { mfeStore } from 'store';

export interface OptimizationsWrapperOwnProps {
  children?: React.ReactNode;
}

type OptimizationsWrapperProps = OptimizationsWrapperOwnProps;

const MfeOptimizationsWrapper: React.FC<OptimizationsWrapperProps> = ({ children }: OptimizationsWrapperOwnProps) => {
  // Note: className is a workaround for ConsoleDot outputting the app name instead of module name
  return (
    <Provider store={mfeStore as any}>
      <div className="costManagementMfe">{children}</div>
    </Provider>
  );
};

export { MfeOptimizationsWrapper };
