import React from 'react'

const Card = (props) => {
  return (
  
      <div className="cards">
        <div className="card-upper">
          <div className="circle"><img src={props.img} alt="" /></div>
          <button>Save <i class="ri-bookmark-line"></i></button>
        </div>
        <div className="card-middle">
        <div className="company-name">{props.companyName}
          <h4>{props.loginDate}</h4>
        </div>
      <h1>{props.jobTitle}</h1>

      <div className="buttons">
      <button className="btn1">{props.jobType}</button>
      <button className="btn2">{props.jobLocation}</button>
</div>

        </div>
        <div className="line"></div>
        <div className="card-lower">
          <div className="amount">
            <h2>{props.salary}</h2>
            <h4>{props.location}</h4>
          </div>
          <button className="apply-btn">Apply Now</button>
        </div>

      </div>
  )
}

export default Card
