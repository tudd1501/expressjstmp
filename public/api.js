SERVER_URL = "http://doductu.com/";

/* ============ STATUS CODE ============ */

/* -99 : "Loi He Thong"
/* -1  : "Loi Input"
/* 1   : "Thanh cong"

/* ========== END STATUS CODE ========== */

/* ==================== USER MODULES ==================== */

/*
	REGISTER
	LOCAL LOGIN
	FACEBOOK LOGIN
*/

////// REGISTER //////
"users/register"
"req": {
    "username": , //(string) | username
    "password": , //(string) | password,
    "email": , //(string) | email
    "name": , //(string) | name
}
"res": {
    "code": , //(int)    | Response's Code
    "msg": , //(string) | Response's Message
}

////// LOCAL LOGIN //////
"users/login"
"req": {
    "username": , //(string) | username
    "password": , //(string) | password
}
"res": {
    "code": , //(int)    | Response's Code
    "msg": , //(string) | Response's Message
    "data": {
        "_id": , //(string) | _id
        "user": , //(string) | username
        "email": , //(string) | email
        "name": , //(string) | name
        "token": , //(string) | token để truy cập
    }
}

///// FACEBOOK LOGIN /////
"users/facebook-login"
"req": {
    "token": , //(string)|Facebook app's token
}
"res": {
    "code": , // (int)    | Response's Code
    "msg": , // (string) | Response's Message
    "data": {
        "_id": , // (string) | _id
        "username": , // (string) | username
        "email": , // (string) | email
        "name": , // (string) | name
        "token": , // (string) | token để truy cập
    }
}

///// CHANGE PASSWORD /////
"/users/change-password"
"req":{
    password      : , // (String) | Mật khẩu hiện tại
    newpassword   : , // (String) | Mật khẩu mới
    renewpassword :  // (String) | Xác nhận mật khẩu mới
}
"res":{
    code : , // (Integer) | Response's Code
    msg  : , // (String) | Response's Msg
}

/* ==================== EVENT MODULES ==================== */

/*
	GET ALL
	GET EVENT'S DETAIL BY ID
*/

///// GET ALL /////
"events/getAll"
"res": {
    "code": , // (int)    | Response's Code
    "msg": , // (string) | Response's Message
    "data": [{
        "_id": "58cfd97b439b51ba4b7109d4",
        "name": "su kien sappar",
        "startDay": "13/10/2017",
        "endDay": "13/12/2017",
        "images": [
            "public/images/event/5887899f-79d9-4ea7-985c-7b466deff5e5.jpg",
            "public/images/event/93216ef1-4301-4f32-beab-35e524c41c6b.png",
            "public/images/event/2ebfa545-2857-43fe-b9f6-2e67a591fb7b.png",
            "public/images/event/7121890e-e148-4e97-a7d5-9d976cda0cc8.png"
        ],
    }, {
        "name": "Chương trình giao lưu âm nhạc",
        "startDay": "23/3/2017",
        "endDay": "30/4/2017",
        "images": [
            "public/images/event/9304c492-30cb-4403-880f-d41d9d1bd715.jpg",
            "public/images/event/b8e453b3-a139-4cd2-90e4-895d7b978481.jpg",
            "public/images/event/da7c0cc6-2187-4717-9ae7-70769cc5716b.jpg",
            "public/images/event/4090041d-d77a-4bae-9a51-2a061393bd69.jpg",
            "public/images/event/07aedfd5-f61a-4225-8a05-6f31ea5bb113.jpg"
        ]
    }]
}

///// GET EVENT'S DETAIL BY ID /////
"events/GetEventDetailByID"
"req": {
    "_id": , // (string) | Event's ID
}
"res": {
    "code": , // (int)    | Response's Code
    "msg": , // (string) | Response's Message
    "data": {
        "_id": "58cfd97b439b51ba4b7109d4",
        "name": "su kien sappar",
        "address": "15 lao cai",
        "price": "15000",
        "timeInDay": "7:00 - 9:00",
        "timeInWeek": "hang ngay",
        "intro": "dia diem du lich",
        "advice": "",
        "startDay": "13/10/2017",
        "endDay": "13/12/2017",
        "__v": 0,
        "reviews": [],
        "images": [
            "public/images/event/5887899f-79d9-4ea7-985c-7b466deff5e5.jpg",
            "public/images/event/93216ef1-4301-4f32-beab-35e524c41c6b.png",
            "public/images/event/2ebfa545-2857-43fe-b9f6-2e67a591fb7b.png",
            "public/images/event/7121890e-e148-4e97-a7d5-9d976cda0cc8.png"
        ],
    }
}

/* ==================== PLACE MODULES ==================== */

/*
	GET ALL DISTRICTS
	GET ALL CATEGORIES
	GET ALL CATEGORIES WITH TAGS 
	GET ALL PLACES
	GET PLACE DETAIL BY ID
	GET PLACES IN DISTRICT
	GET PLACES BY CATEGORIES
    ADD REVIEWS
*/

///// GET ALL DISTRICTS //////
"places/get-districts"
"res": {
    "code": , // (int)    | Response's Code
    "msg": , // (string) | Response's Message
    "data": [{
        "_id": "58d2264dd72f4510f35c5345",
        "name": "Mù cang chải",
        "image": "/public/images/noimage.png",
        "placeCount": 0
    }, {
        "_id": "58d22739616e49115cf8739b",
        "name": "Mường Khuơng",
        "image": "/public/images/noimage.png",
        "placeCount": 0
    }, {
        "_id": "58d22bbc1479ce126ef5f7f0",
        "name": "Thành phố Lào Cai",
        "image": "/public/images/noimage.png",
        "placeCount": 2
    }]
}

///// GET ALL CATEGORIES //////
"places/get-categories"
"res": {
    "code": , // (int)    | Response's Code
    "msg": , // (string) | Response's Message
    "data": [{
        "_id": "58d1faaf2bdac709eb7c4d97",
        "name": "Địa điểm ăn uống",
        "image": "/public/images/noimage.png"
    }, {
        "_id": "58d1fad32bdac709eb7c4d98",
        "name": "an uong",
        "image": "/public/images/noimage.png"
    }]
}

///// GET ALL CATEGORIES WITH TAGS /////
"places/get-categories-with-tags"
"res": {
    "code": , // (int)    | Response's Code
    "msg": , // (string) | Response's Message
    "data": [{
        "_id": "58d1faaf2bdac709eb7c4d97",
        "name": "Địa điểm ăn uống",
        "tags": [{
            "_id": "58d24e62c1089b1d28272511",
            "name": "Đồ ăn dân tộc"
        }, {
            "_id": "58d3520779f480347359c28d",
            "name": "An uong linh tinh"
        }]
    }, {
        "_id": "58d1faff751b2b0a06d102f6",
        "name": "an uong",
        "tags": []
    }, {
        "_id": "58d1fad32bdac709eb7c4d98",
        "name": "an uong",
        "tags": []
    }, {
        "_id": "58d22617d72f4510f35c5344",
        "name": "Mù cang chải",
        "tags": []
    }]
}

///// GET ALL PLACES /////
"places/get-places"
"res": {
    "code": , // (int)    | Response's Code
    "msg": , // (string) | Response's Message
    "data": [{
        "_id": "58d2302e7feed3140331a1b5",
        "name": "Phở Bắc Hà Chi Nhanh 1",
        "description": "Phở Bắc Hà là 1 món ăn đặc biệt với bánh phở đen và huơng vị đậm đà",
        "displayPrice": "45.000",
        "openTime": "6:00 - 11:00",
        "images": [
            "public/images/place/c2823a3d-43b9-4eba-b905-5c41e1a16006.jpg",
            "public/images/place/bd1680fe-6da3-4eed-a096-086e4863cbb5.jpg"
        ]
    }, {
        "_id": "58d230707feed3140331a1b6",
        "name": "Phở Bắc Hà Chi Nhanh 1",
        "description": "Phở Bắc Hà là 1 món ăn đặc biệt với bánh phở đen và huơng vị đậm đà",
        "displayPrice": "45.000",
        "openTime": "6:00 - 11:00",
        "images": [
            "public/images/place/c2823a3d-43b9-4eba-b905-5c41e1a16006.jpg",
            "public/images/place/bd1680fe-6da3-4eed-a096-086e4863cbb5.jpg"
        ]
    }]
}

///// GET PLACE DETAIL BY ID /////
"places/get-place-detail-by-id"
"req": {
    _id: , //(string)| place's ID
}
"res": {
    "code": , // (int)    | Response's Code
    "msg": , // (string) | Response's Message
    "data": {
        "_id": "58d2369e85b32315e3a66520",
        "name": "Phở Bắc Hà Chi Nhanh 1",
        "address": "Trung tâm thành phố Lào Cai",
        "intro": "Quản phở Bắc Hà nổi tiếng tại thành phố Lào Cai",
        "description": "Phở Bắc Hà là 1 món ăn đặc biệt với bánh phở đen và huơng vị đậm đà",
        "displayPrice": "45.000",
        "minimumPrice": 10,
        "maximumPrice": 150,
        "openTime": "6:00 - 11:00",
        "visitTime": "1 giờ",
        "district": "58d22bbc1479ce126ef5f7f0",
        "__v": 0,
        "images": [
            "public/images/place/c2823a3d-43b9-4eba-b905-5c41e1a16006.jpg",
            "public/images/place/bd1680fe-6da3-4eed-a096-086e4863cbb5.jpg"
        ],
        "advice": [],
        "review": [],
        "tags": [
            "58d1f35ec6695306f920300d"
        ],
        "categories": [
            "58d1faaf2bdac709eb7c4d97",
            "58d1fad32bdac709eb7c4d98",
            "58d1faff751b2b0a06d102f6",
            "58d1fb19dbcd4b0a13bdf3ea"
        ],
        "location": {
            "lat": 22.44596,
            "lng": 103.997781
        }
    }
}

///// GET PLACES IN DISTRICT /////
/*
	Lấy các địa điểm thuộc một quận huyện tại Lào Cai.
	Chú ý: 
		- Nếu muốn lọc theo categories thì thêm trường categories vào data gửi lên.
*/
"places/get-places-in-district"
"req": {
    _id: , //(String)        | District's ID,
    categories: , //(Array[string]) | Searching by Categories
}
"res": {
    "code": , // (int)    | Response's Code
    "msg": , // (string) | Response's Message
    "data": [{
        "_id": "58d2369e85b32315e3a66520",
        "name": "Phở Bắc Hà Chi Nhanh 1",
        "description": "Phở Bắc Hà là 1 món ăn đặc biệt với bánh phở đen và huơng vị đậm đà",
        "displayPrice": "45.000",
        "openTime": "6:00 - 11:00",
        "images": [
            "public/images/place/c2823a3d-43b9-4eba-b905-5c41e1a16006.jpg",
            "public/images/place/bd1680fe-6da3-4eed-a096-086e4863cbb5.jpg"
        ]
    }]
}

///// GET PLACES BY CATEGORIES /////
/*
	req : {categories}               => search by categories
	req : {categories,keywords}      => search by categories and keywords
	req : {categories,tags}          => search by categories and tags
	req : {categories,tags,keywords} => search by categories,tags and keywords

*/
"places/get-places-by-categories"
"req": {
    "categories": , // (Array[String]) | Category's IDs
    "tags": , // (Array[String]) | Tag's IDs
    "keywords": , // (Array[String]) | keywords
}
"res": {
    "code": , // (int)    | Response's Code
    "msg": , // (string) | Response's Message
    "data": [{
        "_id": "58d2369e85b32315e3a66520",
        "name": "Phở Bắc Hà Chi Nhanh 1",
        "description": "Phở Bắc Hà là 1 món ăn đặc biệt với bánh phở đen và huơng vị đậm đà",
        "displayPrice": "45.000",
        "openTime": "6:00 - 11:00",
        "images": [
            "public/images/place/c2823a3d-43b9-4eba-b905-5c41e1a16006.jpg",
            "public/images/place/bd1680fe-6da3-4eed-a096-086e4863cbb5.jpg"
        ]
    }]
}

///// GET PLACES BY KEYWORDS /////
"places/get-places-by-keywords"
"req": {
    "keywords": , // (Array[String]) | keywords
}
"res": {
    "code": , // (int)    | Response's Code
    "msg": , // (string) | Response's Message
    "data": [{
        "_id": "58d2369e85b32315e3a66520",
        "name": "Phở Bắc Hà Chi Nhanh 1",
        "description": "Phở Bắc Hà là 1 món ăn đặc biệt với bánh phở đen và huơng vị đậm đà",
        "displayPrice": "45.000",
        "openTime": "6:00 - 11:00",
        "images": [
            "public/images/place/c2823a3d-43b9-4eba-b905-5c41e1a16006.jpg",
            "public/images/place/bd1680fe-6da3-4eed-a096-086e4863cbb5.jpg"
        ]
    }]
}

///// ADD REVIEW /////
"places/add-review"
"req": {
    _id     : , // (String) | Place'ID
    user    : , // (String) | User review's User
    content : , // (String) | Content
}
"res": {
    "code": , // (int)    | Response's Code
    "msg": , // (string) | Response's Message
}

/* ==================== ITINERARY MODULES ==================== */

///// GET ALL ITINERARIES /////
"itineraries/get-itineraries"
"res": {
    "code": , // (int)    | Response's Code
    "msg": , // (string) | Response's Message
    "data": [{
        "_id": "58d83537a5a51e8f715abfb5",
        "name": "Hành trình của tôi đến Lào Cai",
        "description": "tuyệt vời",
        "user": {
            "name": "Đỗ Đức Tú",
            "email": "doductu1501@gmail.com",
            "username": "doductu",
            "_id": "58ccd58790f26335c66b61b1"
        },
        "startDay": "2017-03-16T17:00:00.000Z",
        "endDay": "2017-03-17T17:00:00.000Z",
        "images": [
            "public/images/place/594f160d-12cb-4a84-9dd5-99f63b9b1fe3.jpg",
            "public/images/place/092c8e78-f33a-4556-8e93-16ee4c858cf7.jpg",
            "public/images/place/f85b47be-bd21-4d10-ac2e-e396ec460db7.jpg"
        ],
        "budget": ,
        "days":
    }]
}

///// GET ITINERARY BY ID /////

"itineraries/get-itinerary-by-id"
"req": {
    itineraryID: , // (String) | Itinerary's ID
}
"res": {
    "code": , // (int)    | Response's Code
    "msg": , // (string) | Response's Message
    "data": {
        "_id": "58d83537a5a51e8f715abfb5",
        "name": "Hành trình của tôi đến Lào Cai",
        "description": "tuyệt vời",
        "user": {
            "_id": "58ccd58790f26335c66b61b1",
            "username": "doductu",
            "email": "doductu1501@gmail.com",
            "name": "Đỗ Đức Tú"
        },
        "days": 1,
        "endDay": "2017-03-17T17:00:00.000Z",
        "startDay": "2017-03-16T17:00:00.000Z",
        "budget": 330000,
        thumbnail: "public/images/itinerary/e4f176c7-a187-4cf9-9199-20ee694c97d0.jpg",
        "plan": [
            [{
                "_id": "58d7d6fc6ddf457b7561782b",
                "name": "Phở Bắc Hà",
                "description": "Phở truyền thống Bắc Hà có 3 loại chính: phở chua, phở trộn và phở chan. Ngoài ra, tùy khẩu vị của từng thực khách, người bán hàng có thể chế biến những món phở kết hợp. Tuy được làm từ một số nguyên liệu như nhau, song hương vị của ba loại phở này lại rất khác nhau. Một bát phở chua gồm có bánh phở mới tráng còn nóng hổi, thịt xá xíu, rau sống thái nhỏ, đậu xị, lạc, nước chua. Khác với phở chua Mường Khương, người Bắc Hà thường chế biến phở chua gồm cả thịt xá xíu; các nguyên liệu còn lại đều là “của nhà làm ra”.",
                "displayPrice": 30000,
                "visitTime": 1,
                "location": {
                    "lng": 104.01297569274902,
                    "lat": 22.43824226196656
                },
                "images": [
                    "public/images/place/594f160d-12cb-4a84-9dd5-99f63b9b1fe3.jpg",
                    "public/images/place/633cb197-4162-41ba-bf9e-68af6e4ee731.jpg",
                    "public/images/place/a78e6bd0-aaca-4255-91a1-f5e06a5af6eb.jpg"
                ],
                "time": "8:30"
            }, {
                "_id": "58d7e00514de137dfbc54a63",
                "name": "Đền Thượng Lào Cai",
                "description": "Thác được chia làm 2 tầng, với hai lối đi khác nhau bạn có thể để đến được hai tầng thác. Nếu ngắm dòng thác trên từ bên đường sẽ bị che khuất bởi những bụi cây to, còn nếu để tiếp cận được tận chân thác thì chưa có con đường nào dẫn đến tận nơi, vì thế bạn phải đi bộ men theo sườn đồi qua những bụi cỏ dại. Chính vì đường đi khó khăn nên thác Bản Vược vẫn giữ được nét hoang sơ.",
                "displayPrice": 0,
                "visitTime": 2,
                "location": {
                    "lng": 104.00377639999999,
                    "lat": 22.4458835
                },
                "images": [
                    "public/images/place/092c8e78-f33a-4556-8e93-16ee4c858cf7.jpg",
                    "public/images/place/70d822e7-4240-49e9-8e80-5136f03c4aec.jpg",
                    "public/images/place/46498b37-9e74-4f2a-a8c2-3c138ff789c2.jpg"
                ],
                "time": "9:30"
            }, {
                "_id": "58d7df5c88b16c7d7d2ca865",
                "name": "thác Bản Vược",
                "description": "Thác được chia làm 2 tầng, với hai lối đi khác nhau bạn có thể để đến được hai tầng thác. Nếu ngắm dòng thác trên từ bên đường sẽ bị che khuất bởi những bụi cây to, còn nếu để tiếp cận được tận chân thác thì chưa có con đường nào dẫn đến tận nơi, vì thế bạn phải đi bộ men theo sườn đồi qua những bụi cỏ dại. Chính vì đường đi khó khăn nên thác Bản Vược vẫn giữ được nét hoang sơ.",
                "displayPrice": 0,
                "visitTime": 2,
                "location": {
                    "lng": 103.80423819999999,
                    "lat": 22.5959129
                },
                "images": [
                    "public/images/place/f85b47be-bd21-4d10-ac2e-e396ec460db7.jpg",
                    "public/images/place/619d9e83-04c8-467c-8e3e-69b9e171d856.jpg",
                    "public/images/place/5f7b3bb7-1d73-4977-85d6-17ee2c8225a0.jpg"
                ],
                "time": "10:30"
            }, {
                "_id": "58d7d92d3a8a7b7beefe0501",
                "name": "Tùng Hà Nội - Phở Gia Truyền",
                "description": "1",
                "displayPrice": 150000,
                "visitTime": 1,
                "location": {
                    "lng": 103.84418159999996,
                    "lat": 22.3377461
                },
                "images": [
                    "public/images/place/2b6e0bdf-6464-4f99-9ec3-0d33daf9d1ff.jpg",
                    "public/images/place/b6b86897-f3b3-41f9-86b3-4a0b8be78702.jpg",
                    "public/images/place/ac7eaca5-2618-4518-9279-4f9a1c3997cc.jpg"
                ],
                "time": "12:30"
            }, {
                "_id": "58d7e10614de137dfbc54a65",
                "name": "Lao Chải Tả Van",
                "description": "Cũng giống như bản Cát Cát, Lao Chải – Tả Van là nơi sinh sống của người dân tộc thiểu số, cách trung tâm thị trấn Sapa khoảng 7km",
                "displayPrice": 0,
                "visitTime": 2,
                "location": {
                    "lng": 103.88553239999999,
                    "lat": 22.30378319999999
                },
                "images": [
                    "public/images/place/3557f005-4a95-4b62-ab9f-18dd11516924.jpg",
                    "public/images/place/1dd6ecbf-3d62-420b-b2eb-daf2cd746557.jpg",
                    "public/images/place/05714052-fd5b-4191-bfff-32347c59cca3.jpg"
                ],
                "time": "14:00"
            }, {
                "_id": "58d7e19614de137dfbc54a66",
                "name": "Nhà thờ đá Sapa",
                "description": "Cũng giống như bản Cát Cát, Lao Chải – Tả Van là nơi sinh sống của người dân tộc thiểu số, cách trung tâm thị trấn Sapa khoảng 7km",
                "displayPrice": 0,
                "visitTime": 2,
                "location": {
                    "lng": 103.84208339999998,
                    "lat": 22.3351538
                },
                "images": [
                    "public/images/place/dcf3ca31-2832-4d4f-9ed9-32720bccc72e.jpg",
                    "public/images/place/c216abd9-2cbe-41ad-8e2d-7ec666a8b0e4.jpg",
                    "public/images/place/d2cc3bbc-ba99-465c-a24a-78ecbb6a57b0.jpg"
                ],
                "time": "16:00"
            }, {
                "_id": "58d7d9017e53ed7bc231bff8",
                "name": "Khu Đồ Nướng Sapa",
                "description": "1",
                "displayPrice": 150000,
                "visitTime": 1,
                "location": {
                    "lng": 103.84164420000002,
                    "lat": 22.3344936
                },
                "images": [
                    "public/images/place/3fc02980-f950-401e-9edb-db468a7e92e9.jpg",
                    "public/images/place/dbfc2bdd-4f51-453d-b514-b41db51eb831.jpg",
                    "public/images/place/a91ea70f-f089-4550-ade2-90b063705aaa.jpg"
                ],
                "time": "18:00"
            }]
        ]
    }
}

///// FIND ITINERARY FOR USER /////
"itineraries/find-itinerary-for-user"
"req": {
    user: {
        username : ,
        name     : ,
        _id      : ,
        email    : ,
    },
    startDay : , //(String)| Ngày bắt đầu
    endDay   : , //(String)| Ngày kết thúc
    budget   : , //(Number)| Ngân Sách
    hobbies  : , //(Array)| Ngân Sách
}
"res":{
    "code": , // (int)    | Response's Code
    "msg": , // (string) | Response's Message
    "data": {
        "_id": "58d83537a5a51e8f715abfb5",
        "name": "Hành trình của tôi đến Lào Cai",
        "description": "tuyệt vời",
        "user": {
            "_id": "58ccd58790f26335c66b61b1",
            "username": "doductu",
            "email": "doductu1501@gmail.com",
            "name": "Đỗ Đức Tú"
        },
        thumbnail: "public/images/itinerary/e4f176c7-a187-4cf9-9199-20ee694c97d0.jpg",
        "plan": {
            "_id": "58d825caf6848c8b6e10d5a9",
            "name": "Hanh trinh den Lao Cai",
            "days": 1,
            "endDay": "2017-03-17T17:00:00.000Z",
            "startDay": "2017-03-16T17:00:00.000Z",
            ,
            "budget": 330000,
            "plan": [
                [{
                    "_id": "58d7d6fc6ddf457b7561782b",
                    "name": "Phở Bắc Hà",
                    "description": "Phở truyền thống Bắc Hà có 3 loại chính: phở chua, phở trộn và phở chan. Ngoài ra, tùy khẩu vị của từng thực khách, người bán hàng có thể chế biến những món phở kết hợp. Tuy được làm từ một số nguyên liệu như nhau, song hương vị của ba loại phở này lại rất khác nhau. Một bát phở chua gồm có bánh phở mới tráng còn nóng hổi, thịt xá xíu, rau sống thái nhỏ, đậu xị, lạc, nước chua. Khác với phở chua Mường Khương, người Bắc Hà thường chế biến phở chua gồm cả thịt xá xíu; các nguyên liệu còn lại đều là “của nhà làm ra”.",
                    "displayPrice": 30000,
                    "visitTime": 1,
                    "location": {
                        "lng": 104.01297569274902,
                        "lat": 22.43824226196656
                    },
                    "images": [
                        "public/images/place/594f160d-12cb-4a84-9dd5-99f63b9b1fe3.jpg",
                        "public/images/place/633cb197-4162-41ba-bf9e-68af6e4ee731.jpg",
                        "public/images/place/a78e6bd0-aaca-4255-91a1-f5e06a5af6eb.jpg"
                    ],
                    "time": "8:30"
                }, {
                    "_id": "58d7e00514de137dfbc54a63",
                    "name": "Đền Thượng Lào Cai",
                    "description": "Thác được chia làm 2 tầng, với hai lối đi khác nhau bạn có thể để đến được hai tầng thác. Nếu ngắm dòng thác trên từ bên đường sẽ bị che khuất bởi những bụi cây to, còn nếu để tiếp cận được tận chân thác thì chưa có con đường nào dẫn đến tận nơi, vì thế bạn phải đi bộ men theo sườn đồi qua những bụi cỏ dại. Chính vì đường đi khó khăn nên thác Bản Vược vẫn giữ được nét hoang sơ.",
                    "displayPrice": 0,
                    "visitTime": 2,
                    "location": {
                        "lng": 104.00377639999999,
                        "lat": 22.4458835
                    },
                    "images": [
                        "public/images/place/092c8e78-f33a-4556-8e93-16ee4c858cf7.jpg",
                        "public/images/place/70d822e7-4240-49e9-8e80-5136f03c4aec.jpg",
                        "public/images/place/46498b37-9e74-4f2a-a8c2-3c138ff789c2.jpg"
                    ],
                    "time": "9:30"
                }, {
                    "_id": "58d7df5c88b16c7d7d2ca865",
                    "name": "thác Bản Vược",
                    "description": "Thác được chia làm 2 tầng, với hai lối đi khác nhau bạn có thể để đến được hai tầng thác. Nếu ngắm dòng thác trên từ bên đường sẽ bị che khuất bởi những bụi cây to, còn nếu để tiếp cận được tận chân thác thì chưa có con đường nào dẫn đến tận nơi, vì thế bạn phải đi bộ men theo sườn đồi qua những bụi cỏ dại. Chính vì đường đi khó khăn nên thác Bản Vược vẫn giữ được nét hoang sơ.",
                    "displayPrice": 0,
                    "visitTime": 2,
                    "location": {
                        "lng": 103.80423819999999,
                        "lat": 22.5959129
                    },
                    "images": [
                        "public/images/place/f85b47be-bd21-4d10-ac2e-e396ec460db7.jpg",
                        "public/images/place/619d9e83-04c8-467c-8e3e-69b9e171d856.jpg",
                        "public/images/place/5f7b3bb7-1d73-4977-85d6-17ee2c8225a0.jpg"
                    ],
                    "time": "10:30"
                }, {
                    "_id": "58d7d92d3a8a7b7beefe0501",
                    "name": "Tùng Hà Nội - Phở Gia Truyền",
                    "description": "1",
                    "displayPrice": 150000,
                    "visitTime": 1,
                    "location": {
                        "lng": 103.84418159999996,
                        "lat": 22.3377461
                    },
                    "images": [
                        "public/images/place/2b6e0bdf-6464-4f99-9ec3-0d33daf9d1ff.jpg",
                        "public/images/place/b6b86897-f3b3-41f9-86b3-4a0b8be78702.jpg",
                        "public/images/place/ac7eaca5-2618-4518-9279-4f9a1c3997cc.jpg"
                    ],
                    "time": "12:30"
                }, {
                    "_id": "58d7e10614de137dfbc54a65",
                    "name": "Lao Chải Tả Van",
                    "description": "Cũng giống như bản Cát Cát, Lao Chải – Tả Van là nơi sinh sống của người dân tộc thiểu số, cách trung tâm thị trấn Sapa khoảng 7km",
                    "displayPrice": 0,
                    "visitTime": 2,
                    "location": {
                        "lng": 103.88553239999999,
                        "lat": 22.30378319999999
                    },
                    "images": [
                        "public/images/place/3557f005-4a95-4b62-ab9f-18dd11516924.jpg",
                        "public/images/place/1dd6ecbf-3d62-420b-b2eb-daf2cd746557.jpg",
                        "public/images/place/05714052-fd5b-4191-bfff-32347c59cca3.jpg"
                    ],
                    "time": "14:00"
                }, {
                    "_id": "58d7e19614de137dfbc54a66",
                    "name": "Nhà thờ đá Sapa",
                    "description": "Cũng giống như bản Cát Cát, Lao Chải – Tả Van là nơi sinh sống của người dân tộc thiểu số, cách trung tâm thị trấn Sapa khoảng 7km",
                    "displayPrice": 0,
                    "visitTime": 2,
                    "location": {
                        "lng": 103.84208339999998,
                        "lat": 22.3351538
                    },
                    "images": [
                        "public/images/place/dcf3ca31-2832-4d4f-9ed9-32720bccc72e.jpg",
                        "public/images/place/c216abd9-2cbe-41ad-8e2d-7ec666a8b0e4.jpg",
                        "public/images/place/d2cc3bbc-ba99-465c-a24a-78ecbb6a57b0.jpg"
                    ],
                    "time": "16:00"
                }, {
                    "_id": "58d7d9017e53ed7bc231bff8",
                    "name": "Khu Đồ Nướng Sapa",
                    "description": "1",
                    "displayPrice": 150000,
                    "visitTime": 1,
                    "location": {
                        "lng": 103.84164420000002,
                        "lat": 22.3344936
                    },
                    "images": [
                        "public/images/place/3fc02980-f950-401e-9edb-db468a7e92e9.jpg",
                        "public/images/place/dbfc2bdd-4f51-453d-b514-b41db51eb831.jpg",
                        "public/images/place/a91ea70f-f089-4550-ade2-90b063705aaa.jpg"
                    ],
                    "time": "18:00"
                }]
            ]
        }
    }
}

///// GET HOBBIES /////
"itineraries/get-hobbies"
"res": {
    "code" : , // (int)    | Response's Code
    "msg"  : , // (string) | Response's Message
    "data" : [
        [
            {
                "_id"   : "58d639cc202e38515f6dede9",
                "__v"   : 0,
                "count" : 0,
                "name"  : "Gia đình"
            },{
                "_id"   : "58d639d2202e38515f6dedea",
                "__v"   : 0,
                "count" : 0,
                "name"  : "Hoạt động tập thể"
            }
        ]
    ]
}

///// GET ITINERARIES BY USER ID /////
"itineraries/get-itinerary-by-user-id"
"req":{
    _id: , // (String) | User's ID
}
"res":{
    "code" : , // (int)    | Response's Code
    "msg"  : , // (string) | Response's Message
    "data" : [{
        "_id": "58d83537a5a51e8f715abfb5",
        "name": "Hành trình của tôi đến Lào Cai",
        "description": "tuyệt vời",
        "user": {
            "name": "Đỗ Đức Tú",
            "email": "doductu1501@gmail.com",
            "username": "doductu",
            "_id": "58ccd58790f26335c66b61b1"
        },
        "startDay": "2017-03-16T17:00:00.000Z",
        "endDay": "2017-03-17T17:00:00.000Z",
        "images": [
            "public/images/place/594f160d-12cb-4a84-9dd5-99f63b9b1fe3.jpg",
            "public/images/place/092c8e78-f33a-4556-8e93-16ee4c858cf7.jpg",
            "public/images/place/f85b47be-bd21-4d10-ac2e-e396ec460db7.jpg"
        ],
        "budget": ,
        "days":
    }]
}

