type NoneToVoidFunction = () => void;

type Case = {
  id: string;
  title: string;
  isDir: boolean;
  isParent?: boolean;
  childs?: Case[];
};
