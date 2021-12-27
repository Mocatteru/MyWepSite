var  body = document.body;

var table= document.createElement('table');

var rows = [];

var columns = [];

var turn = 'x';

var result = document.createElement('div');



var callback = function(event)

{



  console.log(event.target);



  console.log(event.target.parentNode);



  console.log(event.target.parentNode.parentNode);



  var rows_p = rows.indexOf(event.target.parentNode);

  console.log(rows_p);

  var columns_p = columns[rows_p].indexOf(event.target);

  console.log(columns_p);



  if(columns[rows_p][columns_p].textContent !=='')

  {



  }

  else

  {

    columns[rows_p][columns_p].textContent =turn;



    var full = false;

    if(columns[rows_p][0].textContent == turn &&

    columns[rows_p][1].textContent == turn &&

    columns[rows_p][2].textContent == turn)

    {

      full= true;

    }

  }



  if(columns[rows_p][0].textContent == turn &&

  columns[rows_p][1].textContent == turn &&

  columns[rows_p][2].textContent == turn)

  {

    full= true;

  }



  console.log("역대각선: "+Math.abs(rows_p-columns_p));

  if(rows_p-columns_p === 0 || Math.abs(rows_p-columns_p)===2)

  {

    console.log(turn+'님이 승리');



    if((columns[rows_p][0].textConent == turn &&

    columns[rows_p][1].textContent == turn &&

    columns[rows_p][2].textContent == turn) ||(columns[2][0].textContent ===turn && columns[1][1].textContent ===turn))

    {

      full =true;

    }

  }



  if(full)

  {

    result.textContent = turn + '님이 승리';

    body.append(result);



    turn = 'x';

    columns.forEach(function(row){

      row.forEach(function(column){

            column.textContent='';

          });

        });

  }

  else

  {

    if(turn === 'x')

    {

       turn ='o';

    }

    else

    {

          turn = 'x';

    }

  }

}











for(var i=1; i<=3; i+=1){

  var row = document.createElement('tr');

  rows.push(row);

  columns.push([]);

  for(var j=1; j<=3; j+=1){

   var column = document.createElement('td');



   column.addEventListener('click',callback);

   columns[i-1].push(column);

   row.append(column);

  }

  table.appendChild(row);

}

body.appendChild(table);

console.log(rows,columns);