import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

import { ArticleTag } from '../../models';

interface TagPillProps {
  tag?: ArticleTag;
}

const TagPill: React.FC<TagPillProps> = ({ tag }) => {
  if (!tag) return null;

  return (
    <motion.div className="inline-block mr-2" whileHover={{ scale: 1.1 }}>
      <Link href={`/tags/${tag.slug}`}>
        <a>
          <span className="inline-flex items-center px-3 py-1 rounded-xl text-xs font-medium hover:bg-opacity-80 bg-blue-700 text-blue-100">
            {tag.name}
          </span>
        </a>
      </Link>
    </motion.div>
  );
};

export default TagPill;
