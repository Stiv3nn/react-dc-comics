// Header.jsx
export default function Header() {
    return (
        <header>
            
            <div id="contenitore-header">

                <figure class = "img-dc">
                    <img src="public\img\dc-logo.png" alt="" height="70px" />
                </figure>

                <nav class="menu-headeer">
                    <ul class="lista-header">
                        <li><a href="#">CHARACTERS</a></li>
                        <li><a href="#">COMICS</a></li>
                        <li><a href="#">MOVIES</a></li>
                        <li><a href="#">TV</a></li>
                        <li><a href="#">GAMES</a></li>
                        <li><a href="#">COLLECTIBLES</a></li>
                        <li><a href="#">VIDEOS</a></li>
                        <li><a href="#">FANS</a></li>
                        <li><a href="#">NEWS</a></li>
                        <li><a href="#">SHOP</a></li>
                    </ul>
                </nav>

            </div>

        </header>
    );
}