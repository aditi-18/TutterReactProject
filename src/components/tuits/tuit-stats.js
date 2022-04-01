import React from "react";

// import React, {useState, useEffect} from "react";
// import * as service from "../../services/likes-service";
// 
// const TuitStats = ({
                    //    tuit, likeTuit, dislikeTuit = () => {
    // }
                //    }) => {
    // const [isLikedByMe, setLikeTuit] = useState(false);
    // const [isDislikedByMe, setDislikeTuit] = useState(false);
    // const isTuitLikedByMe = () =>
        // service.tuitLikedByMe('me', tuit._id)
            // .then((like) => {
                // if (like) {
                    // setLikeTuit(true);
                // } else {
                    // setLikeTuit(false);
                // }
            // })
// 
    // const isTuitDislikedByMe = () =>
        // service.tuitDislikedByMe('me', tuit._id)
            // .then((dislike) => {
                // if (dislike) {
                    // setDislikeTuit(true);
                // } else {
                    // setDislikeTuit(false);
                // }
            // })
    // useEffect(isTuitLikedByMe);
    // useEffect(isTuitDislikedByMe);
    // return (
        // <div className="row mt-2">
            {/* <div className="col"> */}
                {/* <i className="far fa-message me-1"/> */}
                {/* {tuit.stats && tuit.stats.replies} */}
            {/* </div> */}
            {/* <div className="col"> */}
                {/* <i className="far fa-retweet me-1"/> */}
                {/* {tuit.stats && tuit.stats.retuits} */}
            {/* </div> */}
            {/* <div className="col"> */}
                {/* <span onClick={() => likeTuit(tuit)}> */}
              {/* { */}
                //   isLikedByMe &&
                //   <i className="fa-solid fa-thumbs-up me-1" style={{color: 'blue'}}/>
            //   }
                    {/* { */}
                        // !isLikedByMe &&
                        // <i className="fa-light fa-thumbs-up me-1"/>
                    // }
                    {/* {tuit.stats && tuit.stats.likes} */}
            {/* </span> */}
            {/* </div> */}
            {/* <div className="col"> */}
                {/* <span className="col" onClick={() => dislikeTuit(tuit)} data-testid="test-dislikeButton"> */}
                {/* { */}
                    // isDislikedByMe &&
                    // <i className="fa-solid fa-thumbs-down me-1" style={{color: 'blue'}} data-testid="test-dislikedByMe"/>
                // }
                    {/* { */}
                        // !isDislikedByMe &&
                        // <i className="fa-light fa-thumbs-down me-1"/>
                    // }
                    {/* {tuit.stats && tuit.stats.likes} */}
            {/* </span> */}
            {/* </div> */}
            {/* <div className="col"> */}
                {/* <i className="far fa-inbox-out"/> */}
            {/* </div> */}
        {/* </div> */}
    // );
// }
// export default TuitStats;


const TuitStats = ({tuit, likeTuit = () => {}}) => {
    return (
      <div className="row mt-2">
        <div className="col">
          <i className="far fa-message me-1"></i>
          {tuit.stats &&
          <span className="ttr-stats-replies">{tuit.stats.replies}</span>
          }
        </div>
        <div className="col">
          <i className="far fa-retweet me-1"></i>
          {tuit.stats &&
          <span className="ttr-stats-retuits">{tuit.stats.retuits}</span>
          }
        </div>
        <div className="col">
          <span className="ttr-like-tuit-click" onClick={() => likeTuit(tuit)}>
              {
                tuit.stats && tuit.stats.likes && tuit.stats.likes > 0 &&
                  <i className="fas fa-heart me-1" style={{color: 'red'}}></i>
              }
              {
                tuit.stats && tuit.stats.likes && tuit.stats.likes <= 0 &&
                  <i className="far fa-heart me-1"></i>
              }
            <span className="ttr-stats-likes">{tuit.stats && tuit.stats.likes}</span>
          </span>
        </div>
        <div className="col">
          <i className="far fa-inbox-out"></i>
        </div>
      </div>
    );
}
export default TuitStats;