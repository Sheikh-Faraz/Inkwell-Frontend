export type BlogAuthor = {
  _id: string;
  fullName: string;
  profilePic?: string;
  about?: string;
};

export type BlogCategory = {
  _id: string;
  name: string;
};

export type BlogTag = {
  _id: string;
  name: string;
};

export type Blog = {
  _id: string;
  title: string;
  slug: string;
  heroImage?: string;
  category?: BlogCategory | null;
  tags?: BlogTag[];
  author?: BlogAuthor | null;
  createdAt: string;
  updatedAt: string;
};

export type BlogDetail = Blog & {
  content: any[];
};