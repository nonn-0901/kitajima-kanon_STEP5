//要素の取得
const btn2 = document.getElementById('btn2');
const input = document.getElementById('data');
const output = document.getElementById('data2');

const table = document.getElementById('table');
const tableContent = document.getElementById('data-content');
const tableButton = document.getElementById('data-button');


let dataCount = 0;


//関数で処理の実行

//表示ボタンを押したら「入力されたデータ」欄に表示させる
//入力欄が空のまま表示ボタンを押したらアラートを表示
//表示ボタンを押すと入力されたデータの欄がハイライト
btn2.addEventListener('click', 
    function(){
        const text = input.value;
        if(text === ""){
            output.textContent = "";
            alert("入力値が空です。");
        }else{
            output.textContent = text;
            dataCount++;
            console.log(dataCount);
        };

        output.classList.toggle("highlight");
    }
)



//表示ボタンを押したら「入力データ一覧」に一行追加・一行の中身は、１．入力データ 2．削除ボタン
btn2.addEventListener('click', 
    function(){

        console.log("イベント作動中");

        const text = input.value;

        if(text === ""){
            return;
        };

        const newTr = document.createElement('tr');
        const newTd1 = document.createElement('td');
        const newTd2 = document.createElement('td');
        const newBtn = document.createElement('button');
        newBtn.textContent = "削除";
        newBtn.setAttribute("type","button");
        newBtn.classList.add("btn3");
        newBtn.classList.add("btn");

        newTd1.textContent = text;
        newTd2.appendChild(newBtn);
        newTr.append(newTd1, newTd2);

        table.append(newTr);

        input.value = "";

        //４つ目のデータを追加しようとすると一番古いデータが消える
        
        if(dataCount>3){
            const oldData = table.rows[1];
            oldData.remove();
        };
        

        //削除ボタンを押すとデータが消える
        newBtn.addEventListener('click',
            function(){
                newTr.remove();
                dataCount--;
                console.log(dataCount);

                //データが１、２個になったら表示ボタンは表示される
                if(dataCount<3){
                    btn2.style.display = "block";
                };
            }
        )
    }
)

//入力データ一覧に追加できるデータは３つまで・３つ目が追加されたら表示ボタンを非表示にする
btn2.addEventListener('click',
    function(){
        if(dataCount>=3){
            btn2.style.display = "none";
        };
    }
)




//ボタンで背景色を変える
const btn = document.getElementById('btn');
const backGround = document.querySelector('main');
const colors = ["lightblue", "lightgreen", "lightcoral"];
let colorIndex = 0;

btn.addEventListener('click',
    function(){

    console.log("こんにちは");

        backGround.style.backgroundColor = colors[colorIndex];
        colorIndex++;
        colorIndex = colorIndex % colors.length;
    }
)


for(i=1; i<=5; i++){
    console.log(i);
}