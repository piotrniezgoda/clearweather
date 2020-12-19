import React from 'react';
import { withKnobs, select } from '@storybook/addon-knobs';
import clouds from 'assets/images/clouds.jpg';
import rain from 'assets/images/rain.jpg';
import clearsky from 'assets/images/clearsky.jpg';
import fog from 'assets/images/fog.jpg';
import snow from 'assets/images/snow.jpg';
import storm from 'assets/images/storm.jpg';
import defaultPhoto from 'assets/images/default.jpg';
import ResoutltTopPanel from './ResoultTopPanel';

export default {
  title: 'ResoutlTopPanel',
  component: ResoutltTopPanel,
  decorators: [withKnobs],
};

// eslint-disable-next-line import/prefer-default-export
export const Primary = () => {
  const label = 'Colors';
  const options = {
    clouds,
    rain,
    clearsky,
    fog,
    snow,
    storm,
    defaultPhoto,
  };
  const defaultValue = options.defaultPhoto;
  const groupId = 'GROUP-ID1';

  const value = select(label, options, defaultValue, groupId);
  return <ResoutltTopPanel weatherTheme={value}>SAVE</ResoutltTopPanel>;
};
