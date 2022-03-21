import React from 'react'
import Star from '../../Images/star'
import HalfStar from '../../Images/halfstar'
const Stars = (props) => {
  const starIntRating =  Math.trunc(props.rating);
  const RemainStarIntRating =  5 - Math.trunc(props.rating);
  const starFloatRating = RemainStarIntRating !== 0 ? Math.trunc((props.rating - starIntRating) * 100) : 0;
  const starIntRatingArray =  new Array(Math.trunc(props.rating)).fill(0);
  const RemainStarIntRatingArray =  new Array((RemainStarIntRating !== 0) ? starFloatRating === 0 ? RemainStarIntRating : RemainStarIntRating-1 : RemainStarIntRating).fill(0);
  return (
        <div style={{display:"flex",flexDirection:"row"}}>
            {starIntRatingArray.map((_,i)=>(
              <div key={i}>
              <Star style={{width:props.width ? props.width : "20px"}} fill={true}/>
            </div>))}{
                (starFloatRating !== 0 && starFloatRating !== null ) ?
                <HalfStar style={{width:props.width ? props.width : "20px"}} fill={true}/> : ''
            }
            {RemainStarIntRatingArray.map((_,i)=>(
              <div key={i}>
              <Star style={{width:props.width ? props.width : "20px"}} fill={false}/>
            </div>))}
            
        </div>
  )
}

export default Stars
