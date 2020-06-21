// var d = [10,20,30,40,50,60,70,80,90,100,110,120,130,140,150,160]
// class player
// {

//     constructor(name,position,money)
//     {
//         this.name=name;
//         this.position=position;
//         this.money=money;
   }
// rolldice()
// {
    
//     let position1 = Math.floor((Math.random() * 6) + 1);
//     console.log(" person play", this.name, position1);
//     this.changeposition1(position1)
// }
// changeposition1(current) {
//     var newposition = this.position + current;
//     this.position = newposition;
//     console.log(" person play", this.name, this.position);
//     this.changeMoney1();
   
// }
// changeMoney1() {
//     if (this.position < d.length) {
//         this.money=this.money-d[this.position-1];
//     } else {
//         this.position = this.position % 15;
//         this.money = this.money - d[this.position-1];
//     }
//     console.log("Player Money",this.name, this.money);

// }
// }

// var person1=new player("pkp",0,1000);
// var person2 =new player("pkp1", 0, 1000);

// const player1 = document.getElementById("btn1");
// const player2 = document.getElementById("btn2");
// console.log(d.length)


// player1.addEventListener('click', function () {
//     person1.rolldice()
// }, false);

// player2.addEventListener('click', function () {
//     person2.rolldice()
// }, false);


var position1 = Math.floor((Math.random() * 6) + 1);

document.getElementById(number).innerHTML=position1;
