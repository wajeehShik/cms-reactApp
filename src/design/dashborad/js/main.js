// show delete modal 

var openDeleteModal = document.getElementsByClassName("openDeleteModal");
const DeleteModal=document.getElementById('modal-delete')
const colseDeleteModal=document.getElementById('cancleDelete')
for(let i=0;i<openDeleteModal.length;i++){
  
openDeleteModal[i].addEventListener('click',()=>{
    console.log('yes')
 
    DeleteModal.classList.add('show')
})  
}
colseDeleteModal.addEventListener('click',()=>{
    DeleteModal.classList.remove('show')
})


// create modal

var showCreateBlogModal = document.getElementById("showCreateBlogModal");
var createModal=document.getElementById('modal-create-blog')
var constcloseModal=document.getElementById('cancle')

showCreateBlogModal.addEventListener('click',()=>{
 
    createModal.classList.add('show')
})  



constcloseModal.addEventListener('click',()=>{
    createModal.classList.remove('show')
})