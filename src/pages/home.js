import React from 'react'
import '../App'



function home() {
    return (


        <html lang="en">
            <head>
                <title>Portfolio About Kyle Henriksen</title>
                <meta http-equiv="Content-type" content="text/html; charset=utf-8" />
                <link rel="stylesheet" href="/style.css" type="text/css" media="all" />
                <script type="text/javascript" src="js/jquery-1.4.2.min.js"></script>
                <script type="text/javascript" src="js/jquery.jcarousel.js"></script>
                <script type="text/javascript" src="js/jquery-func.js"></script>

            </head>
            <body>
                <div id="header">
                    <div className="shell">
                        <div id="navigation">
                            <ul>
                                <li><a className="active" href="/">HOME</a></li>
                                <li>
                                    <a href="https://twitter.com/starbjornx"
                                    >SOMETHINGELSE</a
                                    >
                                </li>
                                <li><a href="/">TWITCH</a></li>
                                <li><a href="#blog">MY BLOG</a></li>
                                <li>
                                    <a href="https://github.com/starbjornx"
                                    >CONTACT</a
                                    >
                                </li>
                            </ul>
                        </div>
                        <div id="contact">
                            <div className="slide-area">
                                <form action="#" method="get" accept-charset="utf-8">
                                    <div className="field-left">
                                        <div className="field-row">
                                            <label for="field1">Your Name <em>(Required)</em></label>
                                            <span>
                                                <input name="text" className="field" id="field1" />
                                            </span>
                                        </div>
                                        <div className="field-row">
                                            <label for="field2">E-Mail Address <em>(Required)</em></label>
                                            <span>
                                                <input name="text" className="field" id="field2" />
                                            </span>
                                        </div>
                                    </div>
                                    <div className="field-row field-right">
                                        <label for="text-field">Message <em>(Required)</em></label>
                                        <span className="textarea-bg">
                                            <textarea
                                                name="text"
                                                id="text-field"
                                                cols="20"
                                                rows="4"
                                            ></textarea>
                                        </span>
                                    </div>
                                    <p>
                                        <input type="submit" value="SUBMIT" />
                                    </p>
                                    <div className="cl">&nbsp;</div>
                                </form>
                            </div>
                            <div className="slide-area-info">
                                <div className="green">
                                    <img src="/images/green-light.gif" alt="" />
                                    <p>I am currently: <strong>AVAILABLE</strong></p>
                                </div>
                                <a className="slide-down" href="/">slide-down</a>
                            </div>
                            <div className="cl">&nbsp;</div>
                        </div>
                        <div id="intro">
                            <div className="info">
                                <h1>Greetings!</h1>
                                <h2>
                                    This is my portfolio please take a look around. If you like any of
                                    my work and would consider me for a job please reach out to me
                                    through my contact page.
                                </h2>
                                <p className="quote">
                                    &laquo; " The true sign of intelligence is not knowledge but
                                    imagination. " &raquo;
                                </p>
                                <p className="author">-Albert Einstein</p>
                            </div>
                            <div className="slider" id="big-slider">
                                <div className="slider-carousel">
                                    <ul>
                                        <li>
                                            <a href="https://github.com/starbjornx"
                                            ><img
                                                    src="/images/kylesprofilepic.jpg"
                                                    style={{ width: "100%", height: "100%" }}
                                                    alt="About me"
                                                /></a>
                                            <span class="project-info">Checkout my github profile! </span>
                                        </li>
                                        <li>
                                            <a href="https://www.twitch.tv/starbjorn_"
                                            ><img
                                                    src="/images/twitchlogo1.png"
                                                    alt="follow me on twitch at twitch.tv/starbjorn_"
                                                /></a>
                                            <span className="project-info">follow me on twitch! </span>
                                        </li>
                                        <li>
                                            <a href="/"
                                            ><img
                                                    src="/images/codingbackground.png"
                                                    alt="where i learned to code at"
                                                    style={{ width: "100%", height: "100%" }}
                                                /></a>
                                            <span className="project-info">Where I learned to code</span>
                                        </li>
                                        <li>
                                            <a href="/"
                                            ><img
                                                    src="/images/portfolio.png"
                                                    alt="previous portfolio"
                                                    style={{ width: "100%", height: "100%" }}
                                                /></a>
                                            <span className="project-info">My previous portfolio </span>
                                        </li>
                                        <li>
                                            <a href="/"
                                            ><img
                                                    src="/images/coming-soon.jpg"
                                                    alt="coming soon videos"
                                                /></a>
                                        </li>
                                        <li>
                                            <a href="/"
                                            ><img
                                                    src="/images/coming-soon.jpg"
                                                    alt="coming soon job desires"
                                                /></a>
                                        </li>
                                    </ul>
                                    <div className="cl">&nbsp;</div>
                                </div>
                                <div className="slider-navigation">
                                    <ul>
                                        <li><a className="active" href="/">1</a></li>
                                        <li><a href="/">2</a></li>
                                        <li><a href="/">3</a></li>
                                        <li><a href="/">4</a></li>
                                        <li><a href="/">5</a></li>
                                        <li><a href="/">6</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="cl"></div>
                        </div>
                    </div>
                </div>
                <div id="main">
                    <div id="main-in">
                        <div className="shell">
                            <div id="works">
                                <div className="head">
                                    <h2>Featured Projects</h2>
                                    <a className="red" href="/">see all</a>
                                </div>
                                <div className="project" style={{ marginBottom: "50px" }}>
                                    <div className="slider-carousel">
                                        <ul>
                                            <li>
                                                <a href="/"
                                                ><img
                                                        src="/images/background.png"
                                                        style={{ width: "100%", height: "65%" }}
                                                        alt=""
                                                    /></a>
                                                <span className="project-info"
                                                >My most recent project "AFC Richmond Roster"
                                                </span>
                                            </li>
                                            <li>
                                                <a href="/"
                                                ><img
                                                        src="/images/myproject.png"
                                                        style={{ width: "100%", height: "60%" }}
                                                        alt=""
                                                    /></a>
                                                <span class="project-info"
                                                >My first project, Stumble upon the force!</span
                                                >
                                            </li>
                                            <li>
                                                <a href="/"><img src="/images/project3.jpg" alt="" /></a>
                                                <span className="project-info"
                                                >Molestie facilisis risus arcu
                                                </span>
                                            </li>
                                            <li>
                                                <a href="/"><img src="/images/project1.jpg" alt="" /></a>
                                                <span className="project-info"
                                                >Molestie facilisis risus arcu
                                                </span>
                                            </li>
                                            <li>
                                                <a href="/"><img src="/images/project1.jpg" alt="" /></a>
                                                <span className="project-info"
                                                >Molestie facilisis risus arcu
                                                </span>
                                            </li>
                                            <li>
                                                <a href="/"><img src="/images/project1.jpg" alt="" /></a>
                                                <span className="project-info"
                                                >Molestie facilisis risus arcu
                                                </span>
                                            </li>
                                            <li>
                                                <a href="/"><img src="/images/project1.jpg" alt="" /></a>
                                                <span className="project-info"
                                                >Molestie facilisis risus arcu
                                                </span>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="slider-navigation">
                                        <ul>
                                            <li><a className="active" href="/">1</a></li>
                                            <li><a href="/">2</a></li>
                                            <li><a href="/">3</a></li>
                                            <li><a href="/">4</a></li>
                                            <li><a href="/">5</a></li>
                                            <li><a href="/">6</a></li>
                                        </ul>
                                    </div>
                                    <ul className="buttons">
                                        <li><a className="button" href="/">VIEW LIVE</a></li>
                                        <li><a className="button" href="/">LIVE WORK</a></li>
                                    </ul>
                                </div>
                                <div className="head">
                                    <h2>Featured Homework Assignments</h2>
                                    <a className="red" href="/">see all</a>
                                </div>
                                <div className="project" style={{ marginBottom: "50px" }}>
                                    <div class="slider-carousel">
                                        <ul>
                                            <li>
                                                <a href="/"><img src="/images/pwgen.png" alt="" /></a>
                                                <span className="project-info">Etiam semper libero quis</span>
                                            </li>
                                            <li>
                                                <a href="/"><img src="/images/thequiz.png" alt="" /></a>
                                                <span className="project-info">Etiam semper libero quis</span>
                                            </li>
                                            <li>
                                                <a href="/"
                                                ><img src="/images/teamCards.png" alt=""
                                                    /></a>
                                                <span className="project-info">Etiam semper libero quis</span>
                                            </li>
                                            <li>
                                                <a href="/"
                                                ><img src="/images/weatherappExample.png" alt=""
                                                    /></a>
                                                <span className="project-info">Etiam semper libero quis</span>
                                            </li>
                                            <li>
                                                <a href="/"
                                                ><img src="/images/teamCards.png" alt=""
                                                    /></a>
                                                <span className="project-info">Etiam semper libero quis</span>
                                            </li>
                                            <li>
                                                <a href="/"
                                                ><img src="/images/teamCards.png" alt=""
                                                    /></a>
                                                <span className="project-info">Etiam semper libero quis</span>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="slider-navigation">
                                        <ul>
                                            <li><a class="active" href="/">1</a></li>
                                            <li><a href="/">2</a></li>
                                            <li><a href="/">3</a></li>
                                            <li><a href="/">4</a></li>
                                            <li><a href="/">5</a></li>
                                            <li><a href="/">6</a></li>
                                        </ul>
                                    </div>
                                    <ul className="buttons">
                                        <li><a className="button" href="/">VIEW LIVE</a></li>
                                        <li><a className="button" href="/">CASE STUDY</a></li>
                                    </ul>
                                </div>

                                <div className="head">
                                    <h2>Featured Videos</h2>
                                    <a className="red" href="/">see all</a>
                                </div>
                                <div className="project">
                                    <div className="slider-carousel">
                                        <ul>
                                            <li>
                                                <a
                                                    href="https://www.twitch.tv/videos/1449289408?t=0h15m50s"
                                                    alt="this goes to Twitch tv"
                                                ><img src="/images/twitchvideos.png" alt=""
                                                    /></a>
                                                <span class="project-info"
                                                >Watch some of my most recent twitch videos!</span
                                                >
                                            </li>
                                            <li>
                                                <a href="/"><img src="/images/project2.jpg" alt="" /></a>
                                            </li>
                                            <li>
                                                <a href="/"><img src="/images/project1.jpg" alt="" /></a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div class="slider-navigation">
                                        <ul>
                                            <li><a class="active" href="/">1</a></li>
                                            <li><a href="/">2</a></li>
                                            <li><a href="/">3</a></li>
                                            <li><a href="/">4</a></li>
                                            <li><a href="/">5</a></li>
                                            <li><a href="/">6</a></li>
                                        </ul>
                                    </div>
                                    <ul class="buttons">
                                        <li><a className="button" href="/">VIEW LIVE</a></li>
                                        <li><a className="button" href="/">CASE STUDY</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div id="blogroll">
                                <div class="head" id="blog">

                                    <a className="rss" href="/"
                                    ><img src="/images/rss.gif" alt=""
                                        /></a>
                                </div>
                                <div class="box">
                                    <h4>Why I became a web developer</h4>
                                    <div class="comment">
                                        <span>31 Jan 2022 - 10:00 AM by Kyle</span>
                                        <p className="text-right">1 <a href="/">Comments</a></p>
                                    </div>
                                    <div class="content">
                                        <p>
                                            The hard truth to the matter is that I had no real career, no
                                            real progress and to add to it COVID! I already was not in the
                                            best of places when it came to my company, I had people around
                                            me that wanted to use me and manipulate my decisions every
                                            chance they got. It was bad multiple people were trying to
                                            take full advantage over my kindness and situations that
                                            arrised and presented themselves with good outcomes...&raquo;
                                        </p>
                                    </div>
                                    <a className="red" href="/">read more &raquo;</a>
                                </div>
                                <div className="box">
                                    <h4>What challenges I went through</h4>
                                    <div className="comment">
                                        <span>8 April 2022 - 08:19 PM by Kyle</span>
                                        <p className="text-right">0 <a href="/">Comments</a></p>
                                    </div>
                                    <div className="content">
                                        <p>
                                            I didnt think I belonged at all, it felt like I was pretending
                                            to know the information, then it clicked! I knew I wanted to
                                            have all this knowledge but I also wanted to focus on the
                                            bigger picture. Not just a job but a job I really would enjoy
                                            doing, front end styling! I think I can land a job in that
                                            category but only time will tell because I am currently
                                            bloging about this online while still in the boot camp course
                                            at the Denver University!...&raquo;
                                        </p>
                                    </div>
                                    <a className="red" href="/">read more &raquo;</a>
                                </div>
                                <div class="box">
                                    <h4>I will have to get used to BLOGGING!</h4>
                                    <div class="comment">
                                        <span>9 April 2022 - 12:00 AM by Kyle</span>
                                        <p className="text-right">0 <a href="/">Comments</a></p>
                                    </div>
                                    <div class="content">
                                        <p>
                                            As this midnight oil burns I keep at it trying to learn more,
                                            wanting to achieve victory at all costs... giving up isnt a
                                            choice, neither is failing, I have no choice but to stay at it
                                            no matter how long it takes I will need to continue to code
                                            and even if that means doing something I do not like doing at
                                            all (blogging lmao)...&raquo;
                                        </p>
                                    </div>
                                    <a className="red" href="/">read more &raquo;</a>
                                </div>
                                <div class="box">
                                    <h4>Future BLOG GOES HERE</h4>
                                    <div className="comment">
                                        <span>30 April 2022 - 02:32 AM by Kyle</span>
                                        <p className="text-right">0 <a href="/">Comments</a></p>
                                    </div>
                                    <div class="content">
                                        <p>
                                            This will be where my future blog will be but in the mean time
                                            I am typing this out to make sure everything is working
                                            properly on my website.
                                        </p>
                                    </div>
                                    <a class="red" href="/">read more &raquo;</a>
                                </div>
                                <iframe
                                    title="Cool"
                                    src="https://player.twitch.tv/?channel=starbjorn_&parent=starbjornx.github.io/portfolio/&muted=false"
                                    height="25%"
                                    width="100%"
                                    allowfullscreen="true"
                                >
                                </iframe>
                            </div>
                            <div class="cl">&nbsp;</div>
                        </div>
                    </div>
                </div>

                <div id="footer">
                    <div className="footerlink">
                        <p className="lf">
                            Copyright &copy; 2022 <a href="/">Kyles Portfolio</a> - All Rights
                            Reserved
                        </p>
                        <p className="rf">
                            Design by <a href="http://chocotemplates.com/">ChocoTemplates.com</a>
                        </p>
                        <div style={{ clear: "both" }}></div>
                    </div>
                </div>
            </body>
        </html>



    );

}

export default home