# project-unit2-react

####

**NYC 311 Inquiry**
**Charles Korpics**
**Unit-2 Project SEI**


#### Overview

                          ***Link to rought draft of mock up (still making more of these)***
                                             
                                             
                                          https://imgur.com/a/KvnSb5J



                                              ***Link to Api***

https://data.cityofnewyork.us/City-Government/311-Call-Center-Inquiry/tdd6-3ysr



                                        Find out about all 311 calls in NYC
                            
                        
Homepage will consists of five clickable route components that will render the data correlated with said component.

 **Homepage/App.js** this will render the ten most recent (by i.d) calls in a very simplistic scrollable canvas (subject to change)
 
 **RANDOM** button that renders a list of 10 random 311 calls in same format as initial render - replacing the initial render. 
 
 **TOPICS** Route Component that renders a list of 911 calls that correlate with the Topic selected. Will compose an algorithm that maps through entire data set and attaches each appropriate index/object to corresponding array (this will depend on certain substring matches within props.description). If an index falls out of any category mentioned - it will be rendered under 'Other' if selected/toggled true. 
 
 **SEARCH** a button that brings you to a clean web page where search parameters can be set to allow manual/detailed searching through the data set. 

data, agency, resolution = false
anything entered within the user form will specifically search within the keys specified when selected (toggled to true).
Will initially set the state of description to true as there must be some default search method and I would imagine the most common use would be to search through description. 
 
 **ALL** renders the json object in it's entirety in table format. I will need to figure out if this is even allowed. I have no issue with leaving this function/component out of scope. 



#### Example of JSON object from above API in table format.
https://github.com/Korpics/project-unit2-react/blob/master/Screen%20Shot%202019-04-19%20at%2010.58.33%20AM.png

#### Problems I expect ####

- This dataset is very large. I think I may need to look into the documentation to decide if I can specify a 'max date' parameter or if I need to conditionally work around that myself. 

- The algorithm to assign certain topics will be very much so time consuming - but I am genuinely interested in setting that up and maximizing it's sensibility. 

- There will need to be functionality that makes sure that the topic selected is the ONLY one selected. I do not want to worry about rendering a list of calls that fall under both 'this', and 'that' topic. 

- While consiering the above potential issue - I also may need to be sure that the search function only allows one 'topic' to search/(map/filter) through - though I could imagine there is a way to allow more than one. Will know more of what I can and or can't do in this regard in a few days. 

***04/19/19 4pm still working on this but I am definitely feeling more inclined to give this one a go. Seems both fun and attainable***










                            
