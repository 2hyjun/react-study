import withSplitting from 'lib/withSplitting';

export const Home = withSplitting(() => import('pages/Home'));
export const About = withSplitting(() => import('pages/About'));
export const Post = withSplitting(() => import('pages/Post'));
export const Posts = withSplitting(() => import('pages/Posts'));
