import React from 'react';
import BlogPostItem from '@theme-original/BlogPostItem';
import Comment from '@site/src/components/Comment';
import {useBlogPost} from '@docusaurus/plugin-content-blog/client';

export default function BlogPostItemWrapper(props): JSX.Element {
  const {metadata, isBlogPostPage} = useBlogPost();
  const {frontMatter} = metadata;
  
  // 默认开启评论，除非在文章头部(frontmatter)指定 comments: false
  const {comments = true} = frontMatter;

  return (
    <>
      <BlogPostItem {...props} />
      {comments && isBlogPostPage && (
        <div style={{marginTop: '3rem'}}>
          <Comment />
        </div>
      )}
    </>
  );
}