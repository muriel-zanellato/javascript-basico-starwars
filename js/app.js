
const LIST = [
    {
        id: 1,
        nome: 'Mestre Yoda',
        avatar: 'images/yoda.png'
    },
    {
        id: 2,
        nome: 'Chewbacca',
        avatar: 'images/chewbacca.png'
    },
    {
        id: 3,
        nome: 'Luke',
        avatar: 'images/luke.png'
    },
    {
        id: 4,
        nome: 'Leia',
        avatar: 'images/leia.png'
    },
    {
        id: 5,
        nome: 'Hansolo',
        avatar: 'images/hansolo.png'
    },
    {
        id: 6,
        nome: 'R2d2',
        avatar: 'images/r2d2.png'
    },
    {
        id: 7,
        nome: 'Vader',
        avatar: 'images/vader.png'
    },
    {
        id: 8,
        nome: 'c3po',
        avatar: 'images/c3po.png'
    }
]


const App = new Vue({
    el: '#app',
    data: {
        title: 'Star Wars Lego',
        userName: 'Muriel',
        characters: LIST
    },
    methods: {
        like(userName) {
            alert(`O personagem ${userName} recebeu um like!`)
        }
    }
})