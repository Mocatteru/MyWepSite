var body = document.body;
var table = document.createElement('table');
var rows = []; // 줄을 기억하기 위함.
var clumns = []; // 칸을 기억하기 위함.
var turn = 'X';
var result = document.createElement('div');
var callback = function(event)
{
    //해당 클릭 이벤트 위치 가져오기.
    console.log(event.target); // 칸
    console.log(event.target.parentNode); //줄
    console.log(event.target.parentNode.parentNode); // 테이블

    var rows_p = rows.indexOf(event.target.parentNode);
    console.log(rows_p);
    var columns_p = columns[columns_p].indexOf(event.target);
    console.log(columns_p);

    if(rows[rows_p][columns_p].textContent!=='')
    {

    }
    else
    {
        rows[rows_p][columns_p].textContent=turn;
        var full = false;
        if(rows[0][columns_p].textContent===turn&&
            rows[1][columns_p].textContent===turn&&
            rows[2][columns_p].textContent===turn)
        {
            full = true;
        }
        if(rows[0][rows_p].textContent===turn&&
            rows[1][rows_p].textContent===turn&&
            rows[2][rows_p].textContent===turn)
        {
            full = true;
        }
        console.log("역 대각선 : "+ Math.abs(rows_p-columns_p));
        if(rows_p-columns_p===0||Math.abs(rows_p-columns_p)===2)
        {
            console.log('대각선 통과');
            if(rows[0][0].textContent===turn&&
                rows[1][1].textContent===turn&&
                rows[2][2].textContent===turn||
                rows[0][0].textContent===turn&&
                rows[1][1].textContent===turn&&
                rows[2][2].textContent===turn)
                {
                    full = true;
                }
        }
    }

}