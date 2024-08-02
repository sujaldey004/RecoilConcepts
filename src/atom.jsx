import {atom, selector} from "recoil";
import axios from 'axios';


export const notifications = atom({
    key: "notifications",
    default: selector({
        key: "notificationSelector",
        get: async ()=>{
            await new Promise(r => setTimeout(r, 5000))  // sleep for 5 sec
            const response = await axios.get("https://sum-server.100xdevs.com/notifications");
            return response.data
        }
    })
})

export const totalNotificationSelector = selector({
    key: "totalNotificationSelector",
    get: ({get})=>{
        const allNotification = get(notifications);
        return allNotification.network + allNotification.jobs + allNotification.notifications + allNotification.messaging
    }
})