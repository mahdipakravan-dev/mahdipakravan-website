type NoneToVoidFunction = () => void;

type Case = {
  id: string;
  title: string;
  isDir?: boolean;
  isParent?: boolean;
  isCheckBox?: boolean;
  childs?: Case[];
};

type Project = {
  id: string;
  title: string;
  link: string;
  stack: string;
  sourceCodeUrl: string;
};

type AppStorage = {
  about__version?: number;
};
