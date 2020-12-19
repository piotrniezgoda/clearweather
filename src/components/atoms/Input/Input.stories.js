import React from 'react';
import searchIcon from 'assets/icons/magnifying.svg';
import Input from './Input';

export default {
  title: 'Input',
  component: Input,
};

// eslint-disable-next-line import/prefer-default-export
export const Primary = () => <Input icon={searchIcon} />;
