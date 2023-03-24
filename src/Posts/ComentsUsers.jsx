import axios from "axios";
import React, { useState, useEffect } from "react";
import { NavLink, useNavigate, useParams } from "react-router-dom";

const ComentsUsers = () => {
  const [comentario, setComentario] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    const fetchComentarios = async () => {
      const response = await axios.get(
        `https://jsonplaceholder.typicode.com/posts/1/comments`
      );

      setComentario(response.data);
      console.log(comentario);
    };

    fetchComentarios();
  }, []);
  return (
    <div>
      Comentarios
      <NavLink to="/">Home</NavLink>
    </div>
  );
};

export default ComentsUsers;

// import { ArrowsClockwise, ChatCircle, Heart } from "phosphor-react";
// import "./Tweet.css";
// import { Link } from "react-router-dom";

// interface TweetProps {
//   content: string;
// }

// export function Tweet(props: TweetProps) {
//   return (
//     <Link to="/status" className="tweet">
//       <img
//         src="https://avatars.githubusercontent.com/u/121310442?v=4"
//         alt="Brennon Junio"
//       />
//       <div className="tweet-content">
//         <div className="tweet-content-header">
//           <strong>Brennon Junio</strong>
//           <span>@brennonJunio</span>
//         </div>
//         <p>{props.content}</p>
//         <div className="tweet-content-footer">
//           <button type="button">
//             <ChatCircle />
//             20
//           </button>
//           <button type="button">
//             <ArrowsClockwise />
//             20
//           </button>
//           <button type="button">
//             <Heart />
//             20
//           </button>
//         </div>
//       </div>
//     </Link>
//   );
// }
