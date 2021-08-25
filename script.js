

var Table=document.createElement("div");
var full = document.createElement('div');

 
var userap;
var user;

async function getAllUser(){
    
    try{
    
    user = await fetch("https://api.github.com/users/"+name);
    userap= await user.json();
    var repo = await fetch("https://api.github.com/users/"+name+"/repos")
    var repoap = await repo.json();
        console.log(repoap[0]);
    
    
  
    
    console.log(userap);
    console.log(userap.avatar_url);
}
    catch(err){
         
          alert(err);
    }

     
  
   
  
   
   Table.innerHTML=`

<table class="table">
  <thead>
    <br>
  </thead>
  <tbody>
 
    <tr>
      <th scope="row"> <img src=${userap.avatar_url}></th>
      <td colspan="2" class="table-active"> <h1>${userap.login}'s repositiries</h1></td>

    </tr>
  </tbody>
</table>


`


var content=document.createElement('div');
content.setAttribute('class','container')


  for(var i=0;i<repoap.length;i++){
  
  var allrepo=document.createElement('div');
  allrepo.setAttribute("class","col-sm-8")

  var a=document.createElement('a');
  var link= document.createTextNode(repoap[i].clone_url);
  a.appendChild(link);
  a.title=repoap[i].clone_url;
  a.href=repoap[i].clone_url;

  var forkcount=document.createElement('i');
  forkcount.setAttribute('class','fas fa-code-branch');
  forkcount.innerText=repoap[i].forks_count;
 
    var starcount=document.createElement('i');
  starcount.setAttribute('class','fas fa-star');
  starcount.innerText=repoap[i].stargazers_count;
  allrepo.append(a,forkcount,starcount);
  content.append(allrepo);

  full.append(Table,content);
  }
  



document.body.append(full);


 
}

var Empty = () =>{
  full.innerHTML=` `;
}


function Searchbef(e){
  Empty();
  var key=e.keyCode || e.which;
   if (key==13){
      
      name=e.target.value;
      
      getAllUser();
     
 
   }
 }