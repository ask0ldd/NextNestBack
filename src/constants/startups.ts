export const startups : IStartup[] =
[
  {
    "id" : 1,
    "companyName": "Airbnb",
    "smallIcon" : "airbnb.png",
    "icon" : "airbnb.jpg",
    "pic" : "airbnb3.jpg",
    "ycBatch": "W09",
    "status": "Public",
    "categories": ["marketplace", "travel", "consumer", "leisure" , "tourism"],
    "location": "San Francisco, CA, USA",
    "website": "http://airbnb.com",
    "description": "Book accommodations around the world. Founded in August of 2008 and based in San Francisco, California, Airbnb is a trusted community marketplace for people to list, discover, and book unique accommodations around the world — online or from a mobile phone. Whether an apartment for a night, a castle for a week, or a villa for a month, Airbnb connects people to unique travel experiences, at any price point, in more than 33,000 cities and 192 countries. And with world-class customer service and a growing community of users, Airbnb is the easiest way for people to monetize their extra space and showcase it to an audience of millions.",
    "founded": 2008,
    "teamSize": 6132,
    "activeFounders": [
      {
        "name": "Nathan Blecharczyk",
        "title": "Founder/CTO",
        "description": "Nathan Blecharczyk is the co-founder, Chief Strategy Officer, and Chairman of Airbnb China. Nathan plays a leading role in driving key strategic initiatives across the global business. Previously he oversaw the creation of Airbnb’s engineering, data science, and performance marketing teams. Nathan became an entrepreneur in his youth, running a business while he was in high school that sold to clients in more than 20 countries. He earned a degree in Computer Science from Harvard University."
      },
      {
        "name": "Brian Chesky",
        "title": "Founder/CEO",
        "description": "Brian Chesky is the co-founder, Head of Community, and CEO of Airbnb, which he started with Joe Gebbia and Nathan Blecharczyk in 2008. Brian sets the company’s strategy to connect people to unique travel experiences, and drives Airbnb’s mission to create a world where anyone can belong anywhere. Originally from New York, Brian graduated from the Rhode Island School of Design where he received a Bachelor of Fine Arts in Industrial Design."
      },
      {
        "name": "Joe Gebbia",
        "title": "Founder/CPO",
        "description": "Joe Gebbia is the co-founder of Airbnb which began in his San Francisco living room and spread to nearly 7M listings in 191+ countries, changing how people trust each other. Joe now holds a strategic advisory position and serves on the Board of Directors at Airbnb. His latest venture, Samara, also cemented in economic empowerment, housing resources, and design, produces fully customized, factory-made homes designed to create rental income, house family, and form new types of housing communities."
      }
    ]
  },
  {
    "id" : 2,
    "companyName": "Amplitude",
    "smallIcon" : "amplitude.png",
    "icon" : "amplitude.png",
    "pic" : "amplitude.png",
    "ycBatch": "W12",
    "status": "Public",
    "categories": ["developer-tools", "b2b", "analytics", "marketing", "data-visualization"],
    "location": "San Francisco, CA, USA",
    "website": "https://amplitude.com",
    "description": "Digital Analytics Platform. Since graduating from YC, Amplitude (W12) has made it to IPO and beyond by helping cutting edge startups become category leaders. We’ve pioneered the digital analytics category to become the go-to solution for AI pioneers (Cruise, Midjourney), apps that touch millions of consumers (Doordash, Coinbase), and the best in B2B (Atlassian, Rippling, Canva). With product analytics, experiment, CDP, session replay, and more, Amplitude’s digital analytics platform shows you what your users love, where they’re getting stuck, and what keeps them coming back.",
    "founded": 2012,
    "teamSize": 750,
    "activeFounders": [
      {
        "name": "Spenser Skates",
        "title": "Founder/CEO",
        "description": "Spenser Skates is the CEO and Co-Founder of the leading digital analytics platform Amplitude. He co-founded the company in 2012 to help organizations build better products through product analytics. He brought the company public in 2021. Today, Amplitude serves more than 3,000 paying customers, guiding teams to clearer insights, faster action, and trusted data. Skates previously worked as an algorithmic trader at DRW Trading Group and graduated with a B.S. in Bioengineering from MIT where he"
      },
      {
        "name": "Curtis Liu",
        "title": "Founder/CTO",
        "description": "Curtis Liu"
      }
    ]
  },
  {
    "id" : 3,
    "companyName": "Coinbase",
    "smallIcon" : "coinbase.png",
    "icon" : "coinbase.png",
    "pic" : "coinbase3.jpg",
    "ycBatch": "S12",
    "status": "Public",
    "categories": ["crypto-web3", "fintech", "banking and exchange"],
    "location": "San Francisco, CA, USA",
    "website": "https://www.coinbase.com",
    "description": "Buy, sell, and manage cryptocurrencies. Founded in June of 2012, Coinbase is a digital currency wallet and platform where merchants and consumers can transact with new digital currencies like bitcoin, ethereum, and litecoin. Our vision is to bring more innovation, efficiency, and equality of opportunity to the world by building an open financial system. Our first step on that journey is making digital currency accessible and approachable for everyone.",
    "founded": 2012,
    "teamSize": 6112,
    "activeFounders": [
      {
        "name": "Brian Armstrong",
        "title": "Founder/CEO"
      }
    ]
  }
]

export default startups

export interface IStartup{
    "id" : number,
    "companyName": string,
    "smallIcon": string,
    "icon": string,
    "pic": string,
    "ycBatch": string,
    "status": string,
    "categories": string[],
    "location": string,
    "website": string,
    "description": string,
    "founded": number,
    "teamSize": number,
    "activeFounders": IFounder[]
}

export interface IFounder{
    "name" : string
    "title" : string
    "description" ? : string
}