import icons from './icons'
import path from './path'

export const navigation = [
    {
        id: 5,
        value: 'HOME',
        path: `/${path.HOME}`
    },
    {
        id: 1,
        value: 'PRODUCTS',
        path: `/${path.PRODUCTS}`
    },
    {
        id: 2,
        value: 'BLOGS',
        path: `/${path.BLOGS}`
    },
    {
        id: 3,
        value: 'OUR SERVICES',
        path: `/${path.OURSERVICES}`
    },
    {
        id: 4,
        value: 'FAQs',
        path: `/${path.FAQs}`
    }
    
]

const {AiFillGift,RiTruckFill,BsShieldFill, BsReplyFill,FaTty} = icons

export const productExtraInformation =[
    {
        id: 1,
        title: 'Guarantee',
        sub: "Quantity Checked",
        icon : <BsReplyFill/>
    },
    {
        id: 2,
        title: 'Guarantee',
        sub: "Quantity Checked",
        icon : <AiFillGift/>
    },
    {
        id: 3,
        title: 'Guarantee',
        sub: "Quantity Checked",
        icon : <RiTruckFill/>
    },
    {
        id: 4,
        title: 'Guarantee',
        sub: "Quantity Checked",
        icon : <BsShieldFill/>
    },
    {
        id: 5,
        title: 'Guarantee',
        sub: "Quantity Checked",
        icon : <FaTty/>
    }
]

export const productInfoTabs = [
    {
        id: 1,
        name: "Description",
        content: 'hi'
    },
    {
        id: 2,
        name: "Description",
        content: 'hi'
    },
    {
        id: 3,
        name: "Description",
        content: 'hi'
    },
    {
        id: 4,
        name: "Description",
        content: 'hi'
    },
   

]

export const colors = [
    "black",
    'red',
    'yellow',
    'white',
    'gray',
    'blue',
    'green',
    'pink'
]

export const sorts = [
    {
        id: 1,
        value: '-sold',
        text: 'Best selling'
    },
    {
        id: 2,
        value: '-title',
        text: 'Alphabetically, A-Z'
    },
    {
        id: 3,
        value: 'title',
        text: 'Alphabetically, Z-A'
    },
    {
        id: 4,
        value: '-price',
        text: 'Price, Hight to Low'
    },

    {
        id: 5,
        value: 'price',
        text: 'Price, Low to High'
    },
    {
        id: 6,
        value: '-createdAt',
        text: 'Date, New to Old'
    },

    {
        id: 7,
        value: 'createdAt',
        text: 'Date, Old to New'
    },
]