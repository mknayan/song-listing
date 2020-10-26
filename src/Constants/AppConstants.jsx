import history from "../history";
export const APP_VERSION = '1.0.0';

//For local
export const BASE_URL = 'http://localhost:3000/';
export const API_URL = 'http://localhost:3000/backend/';

export const API_KEY = 'dfDFDS56544sdfSDF';

export const SET_STORAGE = (name, value) => {
    return localStorage.setItem(name, value);
};
export const GET_STORAGE = name => {
    return localStorage.getItem(name);
};
export const REMOVE_STORAGE = name => {
    return localStorage.removeItem(name);
};

export const USER = "mkn_system_log_0123456789abcdef0123456789abcdef";

export async function AJAX_REQUEST(type = "GET", additional_url, data) {
    const c_user = await JSON.parse(GET_STORAGE(USER));
    console.log('c_user', c_user)
    return await fetch(API_URL + additional_url, {
        method: type,
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Basic ' + (c_user ? c_user.token : '')
        },
        body: 'api_key=' + API_KEY + '&' + data
    }).then((t) => t.json())
}

// export function AJAX_REQUEST_WITH_FILE(type = "GET", additional_url, data) {
//     const c_user = JSON.parse(GET_STORAGE(USER));
//     data.append("api_key", API_KEY);
//     data.append("site", SITE);
//     // if (c_user) {
//     //     data.append("user_token", c_user.token);
//     // }

//     let promise = $.Deferred();
//     if (c_user) {
//         $.ajax({
//             type: type,
//             url: API_URL + additional_url,
//             data: data,
//             headers: {
//                 'Authorization': `Bearer ${c_user.token}`
//             },
//             dataType: "JSON",
//             processData: false,
//             contentType: false,
//             timeout: 120000,
//             success: function (resp) {
//                 if (resp) {
//                     if (typeof (resp) === 'object') {
//                         if (resp.hasOwnProperty('response')) {
//                             if (resp.response.hasOwnProperty('code')) {
//                                 promise.resolve(resp);
//                             } else {
//                                 const respo = {
//                                     "response": {
//                                         "code": 5000,
//                                         "status": "success",
//                                         "message": "Something went wrong. Please try again.",
//                                     }
//                                 };
//                                 promise.resolve(respo);
//                             }
//                         } else {
//                             const respo = {
//                                 "response": {
//                                     "code": 5000,
//                                     "status": "success",
//                                     "message": "Something went wrong. Please try again.",
//                                 }
//                             };
//                             promise.resolve(respo);
//                         }
//                     } else {
//                         const respo = {
//                             "response": {
//                                 "code": 5000,
//                                 "status": "success",
//                                 "message": "Something went wrong. Please try again.",
//                             }
//                         };
//                         promise.resolve(respo);
//                     }
//                 } else {
//                     const respo = {
//                         "response": {
//                             "code": 5000,
//                             "status": "success",
//                             "message": "Something went wrong. Please refresh the page again.",
//                         }
//                     };
//                     promise.resolve(respo);
//                 }
//             },
//             error: function (resp, textStatus) {
//                 if (textStatus === 'timeout') {
//                     const respo = {
//                         "response": {
//                             "code": 5000,
//                             "status": "success",
//                             "message": "Connection timeout. Please try again.",
//                         }
//                     };
//                     promise.resolve(respo);
//                 } else {
//                     if (resp.status === 500) {
//                         const respo = {
//                             "response": {
//                                 "code": 5000,
//                                 "status": "success",
//                                 "message": "Something went wrong. Please try again.",
//                                 "originalMessage": resp.responseText,
//                             }
//                         };
//                         promise.resolve(respo);
//                     } else {
//                         SET_STORAGE('settings', JSON.stringify(SITEDOWN_DATA));
//                         history.push("/error");
//                     }
//                 }
//             }
//         });
//     } else {
//         $.ajax({
//             type: type,
//             url: API_URL + additional_url,
//             data: data,
//             dataType: "JSON",
//             processData: false,
//             contentType: false,
//             timeout: 120000,
//             success: function (resp) {
//                 if (resp) {
//                     if (typeof (resp) === 'object') {
//                         if (resp.hasOwnProperty('response')) {
//                             if (resp.response.hasOwnProperty('code')) {
//                                 promise.resolve(resp);
//                             } else {
//                                 const respo = {
//                                     "response": {
//                                         "code": 5000,
//                                         "status": "success",
//                                         "message": "Something went wrong. Please try again.",
//                                     }
//                                 };
//                                 promise.resolve(respo);
//                             }
//                         } else {
//                             const respo = {
//                                 "response": {
//                                     "code": 5000,
//                                     "status": "success",
//                                     "message": "Something went wrong. Please try again.",
//                                 }
//                             };
//                             promise.resolve(respo);
//                         }
//                     } else {
//                         const respo = {
//                             "response": {
//                                 "code": 5000,
//                                 "status": "success",
//                                 "message": "Something went wrong. Please try again.",
//                             }
//                         };
//                         promise.resolve(respo);
//                     }
//                 } else {
//                     const respo = {
//                         "response": {
//                             "code": 5000,
//                             "status": "success",
//                             "message": "Something went wrong. Please refresh the page again.",
//                         }
//                     };
//                     promise.resolve(respo);
//                 }
//             },
//             error: function (resp, textStatus) {
//                 if (textStatus === 'timeout') {
//                     const respo = {
//                         "response": {
//                             "code": 5000,
//                             "status": "success",
//                             "message": "Connection timeout. Please try again.",
//                         }
//                     };
//                     promise.resolve(respo);
//                 } else {
//                     if (resp.status === 500) {
//                         const respo = {
//                             "response": {
//                                 "code": 5000,
//                                 "status": "success",
//                                 "message": "Something went wrong. Please try again.",
//                                 "originalMessage": resp.responseText,
//                             }
//                         };
//                         promise.resolve(respo);
//                     } else {
//                         SET_STORAGE('settings', JSON.stringify(SITEDOWN_DATA));
//                         history.push("/error");
//                     }
//                 }
//             }
//         });
//     }

//     return promise.promise();
//     // return $.ajax({
//     //     type: type,
//     //     url: API_URL + additional_url,
//     //     data: data,
//     //     dataType: "JSON",
//     //     processData: false,
//     //     contentType: false
//     // });
// }
