import { useState } from 'react';

import { SubtopicDescription } from './components/subtopic-description';
import { SubtopicsList } from './components/subtopics-list';
import { TrainersList } from './components/trainers-list';
import { MOCK_SUBTOPICS } from './model/mock-subtopics';
import styles from './subtopics-page.module.css';

const subtopics = MOCK_SUBTOPICS;

export const SubtopicsPage = () => {
  const [activeSubtopicId, setActiveSubtopicId] = useState(subtopics[0]?.id);

  const activeSubtopic =
    subtopics.find((subtopic) => subtopic.id === activeSubtopicId) ?? subtopics[0];

  return (
    <div className="container">
      <section className={styles.subtopicsPage}>
        <SubtopicsList
          subtopics={subtopics}
          activeSubtopicId={activeSubtopicId}
          onSelectSubtopic={setActiveSubtopicId}
        />
        <div className={styles.contentWrapper}>
          <SubtopicDescription
            title={activeSubtopic.title}
            description={activeSubtopic.description}
          />
          <TrainersList trainers={activeSubtopic.trainers} />
        </div>
      </section>
    </div>
  );
};
