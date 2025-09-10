import { useUnleashClient } from '@unleash/proxy-client-react';
import { useLayoutEffect } from 'react';
import { useDispatch } from 'react-redux';
import { featureToggleActions } from 'store/featureToggle';

export const enum FeatureToggle {
  boxPlot = 'cost-management.mfe.box-plot', // https://issues.redhat.com/browse/COST-4619
  debug = 'cost-management.mfe.debug',
  projectLink = 'cost-management.mfe.project-link', // https://issues.redhat.com/browse/COST-4527 '
}

const useIsToggleEnabled = (toggle: FeatureToggle) => {
  const client = useUnleashClient();
  return client.isEnabled(toggle);
};

export const useIsDebugToggleEnabled = () => {
  return useIsToggleEnabled(FeatureToggle.debug);
};

export const useIsBoxPlotToggleEnabled = () => {
  return useIsToggleEnabled(FeatureToggle.boxPlot);
};

export const useIsProjectLinkToggleEnabled = () => {
  return useIsToggleEnabled(FeatureToggle.projectLink);
};

// The FeatureToggle component saves feature toggles in store for places where Unleash hooks not available
const useFeatureToggle = () => {
  const dispatch = useDispatch();

  const isDebugToggleEnabled = useIsDebugToggleEnabled();
  const isBoxPlotToggleEnabled = useIsBoxPlotToggleEnabled();
  const isProjectLinkToggleEnabled = useIsProjectLinkToggleEnabled();

  useLayoutEffect(() => {
    // Workaround for code that doesn't use hooks
    dispatch(
      featureToggleActions.setFeatureToggle({
        isDebugToggleEnabled,
        isBoxPlotToggleEnabled,
        isProjectLinkToggleEnabled,
      })
    );
  }, [isDebugToggleEnabled, isBoxPlotToggleEnabled, isProjectLinkToggleEnabled]);
};

export default useFeatureToggle;
