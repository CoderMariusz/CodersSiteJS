import React from 'react';
import ReviewsItem from './ReviewsItem';
import '../../styles/reviews/reviews.css';

function Reviews() {
  return (
    <div className='wrapper-reviews'>
   <div className="bg-pattern-reviews"></div>
   <h2>Delivering real results for top companies. Some of our <span>success stories.</span></h2>
   <div className="reviews-ItemWrapper">
    <ReviewsItem text='“The team perfectly fit the specialized skill set required. They focused on the most essential features helping us launch the platform eight months faster than planned.”' name='Kady Baker' position='Product Manager at Bookmark' img='/assets/avatar-aden.jpg'/>
    <ReviewsItem text='“We needed to automate our entire onboarding process. The team came in and built out the whole journey. Since going live, user retention has gone through the roof!”' name='Aiysha Reese' position='Founder of Manage' img='/assets/avatar-aiysha.jpg'/>
    <ReviewsItem text='“Amazing. Our team helped us build an app that delivered a new experience for hiring a physio. The launch was an instant success with 100k downloads in the first month.”' name='Arthur Clarke' position='Co-founder of MyPhysio' img='/assets/avatar-arthur.jpg'/>
   </div>
        </div>
  );
}

export default Reviews;
