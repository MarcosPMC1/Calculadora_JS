//função que irá realizar o calculo a partir de dois parametros 
function calc(type, val){
    //verifica o tipo caso seja valor adiciona o número na expressão
    if (type === 'val') {
        document.getElementById("resultado").value += val;
    }
    //verifica o tipo caso seja umma ação irá ver qual delas foi chamadas
    if (type === 'action') {
        //limpa a expressão
        if (val === 'c') {
            document.getElementById("resultado").value = '';
        }
        //realiza o calculo e imprime o resultados
        if (val === '=') {
            //expressão escrita por inteiro
            var val = document.getElementById("resultado").value;
            var tot = eval(document.getElementById("resultado").value);
            document.getElementById("resultado").value = tot;
            //chama a função inserindo a expressão por inteiro e seu resultado
            history(val, tot);
        }else if (val === '+' || val === '-' || val === '*' || val === '/' || val === '.') {
            document.getElementById("resultado").value += val;
        }
    }
}

function history(val, tot){
    //cria um elemento de lista dd
    var list_new = document.createElement("dd");
    //concatena um sinal  de igual para ser printados
    var str = val + '=' + tot;
    //cria o conteudo do elemento
    var element = document.createTextNode(str);
    //junta o conteudo a lista
    list_new.appendChild(element);
    //printa na lista o resultado
    document.getElementById("hist_calc").appendChild(list_new)
}
function dm(){
    var state = document.getElementById("dm").value;
    if (state === 'off') {
        var element_dm = document.getElementById("box");
        var element_dm2 = document.getElementById("history");
        element_dm.style.backgroundColor = '#87ceeb';
        element_dm2.style.backgroundColor = '#6fbbd3';
        for (var n1 = 0; n1 < 16; n1++) {
            document.getElementsByClassName("btn_num")[n1].style.background = "#6fbbd3";
        }
        document.getElementsByClassName("c")[0].style.background = "#6fbbd3";
    }else if (state === 'on') {
        var element_dm = document.getElementById("box");
        var element_dm2 = document.getElementById("history");
        element_dm.style.backgroundColor = '#0a263a';
        element_dm2.style.backgroundColor = 'black';
        for (var n1 = 0; n1 < 16; n1++) {
            document.getElementsByClassName("btn_num")[n1].style.background = "#00101b";
        }
        document.getElementsByClassName("c")[0].style.background = "#00101b";
    }
}
