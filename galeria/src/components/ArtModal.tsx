
import React, { useState, useEffect } from "react";

interface ArtModalProps {
  art: {
    id: number;
    name: string;
    description: string;
  };
  onClose: () => void;
}

const ArtModal: React.FC<ArtModalProps> = ({ art, onClose }) => {
  const [comment, setComment] = useState<string>("");
  const [comments, setComments] = useState<string[]>([]);

  useEffect(() => {
    const savedComments = JSON.parse(localStorage.getItem("comments") || "[]");
    setComments(savedComments);
  }, []);

  const handleCommentSubmit = () => {
    const newComments = [...comments, comment];
    setComments(newComments);
    localStorage.setItem("comments", JSON.stringify(newComments));
    setComment("");
  };

  return (
    <div className="modal">
      <h2>{art.name}</h2>
      <p>{art.description}</p>
      <h3>Deja un comentario:</h3>
      <textarea value={comment} onChange={(e) => setComment(e.target.value)} placeholder="Escribe tu comentario..." />
      <button onClick={handleCommentSubmit}>Enviar Comentario</button>
      <button onClick={onClose}>Cerrar</button>
      <h4>Comentarios:</h4>
      <ul>
        {comments.map((comment, index) => (
          <li key={index}>{comment}</li>
        ))}
      </ul>
    </div>
  );
};

export default ArtModal;
