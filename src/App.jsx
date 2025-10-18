import React from 'react'
import Card from './components/Card.jsx'

const App = (props) => {

const jobOpenings = [
  {
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/768px-Google_%22G%22_logo.svg.png",
    companyName: "Google",
    loginDate: "2 days ago",
    jobTitle: "Front-End Developer",
    jobType: "Full Time",
    jobLocation: "Remote",
    salary: "$3500/month",
    location: "USA"
  },
  {
    img: "https://static.vecteezy.com/system/resources/previews/027/127/473/non_2x/microsoft-logo-microsoft-icon-transparent-free-png.png",
    companyName: "Microsoft",
    loginDate: "5 days ago",
    jobTitle: "Back-End Developer",
    jobType: "Part Time",
    jobLocation: "Onsite",
    salary: "$4000/month",
    location: "Canada"
  },
  {
    img: "https://1000logos.net/wp-content/uploads/2016/10/Apple-Logo.png",
    companyName: "Apple",
    loginDate: "1 day ago",
    jobTitle: "UI/UX Designer",
    jobType: "Contract",
    jobLocation: "Hybrid",
    salary: "$3000/month",
    location: "UK"
  },
  {
    img: "https://st3.depositphotos.com/1001860/16375/i/450/depositphotos_163757632-stock-photo-amazon-logo-on-a-white.jpg",
    companyName: "Amazon",
    loginDate: "3 days ago",
    jobTitle: "Full Stack Developer",
    jobType: "Internship",
    jobLocation: "Remote",
    salary: "$2500/month",
    location: "Germany"
  },
  {
    img: "https://img.freepik.com/premium-vector/facebook-icon-paper-cut-style-social-media-icons_505135-232.jpg?semt=ais_hybrid&w=740&q=80",
    companyName: "Facebook",
    loginDate: "4 days ago",
    jobTitle: "Data Scientist",
    jobType: "Full Time",
    jobLocation: "Onsite",
    salary: "$4500/month",
    location: "Australia"
  },
  {
    img: "https://images.ctfassets.net/4cd45et68cgf/Rx83JoRDMkYNlMC9MKzcB/2b14d5a59fc3937afd3f03191e19502d/Netflix-Symbol.png?w=700&h=456",
    companyName: "Netflix",
    loginDate: "2 days ago",
    jobTitle: "DevOps Engineer",
    jobType: "Part Time",
    jobLocation: "Hybrid",
    salary: "$5000/month",
    location: "India"
  },
  {
    img: "https://static.vecteezy.com/system/resources/previews/020/336/484/non_2x/tesla-logo-tesla-icon-transparent-png-free-vector.jpg",
    companyName: "Tesla",
    loginDate: "6 days ago",
    jobTitle: "Machine Learning Engineer",
    jobType: "Contract",
    jobLocation: "Remote",
    salary: "$6000/month",
    location: "USA"
  },
  {
    img: "https://blog.logomaster.ai/hs-fs/hubfs/ibm-logo-2.jpg?width=672&height=448&name=ibm-logo-2.jpg",
    companyName: "IBM",
    loginDate: "1 day ago",
    jobTitle: "Cybersecurity Analyst",
    jobType: "Internship",
    jobLocation: "Onsite",
    salary: "$3200/month",
    location: "Canada"
  },
  {
    img: "https://cdn.mos.cms.futurecdn.net/z3bn6deaxmrjmQHNEkpcZE.jpg",
    companyName: "Twitter",
    loginDate: "2 days ago",
    jobTitle: "Frontend Developer",
    jobType: "Full Time",
    jobLocation: "Remote",
    salary: "$7000/month",
    location: "USA"
  },
 
  {
    img: "https://img.freepik.com/premium-psd/linkedin-3d-logo-social-media-icon-isolated_878388-42.jpg?semt=ais_hybrid&w=740&q=80",
    companyName: "LinkedIn",
    loginDate: "3 days ago",
    jobTitle: "Backend Developer",
    jobType: "Part Time",
    jobLocation: "Hybrid",
    salary: "$8000/month",
    location: "UK"
  },
  {
    img: "https://media.designrush.com/inspiration_images/135680/conversions/_1512505978_602_snap-mobile.jpg",
    companyName: "Snapchat",
    loginDate: "4 days ago",
    jobTitle: "UI/UX Designer",
    jobType: "Contract",
    jobLocation: "Onsite",
    salary: "$9000/month",
    location: "Australia"
  },
  {
    img: "https://img.freepik.com/free-vector/instagram-logo_1199-122.jpg?semt=ais_hybrid&w=740&q=80",
    companyName: "Instagram",
    loginDate: "5 days ago",
    jobTitle: "Full Stack Developer",
    jobType: "Internship",
    jobLocation: "Remote",
    salary: "$7500/month",
    location: "Germany"
  } 
];

  return (
    <div className="parent">
     {jobOpenings.map( function(elem , index){
      return <div key={index}>
      
      <Card  img={elem.img}  companyName={elem.companyName}  loginDate={elem.loginDate}  jobTitle={elem.jobTitle}  jobType={elem.jobType}  jobLocation={elem.jobLocation}  salary={elem.salary}  location={elem.location}  />
      </div>
     })
    }


    </div>
  )
}

export default App
