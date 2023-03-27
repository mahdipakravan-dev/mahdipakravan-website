export default [
  {
    url: "/api/about",
    object: {
      md: `
/**
* About me
  
  * Born in 24.12.2000 , Tehran
  * Married ♥
  
  * working status : Senior Frontend Developer at KianIranian S.T.D.G
  
  * <= see another detail in sidebar <=
*/
        `,
    },
  },
  {
    url: "/api/about?file=KianIranian_iGap",
    object: {
      md: `
/* KianIranian STDG 
   (smart technology development group)
 */
    
const detail = {
    startDate : "Jan2021",
    //(currently working here)
    location : "Tehran,Iran",
    jobType : "Full-Time",
    position : "Frontend TeamLead"
}
 
/*
    Frontend TeamLead with 8 team member ,
    implement new version of messenger web-application using below technologies : 
    ReactJs , Redux , Nextjs , Pwa , SocketIO , Protocol Buffer , WebRTC , Hls And Dash Video Streaming in Frontend development
*/          
`,
      gallery: [
        {
          id: 1,
          src: "/kian/1.jpg",
          title: "i was developed iGapMessenger Web!",
          desc: "here is the birthday of 6th year of iGap",
        },
        {
          id: 2,
          src: "/kian/3.jpeg",
          title: "Frontend Team (2020)",
          desc: "4 frontend-developer !",
        },
        {
          id: 3,
          src: "/kian/4.jpeg",
          title: "Frontend Team (2021)",
          desc: "6 frontend-developer !",
        },
        {
          id: 4,
          src: "/kian/2.jpg",
          title: "celebrated 4 year of kian iranian",
          desc: "we was 6 frontend-developer !",
        },
      ],
    },
  },
  {
    url: "/api/about?file=Baran",
    object: {
      md: `
/*Baran Cloud Company (IBARB)*/
    
const detail = {
    startDate : "Oct2021",
    endDate : "Jun2022",
    location : "Tehran,Iran",
    jobType : "Part-Time",
    position : "Frontend TeamLead"
}
 
/*
    Frontend TeamLead & Frontend Enginnering on iGapTV VOD with 2 team member 
    
    Implement iGapTv Website usigng Next.js & REACT .
    
    using HLS Streaming Protocol and create advance player using videoJS and customized options 
    using ServerSideAdInsertion and implement ads on Player .
*/          
`,
      gallery: [
        {
          id: 1,
          src: "/baran/1.jpeg",
          title: "Frontend Team (2020)",
          desc: "we was 3 member in frontend team , we developed a VOD platform named iGapTV(VIDOLIM) , this project available in _projects tab !",
        },
      ],
    },
  },
  {
    url: "/api/about?file=Marcato",
    object: {
      md: `
/*Marcato (music store)*/
    
const detail = {
    startDate : "Sep2020",
    endDate : "Jan2021",
    location : "Tehran,Iran",
    jobType : "Self-employed(startup)",
    position : "Founder-fullstack developer"
}
 
/*
    Fullstack Developer Of Marcato Startup . 
    implement ecommerce web application based on ssr using technologies :
    Nodejs , Typescript , Mongodb , Redis , Ejs
*/          
`,
      gallery: [
        {
          id: 1,
          src: "/marcato/1.jpg",
          title: "This is Amir !",
          desc: "i and amir , we decied to create a music store named marcato ! , we developed this startup with Node.js !",
        },
        {
          id: 2,
          src: "/marcato/2.jpeg",
          title: "our office , ParadiseHUB !",
          desc: "we developed this startup in weekend at a co-working space named paradiseHUB",
        },
      ],
    },
  },
  {
    url: "/api/about?file=Parax",
    object: {
      md: `
/*Parax Company*/
    
const detail = {
    startDate : "Jun2020",
    endDate : "Dec2020",
    location : "Tehran,Iran",
    jobType : "Full-Time",
    position : "MernStackDeveloper (Mongo,Ecma,React,NodeJS)"
}
 
/*
    React & Nodejs Developer For Realtime Applications 
    Implement WebRTC Technologies For Online Video Call Projects
*/          
`,
      gallery: [
        {
          id: 1,
          src: "/parax/1.jpg",
          title: "Our Team (Backend Team)",
          desc: "I was the only nodejs-developer in this team , The rest of the guys, Mehdi, Maryam and Saman, are Laravel developers",
        },
      ],
    },
  },
  {
    url: "/api/about?file=MineTaxi",
    object: {
      md: `
/*MineTaxi Company (maham iranian yekta nafis)*/
    
const detail = {
    startDate : "Sep2019",
    endDate : "Jun2020",
    location : "Tehran,Iran",
    jobType : "Full-Time",
    position : "MernStackDeveloper (Mongo,Ecma,React,NodeJS)"
}
 
/*
    Backend Developer At Minetaxi.ir 
    implement minetaxi.ir and Relevant applications using below technologies : 
    Technologies : Node.js
    Database : MongoDb , Redis , MySQL
    Other : Firebase , map.ir and cedarmap , GeoJson , GeoRedis
    Server : Linux - Windows
*/          
`,
      gallery: [
        {
          id: 1,
          src: "/mine/1.jpeg",
          title: "i was only Node.js Developer",
          desc: "I worked for one year as the only developer in this company and implemented the backend of a taxi request application in this company.",
        },
      ],
    },
  },
  {
    url: "/api/about?file=Tavanasho",
    object: {
      md: `
/*Tavanasho education platform*/
    
const detail = {
    startDate : "Aug2017",
    endDate : "Mar2019",
    location : "Tehran,Iran",
    jobType : "Contract",
    position : "Webmaster & Frontend Developer"
}
 
/*
    Webmaster And Frontend Developer For Tavanasho.ir Website
    using Html , css , jquery for implement Frontend .
*/          
`,
      gallery: [
        {
          src: "/kian/1.jpg",
          title: "i was developed iGapMessenger Web!",
          desc: "here is the birthday of 6th year of iGap",
        },
        {
          src: "/kian/3.jpg",
          title: "we was 6 frontend-developer !",
          desc: "we was 6 frontend-developer !",
        },
        {
          src: "/kian/2.jpg",
          title: "celebrated 4 year of kian iranian",
          desc: "we was 6 frontend-developer !",
        },
      ],
    },
  },
];
