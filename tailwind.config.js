/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        desktop: "769px",
        tablet: "321px",
      },
      fontFamily: {
        Roboto: ["Roboto"],
      },
      fontSize: {
        12: "12px",
        15: "15px",
        18: "18px",
        22: "22px",
        28: "28px",
        50: "50px",
        90: "90px",
      },
      textColor: {
        ctGray: "#C2C2C2",
        ctLightGray: "#E7E7E7",
        ctPurple: "#8F6BE8",
      },
      backgroundColor: {
        ctPurple: "#5E3DB3",
        ctIndicatorPurple: "#5C3CAF",
        ctIndicatorGray: "#D8D8D8",
        ctLightGray: "#F5F4F9",
        ctNavy: "#090C35",
      },
      width: {
        ct14: "14px",
        ct17: "17px",
        ct19: "19px",
        ct54: "54px",
        ct432: "432px",
        ct447: "447px",
        ct717: "717px",
      },
      maxWidth: {
        ct447: "447px",
        ct717: "717px",
      },
      height: {
        ct5: "5px",
        ct207: "207px",
        ct235: "235px",
        ct238: "238px",
        ct245: "245px",
        ct284: "284px",
        ct297: "297px",
      },
      borderRadius: {
        2.5: "2.5px",
      },
      gap: {
        ct10: "10px",
      },
      margin: {
        ct10: "10px",
        ct19: "19px",
        ct21: "21px",
        ct29: "29px",
        ct30: "30px",
        ct31: "31px",
        ct34: "34px",
        ct37: "37px",
        ct52: "52px",
        ct60: "60px",
        ct68: "68px",
        ct69: "69px",
        ct72: "72px",
        ct87: "87px",
        ct124: "124px",
        ct237: "237px",
      },
      padding: {
        ct18: "18px",
        ct30: "30px",
        ct195: "195px",
        ct322: "322px",
      },
      lineHeight: {
        ct18: "18px",
        ct21: "21px",
        ct33: "33px",
        ct42: "42px",
        ct59: "59px",
        ct105: "105px",
      }
    },
  },
  plugins: [],
}

