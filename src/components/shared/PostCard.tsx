import { Models } from "appwrite";
import { Link } from "react-router-dom";
import { useUserContext } from "@/context/AuthContext";
import { multiFormatDateString } from "@/lib/utils";

type PostCardProps = {
    post: Models.Document;
}

const PostCard = ({ post }: PostCardProps) => {

    const { user } = useUserContext();
    if (!post.creator) return;

  return (
    <div className="post-card">
        <div className="flex-between">
            <div className="flex items-center gap-3">
                <Link to={`/profile/${post.userId}`}>
                    <img 
                        src={ post.creator?.imageUrl || '/assets/icons/profile-placeholder.svg' }
                        alt='creator'
                        className="rounded-full w-12 lg:h-12"
                    />
                </Link>
                <div className="flex flex-col">
                    <p>
                        { post.creator.name }
                    </p>
                    <p>  {multiFormatDateString(post.$createdAt)} </p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default PostCard