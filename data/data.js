import Link from 'next/link'
import i1 from './../public/react/shopSphere/1.webp';
import i2 from './../public/react/shopSphere/2.webp';
import i3 from './../public/react/shopSphere/3.webp';
import i4 from './../public/react/shopSphere/4.webp';
import i5 from './../public/react/shopSphere/5.webp';
import i6 from './../public/react/shopSphere/6.webp';
import i7 from './../public/react/shopSphere/7.webp';
import i8 from './../public/react/shopSphere/8.webp';
import i9 from './../public/react/shopSphere/9.webp';
import i10 from './../public/react/shopSphere/10.webp';
import i11 from './../public/react/shopSphere/11.webp';
import i12 from './../public/react/shopSphere/12.webp';
import i13 from './../public/react/shopSphere/13.webp';
import i14 from './../public/react/shopSphere/14.webp';
import i15 from './../public/react/shopSphere/15.webp';
import i16 from './../public/react/shopSphere/16.webp';
import i17 from './../public/react/shopSphere/17.webp';
import i18 from './../public/react/shopSphere/18.webp';
import i19 from './../public/react/shopSphere/19.webp';
import i20 from './../public/react/shopSphere/20.webp';
import f1 from './../public/react/frb/1 (5).webp';
import f2 from './../public/react/frb/2 (4).webp';
import f3 from './../public/react/frb/3 (3).webp';
import f4 from './../public/react/frb/4 (3).webp';
import f5 from './../public/react/frb/5 (2).webp';
import f6 from './../public/react/frb/6 (2).webp';
import f7 from './../public/react/frb/7 (2).webp';



export const PROJECTS_DATA = {
    shopSphere: {
        images:[i1, i2, i3, i4, i5, i6, i7, i8, i9, i10, i11, i12, i13, i14, i15, i16, i17, i18, i19, i20],
        title: 'ShopSphere: An E-commerce Application',
        tech: [
            {
                key: 'Frontend',
                value: 'React.js, Redux, Material-UI, Tailwind CSS'
            },
            {
                key: 'Backend',
                value: 'Spring Boot, java'
            },
            {
                key: 'Database',
                value: 'MySQL'
            },
            {
                key:'Github',
                value:<Link href={'https://github.com/GurpreetSThiara/ShopSphere-Frontend' } legacyBehavior>
                <a target="_blank" rel="noopener noreferrer">
                https://github.com/GurpreetSThiara/ShopSphere-Frontend
                </a></Link>
            }
        ],
        keyFeatures: [
            'Users can open their online shops on this platform.',
            'Nearby users can access the shops and view shop details and available products.',
            'OpenStreetMap integration for viewing nearby shops.',
            'Sellers have the option to temporarily shut down their shops.',
            'Comprehensive admin dashboard for easy management, including CRUD operations for products, orders, and user engagements.',
            'Integration with Razorpay for payment processing.'
        ]
    },
    frb:{

        link:'https//freeresumebuilder.vercel.app',
        images:[f1,f2,f3,f4,f5,f6,f7],
        title:'Free Resume Builder',
        tech:[
            {key:'front end', value:'reactjs javascript'},{
                key:'UI Library',
                value:'Chakra UI'
            }

        ],
         keyFeatures :[
            "User-friendly interface for creating resumes",
            "Customizable templates with various design options",
            "Real-time preview of the resume during editing",
            "Drag-and-drop functionality for easy content arrangement",
            "Support for multiple sections including personal details, education, work experience, skills, and more",
            "Ability to add, edit, and delete sections and entries",
            "Responsive design ensuring compatibility across different devices",
           
            "Export resumes as PDF with selectable text using jsPDF",
        
          
            "Print-ready PDF export with professional formatting",
            "Cross-browser compatibility ensuring consistent performance",

          ]
          
    }
};
