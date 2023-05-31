import React, { useMemo } from 'react';
import { observer } from 'mobx-react-lite';

import { useStores } from '@renderer/stores';
import { formatDateTime, formatTimeSpan } from '@renderer/utils';
import { toLocale } from '@utils';

import CircleChartCard from '../components/CircleChartCard';

const Resin = ({ className }) => {
  const { dailyNoteStore } = useStores();
  const {
    dailyNote,
    computedCurrentResin,
    currentTime,
    computedResinRecoveryTime,
  } = dailyNoteStore;

  const countdown = useMemo(() => {
    if (dailyNote.max_resin === computedCurrentResin) {
      return toLocale('home_resin_text_fullrecovery');
    }
    return formatTimeSpan({
      base: currentTime,
      timestamp: computedResinRecoveryTime,
    });
  }, [
    currentTime,
    computedResinRecoveryTime,
    dailyNote.max_resin,
    computedCurrentResin,
  ]);

  const detail = useMemo(() => {
    if (dailyNote.max_resin === computedCurrentResin) {
      return '';
    }
    return toLocale('home_resin_text_recovery_target', {
      time: formatDateTime(computedResinRecoveryTime),
    });
  }, [computedResinRecoveryTime, dailyNote.max_resin, computedCurrentResin]);

  console.log('currentTime', currentTime);

  return (
    <section className={className}>
      <CircleChartCard
        title={toLocale('home_resin_title')}
        max={dailyNote.max_resin}
        value={computedCurrentResin}
        countdown={countdown}
        detail={detail}
      />
    </section>
  );
};

export default observer(Resin);
