class tomagotchi {
	constructor(name, image){
		this.name = name;
		this.age = 1;
		this.hunger = 1;
		this.sleepiness = 1;
		this.boredom = 1;
		this.image = image;	
	}

	rename(newName){
		this.name = newName;
	}

	morph(newImage){
		this.image = newImage;
	}
}
jimImage = 'image/imageedit_12_4456809058.png'
const jimbo = new tomagotchi('jim', jimImage);
console.log(jimbo);