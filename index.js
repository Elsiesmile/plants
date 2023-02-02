'use strict'

console.log("Моя оценка 75/75\nТребования к вёрстке:\n\n1.Вёрстка соответствует макету. Ширина экрана 768px +24\n2.Вёрстка соответствует макету. Ширина экрана 380px +24\n3.Ни на одном из разрешений до 320px включительно не появляется горизонтальная полоса прокрутки. Весь контент страницы при этом сохраняется: не обрезается и не удаляется +15\nНа ширине экрана 380рх и меньше реализовано адаптивное меню +22")

// hamb

const hamb = document.querySelector("#hamb");
const popup = document.querySelector("#popup");
const body = document.body;

const menu = document.querySelector("#menu").cloneNode(1);

hamb.addEventListener("click", hambHandler);

function hambHandler(e) {
	e.preventDefault();

	popup.classList.toggle("open");
	hamb.classList.toggle("active");
	body.classList.toggle("noscroll");
	renderPopup();
}

function renderPopup() {
	popup.appendChild(menu);
}


const links = Array.from(menu.children);


links.forEach((link) => {
	link.addEventListener("click", closeOnClick);
});


function closeOnClick() {
	popup.classList.remove("open");
	hamb.classList.remove("active");
	body.classList.remove("noscroll");
}


// service

const gardensButton = document.querySelector('.gardens');
const lawnButton = document.querySelector('.lawn');
const plantingButton = document.querySelector('.planting');
const gardensBlock = document.querySelectorAll('.gardens-block');
const plantingBlock = document.querySelectorAll('.planting-block');
const lawnBlock = document.querySelectorAll('.lawn-block');

function addBlur() {
	plantingBlock.forEach((item) => {
		item.classList.toggle('blur');
	})

	lawnBlock.forEach((item) => {
		item.classList.toggle('blur');
	})

	gardensBlock.forEach((item) => {
		item.classList.toggle('blur');
	})
}

gardensButton.addEventListener('click', () => {
	gardensButton.classList.toggle('active');
	if (!plantingButton.classList.contains('active') && !lawnButton.classList.contains('active')) {
		plantingBlock.forEach((item) => {
			item.classList.toggle('blur');
		})

		lawnBlock.forEach((item) => {
			item.classList.toggle('blur');
		})

	} else if (plantingButton.classList.contains('active') && lawnButton.classList.contains('active')) {
		addBlur()

		plantingButton.classList.toggle('active');
		lawnButton.classList.toggle('active');

	} else if (plantingButton.classList.contains('active') && !lawnButton.classList.contains('active')) {
		gardensBlock.forEach((item) => {
			item.classList.toggle('blur');
		})

	} else if (!plantingButton.classList.contains('active') && lawnButton.classList.contains('active')) {
		gardensBlock.forEach((item) => {
			item.classList.toggle('blur');
		})
	}
})

plantingButton.addEventListener('click', () => {
	plantingButton.classList.toggle('active');
	if (!gardensButton.classList.contains('active') && !lawnButton.classList.contains('active')) {
		gardensBlock.forEach((item) => {
			item.classList.toggle('blur');
		})

		lawnBlock.forEach((item) => {
			item.classList.toggle('blur');
		})

	} else if (gardensButton.classList.contains('active') && lawnButton.classList.contains('active')) {
		addBlur()

		gardensButton.classList.toggle('active');
		lawnButton.classList.toggle('active');

	} else if (gardensButton.classList.contains('active') && !lawnButton.classList.contains('active')) {
		plantingBlock.forEach((item) => {
			item.classList.toggle('blur');
		})

	} else if (!gardensButton.classList.contains('active') && lawnButton.classList.contains('active')) {
		plantingBlock.forEach((item) => {
			item.classList.toggle('blur');
		})
	}
})

lawnButton.addEventListener('click', () => {
	lawnButton.classList.toggle('active');
	if (!gardensButton.classList.contains('active') && !plantingButton.classList.contains('active')) {
		gardensBlock.forEach((item) => {
			item.classList.toggle('blur');
		})

		plantingBlock.forEach((item) => {
			item.classList.toggle('blur');
		})

	} else if (gardensButton.classList.contains('active') && plantingButton.classList.contains('active')) {
		addBlur()

		gardensButton.classList.toggle('active');
		plantingButton.classList.toggle('active');

	} else if (gardensButton.classList.contains('active') && !plantingButton.classList.contains('active')) {
		lawnBlock.forEach((item) => {
			item.classList.toggle('blur');
		})

	} else if (!gardensButton.classList.contains('active') && plantingButton.classList.contains('active')) {
		lawnBlock.forEach((item) => {
			item.classList.toggle('blur');
		})
	}
})

// accordion

const accordion = document.querySelectorAll('.accordion__item');
const accordionBlock = document.querySelectorAll('.accordion-block');

accordion.forEach((item) =>
	item.addEventListener('click', () => {
		const parent = item.parentNode;

		if (parent.classList.contains('accordion-block--active')) {
			parent.classList.remove('accordion-block--active');
			item.classList.remove('active');
		} else {
			accordionBlock.forEach((child) => {
				child.classList.remove('accordion-block--active');
			})

			parent.classList.add('accordion-block--active');
			item.classList.add('active');
		}
	})
)

const orderBtn = document.querySelectorAll('.order');

orderBtn.forEach((e) => {
	e.addEventListener('click', () => {
		document.location.href = '#contacts';
	})
})

// contact us

const contacts = document.querySelector('.contacts__city');
const contactsInfo = document.querySelector('.contacts__city-block');
const city = document.querySelector('.city');
const cityInfo = document.querySelector('.city-info-section');
const dataCity = document.querySelector('.item-city');
const dataPhone = document.querySelector('.item-phone');
const dataAddress = document.querySelector('.item-address');
const callUsBtn = document.querySelector('.call-us');

contacts.addEventListener('click', () => {
	contactsInfo.classList.toggle('active');
	contacts.classList.toggle('active');
})

const dataCityInfo = {
	city: ['Canandaigua, NY', 'New York City', 'Yonkers, NY', 'Sherrill, NY'],
	phone: ['+1 585 393 0001', '+1 212 456 0002', '+1 914 678 0003', '+1 315 908 0004'],
	address: ['151 Charlotte Street', '9 East 91st Street', '511 Warburton Ave', '14 WEST Noyes BLVD']
};

contactsInfo.addEventListener('click', (e) => {
	if (e.target.textContent === dataCityInfo.city[0]) {
		contactsInfo.classList.toggle('active');
		contacts.classList.toggle('active');
		cityInfo.classList.add('active');
		city.textContent = dataCityInfo.city[0];
		dataCity.textContent = dataCityInfo.city[0];
		dataPhone.textContent = dataCityInfo.phone[0];
		dataAddress.textContent = dataCityInfo.address[0];
		callUsBtn.href = `tel: ${dataCityInfo.phone[0]}`;
	}

	if (e.target.textContent === dataCityInfo.city[1]) {
		contactsInfo.classList.toggle('active');
		contacts.classList.toggle('active');
		cityInfo.classList.add('active');
		city.textContent = dataCityInfo.city[1];
		dataCity.textContent = dataCityInfo.city[1];
		dataPhone.textContent = dataCityInfo.phone[1];
		dataAddress.textContent = dataCityInfo.address[1];
		callUsBtn.href = `tel: ${dataCityInfo.phone[1]}`;
	}

	if (e.target.textContent === dataCityInfo.city[2]) {
		contactsInfo.classList.toggle('active');
		contacts.classList.toggle('active');
		cityInfo.classList.add('active');
		city.textContent = dataCityInfo.city[2];
		dataCity.textContent = dataCityInfo.city[2];
		dataPhone.textContent = dataCityInfo.phone[2];
		dataAddress.textContent = dataCityInfo.address[2];
		callUsBtn.href = `tel: ${dataCityInfo.phone[2]}`;
	}

	if (e.target.textContent === dataCityInfo.city[3]) {
		contactsInfo.classList.toggle('active');
		contacts.classList.toggle('active');
		cityInfo.classList.add('active');
		city.textContent = dataCityInfo.city[3];
		dataCity.textContent = dataCityInfo.city[3];
		dataPhone.textContent = dataCityInfo.phone[3];
		dataAddress.textContent = dataCityInfo.address[3];
		callUsBtn.href = `tel: ${dataCityInfo.phone[3]}`;
	}
})