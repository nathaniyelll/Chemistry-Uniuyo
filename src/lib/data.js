import lab1 from "../../public/images/Homepage/HeroImg2.JPG";
import lab2 from "../../public/images/Homepage/HeroImg3.JPG";
import lab3 from "../../public/images/staffLab.jpg";
import lab4 from "../../public/images/Homepage/HeroImg1.JPG";

import sendforth1 from "../../public/images/Chem Sendforth/257.JPG";
import sendforth from "../../public/images/Chem Sendforth/245.JPG";
import sendforth2 from "../../public/images/Chem Sendforth/253.JPG";
import sendforth3 from "../../public/images/Chem Sendforth/254.JPG";
import sendforth4 from "../../public/images/Chem Sendforth/250.JPG";
import profJames from "../../public/images/Chem Sendforth/47.JPG";
import profJames2 from "../../public/images/Chem Sendforth/53.JPG";
import profAP from "../../public/images/Chem Sendforth/14.JPG";
import profAP2 from "../../public/images/Chem Sendforth/28.JPG";
import profUdosen from "../../public/images/Chem Sendforth/5.JPG";
import sendforth11 from "../../public/images/Chem Sendforth/261.JPG";
import sendForth15 from "../../public/images/Chem Sendforth/245.JPG";
import sendForth from "../../public/images/Chem Sendforth/44.JPG";
import sendForth3 from "../../public/images/Chem Sendforth/46.JPG";
import sendForth4 from "../../public/images/Chem Sendforth/94.JPG";
import sendForth5 from "../../public/images/Chem Sendforth/103.JPG";
import sendForth6 from "../../public/images/Chem Sendforth/115.JPG";
import sendForth7 from "../../public/images/Chem Sendforth/161.JPG";
import sendForth8 from "../../public/images/Chem Sendforth/203.JPG";
import sendForth9 from "../../public/images/Chem Sendforth/204.JPG";
import sendForth10 from "../../public/images/Chem Sendforth/207.JPG";
import sendForth11 from "../../public/images/Chem Sendforth/206.JPG";
import sendForth12 from "../../public/images/Chem Sendforth/211.JPG";
import sendForth13 from "../../public/images/Chem Sendforth/218.JPG";
import sendForth14 from "../../public/images/Chem Sendforth/227.JPG";

import student1 from "../../public/images/CHMs1.webp";
import student2 from "../../public/images/CHMs2.webp";
import student3 from "../../public/images/CHMs3.webp";
import student4 from "../../public/images/CHMs4.webp";
import student5 from "../../public/images/CHMs5.webp";
import student6 from "../../public/images/CHMs6.webp";

import staff1 from "../../public/images/staff3.webp";
import staff2 from "../../public/images/staff2.webp";
import staff4 from "../../public/images/staff1.webp";
import staff5 from "../../public/images/teachingstaff/Dr.IniUmoren.jpg";
import staff6 from "../../public/images/staff11.webp";
import staff7 from "../../public/images/staff12.webp";
import emmanuelEssien from "../../public/images/teachingstaff/EmmanEssien.jpg";
import helenEtuk from "../../public/images/teachingstaff/HelenEtuk.jpg";

const homeData = [
  {
    image: lab1,
    title: "Department of chemistry",
    description:
      "The Department of Chemistry is a vibrant hub of scientific inquiry and discovery at our university. Our world-class Lecturers and Professors, state-of-the-art facilities, and dynamic curriculum create an environment that fosters intellectual growth, hands-on learning, and interdisciplinary collaboration. Explore our diverse range of programs, gain insights into our pioneering research initiatives, and discover how we are shaping the future of science and technology. We invite you to embark on an enriching journey with us as we continue to push the boundaries of what is possible in the field of chemistry.",
    greeting: "welcome to the",
    btnLink: "/about",
  },
  {
    title:
      "Celebrating Decades of Dedication: The Department of Chemistry Bids Farewell to her Renowned Professors",
    description:
      "In a bittersweet ceremony, the Department of Chemistry recently honored the distinguished careers of three esteemed professors - Professor Anthony Udoh, Professor James Asuquo, and Professor Ukana Akpabio. After serving the institution with unwavering commitment for over 35 years, these intellectual giants are embarking on a new chapter of their lives.",

    image: sendforth1,
    btnLink: "/",
  },
  {
    title: "",
    description: "",

    image: profAP,
  },
  {
    title: "",
    description: "",
    image: profJames,
  },
  {
    title: "",
    description: "",
    image: profUdosen,
  },
];

export const studentsData = [
  { image: student6, id: "st1" },
  { image: student1, id: "st2" },
  { image: student2, id: "st3" },
  { image: student3, id: "st4" },
  { image: student4, id: "st5" },
  { image: student5, id: "st6" },
];

export const homeStaffData = [
  {
    image: emmanuelEssien,
    title: "Dr.",
    name: "emmanuel essien",
    desc: "Organic",
  },
  {
    image: helenEtuk,
    title: "Dr.",
    name: "helen etuk",
    desc: "Inorganic",
  },

  {
    image: staff2,
    title: "Dr.",
    name: "solomon shaibu",
    desc: "Environmental",
  },

  //     {
  //         image: staff4,
  //     name:"Dr. Ekerette Jackson",
  //         desc:"Physical",
  // },
  {
    image: staff5,
    title: "Dr.",
    name: "iniobong umoren",
    desc: "Analytical",
  },
];

export default homeData;

const level100courses = [
  {
    code: "GST111",
    title: "Use of English I",
    credit_hrs: 2,
    prerequisite: "",
    semester: "first",
    desc: "first",
  },
  {
    code: "GST112",
    title: "Philosophy and Human Existence",
    credit_hrs: 2,
    prerequisite: "",
    semester: "first",
    desc: "first",
  },
  {
    code: "MTH111",
    title: "General Mathematics I",
    credit_hrs: 4,
    prerequisite: "",
    semester: "first",
    desc: "first",
  },
  {
    code: "BIO112",
    title: "General Biology I",
    credit_hrs: 3,
    prerequisite: "",
    semester: "first",
    desc: "first",
  },
  {
    code: "BIO113",
    title: "General Biology I Lab",
    credit_hrs: 1,
    prerequisite: "",
    semester: "first",
    desc: "first",
  },
  {
    code: "CHM111",
    title: "General Chemistry I",
    credit_hrs: 3,
    prerequisite: "",
    semester: "first",
    desc: "first",
  },
  {
    code: "CHM112",
    title: "General Chemistry I Lab",
    credit_hrs: 1,
    prerequisite: "",
    semester: "first",
    desc: "first",
  },
  {
    code: "PHY111",
    title: "General Physics I",
    credit_hrs: 3,
    prerequisite: "",
    semester: "first",
    desc: "first",
  },
  {
    code: "PHY112",
    title: "General Physics I Lab",
    credit_hrs: 1,
    prerequisite: "",
    semester: "first",
    desc: "first",
  },
];

const level100coursesSecond = [
  {
    code: "GST121",
    title: "Use of English II",
    credit_hrs: 2,
    prerequisite: "",
    semester: "second",
    desc: "second",
  },
  {
    code: "GST122",
    title: "Science and Basic Computer Technology",
    credit_hrs: 2,
    prerequisite: "",
    semester: "second",
    desc: "second",
  },
  {
    code: "GST123",
    title: "Citizenship and Peace Studies",
    credit_hrs: 2,
    prerequisite: "",
    semester: "second",
    desc: "second",
  },
  {
    code: "MTH121",
    title: "General Mathematics II",
    credit_hrs: 4,
    prerequisite: "",
    semester: "second",
    desc: "second",
  },
  {
    code: "BIO122",
    title: "General Biology II",
    credit_hrs: 3,
    prerequisite: "",
    semester: "second",
    desc: "second",
  },
  {
    code: "BIO123",
    title: "General Biology II Lab",
    credit_hrs: 1,
    prerequisite: "",
    semester: "second",
    desc: "second",
  },
  {
    code: "CHM121",
    title: "General Chemistry II",
    credit_hrs: 3,
    prerequisite: "",
    semester: "second",
    desc: "second",
  },
  {
    code: "CHM122",
    title: "General Chemistry II Lab",
    credit_hrs: 1,
    prerequisite: "",
    semester: "second",
    desc: "second",
  },
  {
    code: "PHY121",
    title: "General Physics II",
    credit_hrs: 3,
    prerequisite: "",
    semester: "second",
    desc: "second",
  },
  {
    code: "PHY122",
    title: "General Physics II Lab",
    credit_hrs: 1,
    prerequisite: "",
    semester: "second",
    desc: "second",
  },
];

const level200courses = [
  {
    code: "gst211",
    title: "Entrepreneurial Studies I",
    credit_hrs: 2,
    prerequisite: "",
    semester: "first",
    desc: "string",
  },
  {
    code: "chm211",
    title: "Inorganic Chemistry II",
    credit_hrs: 2,
    prerequisite: "chm111, chm121",
    semester: "first",
    desc: "string",
  },
  {
    code: "chm212",
    title: "Physical Chemistry II",
    credit_hrs: 2,
    prerequisite: "chm111",
    semester: "first",
    desc: "string",
  },
  {
    code: "chm213",
    title: "Organic Chemistry II",
    credit_hrs: 2,
    prerequisite: "chm121",
    semester: "first",
    desc: "string",
  },
  {
    code: "chm214",
    title: "Physical Chemistry II Laboratory",
    credit_hrs: 1,
    prerequisite: "",
    semester: "first",
    desc: "string",
  },
  {
    code: "chm216",
    title: "Inorganic Chemistry II Lab",
    credit_hrs: 1,
    prerequisite: "",
    semester: "first",
    desc: "string",
  },
  {
    code: "chm117",
    title: "Organic Chemistry II Lab",
    credit_hrs: 1,
    prerequisite: "",
    semester: "first",
    desc: "string",
  },
  {
    code: "chm218",
    title: "Polymer Chemistry I",
    credit_hrs: 2,
    prerequisite: "",
    semester: "first",
    desc: "string",
  },
  {
    code: "mth211",
    title: "Mathematical Methods I",
    credit_hrs: 3,
    prerequisite: "mth111, mth121",
    semester: "first",
    desc: "string",
  },
  {
    code: "phy211",
    title: "Elementary Modern Physics",
    credit_hrs: 3,
    prerequisite: "phy111, phy121",
    semester: "first",
    desc: "string",
  },
  {
    code: "phy214",
    title: "Experimental/Lab. Physics I",
    credit_hrs: 1,
    prerequisite: "",
    semester: "first",
    desc: "string",
  },
];

const level200coursesSecond = [
  {
    code: "gst221",
    title: "Entrepreneurial Studies II",
    credit_hrs: 2,
    prerequisite: "",
    semester: "second",
    desc: "string",
  },
  {
    code: "chm221",
    title: "Analytical Chemistry I",
    credit_hrs: 2,
    prerequisite: "chm111, chm121",
    semester: "second",
    desc: "string",
  },
  {
    code: "chm223",
    title: "Analytical Chemistry I Lab",
    credit_hrs: 1,
    prerequisite: "chm121",
    semester: "second",
    desc: "string",
  },
  {
    code: "chm224",
    title: "Inorganic Raw Materials/Resource Inventory",
    credit_hrs: 1,
    prerequisite: "mth211, chm121",
    semester: "second",
    desc: "string",
  },
  {
    code: "chm227",
    title: "Biomolecules and The Chemistry of Life",
    credit_hrs: 3,
    prerequisite: "chm121",
    semester: "second",
    desc: "string",
  },
  {
    code: "mth224",
    title: "Linear Algebra",
    credit_hrs: 3,
    prerequisite: "mth111, mth121",
    semester: "second",
    desc: "string",
  },
  {
    code: "phy222",
    title: "Electric Circuits and Electronics",
    credit_hrs: 3,
    prerequisite: "phy121",
    semester: "second",
    desc: "string",
  },
  {
    code: "sta122",
    title: "Statistics for Physical and Applied Sciences",
    credit_hrs: 3,
    prerequisite: "",
    semester: "second",
    desc: "string",
  },
];

const level300courses = [
  {
    code: "chm311",
    title: "Inorganic Chemistry III",
    credit_hrs: 3,
    prerequisite: "chm211",
    semester: "first",
    desc: "string",
  },
  {
    code: "chm313",
    title: "Bonding, Atomic/Molecular Structure and Symmetry",
    credit_hrs: 3,
    prerequisite: "chm211, chm212, mth224",
    semester: "first",
    desc: "string",
  },
  {
    code: "chm314",
    title: "PetroChemistry",
    credit_hrs: 2,
    prerequisite: "",
    semester: "first",
    desc: "string",
  },
  {
    code: "chm316",
    title: "Organic Chemistry III",
    credit_hrs: 3,
    prerequisite: "chm213",
    semester: "first",
    desc: "string",
  },
  {
    code: "chm317",
    title: "Environmental Chemistry",
    credit_hrs: 2,
    prerequisite: "",
    semester: "first",
    desc: "string",
  },
  {
    code: "chm318",
    title: "Applied Spectroscopy",
    credit_hrs: 2,
    prerequisite: "",
    semester: "first",
    desc: "string",
  },
  {
    code: "chm319",
    title: "Physical Chemistry III",
    credit_hrs: 2,
    prerequisite: "",
    semester: "first",
    desc: "string",
  },
  {
    code: "chm330",
    title: "Applied Surface and Colloid Chemistry",
    credit_hrs: 1,
    prerequisite: "",
    semester: "first",
    desc: "string",
  },
  {
    code: "flf110*",
    title: "Introduction to French I",
    credit_hrs: 3,
    prerequisite: "",
    semester: "first",
    desc: "string",
  },
  {
    code: "mgt316*",
    title: "principles of management",
    credit_hrs: 3,
    prerequisite: "",
    semester: "first",
    desc: "string",
  },
];

const level300coursesSecond = [
  {
    code: "chm321",
    title: "Students' Industral Work Experience Scheme (S.I.W.E.S)",
    credit_hrs: 6,
    prerequisite: "",
    semester: "second",
    desc: "string",
  },
];

const level400courses = [
  {
    code: "chm410",
    title: "Carbohydrates and Natural Products Chemistry I",
    credit_hrs: 2,
    prerequisite: "chm222",
    semester: "first",
    desc: "string",
  },
  {
    code: "chm412",
    title: "Reaction Kinetics",
    credit_hrs: 2,
    prerequisite: "chm312",
    semester: "first",
    desc: "string",
  },
  {
    code: "chm413",
    title: "Analytical Chemistry II",
    credit_hrs: 2,
    prerequisite: "chm221",
    semester: "first",
    desc: "string",
  },
  {
    code: "chm414",
    title: "ElectroChemistry",
    credit_hrs: 2,
    prerequisite: "chm212, chm312",
    semester: "first",
    desc: "string",
  },
  {
    code: "chm415",
    title: "Instrumental Methods of Analysis",
    credit_hrs: 2,
    prerequisite: "",
    semester: "first",
    desc: "string",
  },
  {
    code: "chm416",
    title: "Heterocyclic Chemistry",
    credit_hrs: 2,
    prerequisite: "chm316",
    semester: "first",
    desc: "string",
  },
  {
    code: "chm417",
    title: "Research Methods",
    credit_hrs: 2,
    prerequisite: "",
    semester: "first",
    desc: "string",
  },
  {
    code: "chm432",
    title: "Chemistry of Lanthanides and Actinides",
    credit_hrs: 1,
    prerequisite: "chm311, chm312",
    semester: "first",
    desc: "string",
  },
  {
    code: "chm433",
    title: "Polymer Chemistry and Technology",
    credit_hrs: 3,
    prerequisite: "chm215",
    semester: "first",
    desc: "string",
  },

  {
    code: "chm434*",
    title: "Industrial Chemical Technology",
    credit_hrs: 3,
    prerequisite: "chm224",
    semester: "first",
    desc: "string",
  },
  {
    code: "chm434*",
    title: "Industrial Chemical Processess",
    credit_hrs: 3,
    prerequisite: "chm311",
    semester: "first",
    desc: "string",
  },
  {
    code: "chm431*",
    title: "Photochemistry and Petricyclic Reactions",
    credit_hrs: 1,
    prerequisite: "chm316",
    semester: "first",
    desc: "string",
  },
  {
    code: "bch415*",
    title: "Pharmacological Biochemistry",
    credit_hrs: 2,
    prerequisite: "",
    semester: "first",
    desc: "string",
  },
];

const level400coursesSecond = [
  {
    code: "chm420",
    title: "Research Project",
    credit_hrs: 6,
    prerequisite: "",
    semester: "second",
    desc: "string",
  },
  {
    code: "chm421",
    title: "Seminar",
    credit_hrs: 2,
    prerequisite: "",
    semester: "second",
    desc: "string",
  },
  {
    code: "chm422",
    title: "Organic Synthesis",
    credit_hrs: 2,
    prerequisite: "chm316",
    semester: "second",
    desc: "string",
  },
  {
    code: "chm423",
    title: "Cordination Chemistry",
    credit_hrs: 0,
    prerequisite: "chm311",
    semester: "second",
    desc: "string",
  },
  {
    code: "chm424",
    title: "Natural Products Chemistry II",
    credit_hrs: 2,
    prerequisite: "chm316, chm 410",
    semester: "second",
    desc: "string",
  },
  {
    code: "chm425",
    title: "Statistical Thermodynamics",
    credit_hrs: 2,
    prerequisite: "chm312",
    semester: "second",
    desc: "string",
  },
  {
    code: "chm426",
    title: "Organomettalic Chemistry",
    credit_hrs: 2,
    prerequisite: "chm311",
    semester: "second",
    desc: "string",
  },

  {
    code: "chm427*",
    title: "Wood and Paper Chemistry",
    credit_hrs: 2,
    prerequisite: "",
    semester: "second",
    desc: "string",
  },
  {
    code: "chm429*",
    title: "Nuclear and Radiochemistry",
    credit_hrs: 2,
    prerequisite: "chm311",
    semester: "second",
    desc: "string",
  },
  {
    code: "chm440*",
    title: "Colour Chemistry and Technology",
    credit_hrs: 3,
    prerequisite: "",
    semester: "second",
    desc: "string",
  },
  {
    code: "bch422*",
    title: "Industrial Biochemistry",
    credit_hrs: 3,
    prerequisite: "",
    semester: "second",
    desc: "string",
  },
];

export {
  level100courses,
  level200courses,
  level300courses,
  level400courses,
  level100coursesSecond,
  level200coursesSecond,
  level300coursesSecond,
  level400coursesSecond,
};
