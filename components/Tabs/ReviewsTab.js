import { Rating } from "@mui/material";
import Pagination from '@mui/material/Pagination';

import Image from "next/image";
import React from "react";
import UserImage from "./../../public/user.png";

const ReviewsTab = ({ course }) => {
  const ratingsCount = [0, 0, 0, 0, 0]; // [1-star, 2-star, 3-star, 4-star, 5-star]
  const totalReviews = course.reviews.length;

  course.reviews.forEach((review) => {
    ratingsCount[review.star - 1]++;
  });

  return (
    <div className="reviews-tab">
      <h4>comments</h4>
      <div className="ratings-box">
        <h5>{course.averageRating}</h5>
        <div>
          <Rating name="read-only" value={course.averageRating} readOnly />
          <p>Based on {totalReviews} ratings</p>
        </div>
      </div>
      <div className="ratings-count">
        {ratingsCount.map((count, index) => (
          <div className="item" key={index}>
            <div className="count-start">
              <Rating name="read-only" value={index + 1} readOnly />
              {(count / totalReviews) * 100}%
            </div>
            <div className="progress">
              <div
                style={{ width: `${(count / totalReviews) * 100}%` }}
                className="progress-bar"
                role="progressbar"
              ></div>
            </div>
          </div>
        ))}
      </div>
      <ul className="reviews-list">
        {course.reviews.map((item, index) => (
          <li key={index}>
            <div className="img-box">
              <Image className="img-fluid" src={UserImage} alt={item.userName} />
            </div>
            <div className="text-box">
              <h5>{item.userName}</h5>
              <div className="time">{item.date}</div>
              <p>{item.description}</p>
              <button className="reply">
                <svg
                  className="fill-current"
                  width="15"
                  height="11"
                  viewBox="0 0 15 11"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M6.33641 1.39721C6.35989 1.38688 6.38559 1.38261 6.41114 1.3848C6.4367 1.38699 6.4613 1.39557 6.48267 1.40975C6.50405 1.42393 6.52152 1.44326 6.53347 1.46595C6.54543 1.48865 6.55149 1.51398 6.5511 1.53963V2.76503C6.5511 2.90597 6.60708 3.04113 6.70674 3.14079C6.8064 3.24044 6.94156 3.29643 7.08249 3.29643C7.79138 3.29643 9.2219 3.30174 10.5897 4.17004C11.6355 4.83323 12.7047 6.04056 13.3477 8.28944C12.2636 7.24471 11.0255 6.67824 9.94141 6.37747C9.27509 6.19343 8.59031 6.08435 7.89978 6.05225C7.61713 6.03984 7.33402 6.04268 7.05167 6.06076H7.03786L7.03254 6.06182H7.03148L7.08249 6.59109L7.02935 6.06182C6.89819 6.075 6.7766 6.13647 6.68822 6.23428C6.59984 6.33209 6.55096 6.45926 6.5511 6.59109V7.81649C6.5511 7.93127 6.43419 8.00354 6.33641 7.95891L2.10224 4.84173C2.08787 4.83107 2.07297 4.82114 2.0576 4.81197C2.03449 4.79809 2.01537 4.77845 2.0021 4.75499C1.98882 4.73152 1.98184 4.70502 1.98184 4.67806C1.98184 4.6511 1.98882 4.6246 2.0021 4.60113C2.01537 4.57767 2.03449 4.55804 2.0576 4.54415C2.07298 4.53499 2.08787 4.52506 2.10224 4.51439L6.33641 1.39721ZM7.61389 7.10761C7.68616 7.10761 7.76587 7.1108 7.85089 7.11398C8.31215 7.13524 8.94982 7.20538 9.65764 7.402C11.0669 7.79311 12.7355 8.67948 13.8451 10.6754C13.9051 10.7831 14.0007 10.8667 14.1155 10.9116C14.2303 10.9566 14.3572 10.9603 14.4744 10.9219C14.5916 10.8836 14.6919 10.8057 14.758 10.7016C14.824 10.5975 14.8519 10.4736 14.8366 10.3513C14.3435 6.40829 12.8322 4.33371 11.1594 3.27305C9.83619 2.43344 8.47369 2.27189 7.61389 2.24107V1.53963C7.61399 1.32077 7.55501 1.10593 7.44317 0.917803C7.33134 0.729671 7.17079 0.575215 6.97848 0.470733C6.78617 0.36625 6.56922 0.315616 6.35052 0.324172C6.13183 0.332728 5.9195 0.400158 5.73593 0.519346L1.49113 3.64396C1.31565 3.7535 1.17092 3.9059 1.07058 4.08681C0.970249 4.26772 0.917603 4.47119 0.917603 4.67806C0.917603 4.88493 0.970249 5.0884 1.07058 5.26931C1.17092 5.45022 1.31565 5.60262 1.49113 5.71216L5.73593 8.83677C5.9195 8.95596 6.13183 9.02339 6.35052 9.03195C6.56922 9.0405 6.78617 8.98987 6.97848 8.88539C7.17079 8.78091 7.33134 8.62645 7.44317 8.43832C7.55501 8.25019 7.61399 8.03535 7.61389 7.81649V7.10761V7.10761Z" />
                </svg>
                Reply
              </button>
            </div>
          </li>
        ))}
      </ul>
      <Pagination className="reviews-pagination" shape="rounded" count={5} page={3} />
    </div>
  );
};

export default ReviewsTab;
