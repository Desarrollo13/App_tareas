$(document).ready(function($) {

    /* console.log('jquery is working'); */
    $('#search').keyup(function(e){
    /* quiero ver lo que el usuario a tipiado */
    let search = $('#search').val();
    /* ajax nos permite hacer un peticion a un servidor */
    $.ajax({
    url:'task-search.php',
    data:{search},
    type:'POST',
    /* si el servidor me respondio o no */
    success:function(response){
    /* El metodo parse toma un objeto json y lo convierte en string despues lo vuelve a convertir en json */
    
    let tasks = JSON.parse(response);
    let template='';
    
    tasks.forEach(task => {
    template += `<li>
    ${task.name}
    </li>`
    });
    $('#container').html(template);
    
    }
    })
    });
    });
    