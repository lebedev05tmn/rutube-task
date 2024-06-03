import { IQuestionResult } from "shared/interfaces/interfaces";

export const getDuplicates = <T extends IQuestionResult>(
  arr: T[],
  id: keyof T
): T[] => {
  const arrCopy: T[] = arr.slice();
  return arrCopy.reduce((o: T[], i: T) => {
    if (!o.find(v => v[id] === i[id])) {
      o.push(i);
    }
    return o;
  }, []);
};

export const getArrWithLastDuplicate = <T extends IQuestionResult>(
  arr: T[],
  id: keyof T
): T[] => {
  const duplicates: T[] = getDuplicates(arr, id);
  const lastOccurrences = new Map<T[keyof T], T>();

  arr.forEach(item => {
    if (duplicates.some(dup => dup[id] === item[id])) {
      lastOccurrences.set(item[id], item);
    }
  });

  const uniqueArr = arr.filter(
    item => !duplicates.some(dup => dup[id] === item[id])
  );
  lastOccurrences.forEach(item => uniqueArr.push(item));

  return uniqueArr;
};
