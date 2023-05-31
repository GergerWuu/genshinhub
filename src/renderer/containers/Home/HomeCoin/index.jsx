import React, { useMemo } from 'react';
import { observer } from 'mobx-react-lite';

import { useStores } from '@renderer/stores';
import { formatDateTime, formatTimeSpan } from '@renderer/utils';
import { toLocale } from '@utils';

import CircleChartCard from '../components/CircleChartCard';

const HomeCoin = ({ className }) => {
  const { dailyNoteStore } = useStores();
  const {
    dailyNote,
    computedCurrentHomeCoin,
    currentTime,
    computeHomeCoinRecoveryTime,
  } = dailyNoteStore;

  const countdown = useMemo(() => {
    if (dailyNote.max_home_coin === computedCurrentHomeCoin) {
      return toLocale('home_homecoin_text_fullrecovery');
    }
    return formatTimeSpan({
      base: currentTime,
      timestamp: computeHomeCoinRecoveryTime,
    });
  }, [
    currentTime,
    computeHomeCoinRecoveryTime,
    dailyNote.max_home_coin,
    computedCurrentHomeCoin,
  ]);

  const detail = useMemo(() => {
    if (dailyNote.max_home_coin === computedCurrentHomeCoin) {
      return '';
    }
    return toLocale('home_homecoin_text_recovery_target', {
      time: formatDateTime(computeHomeCoinRecoveryTime),
    });
  }, [
    computeHomeCoinRecoveryTime,
    dailyNote.max_home_coin,
    computedCurrentHomeCoin,
  ]);

  return (
    <section className={className}>
      <CircleChartCard
        title={toLocale('home_homecoin_title')}
        max={dailyNote.max_home_coin}
        value={computedCurrentHomeCoin}
        countdown={countdown}
        detail={detail}
      />
    </section>
  );
};

export default observer(HomeCoin);
