import { atom } from 'recoil'

export const writeCategory = atom({
    key: 'writeCategory',
    default: {
        category: "select",
        detailCategory: "select",
        title: ""
    }
})