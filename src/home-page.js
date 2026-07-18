import hero from "./assets/hero.jpeg"

export function homePage() {
    return `
        <div class="hero">
			<img id="hero-image" src=${hero} alt="Hero image">
			<div class="hero-content">
				<p>Welcome Beautiful!!</p>
				<p class="tagline">Ready To Visit Again????</p>
			</div>
		</div> 
    `;
}