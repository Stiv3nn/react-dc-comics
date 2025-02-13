// Main.jsx
export default function Main() {
    return (
        <main>

            {/* Inserimento del contenuto */}
            <div class="inserimento-contenuto">
             <h1>Content goes here</h1>
            </div>

            {/* Immagini dei comics */}
            <figure>
                <div class="img-comics"><img src="public\img\buy-comics-digital-comics.png" alt="" height="40px" /><h6>DIGITAL COMICS</h6></div>
                <div class="img-comics"><img src="public\img\buy-comics-merchandise.png" alt="" height="40px" /><h6>DC MERCHANDISE</h6></div>
                <div class="img-comics"><img src="public\img\buy-comics-subscriptions.png" alt="" height="40px" /><h6>SUBSCRIPTION</h6></div>
                <div class="img-comics-shop"><img src="public\img\buy-comics-shop-locator.png" alt="" height="40px" /><h6>COMIC SHOP LOCATOR</h6></div>
                <div class="img-comics-power"><img src="public\img\buy-dc-power-visa.svg" alt="" height="40px"/><h6>DC POWER VISA</h6></div>
            </figure>

        </main>
    );
}