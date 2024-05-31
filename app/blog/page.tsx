import Link from 'next/link';
import { getSortedPostsData, PostData } from '../../lib/posts';

export default function BlogPage() {
  const allPostsData: PostData[] = getSortedPostsData();

  return (
    <div>
      <h1>Hello, Welcome to my Blog Page</h1>
      <ul>
        {allPostsData.map(({ id, date, title, tags }) => (
          <li key={id}>
            <Link href={`/blog/${id}`}>
              {title}
            </Link>
            <br />
            <small>{date}</small>
            <br />
            {tags.length > 0 && <small>Tags: {tags.join(', ')}</small>}
          </li>
        ))}
      </ul>
    </div>
  );
}
