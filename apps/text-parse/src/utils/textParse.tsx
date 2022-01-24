import { IEntity } from '../interfaces/interfaceEntity';

export const textParse = (entity: IEntity, text: string) => {
  const textArray = text.split(' ');
  const entitys = Object.values(entity);
  let a = 0;

  const mutableText = textArray.map((word) => {
    if (entitys[a].includes(word)) {
      return <b>{word}</b>;
    }

    return word;
  });
  console.log(mutableText);
};
