import React from 'react';
import { motion } from 'framer-motion';
import ResoultTopPanel from 'components/molecules/ResoultTopPanel/ResoultTopPanel';
import StatsList from 'components/molecules/StatsList/StatsList';

const WeatherResoult = () => (
  <motion.div
    exit={{ opacity: 0, height: 0, overflow: 'hidden' }}
    initial={{ opacity: 0, height: 0, overflow: 'hidden' }}
    animate={{ opacity: 1, height: 'auto', overflow: 'visible' }}
  >
    <ResoultTopPanel />
    <StatsList />
  </motion.div>
);

export default WeatherResoult;
