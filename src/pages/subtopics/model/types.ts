import type { TrainerType } from './trainers-config';

export type Subtopic = {
  id: string;
  title: string;
  description: string;
  trainers: SubtopicTrainer[];
};

export type SubtopicTrainer = {
  type: TrainerType;
  isCompleted: boolean;
};
