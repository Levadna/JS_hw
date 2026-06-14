const items = [
 { id: 1, name: "Ноутбук", category: "tech" },
 { id: 2, name: "Яблуко", category: "food" },
 { id: 3, name: "Смартфон", category: "tech" },
 { id: 4, name: "Хліб", category: "food" },
 { id: 5, name: "Навушники", category: "tech" }
];


const techCount =
items.filter(
    item => item.category === "tech"
).length;
let time = 30;
let timer;
let score = 0;

$(function ()
{
    updateRecord();
    restartGame();
});

function renderItems() {
    $('#items').empty();
    items.forEach(item => {
    $('#items').append(`
    <div class="item"
    draggable="true"
    data-id="${item.id}"
    data-category="${item.category}">
    ${item.name}
    </div>
    `);
    });
}

$(document).on('dragstart', '.item', function (e)
{
    e.originalEvent.dataTransfer.setData(
        'category',
        $(this).data('category')
    );
    e.originalEvent.dataTransfer.setData(
        'id',
        $(this).data('id')
    );
});


$("#basket").on( "dragover", function (e)
    {
        e.preventDefault();
    }
);

$("#basket").on( "dragenter", function ()
    {
        $(this).addClass("hover");
    }
);

$("#basket").on( "dragleave", function ()
    {
        $(this).removeClass("hover");
    }
);

$('#basket').on('drop', function (e) {
        e.preventDefault();
        $(this).removeClass("hover");
        const category =
        e.originalEvent.dataTransfer.getData( "category" );
        const id =
        e.originalEvent.dataTransfer.getData( "id" );
        if(category === 'tech')
        {
            score++;
            $('#score').text(score);
            updateRecord();
            const item =
$(`.item[data-id='${id}']`);
$("#basket").append(item);
item.attr("draggable", false);
        } else
        {
            alert('Це не електроніка!');
        }
        if(score === techCount)
    {
    clearInterval(timer);
    alert( "Вітаємо! Ви зібрали всю електроніку!" );
    }
    }
);

function restartGame()
{
    score = 0;
    time = 30;
    $('#score').text(score);
    $('#timer').text(time);

    $("#basket").html(`
        <h2>Кошик</h2>
        <p>Перетягніть тільки електроніку</p>
    `);
    renderItems();
    clearInterval(timer);
    timer = setInterval(function ()
    {
        time--;
        $("#timer").text(time);
        if(time <= 0)
        {
            clearInterval(timer);
            alert("Час вийшов!");
            restartGame();
        }
    }, 1000);
}

$('#restart').on('click', function ()
{
    restartGame();
});

function updateRecord()
{
    let record =
    parseInt( localStorage.getItem("record")) || 0;
    if(score > record)
    {
        record = score;
        localStorage.setItem( "record", record );
    }
    $("#record").text(record);
}