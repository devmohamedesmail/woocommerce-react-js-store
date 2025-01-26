import { MdOutlineEmail } from "react-icons/md";
import { FaPhone } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa";



const  ApiData = {
    url:'https://nasmart.online/',
    Consumerkey :'ck_25de70cd1826f4dbe345f5788e4fcbce170b44be',
    Consumersecret :'cs_36b5691b3306736d48acf1cca6627ecb5250a5bd',
    currency_ar:'درهم',
    currency_en:'AED',
    description:'Online Store For Best Brand Electronics',
    contact:[
         {
            'id':1,
            'icon':<MdOutlineEmail size={25} />,
            'value':'sales@nasmart.online',
         },
         {
            'id':2,
            'icon':<FaPhone size={25} />,
            'value':'+971589107126',
         },
         {
            'id':3,
            'icon':<FaWhatsapp size={25} />,
            'value':'+971589107126',

         }
    ]
}
export default ApiData