const toggle = document.querySelector(".toggle");
const menu = document.querySelector(".menu");
const testimonial = document.querySelector(".unpas-members-testimonial");

const members = [
	{ name: "aliffian khansa m", img: "./img/members/sasa.jpeg", quote: "It has a background color of #333 and an arrow pointing" },
	{ name: "ade pranaya", img: "./img/members/depran.jpeg", quote: "With a button element on the document like this:" },
	{ name: "eka ardilah f", img: "./img/members/eka.png", quote: "Tooltips can be placed in four base ways in relation to the " },
	{ name: "hazar hamzah", img: "./img/members/hazar.png", quote: "The arrow that points toward the element can have its proportion or shape" },
];

let membersTestimonial = "";

members.forEach(member => {
	let memberTestimonial = `
	<div class="py-4">
		<img src="${member.img}" alt="${member.quote}" class="w-40 h-w-40 rounded-full mx-auto unpas-member shadow-md transform hover:scale-105 transition-all duration-500" data-tippy-content="${member.quote}">
		<h3 class="text-center text-2xl capitalize font-light mt-4" :class="{'text-white' : isDark == true}">${member.name}</h3>
	</div>
	`;
	membersTestimonial += memberTestimonial;
});

testimonial.innerHTML = membersTestimonial;
tippy("[data-tippy-content]", {
	placement: "bottom",
});

toggle.addEventListener("click", () => {
	menu.classList.toggle("unpas-menu-toggel-show");
});

$(".unpas-members-testimonial").slick({
	autoplay: true,
	arrows: false,
});
