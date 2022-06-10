export interface Client {
  name: string;
  type: Type;
  id: number;
}
export enum Type {
  CONSTRUCTOR,
  CONTRACTOR,
  BUILDER,
  IRONMONGER,
}
