
# _FocusHereUi_

#### By **Aaron Brown**

#### A User Interface for the FocusHere API for tracking upcoming classes and focusing efforts for ADHD students and their families.

## Description
This user interface displays schedules, lessons and assignments for students of middle and high school.  It uses the API, whose repository is [here](https://github.com/aaronvbrown/FocusHereApi.Solution).

General statements like "Catch Up On Classwork" and "Get ready for class" can be overwhelming for students with ADHD.  This tool reduces those anxieties by showing only needed and impactful information about upcoming classes, including:
  * lessons (with links)
  * important assignments (with links)
  * important calendar dates

This is intentionally an API so that it can be consumed by varying user interfaces, including web apps and browsers.  In the future, it may link directly to existing tools created by the student's school (Canvas, Jumprope, Etc.) in order to automate data population and feedback from educators. Information will be queried with multiple filters, including default filters based on the current date.


## Technologies Used for this User Interface

* React
* [Visual Studio Code](https://code.visualstudio.com/download)



## Setup Requirements


## API Documentation

### Endpoints
The base URL is: ***https://localhost:7095***

#### Request Structure
```
GET /api/{component}
POST /api/{component}
GET /api/{component}/{id}
PUT /api/{component}/{id}
DELETE /api/{component}/{id}
```

#### Available Components
- Parks

#### Example Queries - Parks

```http://localhost:5000/api/Parks``` (GET, POST)
```http://localhost:5000/api/Parks/1``` (GET, PUT, DELETE)

##### Sample GET Index Response for ```http://localhost:5000/api/Parks```:  
```
[
  {
      "parkId": 1,
      "name": "Yellowstone",
      "state": "Montana",
      "type": "National Park"
  },
  {
      "parkId": 2,
      "name": "Crater Lake",
      "state": "Oregon",
      "type": "National Park"
  }
]
```

##### Sample POST Request ```http://localhost:5000/api/Parks``` 


Request Body:
```
{
    "name": "Mt St Helens",
    "state": "Washington",
    "type": "National Monument"
}
```
Response Body:
```
{
    "parkId": 6,
    "name": "Mt St Helens",
    "state": "Washington",
    "type": "National Monument"
}
```

##### Sample GET Response for ```http://localhost:5000/api/Parks/1```:  
```
  {
      "parkId": 1,
      "name": "Yellowstone",
      "state": "Montana",
      "type": "National Park"
  }
```

##### Sample PUT Request ```http://localhost:5000/api/Parks/1``` 


#### Query String Parameters 
```GET /api/{component}/?{parameter}={value}```

| Parameter | Data Type | Required/Optional | Description |
| :---: | :---: | :---: | :---: |
| name | string | optional | complete name of park (ex. {Crater Lake}, {Yellowstone})
| state | string | optional | complete name of state (ex. {Rhode Island}, {Oregon})
| type | string | optional | complete type of park (ex. {National Park}, {National Monument})
| PageSize | int | optional | number of results per page ( defaults to 2, max 3 )
| PageNumber | int | optional | page number requested (defaults to 1)

Filter results of the Parks index GET request using the above structure.

Example:  ```http://localhost:5000/api/Parks/?type=National Park```

Chain filters together using & to separate the key=value pairs:

Example:  ```http://localhost:5000/api/Parks/?state=washington&PageNumber=2```




## Known Bugs
* Pagination via the "pagination" branch is now working as of 12/3/2023.
* Please report any bugs at the [github repo issues page](https://github.com/aaronvbrown/ParkFinderAPI.Solution/issues)

## Further Exploration
* [Pagination](https://learn.microsoft.com/en-us/aspnet/core/data/ef-mvc/sort-filter-page?view=aspnetcore-6.0)  
- Pagination was implemented for this project.  
- The default page number returned is 1.
- The default page size is 2 and the max page size is 3.


* [Token-Based Authentication](https://www.yogihosting.com/jwt-api-aspnet-core/)
* [API Versioning](https://learn.microsoft.com/en-us/shows/visual-studio-toolbox/versioning-aspnet-core-services)
* [CORS](https://learn.microsoft.com/en-us/aspnet/core/security/cors?view=aspnetcore-6.0)
* General [Guide to Further Exploration with APIs](https://part-time-evening.learnhowtoprogram.com/c-and-net/building-an-api/further-exploration-with-apis) 

## Attributions



## License
MIT License



Copyright (c) 2023 Aaron Brown