function skillMember() {
    var member = {
        name: 'John',
        age: 30,
        skills: ['JavaScript', 'CSS', 'HTML'],
        sayHello: function () {
            console.log('Hello, I am ' + this.name);
        }
    };
    member.sayHello();
    console.log(member.name);
    console.log(member.age);
    console.log(member.skills);
    console.log(member.skills[0]);
    console.log(member.skills[1]);
    console.log(member.skills[2]);
    console.log(member['name']);
    console.log(member['age']);
    console.log(member['skills']);
    console.log(member['skills'][0]);
    console.log(member['skills'][1]);
    console.log(member['skills'][2]);
}