console.log("Hello world!");

console.log(Math.pow(3,2));       // 9,   3의 2승 
console.log(Math.round(10.6));    // 11,  10.6을 반올림
console.log(Math.ceil(10.2));     // 11,  10.2를 올림
console.log(Math.floor(10.6));    // 10,  10.6을 내림
console.log(Math.sqrt(9));        // 3,   3의 제곱근
console.log(Math.random());       // 0부터 1.0 사이의 랜덤한 숫자

console.log(typeof(1));
console.log(typeof(1.1));
console.log(typeof("아햏햏"));
console.log(typeof("오홍"+2));

console.log("abcdefg".length);
console.log("가나다라마바사".length);

var a = 1;
var b = 2;
var c = '쁘라삐룬'

console.log(a+b+c);

// console.log('주석');

console.log(a==b);
console.log(b==c);
console.log(1=='1');
console.log(1==='1');
console.log(null == undefined);
console.log(null === undefined);
console.log(true == 1);
console.log(true === 1);
console.log(true == '1');
console.log(true === '1');
console.log(0 === -0);
console.log(NaN === NaN);

console.log(a != b);
console.log(b != c);
console.log(1 !='1');
console.log(1 !=='1');
console.log(null != undefined);
console.log(null !== undefined);
console.log(true != 1);
console.log(true !== 1);
console.log(true != '1');
console.log(true !== '1');
console.log(0 !== -0);
console.log(NaN !== NaN);

if (2 == 1)
{
    console.log('if 1');
}
else if (3 == 2)
{
    console.log('if 2');
}
else
{
    console.log('if ?');
}

if(true && true)
{
    console.log(1);
}
if(true && false)
{
    console.log(2);
}
if(false && true)
{
    console.log(3);
}
if(false && false)
{
    console.log(4);
}

if(true || true)
{
    console.log(1);
}
if(true || false)
{
    console.log(2);
}
if(false || true)
{
    console.log(3);
}
if(false || false)
{
    console.log(4);
}

if(!'')
{
    console.log('빈 문자열')
}
if(!undefined)
{
    console.log('undefined');
}
var empty;
if(!empty)
{
    console.log('값이 할당되지 않은 변수'); 
}
if(!null)
{
    console.log('null');
}
if(!NaN)
{
    console.log('NaN');
}

var i = 0;
while (i < 10)
{
    console.log('i:' + i);
    i++;
}

for (var j = 0; j < 10; j++)
{
    console.log('j:' + j);
}

function numbering()
{
    i = 0;
    while(i < 10)
    {
        console.log(i);
        i += 1;
    }   
}
numbering();

var numbering2 = function (){
    i = 0;
    while(i < 10){
        console.log(i);
        i += 1;
    }   
}
numbering2();

var members = ['egoing', 'k8805', 'sorialgi'];
console.log(members);
console.log(members[0]);
console.log(members[1]);
console.log(members[2]);
for(i = 0; i < members.length; i++){
    // members[i].toUpperCase()는 members[i]에 담긴 문자를 대문자로 변환해준다.
    console.log(members[i].toUpperCase());
}

var li = ['a', 'b', 'c', 'd', 'e'];
li.push('f');
console.log(li);
li = li.concat(['f', 'g']);
console.log(li);
li.unshift('z');
console.log(li);
li.splice(2, 0, 'B');
console.log(li);
li.shift();
console.log(li);
li.pop();
console.log(li);
li.sort();
console.log(li);
li.reverse();
console.log(li);

//var grades = {'egoing': 10, 'k8805': 6, 'sorialgi': 80};
var grades = {}; // var grades = new Object();
grades['egoing'] = 10;
grades['k8805'] = 6;
grades['sorialgi'] = 80;

console.log(grades['sorialgi']);
console.log(grades.sorialgi);

for (key in grades)
{
    console.log(key+ ' ' + grades[key]);
}

var whatisthis = {
    'list': {'egoing': 10, 'k8805': 6, 'sorialgi': 80},
    'show' : function(){
        for(var name in this.list){
            console.log(name+':'+this.list[name]);
        }
    }
};
whatisthis.show();

function welcome()
{
    return 'Hello world~';
}

var circle = require('./circle.js');
console.log( 'The area of a circle of radius 4 is '
           + circle.area(4));