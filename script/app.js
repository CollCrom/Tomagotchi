imageArray = ['images/imageedit_12_4456809058.png','images/imageedit_17_7862663924.png','images/imageedit_23_3911380816.png'];
imageCounter = 0;
class tomagotchi {
	constructor(name, image){
		imageCounter++
		this.name = name;
		this.age = 1;
		this.hunger = 1;
		this.sleepiness = 1;
		this.boredom = 1;
		this.image = image;
		$('.flex-container').append(`<img src=${this.image}>`);
		const temp = setInterval( () => {
			this.age += 1;
			if(!(this.age%5)){
				console.log('poop');
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
			}
		}, 1000)
	}

	rename(newName){
		this.name = newName;
	}

	morph(newImage){
		console.log('poop')
		this.image = newImage;
		$('img').attr('src',this.image);
	}
}

$('#feed-me-button').on('click', () => {
	if($('body').css('background-color') !== "rgb(0, 0, 0)"){
		jimbo.hunger--;
		if(jimbo.hunger > 10)
			jimbo.hunger = 10;
		if(jimbo.hunger < 1)
			jimbo.hunger = 1;
		$('#feed-me-data').text(`Hunger: ${jimbo.hunger}`);	
	}
});

$('#playtime-button').on('click', () => {
	if($('body').css('background-color') !== 'rgb(0, 0, 0)'){
		jimbo.boredom--;
		if(jimbo.boredom > 10)
			jimbo.boredom = 10;
		if(jimbo.boredom < 1)
			jimbo.boredom = 1;
		$('#playtime-data').text(`Boredom: ${jimbo.boredom}`);
	}
});

$('#bedtime-button').on('click', (event) => {
	$('body').toggleClass('toggle');
	if($('body').css('background-color') === "rgb(0, 0, 0)"){
		jimbo.sleepiness--;
		if(jimbo.sleepiness > 10)
			jimbo.sleepiness = 10;
		if(jimbo.sleepiness < 1)
			jimbo.sleepiness = 1;
		$('#bedtime-data').text(`Sleepiness: ${jimbo.sleepiness}`);
	}
})
const jimbo = new tomagotchi('jim', imageArray[imageCounter]);
