const data = `
[
    {
        "_id": "1",
        "title": "Deliver Ching's Secret Schezwan Sauce to New Nagole Colony",
        "description": "Need Ching's Secret Schezwan Sauce as I could not get it near my home",
        "requester": {
            "user_id": "2",
            "profile_id": "2"
        },
        "category": "Logistics",
        "sub_category": "Food",
        "created_at": "2020-06-20T08:45:42.498Z",
        "expiration_date": "25 June 2020",
        "help_duration": "- NAN -",
        "bid_credits": "50",
        "bids":[
            {
                "_id": "1",
                "bidder": "9",
                "credits": "65",
                "help_duration": "1 Hours",
                "upakar_id": "1",
                "upakar_title": "Deliver Ching's Secret Schezwan Sauce to New Nagole Colony",
                "comments": "Bidded",
                "otp": "1234",
                "status": "ACCEPTED",
                "isAccepted": true,
                "is_active": "YES"
            }
        ],
        "status": "CREATED",
        "is_available": "YES",
        "is_successful": "NO"
    },
    {
        "_id": "2",
        "title": "Need some Ideas for Science Fair for Class 10th",
        "description":"I am doing my 10th standard and I have a Science Fair on 21st June 2020. So I am short of ideas to implement. Any interesting ideas are welcome",
        "requester": {
            "user_id": "1",
            "profile_id": "1"
        },
        "category": "Tutoring",
        "sub_category": "Secondary",
        "created_at": "2020-06-17T04:45:42.498Z",
        "expiration_date": "19 June 2020",
        "help_duration": " - NAN -",
        "bid_credits": "20",
        "bids":[
            {
                "_id": "2",
                "bidder": "10",
                "credits": "25",
                "help_duration": "-NA-",
                "upakar_id": "2",
                "upakar_title": "Need some Ideas for Science Fair for Class 10th",
                "comments": "Bidded",
                "otp": "1234",
                "status": "ACCEPTED",
                "isAccepted": true,
                "is_active": "YES"
            }
        ],
        "status": "CREATED",
        "is_available": "YES",
        "is_successful": "NO"
    },
    {
        "_id": "3",
        "title": "Need Some one Who can Take care of my Baby for 1 hr on 1 July 2020",
        "description":"I have a baby of age 3 years. I am going out on a work on 1st July. So I need some one who can help me in taking care of the child for an 1hr at around 12pm",
        "requester": {
            "user_id": "5",
            "profile_id": "5"
        },
        "category": "Domestic Services",
        "sub_category": "Baby Sitting",
        "created_at": "2020-06-26T18:45:42.498Z",
        "expiration_date": "30 June 2020",
        "help_duration": " 1 Hours ",
        "bid_credits": "100",
        "bids":[
            {
                "_id": "3",
                "bidder": "7",
                "credits": "125",
                "help_duration": "1 Hours",
                "upakar_id": "3",
                "upakar_title": "Need Oome one Who can Take care of my Baby for 1 hr on 1 July 2020",
                "comments": "Bidded",
                "otp": "1234",
                "status": "ACCEPTED",
                "isAccepted": true,
                "is_active": "YES"
            }
        ],
        "status": "CREATED",
        "is_available": "YES",
        "is_successful": "NO"
    },
    {
        "_id": "4",
        "title": "Small Repair Required for My Wooden Base Pad",
        "description":"My Wooden base pad has become too rough and the wooden pieces are coming out. I need some one who can smoothen it. Thanks",
        "requester": {
            "user_id": "3",
            "profile_id": "3"
        },
        "category": "Carpentry Services",
        "sub_category": "Base Boards",
        "created_at": "2020-06-05T22:22:42.498Z",
        "expiration_date": "18 June 2020",
        "help_duration": " 1 Hours ",
        "bid_credits": "50",
        "bids":[
            {
                "_id": "4",
                "bidder": "8",
                "credits": "65",
                "help_duration": "1 Hours",
                "upakar_id": "4",
                "upakar_title": "Small Repair Required for My Wooden Base Pad",
                "comments": "Bidded",
                "otp": "1234",
                "status": "ACCEPTED",
                "isAccepted": true,
                "is_active": "YES"
            }
        ],
        "status": "CREATED",
        "is_available": "YES",
        "is_successful": "NO"
    },
    {
        "_id": "5",
        "title": "Need a small Repair to my Toilet Flush",
        "description":"My Toilet flush has become loose, So I need some one who can tighten it. ",
        "requester": {
            "user_id": "4",
            "profile_id": "4"
        },
        "category": "Plumbing",
        "sub_category": "Toilet Repair",
        "created_at": "2020-06-11T06:22:42.498Z",
        "expiration_date": "13 June 2020",
        "help_duration": " 0.1 Hours ",
        "bid_credits": "50",
        "bids":[
            {
                "_id": "5",
                "bidder": "6",
                "credits": "65",
                "help_duration": "0.1 Hours",
                "upakar_id": "5",
                "upakar_title": "Need a small Repair to my Toilet Flush",
                "comments": "Bidded",
                "otp": "1234",
                "status": "ACCEPTED",
                "isAccepted": true,
                "is_active": "YES"
            }
        ],
        "status": "CREATED",
        "is_available": "YES",
        "is_successful": "NO"
    },
    {
        "_id": "6",
        "title": "Can Someone make a small Handmade Craft of a Rose for a gift",
        "description":"There is a small kid who loves paper crafts so thought of gifting him a handmade rose But I do not know how to do. If some one can make handmade rose craft and give it would be helpful. Thanks",
        "requester": {
            "user_id": "7",
            "profile_id": "7"
        },
        "category": "Arts",
        "sub_category": "Hand-made Crafts",
        "created_at": "2020-06-14T16:22:42.498Z",
        "expiration_date": "20 June 2020",
        "help_duration": "-NA-",
        "bid_credits": "100",
        "bids":[
            {
                "_id": "6",
                "bidder": "4",
                "credits": "125",
                "help_duration": "-NA-",
                "upakar_id": "6",
                "upakar_title": "Can Someone make a small Handmade Craft of a Rose for a gift",
                "comments": "Bidded",
                "otp": "1234",
                "status": "ACCEPTED",
                "isAccepted": true,
                "is_active": "YES"
            }
        ],
        "status": "CREATED",
        "is_available": "YES",
        "is_successful": "NO"
    },
    {
        "_id": "7",
        "title": "Need a Small connection Fix for a Mixy Grinder",
        "description":"The regulator connection of my grinder has come out. It is a very small fix but do not know how to do. If some one can help me out in fixing it would be helpful",
        "requester": {
            "user_id": "6",
            "profile_id": "6"
        },
        "category": "Electrical Services",
        "sub_category": "Kitchen Appliances Repair",
        "created_at": "2020-06-22T16:22:42.498Z",
        "expiration_date": "24 June 2020",
        "help_duration": " 0.2 Hours ",
        "bid_credits": "60",
        "bids":[
            {
                "_id": "7",
                "bidder": "3",
                "credits": "65",
                "help_duration": "1 Hours",
                "upakar_id": "7",
                "upakar_title": "Need a Small connection Fix for a Mixy Grinder",
                "comments": "Bidded",
                "otp": "1234",
                "status": "ACCEPTED",
                "isAccepted": true,
                "is_active": "YES"
            }
        ],
        "status": "CREATED",
        "is_available": "YES",
        "is_successful": "NO"
    },
    {
        "_id": "8",
        "title": "Windows 10 Installation on my Laptop",
        "description":"I am trying to install windows 10 on my laptop. I need some one who can help me out in installing the OS",
        "requester": {
            "user_id": "8",
            "profile_id": "8"
        },
        "category": "Software/IT",
        "sub_category": "OS/Software Installations",
        "created_at": "2020-06-25T16:22:42.498Z",
        "expiration_date": "28 June 2020",
        "help_duration": "-NA-",
        "bid_credits": "100",
        "bids":[
            {
                "_id": "8",
                "bidder": "2",
                "credits": "125",
                "help_duration": "-NA-",
                "upakar_id": "8",
                "upakar_title": "Windows 10 Installation on my Laptop",
                "comments": "Bidded",
                "otp": "1234",
                "status": "ACCEPTED",
                "isAccepted": true,
                "is_active": "YES"
            }
        ],
        "status": "CREATED",
        "is_available": "YES",
        "is_successful": "NO"
    },
    {
        "_id": "9",
        "title": "Need an alternative for Oflox Eye Drops",
        "description":" Am using Oflox eye drops but it is out of stock near my store. Is there any alternative for that so that I can use it for now tentatively",
        "requester": {
            "user_id": "9",
            "profile_id": "9"
        },
        "category": "Medical Services",
        "sub_category": "Pharmacy Services",
        "created_at": "2020-06-02T09:22:42.498Z",
        "expiration_date": "05 June 2020",
        "help_duration": "-NA-",
        "bid_credits": "20",
        "bids":[
            {
                "_id": "9",
                "bidder": "5",
                "credits": "30",
                "help_duration": "-NA-",
                "upakar_id": "9",
                "upakar_title": "Need an alternative for Oflox Eye Drops",
                "comments": "Bidded",
                "otp": "1234",
                "status": "ACCEPTED",
                "isAccepted": true,
                "is_active": "YES"
            }
        ],
        "status": "CREATED",
        "is_available": "YES",
        "is_successful": "NO"
    },
    {
        "_id": "10",
        "title": "Drop at MGBS BusStop from Nagole Metro on 28 JUNE 2020",
        "requester": {
            "user_id": "10",
            "profile_id": "10"
        },
        "category": "Transport",
        "sub_category": "BIke",
        "created_at": "2020-06-28T09:22:42.498Z",
        "expiration_date": "28 June 2020",
        "help_duration": " 1 Hours ",
        "bid_credits": "100",
        "status": "CREATED",
        "is_available": "YES",
        "is_successful": "NO",
        "bids":[
            {
                "_id": "10",
                "bidder": "1",
                "credits": "120",
                "help_duration": "1 Hours",
                "upakar_id": "10",
                "upakar_title": "Drop at MGBS BusStop from Nagole Metro on 28 JUNE 2020",
                "comments": "Bidded",
                "otp": "1234",
                "status": "ACCEPTED",
                "isAccepted": true,
                "is_active": "YES"
            }
        ]
    },
    {
        "_id": "11",
        "title": "Deliver List of Medicines to Medipally",
        "description": "I need the below list of medicines as am unable to get them by myself from the store. The medicines are as follows",
        "requester": {
            "user_id": "10",
            "profile_id": "10"
        },
        "category": "Tutoring",
        "sub_category": "Secondary",
        "created_at": "2020-06-27T04:45:42.498Z",
        "expiration_date": "30 June 2020",
        "help_duration": " 0.5 Hours",
        "bid_credits": "50",
        "bids": [
            {
                "_id": "1",
                "bidder": "1",
                "credits": "65",
                "help_duration": "1 Hours",
                "upakar_id": "11",
                "upakar_title": "Deliver List of Medicines to Medipally",
                "comments": "Bidded",
                "otp": "1234",
                "status": "ACCEPTED",
                "isAccepted": true,
                "is_active": "YES"
            },
            {
                "_id": "2",
                "bidder": "2",
                "credits": "80",
                "help_duration": "3 Hours",
                "upakar_id": "11",
                "upakar_title": "Deliver List of Medicines to Medipally",
                "comments": "Bidded",
                "otp": "2345",
                "status": "PENDING",
                "isAccepted": false,
                "is_active": "YES"
            },
            {
                "_id": "3",
                "bidder": "3",
                "credits": "70",
                "help_duration": "2 Hours",
                "upakar_id": "11",
                "upakar_title": "Deliver List of Medicines to Medipally",
                "comments": "Bidded",
                "otp": "3456",
                "status": "PENDING",
                "isAccepted": false,
                "is_active": "YES"
            }
        ],
        "status": "CREATED",
        "is_available": "YES",
        "is_successful": "NO"
    },
    {
        "_id": "12",
        "title": "Need a brief explanation on Algebra for 8th Class Student",
        "description": "My son studying his 8th , has his maths exam on 1 JULY. He's weak at Algebra so if some one can teach him the basis on algebra it would help him on his exam.",
        "requester": {
            "user_id": "8",
            "profile_id": "8"
        },
        "category": "Tutoring",
        "sub_category": "Secondary",
        "created_at": "2020-06-27T04:45:42.498Z",
        "expiration_date": "30 June 2020",
        "help_duration": " 0.5 Hours",
        "bid_credits": "50",
        "bids": [
            {
                "_id": "4",
                "bidder": "4",
                "credits": "65",
                "help_duration": "1 Hours",
                "upakar_id": "12",
                "upakar_title": "Need a brief explanation on Algebra for 8th Class Student",
                "comments": "Bidded",
                "otp": "1234",
                "status": "ACCEPTED",
                "isAccepted": true,
                "is_active": "YES"
            },
            {
                "_id": "5",
                "bidder": "5",
                "credits": "100",
                "help_duration": "0.5 Hours",
                "upakar_id": "12",
                "upakar_title": "Need a brief explanation on Algebra for 8th Class Student",
                "comments": "Bidded",
                "otp": "2345",
                "status": "PENDING",
                "isAccepted": false,
                "is_active": "YES"
            },
            {
                "_id": "6",
                "bidder": "6",
                "credits": "80",
                "help_duration": "2 Hours",
                "upakar_id": "12",
                "upakar_title": "Need a brief explanation on Algebra for 8th Class Student",
                "comments": "Bidded",
                "otp": "3456",
                "status": "PENDING",
                "isAccepted": false,
                "is_active": "YES"
            }
        ],
        "status": "CREATED",
        "is_available": "YES",
        "is_successful": "NO"
    },
    {
        "_id": "13",
        "title": "Need My coat Ironed as there is no Iron shops nearby",
        "description": " There are no Iron shops near by, So I need a coat Ironed for a meeting",
        "requester": {
            "user_id": "2",
            "profile_id": "2"
        },
        "category": "Domestic Services",
        "sub_category": "Laundry/Ironing",
        "created_at": "2020-06-26T18:45:42.498Z",
        "expiration_date": "28 June 2020",
        "help_duration": " 0.2 Hours",
        "bid_credits": "25",
        "bids": [
            {
                "_id": "8",
                "bidder": "8",
                "credits": "35",
                "help_duration": "0.5 HOurs",
                "upakar_id": "13",
                "upakar_title": "Need My coat Ironed as there is no Iron shops nearby",
                "comments": "Bidded",
                "otp": "2345",
                "status": "PENDING",
                "isAccepted": false,
                "is_active": "YES"
            },
            {
                "_id": "9",
                "bidder": "9",
                "credits": "30",
                "help_duration": "1 Hours",
                "upakar_id": "13",
                "upakar_title": "Need My coat Ironed as there is no Iron shops nearby",
                "comments": "Bidded",
                "otp": "3456",
                "status": "PENDING",
                "isAccepted": false,
                "is_active": "YES"
            }
        ],
        "status": "CREATED",
        "is_available": "YES",
        "is_successful": "NO"
    },
    {
        "_id": "14",
        "title": " Small Repair for my Book Case",
        "description": "The base wood of my book case has been broken. So I need some one who can fix the base",
        "requester": {
            "user_id": "7",
            "profile_id": "7"
        },
        "category": "Carpentry Services",
        "sub_category": "Book Case",
        "created_at": "2020-06-05T22:22:42.498Z",
        "expiration_date": "10 June 2020",
        "help_duration": " 0.2 Hours ",
        "bid_credits": "70",
        "bids": [
            {
                "_id": "10",
                "bidder": "3",
                "credits": "80",
                "help_duration": "0.5 Hours",
                "upakar_id": "14",
                "upakar_title": "Small Repair for my Book Case",
                "comments": "Bidded",
                "otp": "1234",
                "status": "ACCEPTED",
                "isAccepted": true,
                "is_active": "YES"
            },
            {
                "_id": "11",
                "bidder": "4",
                "credits": "90",
                "help_duration": "1 Hours",
                "upakar_id": "14",
                "upakar_title": "Small Repair for my Book Case",
                "comments": "Bidded",
                "otp": "2345",
                "status": "PENDING",
                "isAccepted": false,
                "is_active": "YES"
            },
            {
                "_id": "12",
                "bidder": "9",
                "credits": "100",
                "help_duration": "1 Hours",
                "upakar_id": "14",
                "upakar_title": "Small Repair for my Book Case",
                "comments": "Bidded",
                "otp": "9989",
                "status": "ACCEPTED | PENDING",
                "isAccepted": false,
                "is_active": "YES"
            }
        ],
        "status": "CREATED",
        "is_available": "YES",
        "is_successful": "NO"
    },
    {
        "_id": "15",
        "title": "Need to tighten my Bathroom Tap",
        "description": " The tap has become very loose because of which the water is getting leaked. It is just a matter of tightening it with the driver but am not so good at it. If some one can help on that would be great",
        "requester": {
            "user_id": "6",
            "profile_id": "6"
        },
        "category": "Plumbing",
        "sub_category": "Tap Repair",
        "created_at": "2020-06-11T06:22:42.498Z",
        "expiration_date": "13 June 2020",
        "help_duration": " 0.1 Hours ",
        "bid_credits": "80",
        "bids": [
            {
                "_id": "13",
                "bidder": "4",
                "credits": "100",
                "help_duration": "0.5 Hours",
                "upakar_id": "15",
                "upakar_title": "Need to tighten my Bathroom Tap",
                "comments": "Bidded",
                "otp": "1222",
                "status": "ACCEPTED",
                "isAccepted": true,
                "is_active": "YES"
            },
            {
                "_id": "14",
                "bidder": "3",
                "credits": "120",
                "help_duration": "0.5 Hours",
                "upakar_id": "15",
                "upakar_title": "Need to tighten my Bathroom Tap",
                "comments": "Bidded",
                "otp": "1213",
                "status": "PENDING",
                "isAccepted": false,
                "is_active": "YES"
            },
            {
                "_id": "15",
                "bidder": "8",
                "credits": "200",
                "help_duration": "0.5 Hours",
                "upakar_id": "15",
                "upakar_title": "Need to tighten my Bathroom Tap",
                "comments": "Bidded",
                "otp": "2344",
                "status": "PENDING",
                "isAccepted": false,
                "is_active": "YES"
            }
        ],
        "status": "CREATED",
        "is_available": "YES",
        "is_successful": "NO"
    },
    {
        "_id": "16",
        "title": "Need some real time information on Guitar for a speech in my school",
        "description": " Am preparing for a speech on Guitar so wanted some real time facts on guitar",
        "requester": {
            "user_id": "5",
            "profile_id": "5"
        },
        "category": "Arts",
        "sub_category": "Musical Instrument",
        "created_at": "2020-06-15T16:22:42.498Z",
        "expiration_date": "20 June 2020",
        "help_duration": "-NA-",
        "bid_credits": "50",
        "bids": [
            {
                "_id": "16",
                "bidder": "6",
                "credits": "75",
                "help_duration": "-NA-",
                "upakar_id": "16",
                "upakar_title": "Need some real time information on Guitar for a speech in my school",
                "comments": "Bidded",
                "otp": "1111",
                "status": "ACCEPTED",
                "isAccepted": true,
                "is_active": "YES"
            },
            {
                "_id": "17",
                "bidder": "4",
                "credits": "80",
                "help_duration": "-NA-",
                "upakar_id": "16",
                "upakar_title": "Need some real time information on Guitar for a speech in my school",
                "comments": "Bidded",
                "otp": "1211",
                "status": "PENDING",
                "isAccepted": false,
                "is_active": "NO"
            },
            {
                "_id": "18",
                "bidder": "2",
                "credits": "100",
                "help_duration": "-NA-",
                "upakar_id": "16",
                "upakar_title": "Need some real time information on Guitar for a speech in my school",
                "comments": "Bidded",
                "otp": "1223",
                "status": "PENDING",
                "isAccepted": false,
                "is_active": "YES"
            }
        ],
        "status": "CREATED",
        "is_available": "YES",
        "is_successful": "NO"
    },
    {
        "_id": "17",
        "title": "Need a fix for my Fan regulator",
        "description": " There is some connection problem with my fan regulator. Need some one who can fix it",
        "requester": {
            "user_id": "4",
            "profile_id": "4"
        },
        "category": "Electrical Services",
        "sub_category": "Fan Service",
        "created_at": "2020-06-22T16:22:42.498Z",
        "expiration_date": "24 June 2020",
        "help_duration": " 0.2 Hours ",
        "bid_credits": "80",
        "bids": [
            {
                "_id": "19",
                "bidder": "3",
                "credits": "80",
                "help_duration": "0.5 Hours",
                "upakar_id": "17",
                "upakar_title": "Need a fix for my Fan regulator",
                "comments": "Bidded",
                "otp": "1234",
                "status": "ACCEPTED",
                "isAccepted": true,
                "is_active": "YES"
            },
            {
                "_id": "20",
                "bidder": "6",
                "credits": "90",
                "help_duration": "0.5 Hours",
                "upakar_id": "17",
                "upakar_title": "Need a fix for my Fan regulator",
                "comments": "Bidded",
                "otp": "9876",
                "status": "PENDING",
                "isAccepted": false,
                "is_active": "YES"
            },
            {
                "_id": "21",
                "bidder": "9",
                "credits": "60",
                "help_duration": "1 Hour",
                "upakar_id": "17",
                "upakar_title": "Need a fix for my Fan regulator",
                "comments": "Bidded",
                "otp": "2122",
                "status": "PENDING",
                "isAccepted": false,
                "is_active": "YES"
            }
        ],
        "status": "CREATED",
        "is_available": "YES",
        "is_successful": "NO"
    },
    {
        "_id": "18",
        "title": "Need to Enable HyperWare on my HP Laptop",
        "description": " I need to install Virtual box but my laptop is not supporting as Hyperware is not enabled. If some one can help me out in enabling it would be helpful",
        "requester": {
            "user_id": "2",
            "profile_id": "2"
        },
        "category": "Software/IT",
        "sub_category": "Software Troubleshooting",
        "created_at": "2020-06-25T16:22:42.498Z",
        "expiration_date": "28 June 2020",
        "help_duration": "-NA-",
        "bid_credits": "50",
        "bids": [
            {
                "_id": "22",
                "bidder": "3",
                "credits": "75",
                "help_duration": "-NA-",
                "upakar_id": "18",
                "upakar_title": "Need to Enable HyperWare on my HP Laptop",
                "comments": "Bidded",
                "otp": "1234",
                "status": "ACCEPTED",
                "isAccepted": true,
                "is_active": "YES"
            },
            {
                "_id": "23",
                "bidder": "1",
                "credits": "100",
                "help_duration": "-NA-",
                "upakar_id": "18",
                "upakar_title": "Need to Enable HyperWare on my HP Laptop",
                "comments": "Bidded",
                "otp": "2333",
                "status": "PENDING",
                "isAccepted": false,
                "is_active": "YES"
            },
            {
                "_id": "24",
                "bidder": "9",
                "credits": "100",
                "help_duration": "-NA-",
                "upakar_id": "18",
                "upakar_title": "Need to Enable HyperWare on my HP Laptop",
                "comments": "Bidded",
                "otp": "3212",
                "status": "ACCEPTED",
                "isAccepted": false,
                "is_active": "YES"
            }
        ],
        "status": "CREATED",
        "is_available": "YES",
        "is_successful": "NO"
    },
    {
        "_id": "19",
        "title": "Need a small information regarding Neuroscience Nursing for my project",
        "description": " doing a project on Neuroscience Nursing. Need a small explanation on a certain topic. If some one can explain, that would be helpful",
        "requester": {
            "user_id": "3",
            "profile_id": "3"
        },
        "category": "Medical Services",
        "sub_category": "Nursing",
        "created_at": "2020-06-02T09:22:42.498Z",
        "expiration_date": "05 June 2020",
        "help_duration": "-NA-",
        "bid_credits": "50",
        "bids": [
            {
                "_id": "25",
                "bidder": "7",
                "credits": "65",
                "help_duration": "-NA-",
                "upakar_id": "19",
                "upakar_title": "Need a small information regarding Neuroscience Nursing for my project",
                "comments": "Bidded",
                "otp": "2234",
                "status": "ACCEPTED",
                "isAccepted": true,
                "is_active": "YES"
            },
            {
                "_id": "26",
                "bidder": "9",
                "credits": "75",
                "help_duration": "-NA-",
                "upakar_id": "19",
                "upakar_title": "Need a small information regarding Neuroscience Nursing for my project",
                "comments": "Bidded",
                "otp": "1245",
                "status": "PENDING",
                "isAccepted": false,
                "is_active": "YES"
            },
            {
                "_id": "27",
                "bidder": "2",
                "credits": "100",
                "help_duration": "-NA-",
                "upakar_id": "19",
                "upakar_title": "Need a small information regarding Neuroscience Nursing for my project",
                "comments": "Bidded",
                "otp": "2342",
                "status": "PENDING",
                "isAccepted": false,
                "is_active": "YES"
            }
        ],
        "status": "CREATED",
        "is_available": "YES",
        "is_successful": "NO"
    },
    {
        "_id": "20",
        "title": "Need a small fix for my bike brakes",
        "description": " My bike brakes have become very loose unable to tighten it. Need some one who can help me out in tightening it",
        "requester": {
            "user_id": "1",
            "profile_id": "1"
        },
        "category": "Mechanic Services",
        "sub_category": "Bike Services",
        "created_at": "2020-06-17T09:22:42.498Z",
        "expiration_date": "18 June 2020",
        "help_duration": " 0.1 Hours ",
        "bid_credits": "30",
        "bids": [
            {
                "_id": "28",
                "bidder": "2",
                "credits": "40",
                "help_duration": "0.5 Hours",
                "upakar_id": "20",
                "upakar_title": "Need a small fix for my bike brakes",
                "comments": "Bidded",
                "otp": "1233",
                "status": "ACCEPTED",
                "isAccepted": true,
                "is_active": "YES"
            },
            {
                "_id": "29",
                "bidder": "9",
                "credits": "50",
                "help_duration": "1 Hours",
                "upakar_id": "20",
                "upakar_title": "Need a small fix for my bike brakes",
                "comments": "Bidded",
                "otp": "3234",
                "status": "PENDING",
                "isAccepted": false,
                "is_active": "YES"
            },
            {
                "_id": "30",
                "bidder": "6",
                "credits": "60",
                "help_duration": "1 Hours",
                "upakar_id": "20",
                "upakar_title": "Need a small fix for my bike brakes",
                "comments": "Bidded",
                "otp": "8569",
                "status": "ACCEPTED",
                "isAccepted": false,
                "is_active": "YES"
            }
        ],
        "status": "CREATED",
        "is_available": "YES",
        "is_successful": "NO"
    }
]
`
export const helpDetails = JSON.parse(data);