import Link from 'next/link';
import { getSortedPostsData, PostData } from '../../lib/posts';

export default function BlogPage() {
  const allPostsData: PostData[] = getSortedPostsData();

  return (
    <div>
      <h1>Hello, Welcome to my Blog Page</h1>
      <ul>
        {allPostsData.map(({ id, date, title }) => (
          <li key={id}>
            <Link href={`/blog/${id}`}>
              {title}
            </Link>
            <br />
            <small>{date}</small>
          </li>
        ))}
      </ul>
    </div>
  );
}