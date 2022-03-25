let b = [];
let tela = document.getElementById('tela');

function geraNum() {
    let a;
    for (i = 0; i <= 5; i++) {
        a = Math.ceil(Math.random() * 60);
        console.log(a)
        if (b.indexOf(a) > -1) {
            a++
            if (a == 60) {
                a--
                b.push(a)
            }
            b.push(a)
        } else {
            b.push(a)
        }
    }
    let x = b.sort((a, c) => {

        return a - c;
    })
    tela.innerText = x

}
geraNum();

console.log(b.sort((a, c) => {
    return a - c;
}));

function ativar() {
    this.location.reload(true)
}