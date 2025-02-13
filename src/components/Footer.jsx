// Footer.jsx
export default function Footer() {
    return (
        <footer>
            
            <div class="contenitore-dc">

            <div class="dc-logo-bg">

                <img src="public\img\dc-logo-bg.png" alt="" />

            </div>

            {/* DC COMICS */}
            <div class="footer-dccomics">
                <h4>DC COMICS</h4>
                <ul>
                    <li><a href="#">Characters</a></li>
                    <li><a href="#">Comics</a></li>
                    <li><a href="#">Movies</a></li>
                    <li><a href="#">TV</a></li>
                    <li><a href="#">Games</a></li>
                    <li><a href="#">Videos</a></li>
                    <li><a href="#">News</a></li>
                </ul>
            </div>

            {/* DC */}
            <div class="footer-dc">
                <h4>DC</h4>

                <ul>
                    <li><a href="#">Terms of use</a></li>
                    <li><a href="#">Privacy policy</a></li>
                    <li><a href="#">Ad choices</a></li>
                    <li><a href="#">Advertising</a></li>
                    <li><a href="#">Jobs</a></li>
                    <li><a href="#">Subscriptions</a></li>
                    <li><a href="#">Talent workshops</a></li>
                    <li><a href="#">CPSC certificates</a></li>
                    <li><a href="#">Ratings</a></li>
                    <li><a href="#">Shop help</a></li>
                    <li><a href="#">Contact us</a></li>
                </ul>
            </div>

            {/* SITES */}
            <div class="footer-sites">
                <h4>SITES</h4>
                <ul>
                    <li><a href="#">DC</a></li>
                    <li><a href="#">MAD magazine</a></li>
                    <li><a href="#">DC kids</a></li>
                    <li><a href="#">DC universe</a></li>
                    <li><a href="#">DC power visa</a></li>
                </ul>
            </div>

            {/* SHOP */}
            <div class="footer-shop">
                <h4>SHOP</h4>
                <ul>
                    <li><a href="#">Shop DC</a></li>
                    <li><a href="#">Shop DC collectibles</a></li>
                </ul>
            </div>
            </div>

            {/* Contenitore dei loghi a fine pagina */}
            <div class="loghi-finepagina">

                {/* sign-up now */}
                <div>
                    <h4>SIGN-UP NOW!</h4>
                </div>

                {/* LOGO dei social */}
                <div class="logo-social">
                    <h4>FOLLOWS US</h4>

                    <img src="public\img\footer-facebook.png" alt="" />
                    <img src="public\img\footer-twitter.png" alt="" />
                    <img src="public\img\footer-youtube.png" alt="" />
                    <img src="public\img\footer-pinterest.png" alt="" />
                    <img src="public\img\footer-periscope.png" alt="" />
                   
                </div>

            </div>

            

        </footer>
    );
}