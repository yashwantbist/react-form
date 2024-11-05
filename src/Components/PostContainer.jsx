import PostCard from "./PostCard";

export default function PostContainer({ posts }) {
  return (
    <div>
      {posts.map((post) => (
        <PostCard key={post.id} title={post.title} body={post.body} />
      ))}
    </div>
  );
}
