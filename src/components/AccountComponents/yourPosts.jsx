import { useQuery } from "react-query";
import Post from "../Post";
import getAllPostByUID from "../../api/getAllPostByUID";
import { useOutletContext } from "react-router-dom";

const YourPosts = () => {
  document.title = "JustSmile | Your Posts";
  const { uid } = useOutletContext();

  const { data: currentUserPosts, isLoading: currentUserPostsLoading } =
    useQuery(["currentUserPosts", uid], () => getAllPostByUID(uid));

  if (currentUserPostsLoading) {
    return (
      <div className="flex justify-center items-center h-full">
        <span className="loading loading-spinner loading-lg"></span>
      </div>
    );
  }

  return (
    <div className=" max-w-[41rem]">
      {currentUserPosts?.map((p) => (
        <Post
          key={p.id}
          body={p.content}
          time={p.created_at}
          name={p.author_fullname}
          username={p.author_username}
          total_likes={p.total_likes}
          total_comments={p.total_comments}
          uid={p.uid}
          postDocId={p.id}
        />
      ))}
    </div>
  );
};

export default YourPosts;
