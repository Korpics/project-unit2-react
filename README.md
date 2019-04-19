# project-unit2-react

####

**NYC Job Finder**
**Charles Korpics**
**Unit-2 Project SEI**


#### APP IS AVAILABLE HERE

#### link to screenshot
https://github.com/Korpics/project-unit2-react/blob/master/IMG_1063.jpeg

'homepage'

#### Example of JSON object from above API
```
[
    {
        "__of_positions": "1",
        "additional_information": "Salary range for this position is: $42,405 - $45,000 per year",
        "agency": "DEPARTMENT OF BUSINESS SERV.",
        "business_title": "Account Manager",
        "civil_service_title": "CONTRACT REVIEWER (OFFICE OF L",
        "division_work_unit": "Strategy & Analytics",
        "job_description": "Division of Economic & Financial Opportunity (DEFO)    Mayor Michael R. Bloomberg and SBS are committed to encouraging a competitive and diverse New York City business environment by promoting the growth and success of minority and women-owned companies.  New York Cityâ€™s Minority and Women-owned Business Enterprise (M/WBE) program is designed to help these historically underserved groups become more competitive.    JOB DESCRIPTION           The Account Manager will provide a range of supportive services to City agency purchasing personnel and private-sector prime contractors to help them comply with M/WBE utilization goals under Local Law 129.  The Account Manager will oversee a portfolio of several City agencies and will be responsible for the monitoring and oversight of the strategies which have been broadly laid out for agencies to increase M/WBE utilization.  The primary objective for the Account Manager is to help agencies increase the number and dollar value of contracts awarded to M/WBE at various contract levels.  Specifically, the Account Manager will seek to bring agencies into compliance with the Citywide utilization goals and other metrics used for measuring agency performance. Each account manager will be responsible for procurements of all sizes and methods for their respective agencies.  The Account Manager will report to the Director of Procurement Initiatives.    Account Manager Model  Each agency has very specific vendor requirements and needs, as well as obstacles to increasing M/WBE Utilization. The account managers will learn what is procured, by what method, how frequently, and how to get more M/WBEs participating in the process. The account manager will leverage their procurement contacts to work directly with program end users to identify needs and obstacles and create appropriate solutions.    The Account Managerâ€™s responsibilities will include the following:  1.\tResearch agency procurement practices, requirements, in order to connect M/WBE firms with future procurement opportunities   2.\tWork with the agency senior staff to implement strategies to increase M/WBE participation   3.\tIntroduce new M/WBE firms to agency staff   4.\tAssist agency staff with tools to improve performance, including monitoring prime contractor performance relating to M/WBE subcontractor utilization goals   5.\tInform agency senior staff of their performance against goals on a regular basis   6.\tAssist program and procurement staff with program implementation questions as they arise   7.\tProduce  analysis of agency contracts and M/WBE program performance   8.\tCoordinate resources for agencies as necessary, including networking events, training sessions, etc.",
        "job_id": "87990",
        "level": "01",
        "minimum_qual_requirements": "1.\tA baccalaureate degree from an accredited college and two years of experience in community work or community centered activities in an area related to the duties described above; or  2.\tHigh school graduation or equivalent and six years of experience in community work or community centered activities in an area related to the duties as described above; or  3.\tEducation and/or experience which is equivalent to \"1\" or \"2\" above. However, all candidates must have at least one year of experience as described in \"1\" above.",
        "posting_date": "2011-06-24T00:00:00.000",
        "posting_type": "Internal",
        "posting_updated": "2011-06-24T00:00:00.000",
        "preferred_skills": "â€¢\tExcellent interpersonal and organizational skills.  â€¢\tExcellent analytic and operational skills.  â€¢\tExcellent writing and editing skills.  â€¢\tKnowledge of government procurement processes and information systems desirable.  â€¢\tForeign language skills a plus.",
        "process_date": "2019-04-16T00:00:00.000",
        "residency_requirement": "New York City residency is generally required within 90 days of appointment. However, City Employees in certain titles who have worked for the City for 2 continuous years may also be eligible to reside in Nassau, Suffolk, Putnam, Westchester, Rockland, or Orange County. To determine if the residency requirement applies to you, please discuss with the agency representative at the time of interview.",
        "salary_frequency": "Annual",
        "salary_range_from": "42405",
        "salary_range_to": "65485",
        "title_code_no": "40563",
        "work_location": "110 William St. N Y"
    },
 ```

#### NEW CONCERN
- May need to use a second api as this api seems bound to specifically state sponsored jobs. I can work with this, but it was to my misunderstanding that these jobs would vary into broader categories. Will investigate alternative apis and will adjust my documentation accordingly. 

#### Overview

Find a Job! 

The Api used is listed below vv

***https://data.cityofnewyork.us/City-Government/NYC-Jobs/kpav-sd4t***

The goal of this application will be to find jobs in NYC in a very simplistic manner. 

The filtering process used in this search application will provide a similar filter one can find on basic job searching apps.

The homepage will feature the ten most recent postings in a canvas with a scroll bar attached. 

There will also be a random job generator that generates a list of random jobs that fit the criteria you have specified (entry level, tech, transport, brooklyn ..etc). 

There will be many additions I would like to implement along the way, but I am more so focused on keeping this in scope and making sure I give myself an attainable goal before getting fancy. 


***Update 04/19/19 9:54 am***

There will be a community posted jobs section. It will be - at it's minimum - unmonitored so I am sure it will get pretty NSFW unfortunately but I will ponder on how to program for that. Would like to make conditionals that do not allow the use of certain words at the very least. 

This post function will cause me great headaches I am sure but I am very much so interested in learning how to implement some sort of locally held user database. After discussing with Kenny, it is to my understanding that locally holding user input long term is possible and explained potential work arounds. I will be attempting to research and implement this as a feature and not as a bonus. This will be the last thing implemented as I'd imagine it may entirely transform the use of my app and the data being rendered, and this feels like the most difficult of my 'in scope' ideas. 

---

#### Tech 

- Will be using react route, and may utilize other libraries upon researching them/will add them to documentation if so.

- Will attempt to avoid any use of a server(node) when trying to implement Post. I am confident in my ability to program in react but I believe the 'Post' will prove to be challenging within react route. 


#### Tech Problems 

- I am firstly concerned over the algorithm for matching up selected jobs with the filter process.
I will be checking multiple open source projects to determine how others have done it and why before deciding on an approach.

- The random generator at it's default use will be easy - and does not worry me.  

- ***NO LONGER A BONUS - WILL ATTEMPT IMPLEMENTATION***I would like to find a way to post jobs as well. Will need to venture into the documentation for said API in order to figure out if this is possible and if so - will attempt implementation. ****


#### BONUS

- I would be very excited to try out some sort of local user database to use maybe in .env? I have mildly looked into this already and the process seems quite relative to the environment you're working in as well as the app you are making. I simply don't understand it enough to maintain an exact method that I will use but I am confident that it is possible. 

- Would like to add a feature that encourages you to apply for jobs that you would consider 'out of reach'. With that said, I would not like the function to provide them with irrelevant suggestions (i.e. user is filtering through jobs with entry level requirements. transportation/sanitation. They are encouraged to apply for a paralegal position. That would be not good.). Will consider this implementation and I see this as more than likely to make it's way into the app with it's priority sitting behind my mandated function of 'post' and the accompanied 'user posted jobs section'. 


#### Starter Code
fetch()
.then
.then
.then
.then
.then
.then
.then
.then
.then
{ props }

&& <components/>

(i kid)

///to edit with code on monday when I begin implementation. This weekend will be devoted to studying/homework-catch-up.///
#### end
