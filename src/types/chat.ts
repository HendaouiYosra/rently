type Role="user"|"assistant";

export type Message={
  role: Role;
  content:string;
}
export type Conversation = {
  id: string;
  title: string;
  createdAt: string;
  updatedAt: string;
  messages: Message[];
};
