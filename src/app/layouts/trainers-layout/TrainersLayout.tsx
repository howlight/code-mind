import { useParams } from 'react-router-dom';

import type { RouteParams } from '~/types/route-params';

export const TrainersLayout = () => {
  const { widgetType } = useParams<RouteParams>();
  return <section className={widgetType}>Widget Layout (widgetType: {widgetType})</section>;
};
