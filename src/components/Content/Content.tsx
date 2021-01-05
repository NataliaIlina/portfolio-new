import React from 'react';
import Text from '@/components/Text/Text';
import { Box } from 'reflexbox';
import Skills from '@/components/Skills/Skills';
import Works from '@/components/Works/Works';
import {
  SBlock,
  SFeature,
  SFeatureBlock,
  SFeatureTitle,
  SFeatureButton,
  SMainScreenBlock,
  SQuote,
} from './Content.styled';

const Content: React.FC = () => (
  <div>
    <SMainScreenBlock>
      <Text.header1 textAlign="center">Наталья Ильина</Text.header1>
      <Text.subheader textAlign="center">Front-end разработчик</Text.subheader>
    </SMainScreenBlock>

    <SBlock>
      <Text.header3 textAlign="center" mb={24}>
        “Работай с умом, а не до ночи.”
      </Text.header3>
      <SQuote textAlign="right" tag="p" mb={20}>
        (с) Луций Анней Сенека и позднее Стив Джобс
      </SQuote>
      <Text.body textAlign="center" withTopDecor>
        Для достижения цели сипользую современные подходы и прогрессивные
        технологии.
        <br /> Легаси код не проблема, но писать новый код на старый лад считаю
        потерей времени
      </Text.body>
    </SBlock>

    <SBlock id="skills">
      <SFeature>
        <SFeatureBlock>
          <SFeatureTitle>
            Основные <br /> навыки
          </SFeatureTitle>
          <SFeatureButton>Подробнее</SFeatureButton>
        </SFeatureBlock>

        <Skills />
      </SFeature>
    </SBlock>

    <SBlock>
      <Text.header3 textAlign="center" mb={60}>
        Работа должна быть интересной. Даже легаси код может вдохновлять
      </Text.header3>

      <Text.body textAlign="center" withTopDecor>
        Конечно писать что-то с нуля намного проще, чем править старый код.
        <br />
        Иногда даже быстрее. Но все таки для начала надо попытаться исправить
        то,
        <br /> что не работает, чем построить что-то заново
      </Text.body>
    </SBlock>

    <SBlock id="works">
      <SFeature>
        <SFeatureBlock>
          <SFeatureTitle>
            Примеры <br /> работ
          </SFeatureTitle>
          <SFeatureButton>Смотреть код</SFeatureButton>
        </SFeatureBlock>
        <Box>
          <picture>
            <source srcSet="projects_mobile.png" media="(max-width: 767px)" />
            <source srcSet="projects_tablet.png" media="(max-width: 1023px)" />
            <img src="projects.png" alt="Примеры работ" />
          </picture>
        </Box>
      </SFeature>
    </SBlock>

    <SBlock>
      <Text.header3 textAlign="center" mb={60}>
        Лучше поздно, чем никогда.
      </Text.header3>
      <Text.body textAlign="center" withTopDecor>
        В какой-то момент пришло осознание, что пора менять жизнь. <br /> Выбор
        пал на программирование, из направлений приглянулся frontend. <br /> Так
        в 30+ я сменила профессию, что считаю своим преимуществом
      </Text.body>
    </SBlock>

    <SBlock id="contacts">
      <SFeature style={{ alignItems: 'stretch' }}>
        <SFeatureBlock>
          <SFeatureTitle>
            Опыт <br /> работы
          </SFeatureTitle>
          <SFeatureButton>Написать мне</SFeatureButton>
        </SFeatureBlock>
        <Works />
      </SFeature>
    </SBlock>
  </div>
);

export default Content;
