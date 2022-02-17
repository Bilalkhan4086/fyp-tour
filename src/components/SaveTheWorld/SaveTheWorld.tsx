import React from 'react'
import { Box, Heading, Image, Text, Link } from 'theme-ui';
import forestImage1 from '../../Images/cloudMountain.jpg'
import forestImage2 from '../../Images/Nature3.jpg'
import forestImage3 from '../../Images/Nature.jpg'


const SaveTheWorld = () => {
    const styles = {
        main: {
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            marginX: "auto",
        },
        headingMain: {
            textAlign: "center",
            fontFamily: "Merriweather",
            fontSize: ["2.2rem", "2.2rem", "2.4rem"]
        },
        bottomBorder: {
            width: "25vh",
            borderBottom: "2px solid #08d019",
            marginY: "2vh",
            marginX: "auto",
            '@media (max-width: 220px)': {
                width: "90%",
            },
        },
        secondHeading: {
            textAlign: "center",
            fontFamily: "Merriweather",
            marginX: "auto",
            '@media (min-width: 301px) and (max-width: 720px)': {
                width: "90%",
                fonstSize: "1.6rem"
            },
            '@media (min-width: 721px) and (max-width: 820px)': {
                width: "80%",
                fonstSize: "1.4rem"
            },
            '@media screen and (min-width: 821px)': {
                width: "65%",
                fonstSize: "1.4rem"
            }
        },
        headingThird: {
            width: "100%",
            fontSize: "2.2rem",
            fontWeigth:"lighter",
            '@media (max-width: 350px)': {
                fontSize:"1.4rem"
            }
        },
        SaveTheWorldBox: {
            display: "flex",
            marginTop: "7%",
            '@media (max-width: 574px)': {
                marginX: "auto",
                flexDirection: "column"
            },
            '@media (min-width: 575px) and (max-width: 769px)': {
                marginX: "auto",
                flexDirection: "column"
            },
            '@media (min-width: 770px) and (max-width: 1094px)': {
                justifyContent: "space-around",
                marginBottom: "-100px",
            },
            '@media (min-width: 1095px) and (max-width: 1201px)': {
                justifyContent: "space-around",
                marginBottom: "-100px",
            },
            '@media screen and (min-width: 1200px)': {
                justifyContent: "space-around",
                marginBottom: "-100px",
            }

        },
        firstTextDiv: {
            marginTop: "5%",
            height: "250px"
        },
        firstSmallImageBox: {
            overflow: "hidden",
            '@media (max-width: 574px)': {
            display:"none",
            marginTop:"10px" 
            },
            '@media (min-width: 575px) and (max-width: 769px)': {
                width: "550px",
                height: "600px",
                marginX: "auto"
            },
            '@media (min-width: 770px) and (max-width: 1094px)': {
                width: "407px",
                height: "580px",
            },
            '@media (min-width: 1095px) and (max-width: 1201px)': {
                width: "580px",
                height: "616px",
            },
            '@media screen and (min-width: 1200px)': {
                width: "603px",
                height: "500px",
            }
        },
        MainSecondBox: {
            display: "flex",
            '@media (max-width: 574px)': {
                width:"90%",
                marginX: "auto",
                flexDirection: "column-reverse"
            },
            '@media (min-width: 575px) and (max-width: 769px)': {
                marginX: "auto",
                flexDirection: "column-reverse"
            },
            '@media (min-width: 770px) and (max-width: 1094px)': {
                justifyContent: "space-around",
                marginTop: "-30px",
            },
            '@media (min-width: 1095px) and (max-width: 1201px)': {
                justifyContent: "space-around",
                marginTop: "-30px",
            },
            '@media screen and (min-width: 1200px)': {
                justifyContent: "space-around",
                marginTop: "-30px",
            }
        },
        ImagedTextBox: {
            padding: "25px",
            fontFamily: "Merriweather",
            background: `url(${forestImage3})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            color: "#fff",
            '@media (max-width: 300px)': {
                width: "100%",
                marginX: "auto",
                marginTop:"30px",
                padding:"5px",
                paddingBottom:"20px"
            },
            '@media (min-width: 301px) and (max-width: 574px)': {
                width: "90%",
                marginX: "auto",
                marginTop:"30px"
            },
            '@media (min-width: 575px) and (max-width: 769px)': {
                width: "526px",
                marginX: "auto",
                marginTop:"30px"
            },
            '@media (min-width: 770px) and (max-width: 1094px)': {
                width: "330px",
                height: "423px"
            },
            '@media (min-width: 1095px) and (max-width: 1201px)': {
                width: "403px",
                height: "380px"
            },
            '@media screen and (min-width: 1200px)': {
                width: "500px",
                height: "318px"
            }
        },
        SecondTextBox: {
            fontFamily: "MerriWeather",
            height: "300px",
            width: "350px",
            backgroundColor: "#fff",
            marginTop: "60px",
            padding: "70px 20px",


            '@media (max-width: 349px)': {
                width: "90%",
                marginX: "auto",
                marginTop:"30px",
                height: "430px"
            },
            '@media (min-width: 350px) and (max-width: 574px)': {
                width: "80%",
                marginX: "auto",
                marginTop:"30px",
                height: "400px"

            }, 
            '@media (min-width: 575px) and (max-width: 769px)': {
                width: "526px",
                marginX: "auto",
                marginTop:"30px"
            },
            '@media (min-width: 770px) and (max-width: 1094px)': {
                width: "296px",
            },
            '@media (min-width: 1095px) and (max-width: 1201px)': {
                width: "317px",
            },
            '@media screen and (min-width: 1200px)': {
                width: "384px",
            }
        }, ImagedTextBoxHeader: {
            fontSize: "2.4rem",
            fontFamily: "Merriweather",
            marginY: "1.2rem",
            fontWeight:"lighter",
            '@media (max-width: 250px)': {
                fontSize: "2rem",
            }
        }, ImagedTextBoxLink: {
            width: "6.4rem",
            borderBottom: "2px solid #fff",
            color: "#fff",
            fontSize: "1.2rem",
            marginTop: "1.2rem",
            display: "block",
            textDecoration: "none",
        }, ImagedTextBoxText: {
            fontSize: "1.1rem"
        },
        firstTextDivHeading: {
            '@media (max-width: 298px)': {
                width: "90%",
                fontSize: "20px",
                marginX: "auto"
            },
            '@media (min-width: 299px) and (max-width: 574px)': {
                width: "90%",
                fontSize: "30px",
                marginX: "auto"
            },
            '@media (min-width: 575px) and (max-width: 769px)': {
                width: "512px",
                fontSize: "30px",
                marginX: "auto"
            },
            '@media (min-width: 770px) and (max-width: 1094px)': {
                width: "275px",
                fontSize: "30px"
            },
            '@media (min-width: 1095px) and (max-width: 1201px)': {
                width: "310px",
                fontSize: "30px"
            },
            '@media screen and (min-width: 1200px)': {
                width: "350px",
                fontSize: "30px"
            }
        },
        saveTheWorldSimpleText:{
            '@media (max-width: 220px)': {
                fontSize: "0.75rem"
            }
        }


    }
    return (
        <Box sx={{ background: `url(${forestImage1})`, backgroundPosition: "center", backgroundSize: "cover", backgroundRepeat: "no-repeat" }} >
            <Box sx={{ backgroundColor: "rgba(256,256,256,0.5)", padding: "5%" }}>
                <Box sx={styles.main}>
                    
                    <link rel="preconnect" href="https://fonts.googleapis.com" />
                    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
                    <link href="https://fonts.googleapis.com/css2?family=Merriweather:wght@300&display=swap" rel="stylesheet"></link>

                    <Heading as="text" sx={styles.headingMain}>Save The World!</Heading>
                    <Box sx={styles.bottomBorder} /><br />
                    <Box sx={styles.secondHeading}>Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero</Box>

                    <Box sx={styles.SaveTheWorldBox}>

                        <Box sx={styles.firstTextDiv}>
                            <Heading as="h1" sx={styles.firstTextDivHeading}>"Though We Travel The World Over To Find The Beautiful, We Must Carry It With Us, Or We Find It Not."</Heading>
                            <br />
                            <Text as="h3">– Ralph Waldo Emerson</Text>
                        </Box>
                        <Box sx={styles.firstSmallImageBox}>
                            <Image src={forestImage2} alt="Forest Image is Loading" />
                        </Box>
                    </Box>

{/* Problem in styling during building from here */}


                    <Box sx={styles.MainSecondBox}>

                        <Box sx={styles.ImagedTextBox}>
                            <Heading as="h3" sx={styles.ImagedTextBoxHeader}>The air smells sweeter</Heading><br />
                            <Text sx={styles.ImagedTextBoxText}>Whether you call it nature travel, sustainable travel or responsible ecotourism, there’s something incredibly potent, powerful, and cleansing about getting away from the hustle and bustle of the city. </Text><br />
                            <Link href="#!" sx={styles.ImagedTextBoxLink}>read more</Link>
                        </Box>

                        <Box sx={styles.SecondTextBox}>
                            <Heading as="h3" sx={styles.headingThird}>With Earth Day</Heading>
                            <br />
                            <Text sx={styles.saveTheWorldSimpleText} >With Earth Day coming up April 22, people tend to start thinking and talking about nature conservation more and more at this time of year.</Text>
                        </Box>

                    </Box> 
{/* Problem in styling during building to here*/}


                </Box>

            </Box>
        </Box>
    )
}

export default SaveTheWorld
