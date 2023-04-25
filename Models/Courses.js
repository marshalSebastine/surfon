let Courses = [{title: 'Discover Kayaking 1.5 hrs',startPrice: 1500,popularity: 6,imgName: 'bookkayaking'},
                          {title: 'Discover Standup paddling',startPrice: 1800,popularity: 5, imgName: 'bookstanduppaddling'},  
                          {title: 'Kayaking Course 5 days',startPrice: 8500,popularity: 7, imgName: 'bookkayaking5'},  
                          {title: 'Ocean Swim: Introductory Session 2.5 hrs.',startPrice: 3500,popularity: 6,imgName:'bookoceanswim'},  
                          {title: 'Ocean Swimming Course',startPrice: 14000,popularity: 8, imgName: 'bookoceanswimfull'},  
                          {title: 'SUP Ocean: 5 days Course',startPrice: 8500,popularity: 6,imgName: 'booksupocean5'},  
                          {title: 'SUP PRO: 10 days Course',startPrice: 17000,popularity: 4, imgName: 'booksupocean10'},  
                          {title: 'Discover Surf Standard',startPrice: 1500,endPrice:1800,popularity: 9, imgName: 'bookdiscsurfstandard'},  
                          {title: 'Discover Surf – 101 Private Session',startPrice: 2000,endPrice:2500,popularity: 9, imgName: 'bookdiscsurfprivate'},  
                          {title: 'Discover Surf EXPERIENCE 2.5 hrs',startPrice: 3000, endPrice:3500,popularity: 6,  imgName: 'bookdssurfexp',
                           learn: ['Advanced Introduction to Surfing and ocean.',
                           'Advanced Ocean literacy & safety','Free float: Ocean flotation',
                           'Learn to manage Currents and tides',
                           'Surfing white water waves Longer session How to read the ocean and weather.Deeper Understanding of waves and rips.'],
                            desctitle: '2.5 hours of awesomeness! ',
                            info: ['Tuesday to Sunday','1:1 Instructor Ratio','NON SWIMMERS WELCOME'],
                            descbody: `This is where beginners discover the joy of surfing.
                            Perfect for newbies, novice swimmers who love the ocean.
                            Includes basic ocean safety training, ocean swimming surfing in a One on One format.
                             Brand new package from the ocean experts at  experience`}, 
                          {title: 'First Wave Foundation Course',startPrice: 18000, endPrice:24000,popularity: 3, imgName: 'bookfirstwave'},
                          {title: 'Next Wave Advanced Beginner Course',startPrice: 9600, endPrice:12500,popularity: 3, imgName: 'booknextwavwadvncd'}, 
                          {title: 'Cut back Intermediate Course',startPrice: 8000, endPrice:12000,popularity: 6, imgName: 'bookcutbackcrse'} ]
export let relatedCourses = {'Discover Standup paddling': ['SUP PRO: 10 days Course','SUP Ocean: 5 days Course'],
                     'Discover Kayaking 1.5 hrs':['Kayaking Course 5 days'],
                     'Kayaking Course 5 days': ['Discover Kayaking 1.5 hrs'],
                     'Ocean Swim: Introductory Session 2.5 hrs.': ['Ocean Swimming Course'],
                     'Ocean Swimming Course': ['Ocean Swim: Introductory Session 2.5 hrs.'],
                     'SUP Ocean: 5 days Course': ['SUP PRO: 10 days Course','Discover Standup paddling'],
                     'SUP PRO: 10 days Course':['SUP PRO: 10 days Course','Discover Standup paddling'],
                     'Discover Surf Standard': ['Discover Surf – 101 Private Session','Discover Surf EXPERIENCE 2.5 hrs','First Wave Foundation Course','Next Wave Advanced Beginner Course','Cut back Intermediate Course'],
                     'Discover Surf – 101 Private Session':['Discover Surf Standard','Discover Surf EXPERIENCE 2.5 hrs','First Wave Foundation Course','Next Wave Advanced Beginner Course','Cut back Intermediate Course'],
                     'Discover Surf EXPERIENCE 2.5 hrs': ['Discover Surf Standard','Discover Surf – 101 Private Session','First Wave Foundation Course','Next Wave Advanced Beginner Course','Cut back Intermediate Course'],
                     'First Wave Foundation Course': ['Discover Surf Standard','Discover Surf – 101 Private Session','Discover Surf EXPERIENCE 2.5 hrs','Next Wave Advanced Beginner Course','Cut back Intermediate Course'],
                     'Next Wave Advanced Beginner Course': ['Discover Surf Standard','Discover Surf – 101 Private Session','Discover Surf EXPERIENCE 2.5 hrs','First Wave Foundation Course','Cut back Intermediate Course'],
                     'Cut back Intermediate Course': ['Discover Surf Standard','Discover Surf – 101 Private Session','Discover Surf EXPERIENCE 2.5 hrs','First Wave Foundation Course','Next Wave Advanced Beginner Course'],
                    }

export default Courses

