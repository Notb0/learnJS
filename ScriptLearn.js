//------------------------------------learn------------------------------------//


//-----------------------------switch----------------------------------//
/*var f = "qwer";
switch (f) {
    default:
        console.log('no');
        break
    case "zxc":
        console.log(1);
        break
    case "qwer":
        console.log(2);
        break

}*/




//-----------------------------while----------------------------------//

/*var i = true;
var num = 12;
while (i == true){
    num++;
    console.log(num);
    if (num == 25)
    {
        i = false;
    }
   
}*/




//-----------------------------for----------------------------------//

/*var list = ['apple', 'melon', 'mint', 'orange', 'strawbarry', 'pineapple'];
for (k=0; k <= list.length; k++) {
    console.log(list[k]);                                                       //������� ��������
}*/




//-------------------------------------!!!!!!!!!!!!!!!!!!!!!!!!!!--------------------------//

//����������

/*prices[i] = prices[i] + increacy;
prices[i] += increacy;*/

//-------------------------------------!!!!!!!!!!!!!!!!!!!!!!!!!!--------------------------//



//-----------------------------do while----------------------------------//
/*var a = 2;
do {
    a++;
    console.log('Hello');
} while (a < 5);*/



//-----------------------------continue----------------------------------//
/*for (i = 0; i < 5; i++) {
    if (i === 3) {
        continue;                          //����������
    }
       
    console.log(i);
}*/




//-----------------------------break----------------------------------//
/*for (i = 0; i < 5; i++) {
    if (i === 3) {
        break;                             //�������������
    }

    console.log(i);
}*/




//-----------------------------&&( � )----------------------------------//
/*var i = 2
if (i > 3 && i < 6){
    console.log(i, "more 3 and smaller 6");
}*/




//-----------------------------?( )----------------------------------//
/*var i = 41;
var l = (i > 40) ? "more 40" : "smaller 40";
console.log(l);*/

/*var animal = 'cat';
var checkanimal = (animal === 'dog') ? 'this dog' : 'this cat';
console.log(checkanimal);*/


/*
    var distante = 150;
    var speed = 40;
    var hours = distante / speed;
    var result = hours * 60;

console.log(result);
*/


/*var depth = 31;
var days = 0;
for (i = 0; ; i -= 2) {
    days++;
    i += 7;
    if (i >= depth)
        break;
}
console.log(days);*/

/*function main() {
    var amount = parseFloat(readLine(), 10);
    var rate = parseFloat(readLine(), 10);
    function convert(amount, rate) {
        result = amount * rate;
        return result;
    }
    console.log(convert(amount, rate));
}*/

/*function main() {
    var increase = parseInt(readLine(), 10);
    var prices = [98.99, 15.2, 20, 1026];
    var result = prices.map((prices) => prices + increase);
    console.log(result);

}*/

/*class Add {
    constructor(...words) {
        this.words = words;
    }

    print = function () {
        var str = this.words.join("$");
        var b = "$" + str + "$";
        console.log(b);
    };
}

var x = new Add("hehe", "hoho", "haha", "hihi", "huhu");
var y = new Add("this", "is", "awesome");
var z = new Add("lorem", "ipsum", "dolor", "sit", "amet", "consectetur", "adipiscing", "elit");
x.print();
y.print();
z.print();*/


//--------------------------------------------------����� � �������
/*class User {
    //�����
    sayHi(message) {
        console.log("hi", message);
    }
}

let class1 = new User();// ��������� ���������� �� ��������� ������ ������
class1.sayHi("big massage");
*/


//--------------------------------����� � �������������
/*class User {
    //����������� ������
    constructor(name, age, gender) //������ ��������� ������������ 
    {
        this.name = name;
        this.age = age;
        this.gender = gender;
        console.log(name, age, gender);
    }
}

//����� ������
new User("ivan", 18, "man");*/


//--------------------------------�������� �������� ���
/*var age = 20;
if (age > 18) {
    console.log('children');
}
else {
    console.log('human');
}*/

//--------------------�������
/*function CheckAge(age) {
    if (age <= 18) {
        console.log('children');
    }
    else {
        console.log('human');
    }
}
CheckAge(22);*/

//---------------------------------set and get � ����� �������� ��������
/*class CheckSpeed {
    constructor(speed) {
        this.speed = speed;
        console.log(speed);
    }
    get speed() { //��������� ����������
        return this._speed; //������� ����������
    }

    set speed(value) {     //�������� � ���������� ����������
        if (value == 0) {
            console.log('incorrect speed');     
        }
        else {
            this._speed = value;
        }
    }

    CheckSpeed() {
        if (this._speed >= 60) {
            console.log('Fine');
        }
        else {
            console.log('Dont Fine');
        }
    }
}
new CheckSpeed(1).CheckSpeed();*/
