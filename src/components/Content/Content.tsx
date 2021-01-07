import React from 'react';
import Text from '@/components/Text/Text';
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
  SFeatureContent,
  SMainTitle,
} from './Content.styled';

const Content: React.FC = () => (
  <div>
    <SMainScreenBlock>
      <SMainTitle textAlign="center">Наталья Ильина</SMainTitle>
      <Text.subheader textAlign="center">Front-end разработчик</Text.subheader>
    </SMainScreenBlock>

    <SBlock>
      <Text.header3 textAlign="center">
        “Работай с умом, а не до ночи.”
        <SQuote textAlign="right">
          (с) Луций Анней Сенека и позднее Стив Джобс
        </SQuote>
      </Text.header3>

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
            <span>Основные</span> <br /> навыки
          </SFeatureTitle>
          <SFeatureButton>Подробнее</SFeatureButton>
        </SFeatureBlock>

        <SFeatureContent>
          <Skills />
        </SFeatureContent>
      </SFeature>
    </SBlock>

    <SBlock>
      <Text.header3 textAlign="center">
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
            <span>Примеры</span> <br /> работ
          </SFeatureTitle>
          <SFeatureButton>Смотреть код</SFeatureButton>
        </SFeatureBlock>
        <SFeatureContent>
          <picture>
            <source srcSet="projects_mobile.png" media="(max-width: 767px)" />
            <source srcSet="projects_tablet.png" media="(max-width: 1023px)" />
            <img src="projects_tablet.png" alt="Примеры работ" />
          </picture>
        </SFeatureContent>
      </SFeature>
    </SBlock>

    <SBlock>
      <Text.header3 textAlign="center">Лучше поздно, чем никогда.</Text.header3>
      <Text.body textAlign="center" withTopDecor>
        В какой-то момент пришло осознание, что пора менять жизнь. <br /> Выбор
        пал на программирование, из направлений приглянулся frontend. <br /> Так
        в 30+ я сменила профессию, что считаю своим преимуществом
      </Text.body>
    </SBlock>

    <SBlock id="contacts">
      <SFeature>
        <SFeatureBlock>
          <SFeatureTitle>
            <span>Опыт</span> <br /> работы
          </SFeatureTitle>
          <SFeatureButton>Написать мне</SFeatureButton>
        </SFeatureBlock>
        <SFeatureContent>
          <Works />
        </SFeatureContent>
      </SFeature>
    </SBlock>
  </div>
);

export default Content;
