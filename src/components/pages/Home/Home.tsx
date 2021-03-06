import { useState } from "react";
import { DragDropContext, DropResult } from "react-beautiful-dnd";
import { List } from "../../common";
import styles from "./Home.module.scss";

interface HomeProps {}

const INIT_ITEMS = [
  {
    id: "balloon",
    name: "๐ Balloon",
  },
  {
    id: "sparkles",
    name: "โจ Sparkles",
  },
  {
    id: "yarn",
    name: "๐งถ Yarn",
  },
  {
    id: "crown",
    name: "๐ Crown",
  },
  {
    id: "jigsaw",
    name: "๐งฉ Jigsaw",
  },
];

const reorder = (list: any[], startIndex: number, endIndex: number) => {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);

  return result;
};

const Home = ({}: HomeProps) => {
  const [items, setItems] = useState([...INIT_ITEMS]);

  const onDragEnd = (event: DropResult) => {
    const destination = event.destination;
    const source = event.source;
    if (destination) {
      setItems(reorder(items, source.index, destination.index));
    }
  };

  return (
    <div className={styles.root}>
      <DragDropContext onDragEnd={onDragEnd}>
        <div className={styles.container}>
          <List items={items} />
        </div>
      </DragDropContext>
    </div>
  );
};

export default Home;
