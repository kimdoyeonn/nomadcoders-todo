import { useSetRecoilState } from 'recoil';
import { Categories, IToDo, toDoState } from '../atoms';

const ToDo = ({ text, category, id }: IToDo) => {
  const setToDos = useSetRecoilState(toDoState);
  const onClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    const {
      currentTarget: { name },
    } = event;
    setToDos((currentTodos) => {
      const targetIndex = currentTodos.findIndex((toDo) => toDo.id === id);
      const newToDo = { text, id, category: name as Categories };
      const newToDos: IToDo[] = [
        ...currentTodos.slice(0, targetIndex),
        newToDo,
        ...currentTodos.slice(targetIndex + 1),
      ];
      return newToDos;
    });
  };
  return (
    <li>
      <span>{text}</span>
      {category !== Categories.DOING && (
        <button name={Categories.DOING} onClick={onClick}>
          Doing
        </button>
      )}
      {category !== Categories.TO_DO && (
        <button name={Categories.TO_DO} onClick={onClick}>
          To Do
        </button>
      )}
      {category !== Categories.DONE && (
        <button name={Categories.DONE} onClick={onClick}>
          Done
        </button>
      )}
    </li>
  );
};

export default ToDo;
