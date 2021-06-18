const data = [{
    author:"Roshan",
    comment:"This is my first comment.",
    children:[{
        author:"Roshan J",
        comment:"This is my first reply.",
        children:[{
            author:"Roshan K J",
            comment:"This is my first reply reply.",
            children:[]
        }]
    }]
},
{
    author:"Bred",
    comment:"This is my secont comment.",
    children:[{
        author:"Bred J",
        comment:"This is my second reply.",
        children:[{
            author:"Bred K J",
            comment:"This is my second reply reply.",
            children:[]
        }]
    }]
}]

function loadComments(data){
    var container = document.getElementById('displayComments');
    if(data.length){
        var ul = document.createElement('ul');
        for(let i=0; i<data.length-1;i++){
            var 
        }
    }
}

function createCommentList(){
    
}