imageArray = ['images/imageedit_12_4456809058.png','images/imageedit_17_7862663924.png','images/imageedit_23_3911380816.png'];
imageCounter = 0;
class Tomagotchi {
	constructor(image){
		imageCounter++
		this.name = prompt('Enter a name for your Tomagotchi');
		$('header').text(`${this.name}'s Tomagotchi`);
		this.age = 1;
		this.hunger = 1;
		this.sleepiness = 1;
		this.boredom = 1;
		this.image = image;
		$('.flex-container').append(`<img class='animated infinite bounce' src=${this.image}>`);
		const temp = setInterval( () => {
			this.age += 1;
			if(!(this.age%5)){
				this.morph(imageArray[imageCounter++])
			}
			this.hunger++;
			this.boredom++;
			this.sleepiness++;
			$('#feed-me-data').text(`Hunger: ${this.hunger}`);
			$('#playtime-data').text(`Boredom: ${this.boredom}`);
			$('#bedtime-data').text(`Sleepiness: ${this.sleepiness}`)
			if(this.hunger === 10 || this.boredom === 10 || this.sleepiness === 10){
				clearInterval(temp);
				$('button').off();
				displayModal(this.name);
				$('img').removeClass('infinite');
			}
		}, 2000)
	}

	rename(newName){
		this.name = newName;
	}

	morph(newImage){
		this.image = newImage;
		$('img').attr('src',this.image);
	}
}

const displayModal = (name) => {
	$('p').text(`${name} has died! Your game has ended.`);
	$('.modal').css('display','block');
	$('.close').on('click', () => {
		$('.modal').css('display','none');
	});
}

$('#feed-me-button').on('click', () => {
	if($('body').css('background-color') !== "rgb(0, 0, 0)"){
		jimbo.hunger--;
		if(jimbo.hunger < 1)
			jimbo.hunger = 1;
		$('#feed-me-data').text(`Hunger: ${jimbo.hunger}`);	
	}
});

$('#playtime-button').on('click', () => {
	if($('body').css('background-color') !== 'rgb(0, 0, 0)'){
		jimbo.boredom--;
		if(jimbo.boredom < 1)
			jimbo.boredom = 1;
		$('#playtime-data').text(`Boredom: ${jimbo.boredom}`);
	}
});

$('#bedtime-button').on('click', (event) => {
	$('body').toggleClass('toggle');
	$('img').toggleClass('infinite');
	if($('body').css('background-color') === "rgb(0, 0, 0)"){
		jimbo.sleepiness--;
		if(jimbo.sleepiness < 1)
			jimbo.sleepiness = 1;
		$('#bedtime-data').text(`Sleepiness: ${jimbo.sleepiness}`);
	}
})
const jimbo = new Tomagotchi(imageArray[imageCounter]);
