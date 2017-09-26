imageArray = ['images/imageedit_12_4456809058.png','images/imageedit_17_7862663924.png','images/imageedit_23_3911380816.png'];

class tomagotchi {
	constructor(name, image){
		this.name = name;
		this.age = 1;
		this.hunger = 1;
		this.sleepiness = 1;
		this.boredom = 1;
		this.image = image;
		const temp = setInterval( () => {
			this.age += .5;
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
		this.image = newImage;
	}
}

$('#feed-me-button').on('click', () => {
	if($('body').css('background-color') !== "rgb(0, 0, 0)"){
		jimbo.hunger--;
		if(jimbo.hunger > 10)
			jimbo.hunger = 10;
		$('#feed-me-data').text(`Hunger: ${jimbo.hunger}`);	
	}
});

$('#playtime-button').on('click', () => {
	if($('body').css('background-color') !== 'rgb(0, 0, 0)'){
		jimbo.boredom--;
		if(jimbo.boredom > 10)
			jimbo.boredom = 10;
		$('#playtime-data').text(`Boredom: ${jimbo.boredom}`);
	}
});

$('#bedtime-button').on('click', (event) => {
	$('body').toggleClass('toggle');
	if($('body').css('background-color') === "rgb(0, 0, 0)"){
		jimbo.sleepiness--;
		if(jimbo.sleepiness > 10)
			jimbo.sleepiness = 10;
		$('#bedtime-data').text(`Sleepiness: ${jimbo.sleepiness}`);
	}
})
const jimbo = new tomagotchi('jim', imageArray[0]);
