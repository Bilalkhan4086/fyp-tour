import React from 'react'
import { Box, Heading, Image, Paragraph } from 'theme-ui'
import Story1stImage from '../../Images/KalashValley.jpg'
import Story2ndImage from '../../Images/Story2.jpg'
import Story3rdImage from '../../Images/StoryImage4.jpg'
const Stories = () => {
    const styles = {
        main: {
            marginTop: "3%",
            fontFamily:"Merriweather"
        }
        ,
        image1: {
            display: "flex",
            justifyContent: "center",
            margin: "auto",
            boxShadow: " 0 0 10px black",
            // width: "40%",
            '@media (max-width: 720px)': {
                width: "90%"
            },
            '@media (min-width: 721px) and (max-width: 822px)': {
                width: "60%"
            }
        },
        Story1: {

            '@media screen and (min-width: 721px)': {
                flexDirection: 'row',
                display: "flex",
                margin: "auto",
                justifyContent: "center",
                width: ['90%'],

            },
            '@media (max-width: 720px)': {
                display: "flex",
                justifyContent: "center",
                width: ['100%'],
                flexDirection: "column-reverse"
            }
        },
        textBox: {
            display: "flex",
            margin: "auto",
            backgroundColor: "#f1f1f1",
            padding: "3%",
            color: '#00002f',
            zIndex: "1",
            flexDirection: "column",
            '@media (max-width: 720px)': {
                marginBottom: "5%",
                width: "90%"
            },
            '@media screen and (min-width: 721px)': {
                marginLeft: "5%",
                width: "50%"
            }
        },
        Story2TextBox2: {
            fontSize: ["1.7rem", "1.7rem", "2.0rem"],
            fontWeight: "lighter",
            backgroundColor: "#f1f1f1",
            marginTop: "3%",
            padding: "3%",
            '@media screen and (min-width: 721px)': {
                width: ['30%']
            }, '@media (max-width: 720px)': {

                marginY: "3%"
            }
        },
        Story2Box: {
            display: "flex",
            justifyContent: "center",
            margin: "auto",
            '@media screen and (min-width: 721px)': {
                flexDirection: 'row',
                margin: "auto",
                width: ['90%'],

            },
            '@media (max-width: 720px)': {
                width: ['95%'],
                marginTop:"3%",
                flexDirection: "column"
            }
        },
        Story2Box1: {
            display: "flex",
            justifyContent: "center",
            margin: "auto",
            '@media screen and (min-width: 721px)': {
                flexDirection: 'row',
                margin: "auto",
                width: ['90%'],

            },
            '@media (max-width: 720px)': {
                width: ['95%'],
                marginTop:"3%",
                flexDirection: "column-reverse"
            }
        }
        ,
        image2: {
            display: "flex",
            justifyContent: "center",
            margin: "auto",
            boxShadow: " 0 0 10px black",
            // width: "40%",
            '@media (max-width: 720px)': {
                width: "90%"
            },
            '@media screen and (min-width: 721px)': {
                width: "50%",
                marginLeft: "2%",
                marginTop: "-7%"
            }
        },
        textBox2: {
            display: "flex",
            margin: "auto",
            backgroundColor: "#f1f1f1",
            padding: "3%",
            color: '#00002f',
            zIndex: "2",
            flexDirection: "column",
            '@media (max-width: 720px)': {
                marginBottom: "5%",
                width: "90%"
            },
            '@media screen and (min-width: 721px)': {
                // marginLeft: "5%",
                width: "30%"
            }
        },
        textBox3: {
            display: "flex",
            margin: "auto",
            backgroundColor: "#f1f1f1",
            padding: "3%",
            color: '#00002f',
            zIndex: "2",
            flexDirection: "column",
            '@media (max-width: 720px)': {
                marginTop:"3%",
                marginBottom: "3%",
                width: "90%"
            },
            '@media screen and (min-width: 721px)': {
                marginTop: "5%",
                width: "50%"
            },
        },textBox3SecondBox: {
            display: "flex",
            margin: "auto",
            backgroundColor: "#f1f1f1",
            padding: "3%",
            color: '#00002f',
            zIndex: "3",
            flexDirection: "column",
            '@media (max-width: 720px)': {
                marginBottom: "5%",
                width: "100%"
            },
            '@media screen and (min-width: 721px)': {
                // marginLeft: "5%",
                width: "100%"
            },
        },
        Story1Box2:{
            display:"flex",
            justifyContent:"center",
                flexDirection:"column",
                margin:"auto",
            '@media (max-width: 720px)': {
                width: "90%",
                
            },
            '@media screen and (min-width: 721px)': {
                width: "30%",
                marginTop:"-10%"
            },
        },
        image3: {
            display: "flex",
            justifyContent: "center",
            margin: "auto",
            boxShadow: " 0 0 10px black",
            // width: "40%",
            marginTop:"3%",
            '@media (max-width: 720px)': {
                width: "85%",
                boxShadow: '-30px 60px #d0d0d0'
            },
            '@media (min-width: 721px) and (max-width: 822px)': {
                width: "90%"
            },
            '@media screen and (min-width: 721px)': {
                width: "100%",
                boxShadow: '-100px 100px #d0d0d0'
            }

        },
        image4: {
            display: "flex",
            justifyContent: "center",
            margin: "auto",
            boxShadow: " 0 0 10px black",
            // width: "40%",
            marginTop:"3%",
            '@media (max-width: 720px)': {
                width: "70%",
                marginTop:"-5%"
            },
            '@media screen and (min-width: 721px) ': {
                width: "100%",
            marginLeft:"-60%",
            marginTop:"-7%"
            }
        }

    }
    return (
        <Box sx={styles.main}>
             <link rel="preconnect" href="https://fonts.googleapis.com"/>
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
<link href="https://fonts.googleapis.com/css2?family=Merriweather:wght@300&display=swap" rel="stylesheet"></link>
            <Box sx={styles.Story1}>
                <Image src={Story1stImage} sx={styles.image1} />
                <Box sx={styles.textBox}>
                    <Heading sx={{ fontSize: ["2.2rem", "2.2rem", "2.8rem"], fontWeight: "lighter" }} as='h1'>the sky, the mountain, the tree...</Heading>
                    <Box sx={{ width: "70px", borderBottom: "4px solid #08d019", marginY: "5%" }} />
                    <Paragraph sx={{ fontSize: "1.2rem", fontWeight: "lighter" }}>“I declare this world is so beautiful that I can hardly believe it exists.” The beauty of nature can have a profound effect upon our senses, those gateways from the outer world to the inner, whether it results in disbelief in its very existence as Emerson notes, or feelings such as awe, wonder, or amazement.</Paragraph>
                </Box>
            </Box>
            <Box sx={styles.Story2Box}>
                <Heading sx={styles.Story2TextBox2} as='h2'>I declare this world is so beautiful that I can hardly believe it exists</Heading>
                <Image src={Story2ndImage} sx={styles.image2} />
                {/* <Box sx={styles.textBox2}>
                    <Heading sx={{ fontSize: ["2.2rem", "2.2rem", "2.8rem"], fontWeight: "lighter" }} as='h1'>Unseen beauty</Heading>
                    <Box sx={{ width: "70px", borderBottom: "4px solid #08d019", marginY: "5%" }} />
                    <Paragraph sx={{ fontSize: "1.2rem", fontWeight: "lighter",fontStyle:"italic" }}>My work explores and reveals the invisible, inviting the viewer to look beyond the seen to appreciate the beauty and mystery of the unseen</Paragraph>
                </Box> */}

            </Box>
            <Box sx={styles.Story2Box1}>
                <Box sx={styles.textBox3}>
                    <Heading sx={{ fontSize: ["2.2rem", "2.2rem", "2.8rem"], fontWeight: "lighter" }} as='h1'>9 Things You Can Do to Save the Env.</Heading>
                    <Box sx={{ width: "70px", borderBottom: "4px solid #08d019", marginY: "5%" }} />
                    <Paragraph sx={{ fontSize: "1.2rem", fontWeight: "lighter" }}>By no means am I suggesting that I am the next superhero of the environment (although that would make for an excellent Halloween costume). However, I like to believe that many of us, when equipped with information, will do the right thing. Here are the top 9 things you can do to save the planet, with or without a green cape:</Paragraph>
                </Box>
                <Box sx={styles.Story1Box2}>
                <Box sx={styles.textBox3SecondBox}>
                    <Heading sx={{ fontSize: ["2.2rem", "2.2rem", "2.8rem"], fontWeight: "lighter" }} as='h1'>Unseen beauty</Heading>
                    <Box sx={{ width: "70px", borderBottom: "4px solid #08d019", marginY: "5%" }} />
                    <Paragraph sx={{ fontSize: "1.2rem", fontWeight: "lighter",fontStyle:"italic" }}>My work explores and reveals the invisible, inviting the viewer to look beyond the seen to appreciate the beauty and mystery of the unseen</Paragraph>
                </Box>
{/* <Box sx={{height:"330px",width:"150px",backgroundColor:"#e3e3e3",zIndex:"-1",marginLeft:"-7%",marginTop:"10%"}}></Box> */}
                <Image src={Story1stImage} sx={styles.image3} />
                <Image src={Story3rdImage} sx={styles.image4} />

                </Box>



                {/* <Box sx={styles.textBox2}>
                    <Heading sx={{ fontSize: ["2.2rem", "2.2rem", "2.8rem"], fontWeight: "lighter" }} as='h1'>Unseen beauty</Heading>
                    <Box sx={{ width: "70px", borderBottom: "4px solid #08d019", marginY: "5%" }} />
                    <Paragraph sx={{ fontSize: "1.2rem", fontWeight: "lighter",fontStyle:"italic" }}>My work explores and reveals the invisible, inviting the viewer to look beyond the seen to appreciate the beauty and mystery of the unseen</Paragraph>
                </Box> */}
            </Box>

        </Box>
    )
}

export default Stories
