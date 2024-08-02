import {atom, selector} from "recoil";
export const networkNotification = atom({
    key: "networkNotification",
    default: 102
})
export const jobNotification = atom({
    key: "jobNotification",
    default: 0
})
export const messageNotification = atom({
    key: "messageNotification",
    default: 0
})
export const Notification = atom({
    key: "Notification",
    default: 12
})
export const Me = selector({
    key: "Me",
    get: ({get})=>{
        const networkcount = get(networkNotification);
        const jobCount = get(jobNotification);
        const messageCount = get(messageNotification);
        const notificationCount = get(Notification);
        return networkcount+jobCount+messageCount+notificationCount
    }
})