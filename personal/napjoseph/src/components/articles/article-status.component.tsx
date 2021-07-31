import React from 'react';
import { Box } from '@chakra-ui/react';

interface ArticleStatusProps {
  status?: string;
}

const ArticleStatus: React.FC<ArticleStatusProps> = ({ status }) => {
  if (!status) return null;

  return (
    <Box
      display="inline-block"
      rounded="xl"
      textStyle="post-status"
      layerStyle="post-status"
      px={3}
      py={1}
    >
      {status}
    </Box>
  );
};

export default ArticleStatus;
