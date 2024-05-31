// app/blog/[id]/page.tsx
import { getPostData, getAllPostIds, PostData } from '../../../lib/posts';

interface PostProps {
  params: {
    id: string;
  }
}

export async function generateStaticParams() {
  const paths = getAllPostIds();
  return paths.map(path => ({
    id: path.params.id
  }));
}

export default async function Post({ params }: PostProps) {
  const postData: PostData = await getPostData(params.id);

  return (
    <div>
      <h1>{postData.title}</h1>
      <p>{postData.date}</p>
      <div dangerouslySetInnerHTML={{ __html: postData.contentHtml || '' }} />
    </div>
  );
}
