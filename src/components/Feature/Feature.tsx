import React from 'react';
import { SFeature, SFeatureButton, SFeatureContent, SFeatureTitle } from './Feature.styled';

type TProps = {
  title: React.ReactNode;
  buttonTitle?: string;
  onClick?: () => void;
};

const Feature: React.FC<TProps> = ({ title, buttonTitle, onClick, children }) => (
  <SFeature>
    <SFeatureTitle>{title}</SFeatureTitle>
    <SFeatureContent>{children}</SFeatureContent>
    {!!buttonTitle && <SFeatureButton onClick={onClick}>{buttonTitle}</SFeatureButton>}
  </SFeature>
);

export default Feature;
