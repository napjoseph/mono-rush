import React from 'react';
import { ArticleTag } from '../../models';
import { MotionBox } from '../primitives/motion-box';
import { NextChakraLink } from '../primitives/next-chakra-link';

interface TagPillProps {
  tag?: ArticleTag;
}

const TagPill: React.FC<TagPillProps> = ({ tag }) => {
  if (!tag) return null;

  return (
    <MotionBox whileHover={{ scale: 1.1 }}>
      <NextChakraLink
        display="inline-block"
        href={`/tags/${tag.slug}`}
        rounded="xl"
        textStyle="post-tag"
        layerStyle="post-tag"
        _hover={{ layerStyle: 'post-tag-hover' }}
        px={3}
        py={1}
      >
        {tag.name}
      </NextChakraLink>
    </MotionBox>
  );
};

export default TagPill;
