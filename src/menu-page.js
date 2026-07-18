import hero from "./assets/hero.jpeg"

export function menuPage() {
    return `
        <div class="menu-content">
			<div class="intro">
				<p>Find Your Cravings....</p>
			</div>

			<div class="menu-cards">
				<div class="card">
					<div class="card-image">
						<img src=${hero} alt="Item -1">
					</div>
					<div class="card-details">
						<div class="dish-name">Australian Steak with Steamed Potatoes</div>
						<div class="dish-cost">$49.00</div>
					</div>
				</div>
				<div class="card">
					<div class="card-image">
						<img src=${hero} alt="Item -1">
					</div>
					<div class="card-details">
						<div class="dish-name">Australian Steak with Steamed Potatoes</div>
						<div class="dish-cost">$49.00</div>
					</div>
				</div>
				<div class="card">
					<div class="card-image">
						<img src=${hero} alt="Item -1">
					</div>
					<div class="card-details">
						<div class="dish-name">Australian Steak with Steamed Potatoes</div>
						<div class="dish-cost">$49.00</div>
					</div>
				</div>
			</div>
		</div>
    `
}