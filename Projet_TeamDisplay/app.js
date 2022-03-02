let data = [
    {
        name: 'Jonam',
        age: '24'
    },
    {
        name: 'Cassandra',
        age: '39'
    },
    {
        name: 'Rachel',
        age: '28'
    },
    {
        name: 'Marc',
        age: '30'
    },
    {
        name: 'Arnaud',
        age: '37'
    },
    {
        name: 'Marie',
        age: '50'
    }
];

const info = document.querySelector('#info');

let details = data.map(function(item){
    return '<div>' + item.name + ' ' + 'is ' + item.age + ' years old' + '</div>';
});

info.innerHTML = details.join('\n');
