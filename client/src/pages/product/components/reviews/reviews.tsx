import { useState } from "react";
import Rating from "@mui/material/Rating";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setReviews } from "../../../../slices/reviews-slice";
import { getReviews } from "../../../../api/get-reviews";
import { jwtDecode } from "jwt-decode";
import { addReview } from "../../../../api/add-review";
import {useNavigate} from 'react-router-dom'
import { RootState} from '../../../../store'
import { getCookieToken} from '../../../../utils/get-cookie-token'
import { userType} from '../../../../types/userType'
interface ReviewsProps { 
  productId: string
}

export const Reviews: React.FC<ReviewsProps> = ({ productId } ) => {
  const [value, setValue] = useState<number | null>(5);
const navigate = useNavigate()
  const [content, setContent] = useState("");
  const dispatch = useDispatch();
  const reviews = useSelector((state: RootState) => state.reviews.reviews);
  const [cookieValue] = useState(() => getCookieToken()
  );
  const [parsedUser, setParsedUser] = useState<userType | null>(null);

  useEffect(() => {
    try {
      if (cookieValue) {
        setParsedUser(jwtDecode(cookieValue));
      }
    } catch (error) {
      console.error("Ошибка декодирования токена:", error);
      setTimeout(() => navigate("/login"), 2000);
      return;
    }

    const getReview = async () => {
      const reviews = await getReviews();
      dispatch(setReviews(reviews));
      return reviews;
    };
    getReview();
  }, []);
  const currentReviews = reviews.filter(
    (rev) => rev["product_id"] === productId
  );
  const addNewReview = () => {
    if ( parsedUser) { 
      addReview({
        productId: productId,
        userId: parsedUser.id,
        userName: parsedUser.name,
        rate: value,
        content: content,
      });
    }
   
  };

  return (
    <div className="reviews-container">
      <h1>Отзывы</h1>
      {cookieValue && (
        <form onSubmit={addNewReview}>
          <div className="add-review">
            <input
              placeholder="Ваш отзыв..."
              value={content}
              onChange={(e) => setContent(e.target.value)}
            />
            <Rating
              name="simple-controlled"
              value={value}
              onChange={(newValue) => {
                setValue(newValue);
              }}
            />
            <button type="submit" className="otpravit">
              Отправить
            </button>
          </div>
        </form>
      )}
      <div className="reviews">
        {currentReviews.map((rev) => {
          return (
            <div className="review" key={rev["_id"]}>
              <div className="review-author">
                <span>{rev["user_name"]}</span>
              </div>
              <Rating value={rev.rate} readOnly />
              <div className="review-content">
                <span>{rev.content}</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
