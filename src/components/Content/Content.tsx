import React from 'react';
import Button from '@/components/Button/Button';
import Text from '@/components/Text/Text';
import { Box, Flex } from 'reflexbox';
import Skills from '@/components/Skills/Skills';
import { SBlock } from './Content.styled';
import projects from './projects.png';

const Content: React.FC = () => (
  <div>
    <Box mt={260} mb={400}>
      <Text.header1 textAlign="center">Наталья Ильина</Text.header1>
      <Text.subheader textAlign="center">Front-end разработчик</Text.subheader>
    </Box>

    <SBlock>
      <Text.header3 textAlign="center" mb={24}>
        “Работай с умом, а не до ночи.”
      </Text.header3>
      <Text.caption textAlign="right" tag="p" mb={20} mr={88}>
        (с) Луций Анней Сенека и позднее Стив Джобс
      </Text.caption>
      <Text.body textAlign="center" withTopDecor>
        Для достижения цели сипользую современные подходы и прогрессивные
        технологии.
        <br /> Легаси код не проблема, но писать новый код на старый лад считаю
        потерей времени
      </Text.body>
    </SBlock>

    <SBlock>
      <Flex justifyContent="space-between" alignItems="center">
        <Box width={526}>
          <Text.header2 mb={48}>Основные навыки</Text.header2>
          <Button>Подробнее</Button>
        </Box>
        <Box pr={40}>
          <Skills />
        </Box>
      </Flex>
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

    <SBlock>
      <Flex justifyContent="space-between" alignItems="center">
        <Box width={526}>
          <Text.header2 mb={48}>Примеры работ</Text.header2>
          <Button>Смотреть код</Button>
        </Box>
        <Box width={705} height={570}>
          <img src={projects} alt="Примеры работ" />
        </Box>
      </Flex>
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

    <SBlock>
      <Box width={526}>
        <Text.header2 mb={48}>Опыт работы</Text.header2>
        <Button>Написать мне</Button>
      </Box>
    </SBlock>
  </div>
);

export default Content;
