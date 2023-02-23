type NoneToVoidFunction = () => void;

type Case = {
  id: string;
  title: string;
  isDir?: boolean;
  isParent?: boolean;
  isCheckBox?: boolean;
  childs?: Case[];
};
