
const data = `
[
    {
        "user_id": "1",
        "bio": "A young man ready to help",
        "gender": "Male",
        "occupation": "Software Engineer",
        "profilepic": "",
        "address": {
            "line": "H-no: 9, Ayd Colony",
            "city": "Hyderabad",
            "state": "Telangana",
            "country": "India",
            "location": ""
        },
        "ratings": 5,
        "skills": [
            {
                "category": "Tutoring",
                "subcategory": "Graduation",
                "ratings": "5"
            },
            {
                "category": "Software/IT",
                "subcategory": "DevOps",
                "ratings": "4"
            },
            {
                "category": "Transport",
                "subcategory": "Bike",
                "ratings": "5"
            },
            {
                "category": "Transport",
                "subcategory": "Car",
                "ratings": "4"
            }
        ],
        "totalHelps": "9",
        "totalBids": "29",
        "totalSuccessfulBids": "29",
        "walletBalance": "1500"
    },
    {
        "user_id": "2",
        "bio": "Another young man ready to help",
        "gender": "Male",
        "occupation": "Teacher",
        "profilepic": "",
        "address": {
            "line": "Flat-no: 45, KSN Colony",
            "city": "Hyderabad",
            "state": "Telangana",
            "country": "India",
            "location": ""
        },
        "ratings": 4,
        "skills": [
            {
                "Tutoring": "Tutoring",
                "subcategory": "Secondary",
                "ratings": "5"
            },
            {
                "category": "Logistics",
                "subcategory": "Groceries",
                "ratings": "4"
            },
            {
                "category": "Transport",
                "subcategory": "Bike"
            }
        ],
        "totalHelps": "10",
        "totalBids": "15",
        "totalSuccessfulBids": "12",
        "walletBalance": "900"
    },
    {
        "user_id": "3",
        "bio": "Hey! I am here to help",
        "gender": "Male",
        "occupation": "Private Employee",
        "profilepic": "",
        "address": {
            "line": "Flat-no 25, Jakkas Colony",
            "city": "Hyderabad",
            "state": "Telangana",
            "country": "India",
            "location": ""
        },
        "ratings": 4,
        "skills": [
            {
                "category": "Logistics",
                "subcategory": "Groceries",
                "ratings": "5"
            },
            {
                "category": "Domestic Services",
                "subcategory": "Baby Sitting",
                "ratings": "4"
            }
        ],
        "totalHelps": "5",
        "totalBids": "12",
        "totalSuccessfulBids": "10",
        "walletBalance": "400"
    },
    {
        "user_id": "4",
        "bio": "Mom's little princess",
        "gender": "Female",
        "occupation": "Nurse",
        "profilepic": "",
        "address": {
            "line": "H-no 20, PMS Colony",
            "city": "Hyderabad",
            "state": "Telangana",
            "country": "India",
            "location": ""
        },
        "ratings": 5,
        "skills": [
            {
                "category": "Medical Services",
                "subcategory": "Nursing",
                "ratings": "5"
            },
            {
                "category": "Tutoring",
                "subcategory": "Primary",
                "ratings": "4"
            }
        ],
        "totalHelps": "5",
        "totalBids": "8",
        "totalSuccessfulBids": "10",
        "walletBalance": "300"
    },
    {
        "user_id": "5",
        "bio": "It is such a nice day to help",
        "gender": "Male",
        "occupation": "Business Man",
        "profilepic": "",
        "address": {
            "line": "H-no : 4, SQS Nagar",
            "city": "Hyderabad",
            "state": "Telangana",
            "country": "India",
            "location": ""
        },
        "ratings": 3,
        "skills": [
            {
                "category": "Arts",
                "subcategory": "Painting",
                "ratings": "5"
            },
            {
                "category": "Transport",
                "subcategory": "Car",
                "ratings": "4"
            }
        ],
        "totalHelps": "3",
        "totalBids": "5",
        "totalSuccessfulBids": "5",
        "walletBalance": "600"
    },
    {
        "user_id": "6",
        "bio": "I believe in Karma",
        "gender": "Male",
        "occupation": "Sportsman",
        "profilepic": "",
        "address": {
            "line": "Flat-no: 12, ECIL",
            "city": "Hyderabad",
            "state": "Telangana",
            "country": "India",
            "location": ""
        },
        "ratings": 4,
        "skills": [
            {
                "category": "Transport",
                "subcategory": "Car",
                "ratings": "5"
            },
            {
                "category": "Carpentary Services",
                "subcategory": "Tables/Chairs",
                "ratings": "4"
            }
        ],
        "totalHelps": "6",
        "totalBids": "10",
        "totalSuccessfulBids": "10",
        "walletBalance": "1100"
    },
    {
        "user_id": "7",
        "bio": "I love this app",
        "gender": "Male",
        "occupation": "Electrician",
        "profilepic": "",
        "address": {
            "line": "Flat-no 12/2, Tarnaka",
            "city": "Hyderabad",
            "state": "Telangana",
            "country": "India",
            "location": ""
        },
        "ratings": 4,
        "skills": [
            {
                "category": "Electrical Services",
                "subcategory": "Televisions Services",
                "ratings": "5"
            },
            {
                "category": "Logistics",
                "subcategory": "Groceries",
                "ratings": "4"
            }
        ],
        "totalHelps": "18",
        "totalBids": "12",
        "totalSuccessfulBids": "12",
        "walletBalance": "1500"
    },
    {
        "user_id": "8",
        "bio": "Hey! I am using upakar",
        "gender": "Male",
        "occupation": "Journalist",
        "profilepic": "",
        "address": {
            "line": "Plot 9, Ayd Colony",
            "city": "Hyderabad",
            "state": "Telangana",
            "country": "India",
            "location": ""
        },
        "ratings": 5,
        "skills": [
            {
                "category": "Transport",
                "subcategory": "Bike",
                "ratings": "5"
            },
            {
                "category": "Custom Category",
                "subcategory": "Photography",
                "ratings": "5"
            }
        ],
        "totalHelps": "2",
        "totalBids": "8",
        "totalSuccessfulBids": "8",
        "walletBalance": "1200"
    },
    {
        "user_id": "9",
        "bio": "Available",
        "gender": "Male",
        "occupation": "Bank Employee",
        "profilepic": "",
        "address": {
            "line": "Flat-no :4, Sangam Nagar",
            "city": "Hyderabad",
            "state": "Telangana",
            "country": "India",
            "location": ""
        },
        "ratings": 4,
        "skills": [
            {
                "category": "Transport",
                "subcategory": "Car",
                "ratings": "5"
            },
            {
                "category": "Transport",
                "subcategory": "Bike",
                "ratings": "5"
            }
        ],
        "totalHelps": "15",
        "totalBids": "30",
        "totalSuccessfulBids": "30",
        "walletBalance": "2200"
    },
    {
        "user_id": "10",
        "bio": "Tall guy",
        "gender": "Male",
        "occupation": "Basketball Player",
        "profilepic": "",
        "address": {
            "line": "Flat-no 132, ad Colony",
            "city": "Hyderabad",
            "state": "Telangana",
            "country": "India",
            "location": ""
        },
        "ratings": 4,
        "skills": [
            {
                "category": "Tutoring",
                "subcategory": "Secondary",
                "ratings": "5"
            },
            {
                "category": "Domestic Services",
                "subcategory": "Baby Sitting",
                "ratings": "4"
            }
        ],
        "totalHelps": "10",
        "totalBids": "29",
        "totalSuccessfulBids": "29",
        "walletBalance": "2100"
    }
]`
export const profiles = JSON.parse(data);