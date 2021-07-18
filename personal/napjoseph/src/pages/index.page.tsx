import React from 'react';

import Head from 'next/head';

import PostsCardsList from '../components/sections/posts/posts-cards-list.component';
import { Post } from '../models';

/* eslint-disable-next-line */
interface HomePageProps {}

const HomePage: React.FC<HomePageProps> = (_props) => {
  const recentPosts: Post[] = [
    {
      title: 'Metus dictum at tempor commodo',
      href: '#',
      tags: [{ name: 'Lacus', href: '#', color: 'bg-indigo-100 text-indigo-800' }],
      snippet:
        'Faucibus purus in massa tempor nec feugiat nisl. Habitasse platea dictumst vestibulum rhoncus est pellentesque elit. Commodo elit at imperdiet dui.',
      publishedDate: '2020-03-16',
      readingTime: '6 min'
    },
    {
      title: 'Eleifend mi in nulla',
      href: '#',
      tags: [{ name: 'Enim Gravida', href: '#', color: 'bg-pink-100 text-pink-800' }],
      snippet:
        'Metus dictum at tempor commodo ullamcorper a lacus vestibulum. Sapien pellentesque habitant morbi tristique senectus et netus et malesuada.',
      publishedDate: '2020-03-10',
      readingTime: '4 min'
    },
    {
      title: 'Diam vulputate ut pharetra',
      href: '#',
      tags: [{ name: 'Ultrices', href: '#', color: 'bg-green-100 text-green-800' }],
      snippet: 'Nulla malesuada pellentesque elit eget gravida cum sociis natoque penatibus.',
      publishedDate: '2020-02-12',
      readingTime: '11 min'
    },
    {
      title: 'Accumsan tortor posuere',
      href: '#',
      tags: [{ name: 'Ultrices', href: '#', color: 'bg-green-100 text-green-800' }],
      snippet:
        'Nibh sit amet commodo nulla facilisi nullam vehicula ipsum. Amet volutpat consequat mauris nunc congue nisi. Odio ut sem nulla pharetra diam sit.',
      publishedDate: '2020-02-12',
      readingTime: '11 min'
    },
    {
      title: ' Nam libero justo laoreet',
      href: '#',
      tags: [
        { name: 'Sollicitudin', href: '#', color: 'bg-blue-100 text-blue-800' },
        { name: 'Enim Gravida', href: '#', color: 'bg-pink-100 text-pink-800' }
      ],
      snippet:
        'Quisque sagittis purus sit amet. Nunc consequat interdum varius sit amet mattis vulputate enim nulla.',
      publishedDate: '2020-03-10',
      readingTime: '4 min'
    }
  ];

  return (
    <>
      <Head>
        <title>Nap Joseph Calub</title>
      </Head>

      <PostsCardsList
        title="Recent Posts"
        description="Nullam risus blandit ac aliquam justo ipsum. Quam mauris volutpat massa dictumst amet. Sapien tortor lacus arcu."
        posts={recentPosts}
        hideIfEmpty={false}
      />
    </>
  );
};

export default HomePage;
