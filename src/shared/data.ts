export type Variable = {
  originalName: string,
  name: string,
  type: string,
  optional: boolean,
  defaultValue?: unknown
};

export type Action = {
  actionString: string,
  inputs: Variable[],
  outputs: Variable[]
};

export type Sequence = {
  id: string,
  name: string,
  description: string,
  actions: Action[]
};

export type ActionResult = {
  action: number,
  data: JSON
};

export type Selector = {
  id: string;
  url: string;
  name: string;
  stages: SelectorStage[];
};

export type SelectorStage = {
  tag: string;
  attributes: Map<string, string>;
  useAttributes: Map<string, boolean>;
  inUse: boolean;
};